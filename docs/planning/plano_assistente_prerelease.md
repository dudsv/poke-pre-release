# Planejamento: Assistente Interativo de Pré-lançamento Reinado Delta

## 1. Objetivo
Construir uma ferramenta prática, ágil e visual para o usuário utilizar antes e durante o evento de pré-lançamento de **Reinado Delta**. A ferramenta deve permitir:
1. Informar o kit promocional obtido (Magmortar, Enamorus, Kommo-o ou Masquerain).
2. Informar as cartas tiradas nos 4 boosters de forma extremamente fácil (botões rápidos de 1 clique para os principais staples, busca com autocomplete e campo de texto livre que aceita linguagem natural/digitação rápida).
3. Gerar instantaneamente o baralho otimizado de 40 cartas com:
   - Lista exata de cortes (o que tirar do kit base).
   - Lista exata de adições (o que colocar dos pulls).
   - Contagem recomendada de energias básicas (para retirar na caixinha da loja).
   - Guia de confronto (matchups) e decisão de ir 1º ou 2º.
4. Funcionar tanto offline/no navegador (inclusive no smartphone via rede local) quanto diretamente no chat com o agente.

## 2. Arquitetura e Decisões Técnicas (AkitaOnRails Pragmatism)
- **Zero Complexidade Desnecessária:** Aplicação web estática (Vanilla HTML5 + CSS3 + JavaScript moderno). Sem frameworks pesados, sem build steps, sem dependência de internet.
- **Mobile-First e Responsiva:** Pensada para ser usada no celular enquanto o jogador está na mesa da loja entre as rodadas.
- **Motor de Regras Determinístico:** Baseado 100% nas listas oficiais e análises absorvidas dos canais Fantasma Cinza, TrustYourPilot, alyo e Wallamoose.
- **Servidor Local com QR Code / IP:** Script simples de inicialização que disponibiliza a URL para abrir no celular.

## 3. Arquivos Alvo
- `docs/planning/plano_assistente_prerelease.md`: Este planejamento.
- `app/index.html`: Interface visual rica, moderna e intuitiva.
- `app/style.css`: Design premium dark mode, glassmorphism e identidade visual Pokémon TCG.
- `app/data.js`: Base de dados dos 4 kits selados e cards de Reinado Delta com sinergias e regras de corte.
- `app/engine.js`: Motor de otimização de deck (cortes, adições, balanço de energia).
- `app/app.js`: Lógica de interface, parser de texto livre e renderização do deck.
- `iniciar_assistente.py`: Script para iniciar o servidor local e mostrar o link para o celular.
- `iniciar_assistente.bat`: Atalho executável com duplo clique no Windows.
- Atualização em `.agent/context`, documentações técnica/usuário, index e `README.md`.

## 4. Critérios de Sucesso
- Seleção de kit em 1 clique.
- Entrada de pulls em menos de 1 minuto (por botões rápidos ou colando texto).
- Cálculo de deck respeitando rigorosamente 40 cartas.
- Funcionalidade no navegador local validada.
