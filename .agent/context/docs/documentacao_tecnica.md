# Documentação Técnica: Extração, Assistente Reativo, Motor Anti-Brick e Sistema de Confrontos

## 1. Objetivo Técnico
Manter a infraestrutura de apoio ao jogador de pré-lançamento de Pokémon TCG com:
1. Reatividade contextual no frontend (`/app`): adaptação imediata das sugestões de pulls na Etapa 2 de acordo com o baralho promocional selecionado na Etapa 1.
2. Motor determinístico `DeckOptimizationEngine` com preservação estrita de núcleos intocáveis (`core: true`), pré-swaps competitivos e balanceamento invariante de exatas 40 cartas.
3. Central Interativa de Confrontos (Matchup Center) com suporte a filtros dinâmicos por arquétipo adversário (`vs Mag-Vire`, `vs Gênios`, `vs Kommo-o`, `vs Masquerain`), avaliação de vantagem, prioridade de alvos no banco e armadilhas a evitar.
4. Módulo "Estação de Energia do Balcão da Loja" com badges de contagem exata de energias para requisição no balcão e avisos de fraqueza.
5. Fila de Cortes de Prontidão (Standby Cuts Queue) para informar ao jogador a ordem exata de cartas que cederão espaço quando pulls forem adicionados.
6. Suporte completo ao formato físico nacional (Copag: 10 boosters de 6 cartas = 60 cartas abertas) e distribuição mobile zero-install via arquivo único offline.

---

## 2. Alterações e Modelagem do Sistema

### 2.1 Central Interativa de Confrontos (Matchups) e Módulo "Como Fazer" Expansível
- **Correção Estrutural:** Inclusão do objeto `matchupTips` nos 4 baralhos em `app/data.js` (Mag-Vire, Gênios, Kommo-o, Masquerain).
- **Dados por Confronto:** Cada entrada possui:
  - `enemyId` e `enemyName`: Identificador do arquétipo rival.
  - `advantage` e `statusClass`: Vantagem relativa (`adv-favorable`, `adv-even`, `adv-unfavorable`).
  - `target`: Prioridade de alvos a eliminar no banco adversário.
  - `plan`: Sequenciamento tático de turnos e combate.
  - `caution`: Armadilha específica do oponente e como jogar em volta.
  - `execution`: Submódulo expansível com:
    - `howToTarget`: Mecânica exata para alcançar o alvo no banco (Repelente, nocaute forçado do ativo, sniping com Raikou ex, etc.).
    - `damageMath`: Matemática do nocaute (descartes necessários, HP do alvo e fraquezas).
    - `turnByTurn`: Sequência cronológica Turno 1, Turno 2 e Turno 3+.
    - `planB`: Plano de contingência caso o oponente jogue estádios ou nocauteie peças-chave.
- **Accordion Interativo na Interface:** Implementação da função `toggleMatchupDetails(enemyId)` em `app/app.js` permitindo expandir e recolher o passo a passo com animação CSS fluida.
- **Filtros Dinâmicos na HUD:** Implementação da função `setMatchupFilter(filterKey)` em `app/app.js` permitindo alternar instantaneamente entre a visão de um único confronto ou todos os 4.

### 2.2 Estação de Energia do Balcão da Loja
- Adição da propriedade `storeEnergyConfig` em cada kit em `app/data.js`:
  - Contagem exata de energias básicas por tipo (ex: 6x Fogo + 6x Raio para Mag-Vire; 7x Luta + 6x Raio para Kommo-o; 5x Luta + 4x Raio para Gênios; 7x Grama + 2x Crescimento para Masquerain).
  - Indicação explícita da fraqueza do arquétipo.
  - Reassurance Banner: Exibição de selo verde quando a curva de energia está perfeitamente alinhada e não há anti-sinergias.

### 2.3 Fila de Cortes de Prontidão (Standby Cuts Queue)
- Quando nenhum booster pull foi adicionado ainda, o motor expõe `standbyCuts` (as 3 primeiras cartas de `cutOrder`), renderizadas em uma lista visual com badges vermelhas e justificativas táticas.
 
### 2.4 Modelagem Anti-Brick e Risco de Mulligan
No formato selado de 40 cartas com mão inicial de 7 cartas, a probabilidade de **não comprar nenhum Pokémon básico** (mulligan / dead draw) segue a distribuição hipergeométrica:
 
$$P(X = 0) = \frac{\binom{N - K}{n}}{\binom{N}{n}} = \frac{\binom{40 - K}{7}}{\binom{40}{7}}$$
 
onde $N = 40$ (tamanho do deck), $n = 7$ (mão inicial) e $K$ é o número de Pokémon básicos no baralho.
 
- **Kommo-o com 6 básicos:** $P(X = 0) \approx 29,2\%$ (risco alto de mulligan e início vulnerável). O motor alerta o jogador e prioriza a adição de básicos (Delibird, Morpeko, Electabuzz).
- **Mag-Vire com 7 básicos:** $P(X = 0) \approx 23,2\%$ (risco moderado).
- **Gênios com 11 básicos:** $P(X = 0) \approx 7,8\%$ (altamente consistente).
- **Masquerain com 12 básicos:** $P(X = 0) \approx 5,8\%$ (mínimo risco de mulligan).

### 2.5 Preservação Estrita do Núcleo Intocável (`core: true`)
Cartas marcadas como `core: true` no dicionário `BASE_DECKS` são bloqueadas contra corte:
- **Mag-Vire:** 3 Magmortar, 3 Electabuzz, 2 Electivire, 4 Lilian.
- **Gênios:** 4 Tornadus, 3 Thundurus, 2 Landorus, 2 Enamorus, 3 Lilian, 3 Brock, 1 Gládio, 1 Repelente.
- **Kommo-o:** 4 Jangmo-o, 4 Hakamo-o, 3 Kommo-o, 4 Lilian, 4 Poké Pad, 2 Brock, 1 Doce Raro.
- **Masquerain:** 4 Surskit, 4 Masquerain, 4 Combee (no deck), 4 Spinarak (no deck), 4 Lilian, 1 Cinza Sagrada, 1 Recuperação de Energia.

---

## 3. Alterações e Modelagem Mobile Zero-Install (v1.5.0)

### 3.1 Calibração para 10 Boosters de 6 Cartas (Pool de 60 Cartas Copag)
- **Aumento do Pool de Modificação:** No formato nacional Copag, o jogador abre 10 boosters de 6 cartas (= 60 cartas abertas), ao invés dos 4 boosters internacionais (40 cartas).
- **Impacto Estatístico nos 4 Decks:**
  - *Mag-Vire:* Probabilidade de achar 4º Electabuzz e 3º Electivire sobe para >85%.
  - *Solidariedade (Gênios):* Chance de abrir o 3º Landorus/Enamorus (anulando o risco de prize brick) sobe para >80%.
  - *Kommo-o (Dragões):* Chance de achar básicos neutros de busca (Delibird, Morpeko, Marshadow) e Doce Raro extra sobe drasticamente, tornando o corte de Dratini/Dragonair 100% seguro.
  - *Masquerain (Insetofobia):* Exploração massiva da ausência de limite de 4 cópias para entupir o fundo do deck com Bug Outers e montar Ariados (imunidade a básicos) sobre os 4 Spinarak de fábrica.
- **Novos Staples nos Boosters:** Inclusão de `repelente` (Repel) e `doce_raro` (Rare Candy) com matriz de sinergia calculada para todos os 4 arquétipos em `app/data.js`.

### 3.2 Empacotador Autocontido (`empacotar_celular.py`)
- Script determinístico em Python que compila `app/index.html`, `app/style.css`, `app/data.js`, `app/engine.js` e `app/app.js` em um único arquivo HTML inline (`assistente_offline.html`, ~150 KB).
- Zero dependências de rede, zero fontes externas obrigatórias, metadados PWA para execução em tela cheia (standalone) no iOS e Android.
- Disponibilizado tanto na raiz do repositório (`assistente_offline.html`) para compartilhamento via WhatsApp/Telegram quanto na pasta `app/` para download direto via HTTP (`/assistente_offline.html`).

### 3.3 Servidor Local com QR Code ASCII (`iniciar_assistente.py`)
- Identificação do IP da interface de rede local (`get_local_ip`).
- Geração e impressão de QR Code ASCII de baixo contraste no console via biblioteca `qrcode`.
- Execução automática de `empacotar_celular.build_single_file()` no boot do servidor, garantindo sincronização instantânea.

### 3.4 Barra de Troca Rápida de Decks (Quick Deck Switcher)
- Implementação de `selectKitAndRecalculate(kitId)` e `updateQuickSwitcherButtons()` em `app/app.js`.
- Adição da barra horizontal com botões táteis no topo da Etapa 3 (`.quick-deck-switcher-bar`) para permitir comparação imediata dos 4 decks no smartphone com 1 toque.

---

## 4. Arquivos do Sistema
- `app/data.js`: Base de dados dos 4 kits (`baseDeck`, `core`, `cutOrder`, `preSwaps`, `ratio`, `basicsMin`, `attackPlan`, `antiBrick`, `storeEnergyConfig`, `matchupTips`) e catálogo de boosters (`BOOSTER_CARDS` com 20 opções detalhadas).
- `app/engine.js`: Motor determinístico com preservação de core, balanceamento de energia, cálculo de risco hipergeométrico e invariante de 40 cartas.
- `app/app.js`: Reatividade da interface, banner dinâmico, dashboard de saúde, accordion de confrontos e integração mobile.
- `app/style.css`: Design responsivo com dark mode, classes sanfona e otimizações de toque mobile ($\ge 44$px).
- `empacotar_celular.py`: Script de build do bundle offline autocontido.
- `assistente_offline.html`: Arquivo único standalone para uso móvel sem instalação.
- `iniciar_assistente.py`: Servidor HTTP local com auto-build e QR Code ASCII no terminal.
- `docs/analise_profunda_matchups_e_estrategias.md`: Matriz completa dos 16 confrontos ($4 \times 4$).
- `docs/guia_avancado_construcao_e_matematica_decks.md`: Guia de engenharia e proporções de decks.

---

## 5. Validação e Testes
- **Suíte Node.js (`test_matchup_engine.js`):** Validação dos 4 kits, 16 confrontos com seus 4 blocos operacionais (`howToTarget`, `damageMath`, `turnByTurn`, `planB`) e catálogo de boosters. Resultado: 100% de aprovação (Exit code 0).
- **Validação de Empacotamento Offline:** Arquivo `assistente_offline.html` compilado com 150.4 KB, testado e respondendo `200 OK` localmente.
