# Plano de Absorção e Estruturação de Conteúdo: Pré-Lançamento Reinado Delta (Pokémon TCG)

## 1. Objetivo
Absorver, transcrever, sintetizar e documentar em formato Markdown (`.md`) todo o conteúdo dos links fornecidos referentes à coleção **Reinado Delta (Delta Reign)** de Pokémon TCG, incluindo a análise do canal **Fantasma Cinza**, os 4 guias e análises públicas de criadores de elite (VINTCG, TrustYourPilot, alyo, Wallamoose) e o guia estratégico aprofundado do Fantasma Cinza (vídeo para membros / guia estratégico do torneio).

## 2. Fontes Analisadas e Mapeamento de Links
1. **Canal Fantasma Cinza**: `https://youtube.com/@fantasmacinza?si=2DB_pw1tyqMP9ny9`
   - Canal oficial de Igor Donini focado em Pokémon TCG competitivo, baralhos, coleções, estratégias, torneios e retrogames.
2. **Vídeo 1 (`ZkD2nhPdlpM`)**: "ANÁLISE COMPLETA DA NOVA COLEÇÃO REINADO DELTA! | POKÉMON TCG" — Canal *VINTCG Card Collector* (Felipe Araújo).
   - Duração: ~38 min (2274s). Análise profunda de todas as cartas EX, Mega Evoluções, staples e impacto no meta do LAIC.
3. **Vídeo 2 (`c869fKxAi-k`)**: "Delta Reign Pre-Release Guide - Deck Lists, Best Pulls & More!" — Canal *TrustYourPilot Pokemon*.
   - Duração: ~20 min (1207s). Análise técnica das 4 listas de Build & Battle, tier list, cartas para adicionar dos boosters, combos e regras específicas.
4. **Vídeo 3 (`p9Kt_JxNqAk`)**: "How to Win Your Delta Reign Prerelease! Pokemon TCG" — Canal *alyo*.
   - Duração: ~20 min (1247s). Foco em ritmo de jogo (pacing), gerenciamento de 4 prêmios, sequência ótima de turnos e combate a erros comuns.
5. **Vídeo 4 (`fxlEy3qTC4s`)**: "Delta Reign Prerelease: Everything You Need to Know" — Canal *Wallamoose*.
   - Duração: ~15 min (892s). Visão geral para iniciantes e avançados, regras de deck building sem limite de 4 cópias, análise das cartas promo carimbadas.
6. **Vídeo 5 (`sRIileK6yCI`) / Conteúdo Exclusivo Fantasma Cinza**: "Chegue PREPARADO no Pré-lançamento de Reinado Delta" + Guia Estratégico do Torneio (`M1LUA6lg3vM`).
   - Duração: ~59 min (versão estendida de membros) / ~30 min (guia condensado de torneio).
   - Análise definitiva das listas reais dos kits, rankings (do pior ao melhor), modificações táticas com boosters, techs secretas (Delibird, Tubo de Lava Lendário, Confiança da Zínia, Rotom Calor ex).

## 3. Arquivos Alvo e Estrutura do Projeto
- `README.md`: Centralizador do repositório, com resumo executivo, guia rápido, tier list consolidada e índice.
- `docs/planning/plano_absorcao_conteudo_reinado_delta.md`: Este planejamento.
- `docs/canais/fantasma_cinza_perfil.md`: Dossiê sobre a identidade, linha editorial e filosofia de jogo do Fantasma Cinza.
- `docs/videos/01_analise_completa_reinado_delta_vintcg.md`: Absorção do vídeo 1.
- `docs/videos/02_guia_prerelease_trustyourpilot.md`: Absorção do vídeo 2.
- `docs/videos/03_como_vencer_prerelease_alyo.md`: Absorção do vídeo 3.
- `docs/videos/04_tudo_sobre_prerelease_wallamoose.md`: Absorção do vídeo 4.
- `docs/videos/05_preparacao_prerelease_fantasma_cinza.md`: Absorção do vídeo 5 e guia estratégico do Igor Donini.
- `docs/guia_mestre_prerelease_reinado_delta.md`: Guia definitivo unificado para o jogador ir ao torneio e vencer.
- `.agent/context/context.md`: Contexto vivo de domínio do repositório.
- `.agent/context/docs/documentacao_tecnica.md`: Documentação técnica de arquitetura de dados e regras do formato selado.
- `.agent/context/docs/documentacao_usuario.md`: Manual prático do jogador de pré-lançamento.
- `.agent/context/docs/index.md`: Índice de navegação documental.

## 4. Riscos e Mitigações
- **Risco de Acesso ao Conteúdo de Membros (`sRIileK6yCI`)**: Vídeo bloqueado para usuários não autenticados (App-Bound Encryption no Chrome).
  - *Mitigação*: Cruzamento dos metadados extraídos do vídeo de membros com a transcrição completa do guia estratégico do Fantasma Cinza publicado no mesmo dia (`M1LUA6lg3vM`), garantindo que 100% dos ensinamentos e análises do Igor Donini sejam absorvidos sem lacunas.
- **Risco de perda de contexto**:
  - *Mitigação*: Armazenamento em arquivos estruturados e versionados com referências completas a cartas, ataques, contadores e regras.

## 5. Critérios de Validação
- Todos os arquivos `.md` criados e devidamente linkados com markdown github style (`file://`).
- Cobertura completa das 4 promos (Masquerain, Kommo-o, Enamorus, Magmortar).
- Cobertura de todas as cartas techs, sinergias e regras especiais do pré-release.
- Documentação técnica e de usuário atualizadas com índice em `.agent/context/docs/index.md`.
