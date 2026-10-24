# Contexto do Projeto: Pré-Lançamento Reinado Delta (Pokémon TCG)

- **Repositório:** `prereleasepoke`
- **Última Atualização:** 2026-10-24 (v1.5.0)
- **Domínio:** Pokémon Trading Card Game (TCG) — Formato Selado / Pré-lançamento (Build & Battle) da Coleção Reinado Delta (Delta Reign).

---

## 1. Visão Geral do Domínio

A coleção **Reinado Delta (Delta Reign)** é um marco competitivo de Pokémon TCG, introduzindo novas mecânicas de Mega Evolução, estádios lendários com requisitos duplos e arquétipos baseados em espécies Delta e habilidades sinérgicas.

No formato pré-lançamento físico nacional (Copag / Brasil):
- Jogadores recebem 1 caixa Build & Battle contendo 1 baralho pré-construído de 40 cartas (guiado por uma das 4 cartas promocionais exclusivas com carimbo dourado) e **10 pacotes de booster de 6 cartas** (pool de 60 cartas abertas nos boosters).
- Os decks jogam com exatamente 40 cartas e disputam partidas de 4 cartas de prêmio em formato Melhor de 1 (MD1).
- Não há limite de 4 cópias para a mesma carta durante a montagem do baralho.
- Com 60 cartas abertas, a probabilidade estatística de abrir techs fundamentais (Repelente, Doce Raro extra, 3º Landorus, Delibird, Arcanine, Ariados) sobe para mais de 85%, permitindo refinamento agressivo dos decks.

---

## 2. As 4 Linhas Promocionais e Arquétipos

1. **Magmortar & Electivire (Mag-Vire):**
   - Papel: O melhor baralho do formato (BDIF).
   - Motor: Habilidade *Buddy Boost* de Magmortar ligando energias de Fogo e Raio ao Electivire; *Voltage Hammer* causando 60x por energia descartada.
   - Núcleo Intocável: 3 Magmortar, 3 Electabuzz, 2 Electivire, 4 Lilian.
2. **Solidariedade Materializada (Enamorus / Terians / Gênios):**
   - Papel: Deck de alta velocidade e controle.
   - Motor: *Incarnate Solidarity* zerando custos incolores quando Tornadus, Thundurus, Landorus e Enamorus estão em campo. Tornadus ataca de graça por 70 de dano e compra até 6.
   - Núcleo Intocável: 4 Tornadus, 3 Thundurus, 2 Landorus, 2 Enamorus (não cortar o Pokémon!), 3 Lilian, 3 Brock, 1 Gládio, 1 Repelente.
3. **Clangor de Escamas (Kommo-o / Dragões):**
   - Papel: Deck de Estágio 2 com dano massivo (170).
   - Motor: *Beast Scales* acelera energias do topo do deck. Sofre com dispersão de 4 tipos de energia no kit base.
   - Núcleo Intocável: 4 Jangmo-o, 4 Hakamo-o, 3 Kommo-o, 4 Lilian, 4 Poké Pad, 2 Brock, 1 Doce Raro.
4. **Insetofobia (Masquerain / Surskit):**
   - Papel: Deck de alta variância e dano exponencial (0 a 350).
   - Motor: *Bug Out* revela o fundo do deck e bate 50x por Pokémon com o ataque. Sofre contra decks de Fogo e falta de recuperação.
   - Núcleo Intocável: 4 Surskit, 4 Masquerain, 4 Combee (no deck), 4 Spinarak (no deck), 4 Lilian, 1 Cinza Sagrada, 1 Recuperação de Energia.

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
