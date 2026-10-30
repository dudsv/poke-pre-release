# Contexto do Projeto: Pré-Lançamento Reinado Delta (Pokémon TCG)

- **Repositório:** `prereleasepoke`
- **Última Atualização:** 2026-10-30 (v1.8.0)
- **Domínio:** Pokémon Trading Card Game (TCG) — Formato Selado / Pré-lançamento (Build & Battle) da Coleção Reinado Delta (Delta Reign ME6/DLR & Storm Emeralda M6).
- **Fontes da Comunidade Integradas:** Reddit (`/r/PTCGL`), PokéCottage (*Card List 141 cards*), Bugado Playz (*W4MQfFQcOqE*), VINTCG (*sufn0o0djFk*), TiuSam (*GWcZHfw8tb0*) e TCGplayer (*Buyer's Guide*).

---

## 1. Visão Geral do Domínio

A coleção **Reinado Delta (Delta Reign / Storm Emeralda M6)** é um marco competitivo de Pokémon TCG, introduzindo novas mecânicas de Mega Evolução, estádios lendários com requisitos duplos e arquétipos baseados em espécies Delta e habilidades sinérgicas.

No formato pré-lançamento físico nacional (Copag / Brasil):
- Jogadores recebem 1 caixa Build & Battle contendo 1 baralho pré-construído de 40 cartas (guiado por uma das 4 cartas promocionais exclusivas com carimbo dourado) e **10 pacotes de booster de 6 cartas** (pool de 60 cartas abertas nos boosters).
- Os decks jogam com exatamente 40 cartas e disputam partidas de 4 cartas de prêmio em formato Melhor de 1 (MD1).
- Não há limite de 4 cópias para a mesma carta durante a montagem do baralho.
- Com 60 cartas abertas, a probabilidade estatística de abrir techs fundamentais (Repelente, Doce Raro extra, 3º Landorus, Delibird, Cacturne, Pincurchin, cópias extras de Bug Outers) sobe para mais de 85%, permitindo refinamento agressivo dos decks.

---

## 2. As 4 Linhas Promocionais e Arquétipos

1. **Magmortar & Electivire (Mag-Vire):**
   - Papel: O melhor baralho do formato (BDIF).
   - Motor: Habilidade *Buddy Boost* de Magmortar ligando energias de Fogo e Raio ao Electivire; *Voltaic Hammer* causando 60x por energia descartada.
   - Núcleo Intocável: 3 Magmortar, 3 Electabuzz, 2 Electivire, 4 Lilian.
2. **Solidariedade Materializada (Enamorus / Terians / Gênios):**
   - Papel: Deck de alta velocidade e controle.
   - Motor: *Incarnate Solidarity* zerando custos incolores quando Tornadus, Thundurus, Landorus e Enamorus estão em campo. Tornadus ataca de graça por 70 de dano e compra até 6.
   - Núcleo Intocável: 4 Tornadus, 3 Thundurus, 2 Landorus, 2 Enamorus (não cortar o Pokémon!), 3 Lilian, 3 Brock, 1 Gládio, 1 Repelente.
3. **Clangor de Escamas (Kommo-o / Dragões):**
   - Papel: Deck de Estágio 2 com dano massivo (170).
   - Motor: *Scale Beat* acelera energias do topo do deck nos Dragões. Vem de fábrica com 3 Druddigon (120 HP) com o ataque *Drag Off* ([F][W], 40 de dano + puxa o banco).
   - Núcleo Intocável: 4 Jangmo-o, 4 Hakamo-o, 3 Kommo-o, 4 Lilian, 4 Poké Pad, 2 Brock, 1 Doce Raro.
4. **Insetofobia (Masquerain / Surskit):**
   - Papel: Deck de alta velocidade com ciclo de autolimpante e dano de 50 a 200+.
   - Motor: *Bug Out* revela o fundo do deck e bate 50x por Pokémon com o ataque. Os Bug Outers revelados voltam para o deck e o restante (energias e treinadores) é descartado, purificando a densidade de insetos a cada turno!
   - Kit Base Oficial: 4 Surskit (busca 2 Surskit via *Multiplicar* [C]), 4 Masquerain, 4 Combee, 4 Spinarak, 4 Brock, 3 Lilian, 4 Poké Pad, 1 Recuperação de Energia, 1 Cinza Sagrada, 2 Floresta da Vitalidade (evolui no mesmo turno!), 7 Grama e 2 Energia de Crescimento (+20 HP).
   - Tech Estrela dos Boosters: *Cacturne (005/076)* — bate por 1 Grama [G] e causa 210 de dano contra decks de 4 habilidades (Enamorus)!
   - Armadilhas do Fichário: Vespiquen (3 incolores [C][C][C], sem Bug Out), Heracross (3 energias, sem Bug Out) e Ariados (Agulha Secreta custa [C][C][C] 3 energias, não é habilidade, e morre para Landorus por fraqueza a Luta).

---

## 3. Assistente Interativo e Motor Dinâmico (`/app`)

A aplicação local `/app` opera com arquitetura reativa e motor determinístico:
- **Painel de Diagnóstico Anti-Brick:** Mede quantidade de básicos, risco probabilístico de mulligan (distribuição hipergeométrica), cartas de compra disponíveis e status do núcleo intocável.
- **Invariante Estrita de 40 Cartas:** O motor garante equilíbrio exato entre Pokémon, Treinadores e Energias, preservando os núcleos fundamentais.
- **Banner de Sugestões Específicas:** Destaque dinâmico de *Golden Pulls* e avisos de perigo (*Traps*) contextuais ao kit escolhido.
- **Ordenação por Sinergia:** As cartas abertas nos boosters são ordenadas pelo score de afinidade com o arquétipo.

---

## 4. Playbook Tático dos 16 Confrontos

O repositório inclui a matriz analítica completa de confrontos diretos ($4 \times 4$), detalhando planos de jogo, prioridade de alvos no banco rival, gestão de ordens de turno e respostas para cartas tech em [`docs/analise_profunda_matchups_e_estrategias.md`](file:///c:/dev/prereleasepoke/docs/analise_profunda_matchups_e_estrategias.md). Na interface visual, cada um dos 16 confrontos conta com botão expansível sanfona contendo mecânica de puxar/mirar alvos do banco, matemática de dano x HP, sequência turno a turno e plano B.

---

## 5. Distribuição Mobile Zero-Install

Para viabilizar o uso direto no smartphone durante o evento físico na loja de cartas sem instalar nada e sem depender de internet:
- **Arquivo Único Autocontido (`assistente_offline.html`):** Compilado via `empacotar_celular.py`, embute inline todo o CSS, dados dos 4 kits e 16 confrontos, motor determinístico e aplicação JS em ~150 KB. Roda 100% offline em qualquer navegador móvel (Chrome, Safari, Edge) mesmo em Modo Avião.
- **QR Code no Terminal (`iniciar_assistente.py`):** Ao iniciar o servidor de desenvolvimento, um QR Code ASCII é impresso no console permitindo que a câmera do celular abra a aplicação na rede local instantaneamente.
- **Barra de Troca Rápida de Decks (Quick Switcher):** Na Etapa 3, botões de toque rápido permitem alternar entre Mag-Vire, Gênios, Kommo-o e Masquerain com 1 clique para comparação tática em tempo real.

---

## 6. Motor Monte Carlo, Live Deck Checking e Telemetria para Estudo de Caso (v1.8.0)

Para transformar o torneio do dia em um caso de estudo empírico com fundamentação científica:
- **Simulador Estocástico Monte Carlo:** Executa 10.000 iterações em ~40ms medindo a taxa empírica de Lead Starter, ofensividade no Turno 1 (atacante + energia) e matriz de risco de Prize Bricking para todas as 40 cartas.
- **Rastreador de Prêmios ao Vivo (Deck & Prize Checker):** Durante a primeira busca no baralho (Turno 1), o competidor marca as 4 cartas ausentes. O sistema identifica instantaneamente se peças únicas (ex: Doce Raro, Cinza Sagrada) ou atacantes estão trancados nos prêmios.
- **Caderno de Bordo de Torneio (Tournament Logger):** Registro ágil rodada a rodada de oponente, arquétipo, ordem de turno (1º vs 2º), placar de prêmios, carta MVP e erros críticos / aprendizados.
- **Exportador do Estudo de Caso em Markdown:** Compilação com 1 clique de um relatório completo com arquitetura do baralho, dados estocásticos, histórico de rodadas e análise crítica, pronto para documentação e publicação técnica.
