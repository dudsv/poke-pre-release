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
Cartas marcadas como `core: true` no dicionário `BASE_DECKS` são bloqueadas contra corte pelo motor determinístico:
- **Mag-Vire:** 3 Magmortar, 3 Electabuzz, 2 Electivire, 4 Lilian.
- **Gênios:** 4 Tornadus, 3 Thundurus, 2 Landorus, 2 Enamorus, 3 Lilian, 3 Brock, 1 Gládio, 1 Cinza Sagrada, 1 Repelente.
- **Kommo-o:** 4 Jangmo-o, 4 Hakamo-o, 3 Kommo-o, 4 Lilian, 4 Poké Pad, 2 Brock, 1 Doce Raro.
- **Masquerain:** 4 Surskit, 4 Masquerain, 4 Combee, 4 Spinarak (todos os 16 Insetos são intocáveis para garantir o dano de Bug Out!), 3 Lilian, 1 Cinza Sagrada, 1 Recuperação de Energia.

---

## 3. Calibração Real com as Listas Físicas Oficiais (v1.6.0)

### 3.1 Correção Cirúrgica das 4 Decklists Base (Evidência Fílmica/Fotográfica Oficial)
1. **Kit Masquerain (Insetofobia):**
   - **Correção:** Eliminação total de Ultra Ball (que nunca existiu no kit físico).
   - **Composição Oficial:** 4 Surskit, 4 Masquerain, 4 Spinarak, 4 Combee (16 Pokémon Inseto), 4 Busca do Brock, 3 Lilian, 4 Poké Pad, 1 Recuperação de Energia, 1 Cinza Sagrada, 2 Floresta da Vitalidade, 7 Energia de Grama e 2 Energia de Crescimento (+20 HP).
   - **Cuts & Keeps:** Os 16 insetos são 100% protegidos (`core: true`). Os cortes de espaço quando entram pulls recaem na 2ª Floresta da Vitalidade, no 4º Brock ou no 4º Poké Pad.
2. **Kit Mag-Vire (Magmortar & Electivire):**
   - **Correção:** Eliminação de Air Balloon. Ajuste de 2 Hilda, 4 Poké Pad e 3 Lanternas de Aventura.
3. **Kit Enamorus (Solidariedade):**
   - **Correção:** 3 Ultra Ball, 3 Poké Pad, 2 Busca de Energia, 1 Cinza Sagrada, 1 Repelente, 1 Balão de Ar, 4 Luta, 4 Psíquica e 3 Raio.
4. **Kit Kommo-o (Dragões):**
   - **Correção:** Substituição de Drampa/Dratini/Dragonair por 3 Druddigon (Crimgan) com 120 HP. Ajuste de energias para 5 Raio, 4 Luta, 2 Água e 2 Fogo.

### 3.2 Novo Catálogo Realista de Pulls Notáveis
- Reestruturação em 3 categorias práticas:
  - **Cópias Extras do Tema:** Regra sem limite de 4 cópias para entupir atacantes e básicos dos temas.
  - **Suportes Universais:** Confiança da Zínia, Repelente, Doce Raro extra, Recuperação de Energia extra e Delibird.
  - **Techs Específicas de Alta Sinergia:** Cacturne (terror dos gênios por 1 Grama), Pincurchin (anti-acúmulo de energias por 2 incolores), Arcanine (para Mag-Vire com Buddy Boost), Raikou ex, Altaria e Sandslash.
- Eliminação de suposições fantasiosas de combos inacessíveis, garantindo que o jogador receba alertas e cortes que refletem o jogo real na loja.

### 3.3 Auditoria Profunda de Mecânicas, Custos e Armadilhas do Formato (v1.6.1)
1. **Desmistificação de Ariados (#045/076):**
   - **Correção de Regra:** *Agulha Secreta (Covert Needle)* NÃO é uma habilidade passiva! É um ataque que exige 3 energias incolores (`[C][C][C]`) para causar 80 de dano e então conceder imunidade a Básicos no turno seguinte.
   - **Inviabilidade em Selado:** O kit Masquerain não possui aceleração de energia. Ligar 3 energias manualmente leva 3 turnos.
   - **Fraqueza Fatal:** Ariados tem Fraqueza a Luta x2. O Landorus do kit Enamorus causa 110 x 2 = 220 de dano, matando Ariados em 1 hit antes que ele consiga atacar. Reclassificado como **Armadilha / Fichário (Tier C)**.
2. **Vespiquen (#007/076) e Heracross (#001/076):**
   - *Clean Hit* da Vespiquen custa 3 energias incolores (`[C][C][C]`). Vespiquen NÃO possui o ataque Bug Out. Se revelada no fundo do deck pelo Masquerain, causa 0 de dano e é descartada no lixo. Além disso, evoluir Combee remove um Bug Outer do deck.
   - *High Horsepower* do Heracross custa 3 energias (`[G][G][C]`) e não tem Bug Out. Ambas devem permanecer no fichário.
3. **Cacturne (#005/076) + Cacnea (#004/076) — O Terror dos Gênios:**
   - *Punishing Needles* custa apenas **1 Energia de Grama (`[G]`)** e causa $10 + 50 \times \text{Habilidades}$ rivais.
   - Contra o kit de Enamorus (4 terians em campo com habilidade), Cacturne desfere **210 de dano em 1HKO** por 1 energia!
   - **Sinergia com Floresta da Vitalidade:** O estádio do kit Masquerain permite que Pokémon de Grama evoluam no mesmo turno em que entram em jogo. Cacnea pode ser baixado e evoluído para Cacturne no mesmo turno para atacar imediatamente.
4. **O Motor Autolimpante do Bug Out (Masquerain / Combee / Spinarak):**
   - No kit base, apenas Masquerain, Combee e Spinarak (12 cartas) possuem o ataque Bug Out impresso.
   - *Bug Out* revela 7 cartas do fundo: causa 50x por Pokémon com Bug Out, **embaralha esses Pokémon de volta ao deck** e **descarta o restante** (energias e treinadores).
   - O efeito natural é a purificação do deck: a densidade de Bug Outers sobe a cada turno, atingindo médias de 150 a 200 de dano nos turnos 3 e 4.
   - Surskit (50 HP) não tem Bug Out, mas seu ataque *Multiplicar* (`[C]`) busca 2 outros Surskit para o banco no Turno 1, filtrando o deck logo no início.

### 3.4 Integração das Fontes da Comunidade e Checklist Ocidental DLR (v1.7.0)
1. **Confirmação Internacional via Reddit (`r/PTCGL`):**
   - As 4 decklists calibradas foram cruzadas e validadas contra as listas oficiais compartilhadas na comunidade de PTCGL.
2. **Checklist Oficial Ocidental (Delta Reign DLR 001/103 a 103/103):**
   - Incorporação da expansão ocidental de 103 cartas principais (contra 76 do set japonês *Storm Emeralda*), integrando 27 cartas de Starter Decks (Meowscarada ex, Zoroark ex, Eevee ex).
   - Numeração oficial refletida nas descrições de boosters e matchups (`DLR 005/103 Cacturne`, `DLR 090/103 Lanterna de Aventura`, `DLR 079/103 Delibird`, etc.).
3. **Consenso Tático dos Criadores Nacionais (Bugado Playz, VINTCG, TiuSam):**
   - Destaque para o formato Copag com 8 a 10 boosters (alta densidade de pulls).
   - Atenção redobrada aos Megas (cedem 3 prêmios; risco desproporcional em MD1 de 4 prêmios).
4. **Guia Econômico Pós-Lançamento (TCGplayer Buyer's Guide):**
   - Identificação de cartas com alto valor financeiro no Standard: *Adventuring Lantern (DLR 090/103)* (3x no kit Mag-Vire!), *Zinnia's Trust (DLR 103/103)* e *Mega Rayquaza ex (DLR 084/103)*.

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
