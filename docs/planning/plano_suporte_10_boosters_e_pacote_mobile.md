# Plano: Suporte a 10 Boosters (60 Cartas), Simetria de Decks e Pacote Mobile Zero-Install

## 1. Contexto e Objetivos
O usuário participará do torneio de pré-lançamento de Pokémon TCG (Reinado Delta) com uma configuração de torneio específica:
- **10 boosters de 6 cartas** (formato físico nacional Copag = 60 cartas abertas nos boosters).
- Demanda por tratamento igualitário e aprofundado para **todos os 4 decks** (não apenas Magmortar/Fogo).
- Necessidade de rodar no **celular sem instalar nada**, funcionando em qualquer smartphone dentro da loja durante o evento, com opção 100% offline (mesmo sem internet).

## 2. Escopo das Alterações

### A. Calibração para 10 Boosters de 6 Cartas (Pool de 60 Cartas)
- Atualizar `app/index.html`, `app/data.js`, `app/engine.js` e `app/app.js` de "4 boosters" para "10 boosters de 6 cartas (60 cartas no total)".
- Ajustar os contadores e alertas: com 60 cartas abertas, a taxa de encontro de suportes (Delibird, Repelente, Zínia, Tubo de Lava, Kecleon) é significativamente maior, influenciando as recomendações de cada arquétipo.

### B. Profundidade Simétrica para Todos os 4 Decks
Garantir que a interface e os dados tratem os 4 arquétipos com o mesmo nível cirúrgico:
1. **Kit 1: Magmortar & Electivire (Fogo/Raio)**: Motor de aceleração de energia e dano explosivo.
2. **Kit 2: Solidariedade / Gênios (Tornadus, Thundurus, Landorus, Enamorus)**: Beatdown gratuito de 70 de dano por turno, proteção dos 2 Landorus/Enamorus.
3. **Kit 3: Kommo-o Dragões (Jangmo-o, Hakamo-o, Kommo-o, Drampa, Dragonair)**: Rampa com Beast Scales, corte de Dratini para pureza de Luta/Raio potencializado pelos 10 boosters, ou rota alternativa de Fantasma Cinza.
4. **Kit 4: Masquerain Insetofobia (Surskit, Masquerain, Ariados, Vespiquen)**: Controle com Padrão Pavoroso, imunidade com Ariados contra básicos, explosão de dano com Bug Out.

### C. Empacotamento Mobile Zero-Install
1. **Arquivo Único Autocontido (`assistente_offline.html`)**:
   - Um script Python/Node que junta HTML + CSS + JS inline em um arquivo único sem dependências externas.
   - Pode ser enviado pelo WhatsApp, Drive ou aberto direto pelo navegador do celular.
   - Funciona 100% offline (modo avião).
2. **Botão de Exportação/Download na Própria Interface**:
   - Adicionar botão no cabeçalho: "📱 Salvar no Celular (Offline)".
3. **QR Code no Terminal (`iniciar_assistente.py`)**:
   - Imprimir o QR Code da URL local no terminal para que o usuário aponte a câmera do celular e abra na hora.
4. **CSS Mobile-First**:
   - Otimizações para telas estreitas (touch targets $\ge 44$px, sem overflow horizontal, tipografia ajustada para leitura rápida sob a luz da loja).

## 3. Validação e Documentação
- Testes unitários com Node.js para validação das 60 cartas e 4 decks.
- Sincronização de `.agent/context/`, documentação técnica e de usuário, e `README.md`.
