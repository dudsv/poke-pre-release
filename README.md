# ⚡ Pré-lançamento Pokémon TCG: Reinado Delta (Delta Reign)

> **Base de Conhecimento Competitivo, Playbook de Confrontos ($4 \times 4$) & Assistente Interativo de Otimização de Baralhos** para torneios de pré-lançamento (Build & Battle) de Pokémon TCG da coleção **Reinado Delta (Delta Reign)**.

---

## 🚀 Assistente Interativo de Torneio (Pronto para Usar)

A aplicação web local (`/app`) roda de forma desacoplada, ultra rápida e **100% offline no celular sem instalar nada**.

### 📱 Como Rodar no Celular Sem Instalar Nada:
1. **Modo WhatsApp / Drive (Recomendado para o Torneio):**
   - Baixe ou copie o arquivo [`assistente_offline.html`](file:///c:/dev/prereleasepoke/assistente_offline.html) (~150 KB) gerado na raiz.
   - Envie o arquivo para o seu próprio WhatsApp, Telegram ou Drive.
   - No celular, toque no arquivo e escolha **"Abrir com Chrome"** ou **"Abrir com Safari"**.
   - **Funciona 100% offline no Modo Avião** dentro da loja de cartas, sem gastar plano de dados e sem depender de Wi-Fi!
   - *(Dica de App Nativo)*: No Safari ou Chrome, toque em *"Adicionar à Tela de Início"* para usá-lo em tela cheia como se fosse um app instalado.
2. **Via Wi-Fi Local com QR Code (Em Casa):**
   - Dê duplo clique no [`iniciar_assistente.bat`](file:///c:/dev/prereleasepoke/iniciar_assistente.bat) no Windows (ou `python iniciar_assistente.py`).
   - Um **QR Code ASCII** aparecerá no terminal do computador: basta apontar a câmera do celular para abrir instantaneamente!

### ✨ O que há de Novo na Versão 1.6.1 (Auditoria Profunda de Regras e Mecânicas):
1. **Desmistificação de Ariados e Correção de Regras Críticas:**
   - *Agulha Secreta (Covert Needle)* NÃO é uma habilidade passiva! É um ataque que custa 3 energias incolores (`[C][C][C]`). Sem aceleração de energia e com Fraqueza a Luta x2 (morre para 1 hit do Landorus), Ariados foi rebaixado para **Armadilha / Fichário**.
2. **Vespiquen Reclassificada para Fichário Total (Score 1):**
   - *Clean Hit* custa 3 energias incolores (`[C][C][C]`) e Vespiquen NÃO possui o ataque Bug Out. Se revelada no fundo do deck pelo Masquerain, causa 0 de dano e é descartada. Evoluir Combee diminui a densidade de insetos do seu baralho.
3. **Cacturne (005/076) + Cacnea (004/076) — O Terror dos Gênios:**
   - *Punishing Needles* custa apenas **1 Energia de Grama (`[G]`)** e causa $10 + 50 \times \text{Habilidades}$ rivais (210 de dano em 1HKO contra os 4 terians do Enamorus!).
   - Com a *Floresta da Vitalidade* do kit, Cacnea evolui para Cacturne no **mesmo turno** em que entra em jogo.
4. **Matemática do Ciclo Autolimpante do Bug Out:**
   - O ataque Bug Out embaralha os Bug Outers de volta no deck e **descarta o restante** (energias e treinadores), aumentando a densidade de insetos a cada turno e elevando o dano de 100 para 150-200.
   - Surskit (50 HP) ataca no Turno 1 com *Multiplicar* (`[C]`) para puxar 2 Surskit e filtrar o deck logo na largada.
5. **Confrontos Calibrados:**
   - *vs Mag-Vire:* Lock de ataque com *Padrão Pavoroso* ([C] 30 dano) explorando o recuo 3 do Magmortar sem Balão de Ar de fábrica no kit rival.
   - *vs Enamorus:* Masquerain (110 HP, ou 130 HP com Energia de Crescimento) sobrevive ao primeiro golpe de 70 do Tornadus e contra-ataca com 150 de dano (1HKO em qualquer gênio).
6. **Pacote Mobile Standalone Recompilado:**
   - [`assistente_offline.html`](file:///c:/dev/prereleasepoke/assistente_offline.html) (157.9 KB) atualizado com dados calibrados e pronto para uso móvel offline.

### ✨ O que há de Novo na Versão 1.6.0 (Calibração Oficial Física):
1. **Listas Oficiais dos 4 Kits 100% Calibradas:**
   - **Masquerain (Insetofobia):** Ultra Ball eliminada (nunca existiu no kit!). Lista real conta com 16 Insetos (4 Surskit, 4 Masquerain, 4 Spinarak, 4 Combee), 4 Busca do Brock, 3 Lilian, 4 Poké Pad, 1 Recuperação de Energia, 1 Cinza Sagrada, 2 Floresta da Vitalidade, 7 Grama e 2 Energia de Crescimento (+20 HP).
   - **Kommo-o (Dragões):** Atualizado com 3 Druddigon (Crimgan) de 120 HP no lugar de Drampa/Dratini/Dragonair.
   - **Mag-Vire:** Atualizado com 3 Lanternas de Aventura, 2 Hilda, 4 Poké Pad e zero Air Balloon.
   - **Solidariedade (Gênios):** Atualizado com 3 Ultra Ball, 3 Poké Pad, 1 Cinza Sagrada, 1 Repelente e proporção real de energias (4 Luta, 4 Psíquica, 3 Raio).
2. **Catálogo Realista de Pulls Notáveis (Sem Suposições Fantasiosas):**
   - Fim dos palpites aleatórios de combos inacessíveis de múltiplos estádios ou atacantes fora de tipo.
   - Prioridade cirúrgica em: cópias extras do tema (regra sem limite de 4), suportes universais de troca/compra (Zínia, Repelente, Doce Raro extra, Recuperação de Energia extra) e staples reais.
3. **Cortes (Cuts) e Manutenções (Keeps) Refinados:**
   - No Masquerain, **todos os 16 Insetos são estritamente blindados** (`core: true`), pois são o motor e o dano do Bug Out (+50 por hit). Cortes recaem apenas em treinadores excedentes (2ª Floresta da Vitalidade, 4º Brock ou 4º Poké Pad).
4. **Pacote Mobile Zero-Install Recompilado:**
   - O arquivo [`assistente_offline.html`](file:///c:/dev/prereleasepoke/assistente_offline.html) foi reconstruído e empacotado com as listas oficiais e o novo motor para rodar offline no smartphone.

### ✨ O que há de Novo na Versão 1.5.0:
1. **Pacote Celular Zero-Install (`assistente_offline.html`):** Arquivo único autocontido gerado via `empacotar_celular.py`, sem dependências externas, que roda offline em qualquer smartphone.
2. **Calibração para 10 Boosters de 6 Cartas (Formato Copag / Brasil):** O assistente agora reflete as 60 cartas abertas nos 10 boosters nacionais, calibrando as probabilidades de pulls e refinando agressivamente os 4 decks.
3. **Simetria Completa e Barra de Troca Rápida de Decks (Quick Switcher):** Botões fixos na Etapa 3 (`[⚡ Mag-Vire] [🌪️ Gênios] [🐉 Kommo-o] [🐛 Masquerain]`) para alternar e comparar baralhos instantaneamente no celular com 1 toque.
4. **Novos Staples nos Boosters:** *Repelente (Repel)* (troca forçada para furar muros de 120 HP ou caçar atacantes no banco) e *Doce Raro extra* (aceleração no T2 para Kommo-o) adicionados com sinergias ricas para todos os 4 kits.
5. **Dicas de Confrontos Expansíveis (Accordion):** Cada um dos 16 confrontos conta com botão expansível sanfona contendo mecânica de mirar no banco, matemática de dano x HP, sequência turno a turno e plano B.

---

## 🏆 Tier List Consolidada dos 4 Kits Selados

| Posição | Deck Promocional | Status no Formato | Resumo Estratégico |
| :---: | :--- | :---: | :--- |
| **🥇 1º** | **Mag-Vire** (*Magmortar & Electivire*) | **BDIF (Melhor do Formato)** | Consistência quase imbatível. Magmortar acelera Fogo e Raio; Electivire causa 60x por energia descartada. Já vem com 3 Recuperações de Energia. |
| **🥈 2º** | **Solidariedade Materializada** (*Enamorus / Terians / Gênios*) | **Tier 1 (Velocidade & Controle)** | Com os 4 gênios em campo, Tornadus ataca de graça por 70 de dano e compra até 6 cartas. O estádio *Tubo de Lava Lendário* destrói as evoluções rivais. |
| **🥉 3º** | **Clangor de Escamas** (*Kommo-o / Jangmo-o / Dragões*) | **Tier 2 (Poder Bruto Lento)** | 170 de dano nocauteia tudo no formato, mas o kit vem com 4 tipos de energia e apenas 1 Doce Raro. **Ajuste:** Corte Fogo e Água imediatamente! |
| **4º** | **Insetofobia** (*Masquerain / Surskit*) | **Tier 3 (Alta Variância / Risco)** | Dano potencial de 0 a 350 ao olhar o fundo do deck. Muito dependente de setup e sofre derrota automática contra Fogo (Magmortar). |

---

## ⚔️ Playbook Completo dos 16 Confrontos ($4 \times 4$)

Consulte o documento dedicado [`docs/analise_profunda_matchups_e_estrategias.md`](file:///c:/dev/prereleasepoke/docs/analise_profunda_matchups_e_estrategias.md) para o plano de jogo completo de cada partida:
- **Mag-Vire vs. Mag-Vire (Mirror):** Vence quem focar o Electabuzz adversário no início (o kit não tem recuperação de Pokémon).
- **Mag-Vire vs. Gênios:** Favorável no dano puro, mas exige cuidado se o adversário descer o *Tubo de Lava Lendário*.
- **Gênios vs. Kommo-o:** Use *Repelente* para tirar o Drampa de 120 HP da frente e ativar o combo de *Gládio* para nocautear Kommo-o com 190 de dano.
- **Gênios vs. Insetofobia:** Use *Thundurus* para perfurar a *Agulha Secreta* do Ariados.
- **Insetofobia vs. Mag-Vire:** Trave o ativo rival com *Padrão Pavoroso* (30 de dano e bloqueio de ataque) e jogue *Tubo de Lava* para desligar Magmortar.

---

## 🔑 As 4 Regras de Ouro do Torneio

1. **Sem Limite de 4 Cópias:** A regra de 4 cópias não existe no pré-lançamento. Se você abrir 5 ou 6 cópias de cartas excelentes (ex: Surskit, Electabuzz, Confiança da Zínia), coloque todas no deck!
2. **Delibird é o MVP Universal:** Se abrir Delibird nos boosters, coloque no deck imediatamente. Sua habilidade no campo ativo garante 1 energia básica por turno direto do topo do deck.
3. **Cuidado com a Armadilha dos Megas:** Mega Rayquaza e Mega Golisopod dão **3 prêmios**. No formato de 4 prêmios, basta o oponente nocautear seu Mega e 1 básico para encerrar a partida. Prefira atacantes consistentes de 1 prêmio.
4. **Substituição é Rei:** O formato não possui *Troca* nem *Corda de Fuga*. A carta de apoiador **Confiança da Zínia** (*Zinnia's Trust*) é a carta mais importante para destravar recuos pesados e transferir energias.

---

## 📂 Estrutura de Documentos e Navegação

### 💻 Aplicação e Ferramentas
- 🌐 [Aplicação Web Local (`app/index.html`)](file:///c:/dev/prereleasepoke/app/index.html) — Interface visual do assistente interativo com sugestões reativas e HUD anti-brick.
- ⚙️ [Servidor Python (`iniciar_assistente.py`)](file:///c:/dev/prereleasepoke/iniciar_assistente.py) — Inicializador com suporte a rede móvel.
- 🚀 [Atalho Windows (`iniciar_assistente.bat`)](file:///c:/dev/prereleasepoke/iniciar_assistente.bat) — Duplo clique para abrir.
- 📋 [Planejamento do Assistente](file:///c:/dev/prereleasepoke/docs/planning/plano_assistente_prerelease.md) — Especificação técnica do motor de regras.

### 🌟 Guias Principais e Táticas
- ⚔️ [Playbook dos 16 Confrontos (Matriz 4x4)](file:///c:/dev/prereleasepoke/docs/analise_profunda_matchups_e_estrategias.md) — O guia definitivo de cada partida possível.
- 📐 [Guia Avançado de Construção e Matemática de Decks](file:///c:/dev/prereleasepoke/docs/guia_avancado_construcao_e_matematica_decks.md) — Limiares de 70, 110, 140, 160 e 180 HP, curvas e pacing.
- 📘 [Guia Mestre de Pré-lançamento](file:///c:/dev/prereleasepoke/docs/guia_mestre_prerelease_reinado_delta.md) — Manual condensado com Tier List e rotina de 30 minutos.
- 📋 [Planejamento de Matchups](file:///c:/dev/prereleasepoke/docs/planning/plano_aprofundamento_matchups.md) — Rastreabilidade técnica.

### 🎥 Dossiês Individuais por Fonte e Criador
- 👻 [Canal Fantasma Cinza - Perfil e Linha Editorial](file:///c:/dev/prereleasepoke/docs/canais/fantasma_cinza_perfil.md) — Visão geral da filosofia técnica de Igor Donini.
- 🔴 [Vídeo 1: Análise Completa da Coleção (VINTCG - Felipe Araújo)](file:///c:/dev/prereleasepoke/docs/videos/01_analise_completa_reinado_delta_vintcg.md) — Análise dos EXs, Megas e impacto no LAIC.
- 🟡 [Vídeo 2: Guia de Decks e Melhores Pulls (TrustYourPilot)](file:///c:/dev/prereleasepoke/docs/videos/02_guia_prerelease_trustyourpilot.md) — Dissecação das listas de 40 cartas, tier list e pulls.
- 🟢 [Vídeo 3: Como Vencer o Pré-lançamento (alyo)](file:///c:/dev/prereleasepoke/docs/videos/03_como_vencer_prerelease_alyo.md) — Gestão de 4 prêmios, escolha de 1º ou 2º turno e sequenciamento.
- 🔵 [Vídeo 4: Tudo Sobre o Pré-lançamento (Wallamoose)](file:///c:/dev/prereleasepoke/docs/videos/04_tudo_sobre_prerelease_wallamoose.md) — Análise das Caixas Build & Battle, promos carimbadas e Delibird.
- 🟣 [Vídeo 5: Preparação e Guia de Torneio (Fantasma Cinza)](file:///c:/dev/prereleasepoke/docs/videos/05_preparacao_prerelease_fantasma_cinza.md) — Guia condensado de 30 minutos e transmissão exclusiva para membros.

### 📚 Governança e Contexto
- 📑 [Índice Geral de Documentação](file:///c:/dev/prereleasepoke/.agent/context/docs/index.md)
- ⚙️ [Documentação Técnica](file:///c:/dev/prereleasepoke/.agent/context/docs/documentacao_tecnica.md)
- 👤 [Documentação de Usuário](file:///c:/dev/prereleasepoke/.agent/context/docs/documentacao_usuario.md)
- 🧠 [Contexto Vivo do Repositório](file:///c:/dev/prereleasepoke/.agent/context/context.md)

---

## 🛠️ Histórico de Atualizações

- **2026-10-24 (v1.5.0):**
  - Implementação do empacotador `empacotar_celular.py` gerando o arquivo único standalone `assistente_offline.html` (150 KB) que roda no celular sem instalar nada e offline em Modo Avião.
  - Atualização para o formato físico nacional (Copag): 10 boosters de 6 cartas (pool de 60 cartas abertas).
  - Adição de novos staples nos boosters: *Repelente (Repel)* e *Doce Raro (Rare Candy)* com sinergia mapeada para todos os 4 kits.
  - Implementação da barra de troca rápida de decks (Quick Switcher) na Etapa 3 para comparação instantânea entre os 4 decks no smartphone.
  - Adição de gerador de QR Code ASCII no terminal em `iniciar_assistente.py` para acesso em 1 segundo via câmera do smartphone.
- **2026-10-24 (v1.4.0):**
  - Implementação da Central Interativa de Confrontos (Matchups) com filtros por arquétipo rival, alvos no banco e armadilhas.
  - Eliminação de caixas vazias na Etapa 3 com a Estação de Energia do Balcão da Loja e Fila de Cortes de Prontidão.
  - Inclusão dos dados completos de confrontos diretos para todos os 4 kits no motor determinístico.
- **2026-10-24 (v1.3.0):**
  - Implementação do Painel de Diagnóstico Anti-Brick na interface (`app/`) com cálculo hipergeométrico de risco de mulligan.
  - Adição da proteção estrita de núcleos intocáveis (`core: true`) no motor determinístico.
  - Atualização do guia avançado com ordens de corte, ratios ideais e planos de ataque contínuo.
- **2026-10-24 (v1.2.0):**
  - Reatividade completa da Etapa 2 ("Inserir Pulls") ao deck selecionado, com banner dinâmico de sugestões e ordenação por score de sinergia.
  - Adição do playbook completo dos 16 confrontos ($4 \times 4$) e engenharia matemática de danos e HP.
- **2026-10-24 (v1.1.0):**
  - Implementação do Assistente Interativo de Pré-lançamento em `/app` (HTML5, CSS3, JS).
  - Criação do motor determinístico `DeckOptimizationEngine` e parser de linguagem natural.
  - Criação do script `iniciar_assistente.py` e `.bat`.
- **2026-10-24 (v1.0.0):**
  - Criação da base de conhecimento e extração das transcrições primárias dos 6 links de vídeo.
