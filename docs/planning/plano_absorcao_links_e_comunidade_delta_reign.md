# Plano de Absorção e Integração: Delta Reign (Fontes da Comunidade, Card List Oficial e Meta Pós-Lançamento)

## 1. Contexto e Motivação
O usuário forneceu um conjunto de referências da comunidade competitiva e oficial de Pokémon TCG:
1. **Reddit PTCGL (`all_four_delta_reign_prerelease_decklists`):** Confirmação das 4 listas oficiais de 40 cartas de *Delta Reign*.
2. **PokéCottage (`delta-reign-card-list`):** Checklist oficial em inglês de todas as 141 cartas de *Delta Reign (ME6 / DLR)*, numeradas de 001/103 a 103/103 + secret rares.
3. **Canais Nacionais (YouTube):**
   - **Bugado Playz (`W4MQfFQcOqE`):** Guia completo dos 4 decks de pré-release e dicas de montagem.
   - **VINTCG (`sufn0o0djFk`):** Análise estratégica dos 4 kits e cartas generalistas da expansão.
   - **TiuSam (`GWcZHfw8tb0`):** Visão completa de regras do evento, produtos selados e formato no Brasil.
4. **Comunidade Reddit PTCGL (`/r/PTCGL`):** Feedback de jogadores reais sobre o equilíbrio dos confrontos, matchups de prêmios e cartas de suporte.
5. **TCGplayer Buyer's Guide (Pós-Lançamento / Foco Secundário):** Análise econômica, Staples do Standard (ex: *Adventuring Lantern* do kit Mag-Vire virando peça-chave para Mega Rayquaza ex) e mercado de singles.

---

## 2. Objetivos da Atualização (v1.7.0)
1. **Alinhamento Numérico e Nomenclatura com o Set Ocidental (Delta Reign DLR):**
   - Atualizar metadados das cartas no assistente com os números oficiais da expansão ocidental (DLR 001/103 a 103/103) ao lado dos códigos japoneses M6.
   - Destacar o diferencial de Delta Reign (103 cartas principais vs 76 do Japão), incorporando adições dos Starter Decks.
2. **Refinamento do Catálogo de Boosters e Sinopses dos Kits:**
   - Adicionar metadados de mercado e utilidade pós-lançamento (ex: aviso para o jogador de que *Adventuring Lantern* do Mag-Vire é uma staple de alto valor financeiro pós-torneio).
   - Validar que as listas dos 4 kits no assistente espelham perfeitamente as 4 listas confirmadas pelo Reddit PTCGL e pelos criadores nacionais.
3. **Playbook e Análise Cruzada de Criadores:**
   - Sintetizar os consensos de Bugado Playz, VINTCG, TiuSam, TrustYourPilot e Fantasma Cinza na documentação e nos playbooks.
4. **Governança Estrita:**
   - Atualizar `.agent/context/context.md`.
   - Atualizar `.agent/context/docs/documentacao_tecnica.md`.
   - Atualizar `.agent/context/docs/documentacao_usuario.md`.
   - Atualizar `.agent/context/docs/index.md`.
   - Atualizar `README.md` (preservando todo o histórico).
   - Recompilar o bundle móvel `assistente_offline.html` via `python empacotar_celular.py`.

---

## 3. Etapas de Execução
- [x] Extração e decodificação dos links (Reddit, PokéCottage, YouTube e TCGplayer).
- [ ] Criação do dossiê de referências da comunidade em `docs/comunidade/analise_comunidade_e_guia_pos_lancamento.md`.
- [ ] Atualização dos metadados de cartas em `app/data.js` com numeração oficial DLR (Delta Reign).
- [ ] Recompilação do pacote mobile offline (`python empacotar_celular.py`).
- [ ] Atualização da documentação técnica e de usuário em `.agent/context/docs/`.
- [ ] Atualização do `README.md` e do índice.

