# Índice Geral de Documentação: Reinado Delta (Pokémon TCG)

Este índice organiza toda a documentação técnica, tática e de usuário gerada a partir da absorção dos vídeos e canais de referência, bem como a arquitetura do **Assistente Interativo de Pré-lançamento**.

---

## 1. Assistente Interativo e Pacote Mobile Zero-Install
- [Aplicação Web Local (Pasta app/)](file:///c:/dev/prereleasepoke/app/index.html): Interface visual interativa com banner dinâmico, ordenação por sinergia e barra de troca rápida de decks.
- [Arquivo Único Standalone para Celular (assistente_offline.html)](file:///c:/dev/prereleasepoke/assistente_offline.html): Pacote 100% autocontido (~150 KB) com HTML, CSS e JS inlined que roda em qualquer smartphone sem instalar nada e offline no Modo Avião.
- [Script Empacotador Mobile](file:///c:/dev/prereleasepoke/empacotar_celular.py): Gerador do bundle offline único.
- [Script de Inicialização Local / Mobile com QR Code](file:///c:/dev/prereleasepoke/iniciar_assistente.py): Servidor HTTP nativo com compilação automática e impressão de QR Code ASCII no terminal para escaneamento com a câmera do celular.
- [Atalho Executável do Windows](file:///c:/dev/prereleasepoke/iniciar_assistente.bat): Inicialização do assistente com duplo clique.
- [Planejamento do Suporte a 10 Boosters e Pacote Mobile](file:///c:/dev/prereleasepoke/docs/planning/plano_suporte_10_boosters_e_pacote_mobile.md): Rastreabilidade do suporte a 60 cartas e empacotamento offline.
- [Planejamento do Assistente](file:///c:/dev/prereleasepoke/docs/planning/plano_assistente_prerelease.md): Especificação e regras do motor de otimização.

---

## 2. Playbooks Táticos e Matemática Competitiva
- [Playbook dos 16 Confrontos (Matriz 4x4)](file:///c:/dev/prereleasepoke/docs/analise_profunda_matchups_e_estrategias.md): Guia exaustivo de cada partida possível, prioridade de alvos no banco rival, sequenciamento e contra-jogadas.
- [Guia Avançado de Construção e Matemática de Decks](file:///c:/dev/prereleasepoke/docs/guia_avancado_construcao_e_matematica_decks.md): Limiares de dano ("Números Mágicos" de 70, 110, 140, 160 e 180 HP), curvas de energia e gestão de deck out.
- [Guia Mestre de Pré-lançamento](file:///c:/dev/prereleasepoke/docs/guia_mestre_prerelease_reinado_delta.md): Manual definitivo com Tier List consolidada e rotina de 30 minutos de montagem.
- [Planejamento do Aprofundamento Tático](file:///c:/dev/prereleasepoke/docs/planning/plano_aprofundamento_matchups.md): Rastreabilidade do aprofundamento tático.

---

## 3. Dossiês Individuais por Fonte e Vídeo
- [Dossiê da Comunidade, Checklist Oficial Delta Reign & Guia Pós-Lançamento](file:///c:/dev/prereleasepoke/docs/comunidade/analise_comunidade_e_guia_pos_lancamento.md): Síntese de Reddit PTCGL, PokéCottage (checklist 103 cards), vídeos nacionais (Bugado Playz, VINTCG, TiuSam) e TCGplayer Buyer's Guide.
- [Canal Fantasma Cinza - Perfil e Linha Editorial](file:///c:/dev/prereleasepoke/docs/canais/fantasma_cinza_perfil.md): Filosofia de jogo, abordagem técnica e histórico de Igor Donini.
- [Vídeo 1: Análise Completa da Coleção (VINTCG)](file:///c:/dev/prereleasepoke/docs/videos/01_analise_completa_reinado_delta_vintcg.md): Desconstrução de todos os EXs, Megas e impacto no LAIC.
- [Vídeo 2: Guia de Decks e Melhores Pulls (TrustYourPilot)](file:///c:/dev/prereleasepoke/docs/videos/02_guia_prerelease_trustyourpilot.md): Listas dos 4 kits, regras sem limite de cópias e techs recomendadas.
- [Vídeo 3: Como Vencer o Pré-lançamento (alyo)](file:///c:/dev/prereleasepoke/docs/videos/03_como_vencer_prerelease_alyo.md): Gestão de 4 prêmios, escolha de ir 1º ou 2º e mitigação de erros.
- [Vídeo 4: Tudo Sobre o Pré-lançamento (Wallamoose)](file:///c:/dev/prereleasepoke/docs/videos/04_tudo_sobre_prerelease_wallamoose.md): Explicação das Caixas Build & Battle, promos carimbadas e Delibird.
- [Vídeo 5: Preparação e Guia de Torneio (Fantasma Cinza)](file:///c:/dev/prereleasepoke/docs/videos/05_preparacao_prerelease_fantasma_cinza.md): Aprofundamento do Igor Donini (conteúdo de membros e guia de torneio), tier list do pior ao melhor deck e cortes obrigatórios.

---

## 4. Governança e Contexto
- [Contexto Vivo do Projeto](file:///c:/dev/prereleasepoke/.agent/context/context.md): Visão geral do repositório, domínio do TCG, kits e regras base.
- [Documentação Técnica](file:///c:/dev/prereleasepoke/.agent/context/docs/documentacao_tecnica.md): Detalhamento da extração de dados, arquitetura da aplicação `/app`, testes unitários e regras do motor.
- [Documentação do Usuário](file:///c:/dev/prereleasepoke/.agent/context/docs/documentacao_usuario.md): Guia prático de aplicação para o jogador e manual do assistente.
- [Plano de Absorção de Links da Comunidade e Pós-Lançamento](file:///c:/dev/prereleasepoke/docs/planning/plano_absorcao_links_e_comunidade_delta_reign.md): Rastreabilidade da v1.7.0.
- [Plano de Execução e Absorção](file:///c:/dev/prereleasepoke/docs/planning/plano_absorcao_conteudo_reinado_delta.md): Rastreabilidade inicial.
- [README Principal](file:///c:/dev/prereleasepoke/README.md): Portal de entrada do projeto no padrão GitHub.
