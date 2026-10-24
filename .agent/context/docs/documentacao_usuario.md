# Documentação de Usuário: Guia do Jogador, Manual do Assistente e Playbook de Confrontos

## 1. O que há de Novo na Versão 1.5.0?

1. **Modo Celular Zero-Install (Roda no Celular Sem Instalar Nada):**
   - **Arquivo Único Offline (`assistente_offline.html`):** Um único arquivo HTML (~150 KB) com todo o assistente, dados e gráficos embutidos. Você não precisa baixar aplicativo da Google Play ou Apple Store, não precisa de Node.js e não precisa de internet!
   - **Funciona em Modo Avião:** Pode usar no meio da loja de cartas mesmo se a rede de celular oscilar ou não tiver Wi-Fi.
   - **QR Code no Terminal:** Quando você inicia o assistente no computador pelo `iniciar_assistente.bat`, aparece um QR Code na tela. Basta apontar a câmera do celular para abrir imediatamente no Wi-Fi de casa.
   - **Botão "📱 Modo Celular (Offline)":** No topo da tela, clique no botão verde para baixar o arquivo e mandá-lo para si mesmo no WhatsApp ou Drive.

2. **Calibração para 10 Boosters de 6 Cartas (Formato Copag / Brasil):**
   - O assistente agora reflete os 10 boosters nacionais (total de 60 cartas abertas nos pacotes).
   - Com 60 cartas abertas, você quase com certeza abrirá cartas essenciais como *Repelente*, *Doce Raro extra*, *3º Landorus*, *Delibird* e *4º Electabuzz*.
   - Todas as sugestões, contagens e textos foram ajustados para essa realidade de 60 cartas.

3. **Simetria Completa e Barra de Troca Rápida de Decks (Quick Switcher):**
   - Na Etapa 3, uma nova barra no topo (`[⚡ Mag-Vire] [🌪️ Gênios] [🐉 Kommo-o] [🐛 Masquerain]`) permite trocar de deck com apenas 1 toque na tela do celular para comparar resultados na hora.
   - Todos os 4 decks possuem o mesmo nível cirúrgico de detalhes táticos, botões expansíveis sanfona com passo a passo turno a turno, matemática de dano x HP e plano B de contingência.

4. **Novos Staples nos Boosters:**
   - Adicionados *Repelente (Repel)* (troca forçada para furar muros de 120 HP ou caçar atacantes no banco) e *Doce Raro extra* (aceleração brutal no T2 para Kommo-o).

---

## 2. Como Rodar no Celular Sem Instalar Nada (Passo a Passo)

### Método A: Arquivo Único no WhatsApp (Recomendado para o Torneio)
1. No seu computador, clique no botão **"📱 Modo Celular (Offline)"** no topo da página (ou pegue o arquivo `assistente_offline.html` na pasta do projeto).
2. Envie o arquivo para o seu próprio WhatsApp, Telegram ou Google Drive.
3. No celular, toque no arquivo e escolha **"Abrir com Chrome"** ou **"Abrir com Safari"**.
4. **Dica de Ouro (App Nativo):**
   - No iPhone (Safari): Toque no botão de Compartilhar e selecione **"Adicionar à Tela de Início"**.
   - No Android (Chrome): Toque nos três pontinhos e selecione **"Adicionar à tela inicial"**.
   - O assistente agora fica com um ícone na tela do seu celular e abre em tela cheia como se fosse um aplicativo de verdade, 100% offline!

### Método B: Escaneando o QR Code (Wi-Fi de Casa)
1. Dê dois cliques em `iniciar_assistente.bat` no computador antes de sair para o evento.
2. Aponte a câmera do celular para o **QR Code** impresso no terminal do Windows.
3. Toque no link que surgir na tela da câmera: o assistente abrirá no navegador do celular.

---

## 3. Resumo Tático de Emergência: Os 4 Decks

### Deck 1: Mag-Vire (Magmortar & Electivire)
- **Condição de Vitória:** *Voltage Hammer* do Electivire (60x dano por energia descartada).
- **Cartas que NUNCA Saem:** 3 Magmortar, 3 Electabuzz, 2 Electivire, 4 Lilian.
- **O que Buscar nos 10 Boosters:** 4º Electabuzz e 3º Electivire (prioridade máxima), Repelente, Arcanine+Growlithe, Delibird, Zínia.
- **Armadilha:** Guarde o *Tubo de Lava Lendário* no fichário (ele desliga seu próprio Magmortar).

### Deck 2: Solidariedade (Gênios / Enamorus)
- **Condição de Vitória:** 4 terians em campo = custos incolores zerados (Tornadus bate 70 de graça e compra até 6).
- **Cartas que NUNCA Saem:** 4 Tornadus, 3 Thundurus, 2 Landorus, 2 Enamorus (não corte o Pokémon Enamorus!), 3 Lilian, 3 Brock, 1 Gládio, 1 Repelente.
- **O que Buscar nos 10 Boosters:** 3º Landorus (blinda contra prize brick), Tubo de Lava Lendário (desliga Magmortar e Kommo-o rivais na hora!), Repelente extra, Marshadow, Altaria, Kecleon.
- **Dica de Energia:** Pegue 5x Luta e 4x Raio no balcão da loja. Corte todas as 5 energias Psíquicas da caixa.

### Deck 3: Clangor de Escamas (Kommo-o / Dragões)
- **Condição de Vitória:** Kommo-o de 160 HP batendo 170 e acelerando energias com *Beast Scales*.
- **Cartas que NUNCA Saem:** 4 Jangmo-o, 4 Hakamo-o, 3 Kommo-o, 4 Lilian, 4 Poké Pad, 2 Brock, 1 Doce Raro.
- **O que Buscar nos 10 Boosters:** Doce Raro extra (Kommo-o no T2!), básicos de busca (Delibird, Morpeko, Marshadow), Repelente, 5º Jangmo-o, 4º Kommo-o, Zínia.
- **Dica de Energia:** Pegue 7x Luta e 6x Raio no balcão da loja. Corte Fogo e Água para o Beast Scales acelerar energias úteis.

### Deck 4: Insetofobia (Masquerain / Surskit)
- **Condição de Vitória:** *Bug Out* revelando o fundo do deck (+50 de dano por inseto).
- **Cartas que NUNCA Saem:** 4 Surskit, 4 Masquerain, 4 Combee (no deck!), 4 Spinarak (no deck!), 4 Lilian, 1 Cinza Sagrada, 1 Recuperação de Energia.
- **O que Buscar nos 10 Boosters:** Mais cópias de Bug Outers sem limite de 4 (mais Surskit, Masquerain, Combee, Spinarak), Ariados (imunidade total a básicos dos gênios), Repelente, Cacturne, Delibird.
- **Armadilha:** NUNCA baixe Combee e Spinarak na mesa! Eles precisam ficar dentro do deck para dar dano no Bug Out.

---

## 4. Como Consultar os Confrontos Durante as Rodadas

Na Etapa 3, na seção **⚔️ Guia de Partida & Confrontos**:
1. Toque no botão do rival que sentou na sua frente: `[⚡ vs Mag-Vire]`, `[🌪️ vs Gênios]`, `[🐉 vs Kommo-o]` ou `[🐛 vs Masquerain]`.
2. Veja o alvo prioritário no banco rival e o plano de jogo.
3. Toque em **`▼ Como Fazer na Prática`** para abrir o accordion com:
   - 🎣 Como puxar ou mirar no banco (nocaute forçado do ativo, Repelente ou Sniping).
   - 🧮 Matemática exata de descartes e dano x HP.
   - 📋 Sequência de turnos recomendada (Turno 1, Turno 2, Turno 3).
   - 🔄 Plano B de emergência caso seu atacante seja nocauteado.
