# Plano de Engenharia: Tunagem Avançada do Assistente com Motor Monte Carlo, Live Prize Tracker e Telemetria para Estudo de Caso

- **Versão Alvo:** 1.8.0
- **Data:** 2026-10-30
- **Status:** Em Execução
- **Objetivo Primário:** Equipar o competidor para o dia do torneio (hoje) com ferramentas computacionais de alta performance (Simulador Monte Carlo de 10.000 iterações, Rastreador de Prêmios ao Vivo durante buscas no deck e Caderno de Bordo de Telemetria de Partidas) e viabilizar a exportação imediata de um Estudo de Caso estruturado em Markdown com os dados reais do evento.

---

## 1. Princípios de Engenharia (AkitaOnRails)

1. **Pragmatismo Absoluto & Zero Hype:**
   - Nada de empacotar bibliotecas pesadas de terceiros ou frameworks inflados (React, Next, Tailwind via CDN) que possam falhar em modo offline no meio de uma loja de cartas sem sinal.
   - Código Vanilla JavaScript puro, orientado a alta performance e determinismo.
2. **Execução Local & Offline-First:**
   - 10.000 iterações de Monte Carlo rodando no próprio motor V8 / JavaScriptCore do navegador em menos de 50 milissegundos.
   - Persistência total em `localStorage` para tolerar recarregamentos acidentais ou desligamento de tela do celular entre rodadas.
3. **Foco no Jogador em Combate Real:**
   - A ferramenta deve ser utilizável nos 30 minutos de montagem do baralho e nos 30 minutos de cada rodada do torneio físico.

---

## 2. Arquitetura das Novas Funcionalidades

### A. Motor de Simulação Monte Carlo (10.000 Iterações)
- **Modelagem Matemática:**
  - Baralho de 40 cartas exatamente como otimizado na Etapa 3.
  - Regra oficial de abertura: compra de mão inicial de 7 cartas.
  - Se a mão tiver 0 Pokémon básicos, registra 1 Mulligan e refaz a compra de 7 cartas até encontrar básico.
  - Alocação estocástica das 4 cartas de prêmio (10% do baralho no pré-lançamento).
  - Análise de viabilidade do Turno 1 (abrir com Lead Starter, energia, ou apoiador).
  - Análise de risco de Prize Bricking para todas as cartas do baralho (probabilidade de 0, 1, 2+ ou todas as cópias estarem presas nos prêmios).

### B. Rastreador Interativo de Prêmios ao Vivo (Live Prize Mapping & Deck Checker)
- **Problema Competitivo:**
  - No primeiro turno em que o jogador faz uma busca no deck (ex: *Busca do Brock*, *Lanterna de Aventura*, *Multiplicar* do Surskit), ele precisa conferir o deck para deduzir quais 4 cartas estão nos prêmios.
- **Solução no App:**
  - Lista rápida do deck de 40 cartas para marcar visualmente o que está no deck vs. o que foi identificado como prêmio.
  - Alertas automáticos ao marcar cartas-chave como presas nos prêmios.
  - Contador de prêmios restantes (4 a 0) com toque rápido.

### C. Caderno de Bordo de Torneio & Telemetria para Estudo de Caso (Tournament Logger)
- **Problema:**
  - O usuário quer utilizar os resultados de hoje como **estudo de caso**.
- **Solução no App:**
  - Formulário ágil pós-partida: Rodada, Oponente, Kit Rival, Ordem (1º ou 2º), Resultado (V/D/E), Placar de Prêmios (ex: 4-1), Duração, MVP da Partida, Erros Críticos / Lições Aprendidas.
  - Dashboard de Métricas: Win Rate Total, Win Rate por Ordem de Turno (1º vs 2º), Win Rate por Kit Rival, Saldo de Prêmios.
  - **Exportador do Estudo de Caso:** Gera com 1 clique um relatório completo em Markdown estruturado pronto para publicação ou documentação, incluindo composição do baralho, métricas de Monte Carlo e logs rodada a rodada.

---

## 3. Arquivos Afetados

1. `app/engine.js`: Implementação da classe `MonteCarloSimulator` e lógica estatística.
2. `app/index.html`: Expansão do Stepper para 5 abas; criação das seções `#view-montecarlo` e `#view-tournament`.
3. `app/app.js`: Controladores das novas abas, integração com `localStorage`, execução da simulação e gerador de Markdown.
4. `app/style.css`: Estilização das tabelas probabilísticas, cards de métricas, live tracker e formulário de torneio.
5. `empacotar_celular.py`: Recompilação do pacote standalone `assistente_offline.html`.
6. `.agent/context/context.md`: Atualização para a versão 1.8.0.
7. `.agent/context/docs/documentacao_tecnica.md`: Registro da arquitetura Monte Carlo e telemetria.
8. `.agent/context/docs/documentacao_usuario.md`: Guia de uso durante o torneio.
9. `.agent/context/docs/index.md`: Sincronização do índice.
10. `README.md`: Atualização de histórico e recursos da v1.8.0.

---

## 4. Riscos e Mitigações

| Risco | Impacto | Mitigação |
| :--- | :--- | :--- |
| Travamento da thread principal durante Monte Carlo no celular | Alto | Otimização do loop em arrays de inteiros/índices e uso de `setTimeout` com feedback visual. 10.000 iterações em JS rodam em <40ms. |
| Perda de dados se o celular fechar o navegador | Alto | Gravação síncrona em `localStorage` a cada rodada salva ou alteração de estado. |
| Incompatibilidade de empacotamento offline | Médio | Teste imediato com `empacotar_celular.py` verificando tamanho final e ausência de dependências remotas. |
