// =====================================================================
// Base de dados dos 4 Kits de Pré-lançamento de Reinado Delta
// ---------------------------------------------------------------------
// confidence: "confirmado" = contagem citada explicitamente nos vídeos
//             "estimado"   = reconstruído; CONFIRA NA CAIXA (editor da Etapa 1)
// core: true  = núcleo intocável (o motor NUNCA corta)
// basic: true = Pokémon Básico (conta para risco de mulligan)
// out: true   = carta que busca/compra (evita brick)
// =====================================================================
const KITS_DATA = {
  magmortar: {
    id: "magmortar",
    name: "Mag-Vire (Magmortar & Electivire)",
    tier: "BDIF (1º Lugar)",
    badgeColor: "#ef4444",
    leadCard: "Magmortar & Electivire",
    type: "Fogo & Raio",
    overview: "O baralho mais estável do formato. Magmortar (140 HP) liga Fogo/Raio da mão; Electivire (Voltage Hammer) causa 60x por energia descartada. Vem com 3 Recuperações de Energia, mas ZERO recuperação de Pokémon.",
    idealTurnOrder: "Ir Primeiro (evoluir no Turno 2 e começar a acelerar antes do oponente)",
    goldenPullsSummary: "Com 60 cartas abertas (10 boosters de 6 cartas), sua prioridade absoluta é fechar o 4º Electabuzz e 3º Electivire (TrustYourPilot). Busque também Repelente (para forçar Landorus/Jangmo-o do banco rival), Arcanine+Growlithe, Raikou ex, Delibird e Confiança da Zínia.",
    trapsSummary: "Tubo de Lava Lendário desliga seu próprio Magmortar (fica no fichário). Mega Rayquaza ex: no máximo 1 cópia, cede 3 prêmios e é fraco a Raio.",
    primaryEnergy: "Energia de Raio Básica",
    ratio: { pokemon: [12, 16], trainer: [12, 16], energy: [11, 13], basicsMin: 7 },
    baseDeck: [
      { name: "Magmar", count: 4, type: "pokemon", basic: true, confidence: "confirmado", role: "Básico do motor" },
      { name: "Magmortar", count: 3, type: "pokemon", core: true, confidence: "confirmado", role: "Motor (Buddy Boost)", coreReason: "Sem Magmortar não há aceleração. Ideal: 2 em campo." },
      { name: "Electabuzz", count: 3, type: "pokemon", basic: true, core: true, confidence: "confirmado", role: "Básico do atacante", coreReason: "Único caminho para Electivire; o kit não tem recuperação de Pokémon." },
      { name: "Electivire", count: 2, type: "pokemon", core: true, confidence: "confirmado", role: "Atacante principal", coreReason: "Voltage Hammer é a condição de vitória." },
      { name: "Lilian (Lillie's Determination)", count: 4, type: "trainer", supporter: true, out: true, core: true, confidence: "confirmado", role: "Compra (embaralha e compra 6)", coreReason: "Principal motor de compra em 40 cartas." },
      { name: "Hilda", count: 2, type: "trainer", supporter: true, out: true, confidence: "confirmado", role: "Busca de evolução e energia" },
      { name: "Poké Pad", count: 4, type: "trainer", out: true, confidence: "confirmado", role: "Busca de Pokémon" },
      { name: "Recuperação de Energia (Energy Retrieval)", count: 3, type: "trainer", confidence: "confirmado", role: "Reciclagem de energia" },
      { name: "Lanterna de Aventura (Adventure Lantern)", count: 3, type: "trainer", out: true, confidence: "confirmado", role: "Busca 1 Fogo + 1 Raio" },
      { name: "Energia de Raio Básica", count: 6, type: "energy", confidence: "confirmado", role: "Energia" },
      { name: "Energia de Fogo Básica", count: 6, type: "energy", confidence: "confirmado", role: "Energia" }
    ],
    preSwaps: [],
    cutOrder: [
      { name: "Lanterna de Aventura (Adventure Lantern)", max: 1, reason: "Reduzir de 3 para 2 Lanternas é o corte mais limpo para abrir espaço ao 4º Electabuzz ou atacante extra." },
      { name: "Hilda", max: 1, reason: "Com 4 Poké Pads e 4 Lilians, 1 Hilda pode ser cedida por peças de impacto como Zínia ou Repelente." },
      { name: "Lanterna de Aventura (Adventure Lantern)", max: 1, reason: "Segundo corte de Lanterna se entrar atacante neutro ou cópia extra de Electivire." },
      { name: "Magmar", max: 1, reason: "Tirar 1 Magmar se entrar básico de busca universal (Delibird / Morpeko). Mantenha ≥3." },
      { name: "Poké Pad", max: 1, reason: "Corte tardio se o deck já tiver excesso de busca." },
      { name: "Recuperação de Energia (Energy Retrieval)", max: 1, reason: "Corte só com atacantes que não descartem energia (ex: Arcanine). Nunca deixe menos de 2." }
    ],
    attackPlan: [
      "T1: baixe 2 Electabuzz + 1-2 Magmar. Use Lanterna/Lilian para garantir 1 Fogo e 1 Raio na mão.",
      "T2 (indo primeiro): evolua Magmar → Magmortar e Electabuzz → Electivire. Buddy Boost liga energia direto no Electivire.",
      "Regra do 'um na frente, um atrás': sempre deixe um 2º Electabuzz/Electivire carregando no banco antes de atacar.",
      "Descarte só o necessário no Voltage Hammer (2 = 120, 3 = 180). Energia excedente é munição do próximo turno.",
      "Use Recuperação de Energia para recarregar a mão antes da Lilian (Lilian embaralha a mão).",
      "Atacante reserva: Magmortar (80 por 3 energias) ou Arcanine (180 por 2) — nunca fique sem golpe."
    ],
    antiBrick: [
      "7 básicos em 40 cartas ≈ 1 em 6 mãos sem básico (veja o painel de saúde). O 4º Electabuzz reduz isso E cobre o maior risco do deck.",
      "Ponto de quebra: perder 2 Electabuzz cedo. Não abra com Electabuzz no ativo se puder abrir com Magmar.",
      "Não gaste Recuperação de Energia cedo: ela é o seu late game."
    ],
    debates: [],
    storeEnergyConfig: {
      energies: [
        { name: "Energia de Fogo Básica", count: 6, emoji: "🔥" },
        { name: "Energia de Raio Básica", count: 6, emoji: "⚡" }
      ],
      totalEnergy: 12,
      weakness: "Fraqueza a Água (Magmortar) e Luta (Electivire)",
      tip: "Pegue 6x Fogo e 6x Raio no balcão da loja. Mantenha proporção equilibrada (1:1) para maximizar o Buddy Boost."
    },
    matchupTips: {
      magmortar: {
        enemyId: "magmortar",
        enemyName: "Mag-Vire (Mirror)",
        advantage: "50/50 Equilibrado",
        statusClass: "adv-even",
        target: "Electabuzz rival no ativo ou banco",
        plan: "Quem montar o primeiro Electivire dita o jogo. Foque em nocautear o Electabuzz adversário antes que ele evolua (o kit deles não tem recuperação de Pokémon). Descarte apenas o estritamente necessário no Voltage Hammer: 1 energia = 60 em básicos, 2 energias = 120 em Electabuzz/Magmar, 3 energias = 180 em Magmortar. Se abriu Arcanine, jogue-o: 180 limpo sem descarte ganha o espelho.",
        caution: "NÃO suba Mega Rayquaza ex no mirror! O Electivire adversário bate fraqueza a Raio e nocauteia seu Mega em 1 golpe, comprando 3 prêmios e encerrando a partida.",
        execution: {
          howToTarget: "Se o Electabuzz adversário estiver no banco: 1. Se abriu Repelente nos boosters, jogue-o para forçar a subida do Electabuzz caso ele esteja sozinho no banco. 2. Se o rival tiver Magmar no ativo, destrua o Magmar ativo com 2 descartes (120 de dano): com o ativo nocauteado, o rival é obrigado a promover Electabuzz ou Magmortar, deixando-o exposto ao seu golpe no turno seguinte. 3. Se você abriu Raikou ex, use seu ataque para dar dano de sniping direto no Electabuzz no banco.",
          damageMath: "Electabuzz tem 80 HP (precisa de 2 descartes de Voltage Hammer = 120 de dano para 1HKO). Magmortar e Electivire têm 140 HP (precisam de 3 descartes = 180 de dano). Se você abriu Arcanine, ele causa 180 de dano por 2 energias sem descartar nada!",
          turnByTurn: [
            "Turno 1: Baixe 1-2 Electabuzz e 1 Magmar no banco. Use Lanterna ou Lilian para garantir 1 Fogo e 1 Raio na mão.",
            "Turno 2: Evolua Magmar para Magmortar e Electabuzz para Electivire. Ative Buddy Boost (liga 1 Fogo + 1 Raio) + ligação manual do turno = 3 energias prontas para bater.",
            "Turno 3 em diante: Declare Voltage Hammer. Nunca descarte mais energias do que o HP do alvo exige. Guarde Recuperação de Energia para reciclar 2 energias após o golpe."
          ],
          planB: "Se seus Electabuzz forem focados e nocauteados antes da evolução, promova Magmortar como atacante principal (80 de dano por 3 energias). Use Recuperação de Energia todo turno para manter o ataque ativo e busque Arcanine ou Rotom Calor nos boosters."
        }
      },
      enamorus: {
        enemyId: "enamorus",
        enemyName: "Solidariedade (Gênios)",
        advantage: "70/30 Muito Favorável (50/50 com Tubo)",
        statusClass: "adv-favorable",
        target: "Landorus ou Enamorus do banco adversário",
        plan: "Seus básicos (80-90 HP) sobrevivem confortavelmente aos 70 de dano do Tornadus. Com Electivire, basta descartar 1 energia para bater 120 no Tornadus (fraqueza a Raio). Para desligar o ataque gratuito do rival, nocauteie Landorus ou Enamorus (eles só possuem 2 cópias no baralho todo).",
        caution: "Se o oponente jogar Tubo de Lava Lendário, seu Magmortar perde a habilidade Buddy Boost! Tenha energias na mão para ligação manual ou use Confiança da Zínia para mover energias no campo.",
        execution: {
          howToTarget: "O rival manterá Tornadus no ativo batendo de graça e Landorus/Enamorus no banco. Como pegá-los: 1. Nocauteie o Tornadus ativo primeiro descartando apenas 1 energia (fraqueza a Raio dobra para 120 e mata em 1 hit). 2. Com Tornadus morto, o rival é FORÇADO a promover um dos gênios do banco para o ativo. Nocauteie o que subir com 2 descartes (120 de dano), quebrando a Solidariedade permanentemente! 3. Se você abriu Repelente nos boosters, jogue no T2 para tirar o Tornadus e pegar Landorus na hora.",
          damageMath: "Tornadus tem 110 HP (fraqueza a Raio: 1 descarte de Electivire = 120 de dano -> 1HKO). Landorus e Enamorus têm 110 HP (2 descartes = 120 de dano -> 1HKO).",
          turnByTurn: [
            "Turno 1: Baixe Magmar e Electabuzz no banco. Deixe Magmar ativo para absorver os 70 de dano do Tornadus (Magmar tem 80-90 HP e sobrevive).",
            "Turno 2: Evolua para Electivire e Magmortar. Buddy Boost liga 2 energias. Descarte 1 energia de Raio (120 de dano) e nocauteie o Tornadus ativo.",
            "Turno 3: O oponente promoveu Landorus ou Enamorus: descarte 2 energias (120 de dano) e nocauteie-o. A Solidariedade do rival desliga e ele não ataca mais de graça!"
          ],
          planB: "Se o rival jogar Tubo de Lava Lendário: Buddy Boost é desligado. Pare de descartar energias com Electivire! Ligue 1 energia manual por turno no Magmortar (bate 80 fixo) e use Confiança da Zínia para mover energias entre o banco e o ativo sem precisar da habilidade."
        }
      },
      kommo: {
        enemyId: "kommo",
        enemyName: "Kommo-o (Dragões)",
        advantage: "75/25 Muito Favorável",
        statusClass: "adv-favorable",
        target: "Jangmo-o (70 HP) antes de evoluir",
        plan: "O oponente precisa de pelo menos 3 turnos para montar um Estágio 2 com 3 energias. Pressione os Jangmo-o desde o Turno 2. Se o oponente colocar Drampa de 120 HP como escudo, descarte 2 energias com Electivire para limpá-lo. Quando Kommo-o subir (160 HP), descarte 3 energias para bater 180 e nocautear em 1 hit.",
        caution: "Nunca deixe Kommo-o desferir o primeiro golpe livre: 170 de dano nocauteia qualquer peça do seu baralho em 1 hit.",
        execution: {
          howToTarget: "O rival vai esconder os Jangmo-o no banco e colocar Drampa (120 HP) ou Dratini no ativo. Como furar: 1. Se abriu Repelente, jogue para empurrar Drampa de volta pro banco e puxar Jangmo-o (70 HP), que morre para qualquer ataque. 2. Se não tiver Repelente, destrua o Drampa ativo com 2 descartes de Electivire (120 de dano). Sem o escudo, o rival é obrigado a expor a linha de dragão.",
          damageMath: "Jangmo-o tem 70 HP (Magmar ou 1 descarte mata). Drampa tem 120 HP (2 descartes de Electivire = 120 1HKO). Hakamo-o tem 90 HP (2 descartes = 120 1HKO). Kommo-o tem 160 HP (3 descartes = 180 de dano 1HKO ou Arcanine bate 180 limpo).",
          turnByTurn: [
            "Turno 1: Coloque Electabuzz e Magmar no banco. Use Poké Pad para buscar a evolução.",
            "Turno 2: Evolua para Electivire. Se Drampa estiver no ativo rival, descarte 2 energias e nocauteie-o.",
            "Turno 3: Mantenha 3 energias carregadas no Electivire ativo e carregue o segundo Electabuzz no banco via Buddy Boost. Quando Kommo-o entrar, descarte 3 energias e vença a corrida."
          ],
          planB: "Se o rival acertar Doce Raro no T2 e Kommo-o bater 170 primeiro no seu Electivire: promova Magmortar (140 HP). Jogue Recuperação de Energia, ligue no 2º Electabuzz no banco e evolua para o segundo Electivire para dar o troco de 180 de dano."
        }
      },
      masquerain: {
        enemyId: "masquerain",
        enemyName: "Masquerain (Insetofobia)",
        advantage: "90/10 Dominante / Esmagadora",
        statusClass: "adv-favorable",
        target: "Masquerain e Surskit (Fraqueza a Fogo)",
        plan: "O matchup mais favorável do torneio. Magmortar causa 80 de dano base, que vira 160 de dano com a fraqueza a Fogo — matando Masquerain (110 HP) em 1 único golpe sem precisar descartar NENHUMA energia! Até os ataques de Magmar causam estragos severos.",
        caution: "Se o adversário usar Padrão Pavoroso, seu Magmortar ativo NÃO PODE ATACAR! Como o kit base NÃO tem Balão de Ar e o recuo do Magmortar custa 3 energias, você precisará descartar 3 energias para recuar ou ter puxado Balão de Ar/Zínia nos boosters.",
        execution: {
          howToTarget: "O rival precisa de Surskit ou Masquerain no ativo para tentar atacar ou fazer setup. Ambos possuem Fraqueza a Fogo x2. Promova Magmortar para o ativo: qualquer golpe de Fogo nocauteia em 1 hit.",
          damageMath: "Surskit tem 50 HP (ataque de Magmar de 30 vira 60 com fraqueza -> 1HKO). Masquerain tem 110 HP (Magmortar bate 80 x 2 = 160 com fraqueza -> 1HKO sem descartar nenhuma energia!).",
          turnByTurn: [
            "Turno 1: Baixe Magmar no ativo e Electabuzz no banco. Ligue 1 Fogo manual.",
            "Turno 2: Evolua para Magmortar. Ligue 2 energias via Buddy Boost. Bata com Magmortar (160 de dano com fraqueza) e leve o prêmio.",
            "Turno 3: Repita o ataque de Magmortar. Guarde os descartes de Electivire apenas se o rival subir um Pokémon sem fraqueza a Fogo."
          ],
          planB: "Se o rival usar Padrão Pavoroso e bloquear o ataque do seu Magmortar ativo: seu recuo é 3 energias! Se tiver puxado Balão de Ar nos boosters, ligue e recue grátis para promover Electivire. Se não tiver, descarte 3 energias para recuar ou use Lanterna de Aventura/Recuperação para recompor o gás."
        }
      }
    }
  },

  enamorus: {
    id: "enamorus",
    name: "Solidariedade Materializada (Enamorus / Gênios)",
    tier: "Tier 1 (2º Lugar)",
    badgeColor: "#eab308",
    leadCard: "Tornadus, Thundurus, Landorus & Enamorus",
    type: "Incolor / Luta / Raio",
    overview: "Com os 4 gênios em campo (Solidariedade), custos incolores somem: Tornadus ataca por 0 energia (70 de dano + compra até 6), Landorus por 1 Luta, Thundurus por 1 Raio. Enamorus é o pior atacante, mas é PEÇA da habilidade.",
    idealTurnOrder: "Ir Segundo se tiver busca de básicos (Marshadow/Brock); Ir Primeiro se já abrir com os 4 gênios na mão",
    goldenPullsSummary: "Com 60 cartas abertas (10 boosters de 6 cartas), a probabilidade de achar o 3º Landorus e blindar contra prize brick é altíssima! Caça de elite: 3º Landorus, Tubo de Lava Lendário (desliga Magmortar/Kommo-o instantaneamente), Repelente extra, Marshadow, Altaria, Kecleon, Delibird e Pico Lendário.",
    trapsSummary: "NUNCA corte Enamorus: sem ele a Solidariedade desliga. Corte as energias Psíquicas, não o Pokémon. Evite evoluções pesadas que disputem espaço de banco.",
    primaryEnergy: "Energia de Luta Básica",
    ratio: { pokemon: [11, 15], trainer: [13, 18], energy: [8, 12], basicsMin: 11 },
    baseDeck: [
      { name: "Tornadus", count: 4, type: "pokemon", basic: true, core: true, confidence: "confirmado", role: "Atacante grátis + motor de compra", coreReason: "Ataca por 0 energia e recompõe a mão para 6 — é o que permite atacar todo turno." },
      { name: "Thundurus", count: 3, type: "pokemon", basic: true, core: true, confidence: "confirmado", role: "Atacante (fura efeitos)", coreReason: "Peça da Solidariedade; 90 de dano por 1 Raio e seu ataque Thunder Edge ignora quaisquer efeitos e proteções no defensor." },
      { name: "Landorus", count: 2, type: "pokemon", basic: true, core: true, confidence: "confirmado", role: "Atacante pesado", coreReason: "Peça da Solidariedade; 90/110 por 1 Luta, 190 com Gládio." },
      { name: "Enamorus", count: 2, type: "pokemon", basic: true, core: true, confidence: "confirmado", role: "Peça da habilidade", coreReason: "Não ataque com ele, mas sem Enamorus em campo a Solidariedade desliga." },
      { name: "Lilian (Lillie's Determination)", count: 3, type: "trainer", supporter: true, out: true, core: true, confidence: "confirmado", role: "Compra", coreReason: "Motor de compra." },
      { name: "Busca do Brock (Brock's Scouting)", count: 3, type: "trainer", supporter: true, out: true, core: true, confidence: "confirmado", role: "Busca 2 básicos", coreReason: "Coloca os gênios em campo — sem isso a Solidariedade não liga." },
      { name: "Batalha Decisiva do Gládio", count: 1, type: "trainer", supporter: true, core: true, confidence: "confirmado", role: "Finalizador (+80 se última carta)", coreReason: "Único jeito de nocautear Kommo-o (160 HP) em 1 golpe." },
      { name: "Poké Pad", count: 3, type: "trainer", out: true, confidence: "confirmado", role: "Busca de Pokémon" },
      { name: "Ultra Ball", count: 3, type: "trainer", out: true, confidence: "confirmado", role: "Busca de Pokémon (descarta cartas para ativar Gládio)" },
      { name: "Busca de Energia (Energy Search)", count: 2, type: "trainer", out: true, confidence: "confirmado", role: "Filtro e busca de energia" },
      { name: "Cinza Sagrada (Sacred Ash)", count: 1, type: "trainer", core: true, confidence: "confirmado", role: "Reciclagem de gênios", coreReason: "Devolve gênios nocauteados ao deck para não quebrar a Solidariedade." },
      { name: "Repelente (Repel)", count: 1, type: "trainer", core: true, confidence: "confirmado", role: "Força troca do ativo rival", coreReason: "Resposta ao muro de 120 HP do Kommo-o." },
      { name: "Balão de Ar (Air Balloon)", count: 1, type: "trainer", confidence: "confirmado", role: "Recuo" },
      { name: "Energia de Luta Básica", count: 4, type: "energy", confidence: "confirmado", role: "Energia" },
      { name: "Energia Psíquica Básica", count: 4, type: "energy", confidence: "confirmado", role: "Energia (só Enamorus)" },
      { name: "Energia de Raio Básica", count: 3, type: "energy", confidence: "confirmado", role: "Energia" }
    ],
    preSwaps: [
      {
        remove: "Energia Psíquica Básica", count: 99,
        add: [
          { name: "Energia de Luta Básica", count: 2, type: "energy" },
          { name: "Energia de Raio Básica", count: 2, type: "energy" }
        ],
        reason: "Enamorus causa só 100 por 2 Psíquicas — não ataque com ele. Troque por Luta/Raio (o deck fica com 6 Luta + 5 Raio).",
        source: "Consenso Competitivo"
      }
    ],
    cutOrder: [
      { name: "Ultra Ball", max: 1, reason: "Reduzir de 3 para 2 Ultra Balls poupa descartes de recursos cruciais." },
      { name: "Energia de Luta Básica", max: 2, reason: "Tornadus ataca de graça: pode enxugar energias excedentes para dar espaço ao 3º Landorus ou Zínia." },
      { name: "Energia de Raio Básica", max: 1, reason: "Ajuste fino de curva energética." },
      { name: "Poké Pad", max: 1, reason: "Com 3 Brocks e 2 Ultra Balls, 2 Poké Pads são suficientes." },
      { name: "Balão de Ar (Air Balloon)", max: 1, reason: "Dispensável se abrir Altaria ou Zínia." }
    ],
    attackPlan: [
      "T1: Brock / Poké Pad / Ultra Ball para colocar os 4 tipos de gênio em campo. Abra com Tornadus no ativo.",
      "Com os 4 em campo, Tornadus ataca por 0 energia e recompõe a mão para 6: isso é ataque garantido todo turno.",
      "Mantenha uma 2ª cópia de pelo menos um gênio no banco: se nocautearem o único Landorus/Enamorus, a Solidariedade cai.",
      "Ligue 1 Luta no Landorus e 1 Raio no Thundurus no banco ANTES de precisar deles.",
      "Gládio: vá esvaziando a mão para que ele seja a última carta no turno do nocaute em Kommo-o.",
      "Thundurus com Thunder Edge: use para atravessar quaisquer efeitos ou imunidades de cartas rivais."
    ],
    antiBrick: [
      "11 básicos: risco de mulligan baixo. O risco real é NÃO montar os 4 tipos — priorize busca (Brock/Poké Pad/Marshadow) sobre energia.",
      "Ponto de quebra: prizar os 2 Landorus ou os 2 Enamorus. Por isso o 3º Landorus aberto no booster é prioridade.",
      "Excesso de energia é o brick deste deck: cada energia além de ~9 é uma carta que não monta os gênios."
    ],
    debates: [
      "Quantidade de energia: TrustYourPilot corta para ~8 (4 Luta + 4 Raio) e usa os espaços em busca/Zínia/3º Landorus. O motor começa em 15 e corta energia primeiro quando você adiciona pulls."
    ],
    storeEnergyConfig: {
      energies: [
        { name: "Energia de Luta Básica", count: 6, emoji: "🥊" },
        { name: "Energia de Raio Básica", count: 5, emoji: "⚡" }
      ],
      totalEnergy: 11,
      weakness: "Fraqueza a Elétrico (Tornadus), Psíquico (Landorus), Aço (Enamorus)",
      tip: "Pegue 6x Luta e 5x Raio no balcão da loja. NUNCA use as 4 energias Psíquicas que vêm na caixa — troque-as integralmente por Luta/Raio."
    },
    matchupTips: {
      enamorus: {
        enemyId: "enamorus",
        enemyName: "Solidariedade (Mirror)",
        advantage: "50/50 Equilibrado",
        statusClass: "adv-even",
        target: "Landorus ou Enamorus adversário",
        plan: "Guerra de velocidade para colocar os 4 terians em campo. Nocauteie Landorus ou Enamorus do adversário para quebrar a Solidariedade rival e restaurar os custos de energia dele. Se você abriu Pico Lendário, baixe imediatamente: seu Tornadus passa a ceder 0 prêmios!",
        caution: "Guarde Gládio para dar 1HKO surpresa no gênio ativo do oponente com Landorus (190 de dano).",
        execution: {
          howToTarget: "Ambos os jogadores usam Tornadus no ativo. Para alcançar o Landorus ou Enamorus no banco rival: use o Repelente que vem no seu kit no T2 ou nocauteie o Tornadus ativo (70 de dano) para forçar o adversário a promover uma de suas peças limitadas.",
          damageMath: "Tornadus, Thundurus, Landorus e Enamorus têm 110 HP. Tornadus bate 70 (precisa de 2 hits). Landorus bate 110 por 1 Luta (1HKO exato no gênio rival!). Com Gládio, Landorus atinge 190 de dano.",
          turnByTurn: [
            "Turno 1: Brock busca os 2 gênios que faltam. Baixe os 4 tipos na mesa para ativar a Solidariedade.",
            "Turno 2: Tornadus ativo ataca por 0 energias causando 70 de dano e recompondo sua mão para 6 cartas. Ligue 1 Luta manual no Landorus no banco.",
            "Turno 3: Se o rival promover Landorus, suba seu Landorus carregado e nocauteie com 110 de dano por 1 energia!"
          ],
          planB: "Se o oponente conseguir nocautear seu único Landorus ou Enamorus, a Solidariedade desliga temporariamente. Use Poké Pad ou Ultra Ball para buscar a segunda cópia e reativar a habilidade imediatamente."
        }
      },
      magmortar: {
        enemyId: "magmortar",
        enemyName: "Mag-Vire",
        advantage: "45/55 Sem Estádio | 75/25 com Tubo de Lava",
        statusClass: "adv-even",
        target: "Electabuzz no banco e Magmortar",
        plan: "A SUA GRANDE JOGADA É O TUBO DE LAVA LENDÁRIO! Como todos os seus 4 gênios são Pokémon Básicos, eles continuam atacando por 0 energia e ignoram o estádio. Mas o Magmortar rival perde o Buddy Boost e o deck dele trava por completo! Use Kecleon revelando os 4 tipos da mão para bater 120 por 2 energias.",
        caution: "Sem estádio, o Electivire rival mata qualquer terian seu em 1 hit com 1-2 energias. Não deixe seus atacantes sem um substituto carregado no banco.",
        execution: {
          howToTarget: "Como atingir o motor rival: 1. Se você abriu Tubo de Lava Lendário nos boosters, jogue no T1 ou T2: Magmortar desliga e o rival não acelera energias. 2. Use Repelente para forçar a troca se o rival deixar um Magmar de escudo na frente. 3. Se Kecleon estiver na mão, ligue 2 energias e revele os 4 gênios para bater 120 direto no Magmortar/Electivire.",
          damageMath: "Electivire e Magmortar têm 140 HP. Kecleon bate 120. Landorus + Gládio bate 190 (nocauteia Magmortar e Electivire em 1 golpe!). Tornadus bate 70 por 0 energias.",
          turnByTurn: [
            "Turno 1: Coloque os 4 gênios em campo com Brock/Poké Pad. Se tirou Tubo de Lava, baixe-o imediatamente.",
            "Turno 2: Ataque com Tornadus por 0 energias (70 de dano) no Magmar ou Electabuzz ativo.",
            "Turno 3: Conforme o rival subir Electivire, esvazie a mão e jogue Gládio como última carta: Landorus bate 190 e derruba o Electivire rival em 1 hit!"
          ],
          planB: "Se não abriu Tubo de Lava e o rival montar Electivire rápido: não tente disputar dano bruto. Use Tornadus para forçar trocas de 1 prêmio e finalize os prêmios restantes com Thundurus e Landorus."
        }
      },
      kommo: {
        enemyId: "kommo",
        enemyName: "Kommo-o (Dragões)",
        advantage: "70/30 Muito Favorável",
        statusClass: "adv-favorable",
        target: "Jangmo-o (70 HP) no Turno 2",
        plan: "Tornadus ataca por 0 energias causando exatamente 70 de dano, nocauteando Jangmo-o no T2 e comprando 6 cartas todo turno. Se o adversário colocar Drampa (120 HP) na frente, use Repelente para tirá-lo e pegar o Jangmo-o no banco! Quando Kommo-o subir: Landorus (110) + Gládio (+80) = 190 de dano, nocauteando Kommo-o em 1 hit!",
        caution: "Não desperdice a carta do Gládio antes da hora: guarde-a para quando Kommo-o entrar em campo.",
        execution: {
          howToTarget: "O rival vai usar Drampa (120 HP) no ativo para proteger Jangmo-o no banco. Como furar: O SEU KIT JÁ VEM COM 1x REPELENTE! Jogue Repelente no T2: o oponente é obrigado a mandar Drampa pro banco e promover Jangmo-o (70 HP). Declare o ataque do Tornadus (70 de dano por 0 energias) e nocauteie o Jangmo-o no mesmo turno!",
          damageMath: "Jangmo-o tem 70 HP (Tornadus causa exatamente 70 -> 1HKO exato por ZERO energias!). Drampa tem 120 HP (precisa de 2 hits de Tornadus ou 1 hit de Landorus + dano). Kommo-o tem 160 HP (Landorus 110 + Gládio 80 = 190 -> 1HKO devastador!).",
          turnByTurn: [
            "Turno 1: Baixe os 4 gênios. Ligue 1 Luta no Landorus no banco.",
            "Turno 2: Jogue Repelente para tirar Drampa do ativo rival. Promova Tornadus e ataque por 0 energias (70 de dano), eliminando o Jangmo-o promovido e comprando até 6 cartas.",
            "Turno 3: Mantenha a pressão. Conforme Kommo-o (160 HP) for montado, guarde Gládio para desferir 190 de dano com Landorus."
          ],
          planB: "Se o oponente colocar Kommo-o cedo com Doce Raro antes de você achar Gládio: ataque com Tornadus (70 de dano). No turno seguinte, Landorus finaliza com 110 de dano sem precisar do Gládio (70 + 110 = 180)."
        }
      },
      masquerain: {
        enemyId: "masquerain",
        enemyName: "Masquerain (Insetofobia)",
        advantage: "65/35 Favorável",
        statusClass: "adv-favorable",
        target: "Surskit (50 HP) e Cacnea antes de evoluírem",
        plan: "Tornadus limpa a mesa do rival nocauteando todos os básicos leves por 0 energias (Surskit tem 50 HP, Combee 50 HP, Spinarak 60 HP). Ariados NÃO é problema: seu ataque Agulha Secreta custa 3 energias incolores ([C][C][C]) e ele tem Fraqueza a Luta x2 (Landorus mata Ariados com 1 hit de 220 de dano). O verdadeiro perigo rival é CACTURNE: com seus 4 gênios em campo, Cacturne bate 210 por apenas 1 Grama!",
        caution: "Elimine qualquer Cacnea do banco com Repelente antes que evolua via Floresta da Vitalidade. Não deixe Cacturne atacar.",
        execution: {
          howToTarget: "O rival depende de manter Surskit para buscar peças ou Combee/Spinarak no deck. Tornadus bate 70 por 0 energias e limpa os básicos da frente. Se o rival baixar Cacnea, use Repelente para forçá-lo pro ativo e nocauteie na hora.",
          damageMath: "Surskit (50 HP), Combee (50 HP) e Spinarak (60 HP) morrem em 1 hit para Tornadus (70 por 0 energias). Masquerain tem 110 HP (Landorus bate 110 -> 1HKO). Ariados tem 100 HP e Fraqueza a Luta x2 (Landorus bate 110 x 2 = 220 -> 1HKO brutal). Cacturne rival causa 10 + 50 x 4 = 210 de dano por 1 Grama contra seus 4 gênios.",
          turnByTurn: [
            "Turno 1: Baixe os 4 gênios. Ligue 1 Luta no Landorus no banco.",
            "Turno 2: Bata 70 com Tornadus no básico ativo rival por 0 energias e compre 6 cartas.",
            "Turno 3: Se o rival subir Masquerain, suba Landorus e bata 110 (1HKO). Se o rival tentar Cacturne, nocauteie com Landorus."
          ],
          planB: "Se o rival colocar Floresta da Vitalidade e subir Cacturne (130 HP) batendo 210 no seu ativo: jogue Repelente para tirá-lo do ativo, ou suba Landorus e finalize Cacturne com 110 de dano + Tornadus no turno seguinte."
        }
      }
    }
  },

  kommo: {
    id: "kommo",
    name: "Clangor de Escamas (Kommo-o / Dragões)",
    tier: "Tier 2 (3º Lugar)",
    badgeColor: "#8b5cf6",
    leadCard: "Kommo-o (Estágio 2 Dragão)",
    type: "Dragão (Luta & Raio)",
    overview: "Kommo-o: 160 HP, 170 de dano (nocauteia tudo) e Beast Scales (olha o topo 6 e liga energias básicas nos dragões). Linha 4-4-3, apenas 1 Doce Raro e só 9 energias Luta/Raio no kit.",
    idealTurnOrder: "Ir Primeiro (Hakamo-o no T2 com segurança; Kommo-o no T3)",
    goldenPullsSummary: "Com 60 cartas abertas (10 boosters de 6 cartas), caçar básicos de busca (Delibird, Morpeko, Marshadow) e um 2º Doce Raro elimina a inconsistência do deck e viabiliza cortar Dratini/Dragonair com 100% de segurança! Caça de ouro: Doce Raro extra, Repelente, 5º Jangmo-o, 4º Kommo-o, Zínia, Virizion e Sandslash.",
    trapsSummary: "Tubo de Lava Lendário desliga seu Beast Scales (fichário). Não corte Dratini sem repor básicos suficientes no deck.",
    primaryEnergy: "Energia de Luta Básica",
    ratio: { pokemon: [14, 18], trainer: [11, 14], energy: [10, 13], basicsMin: 7 },
    baseDeck: [
      { name: "Jangmo-o", count: 4, type: "pokemon", basic: true, core: true, confidence: "confirmado", role: "Básico do atacante", coreReason: "Linha 4-4-3 é a espinha dorsal do deck." },
      { name: "Hakamo-o", count: 4, type: "pokemon", core: true, confidence: "confirmado", role: "Estágio 1 / atacante reserva (Double Heads 140)", coreReason: "Ponte para Kommo-o com só 1 Doce Raro." },
      { name: "Kommo-o", count: 3, type: "pokemon", core: true, confidence: "confirmado", role: "Atacante principal + aceleração", coreReason: "Condição de vitória (170 de dano + Beast Scales)." },
      { name: "Druddigon (Crimgan)", count: 3, type: "pokemon", basic: true, confidence: "confirmado", role: "Tanque inicial de 120 HP / puxador de atacantes rivais" },
      { name: "Lilian (Lillie's Determination)", count: 4, type: "trainer", supporter: true, out: true, core: true, confidence: "confirmado", role: "Compra", coreReason: "Motor de compra." },
      { name: "Busca do Brock (Brock's Scouting)", count: 2, type: "trainer", supporter: true, out: true, core: true, confidence: "confirmado", role: "Busca 2 básicos", coreReason: "Garante Jangmo-o no banco no T1." },
      { name: "Poké Pad", count: 4, type: "trainer", out: true, core: true, confidence: "confirmado", role: "Busca de evolução", coreReason: "Acha Hakamo-o e Kommo-o com consistência." },
      { name: "Doce Raro (Rare Candy)", count: 1, type: "trainer", core: true, confidence: "confirmado", role: "Pula o Estágio 1", coreReason: "Possibilita Kommo-o bater 170 no T2." },
      { name: "Balão de Ar (Air Balloon)", count: 2, type: "trainer", confidence: "confirmado", role: "Recuo grátis de tanques pesados" },
      { name: "Energia de Raio Básica", count: 5, type: "energy", confidence: "confirmado", role: "Energia (Beast Scales)" },
      { name: "Energia de Luta Básica", count: 4, type: "energy", confidence: "confirmado", role: "Energia (Beast Scales)" },
      { name: "Energia de Água Básica", count: 2, type: "energy", confidence: "confirmado", role: "Energia off-type (só para Druddigon)" },
      { name: "Energia de Fogo Básica", count: 2, type: "energy", confidence: "confirmado", role: "Energia off-type (só para Druddigon)" }
    ],
    preSwaps: [
      {
        remove: "Energia de Água Básica", count: 99,
        add: [{ name: "Energia de Luta Básica", count: 2, type: "energy" }],
        reason: "Kommo-o ataca com Luta e Raio. Beast Scales só acelera o que estiver no topo — energia off-type é carta morta.",
        source: "Consenso Competitivo"
      },
      {
        remove: "Energia de Fogo Básica", count: 99,
        add: [{ name: "Energia de Raio Básica", count: 2, type: "energy" }],
        reason: "Idem. Resultado após troca no balcão: 7 Raio + 6 Luta.",
        source: "Consenso Competitivo"
      }
    ],
    cutOrder: [
      { name: "Druddigon (Crimgan)", max: 1, reason: "Reduzir de 3 para 2 Druddigons é o primeiro corte ideal quando entram atacantes ou básicos de busca." },
      { name: "Balão de Ar (Air Balloon)", max: 1, reason: "1 Balão de Ar é suficiente se você abrir Zínia ou atacantes leves." },
      { name: "Hakamo-o", max: 1, reason: "Se abrir um 2º Doce Raro, cortar 1 Hakamo-o acelera a velocidade da lista." },
      { name: "Druddigon (Crimgan)", max: 1, reason: "Segundo corte de Druddigon se entrar linha secundária de atacante ou Delibird." },
      { name: "Energia de Raio Básica", max: 1, reason: "Ajuste fino de energia caso entre aceleração extra." }
    ],
    attackPlan: [
      "T1: Brock (indo segundo) ou Poké Pad: 2+ Jangmo-o no banco. Abra com Dratini/Dragonair ou Morpeko/Electabuzz no ativo, nunca Jangmo-o (70 HP morre para Tornadus grátis).",
      "T2: Hakamo-o (ou Kommo-o direto com Doce Raro). Ligue energia manual sempre na linha Kommo-o.",
      "Beast Scales: se a mão não tem energia, use a habilidade ANTES da Lilian; se a mão já tem energia, Lilian primeiro.",
      "Aceite ficar 1-2 prêmios atrás nos T1-T2. A partir do T3, Kommo-o (170) nocauteia um por turno.",
      "Mantenha 2 'muros' de 120 HP quando enfrentar os gênios: se usarem Repelente, você promove o outro muro.",
      "Atacante reserva todo turno: 2º Hakamo-o carregado no banco (Double Heads até 140)."
    ],
    antiBrick: [
      "Só 6 básicos no kit ≈ 29% de mãos sem básico. É o deck que MAIS sofre mulligan — qualquer básico de busca aberto no booster entra.",
      "Ponto de quebra: perder os Jangmo-o antes de evoluir. Nunca exponha Jangmo-o no ativo.",
      "Sem recuperação de Pokémon e 1 Doce Raro: Poké Pad é sua carta mais importante depois da Lilian."
    ],
    debates: [
      "Energias off-type: TrustYourPilot manda cortar Água/Fogo e ir de Luta/Raio (padrão do motor). Fantasma Cinza propõe o contrário se os boosters vierem fracos: tirar 1 Jangmo-o + 1 Hakamo-o e ADICIONAR 1 Água + 1 Fogo para o Dragonair atacar (Arrastar para Fora). Para seguir o Fantasma, ajuste no editor da caixa (Etapa 1)."
    ],
    storeEnergyConfig: {
      energies: [
        { name: "Energia de Raio Básica", count: 7, emoji: "⚡" },
        { name: "Energia de Luta Básica", count: 6, emoji: "🥊" }
      ],
      totalEnergy: 13,
      weakness: "Sem fraqueza comum em Dragões em Reinado Delta",
      tip: "Pegue 7x Raio e 6x Luta no balcão da loja. Corte totalmente as 2 energias de Água e 2 de Fogo da caixa para o Beast Scales não acelerar cartas inúteis."
    },
    matchupTips: {
      kommo: {
        enemyId: "kommo",
        enemyName: "Kommo-o (Mirror)",
        advantage: "50/50 Equilibrado",
        statusClass: "adv-even",
        target: "Jangmo-o e Hakamo-o no banco rival",
        plan: "Ambos os Kommo-o possuem 160 HP e causam 170 de dano. Isso significa que quem acertar o primeiro golpe de Kommo-o nocauteia o Kommo-o rival em 1 hit e ganha a partida. Acelere com Beast Scales antes de jogar Lilian. Hakamo-o pode desferir até 140 com Double Heads como atacante de transição.",
        caution: "Não arrisque Jangmo-o no ativo no Turno 1 se puder abrir com Dratini ou Morpeko.",
        execution: {
          howToTarget: "Guerra de espelho: ambos vão tentar esconder Jangmo-o. Se o rival deixar Drampa ativo, use Hakamo-o para pressionar com Double Heads (até 140 de dano) ou suba Kommo-o e nocauteie o Drampa ativo em 1 hit (170 de dano). O adversário será obrigado a subir o Kommo-o dele, iniciando a troca decisiva de prêmios.",
          damageMath: "Kommo-o tem 160 HP e bate 170 (1HKO mútuo em 1 golpe). Hakamo-o bate 70 por cara (140 com 2 caras). Jangmo-o tem 70 HP.",
          turnByTurn: [
            "Turno 1: Baixe 2 Jangmo-o no banco com Brock. Abra com Dratini no ativo.",
            "Turno 2: Hakamo-o no banco (ou Doce Raro -> Kommo-o). Use Beast Scales antes de Lilian se faltar energia na mão.",
            "Turno 3: Declare o primeiro ataque de 170 do Kommo-o e lidere a corrida de prêmios."
          ],
          planB: "Se o oponente acertar Doce Raro no T2 antes de você: não suba seu Kommo-o para morrer! Suba Hakamo-o com Balão de Ar, tente a sorte no Double Heads (140 de dano) para enfraquecer o Kommo-o rival e depois finalize com seu Kommo-o limpo."
        }
      },
      magmortar: {
        enemyId: "magmortar",
        enemyName: "Mag-Vire",
        advantage: "30/70 Desfavorável",
        statusClass: "adv-unfavorable",
        target: "Electabuzz no banco (elimine a condição de vitória rival)",
        plan: "Coloque Drampa (120 HP) no ativo para absorver os primeiros ataques enquanto você acelera energias com Beast Scales nos Jangmo-o no banco. Quando Kommo-o estiver pronto com 3 energias, use Confiança da Zínia para recuar Drampa e nocautear o Electivire rival com 170 de dano.",
        caution: "Cuidado redobrado com Arcanine rival: ele causa 180 de dano sem descarte e nocauteia Kommo-o em 1 hit. Se vir Growlithe, priorize eliminá-lo.",
        execution: {
          howToTarget: "Como resistir e quebrar o motor rival: 1. Abra com Drampa (120 HP) no ativo: o Electivire rival precisa queimar 2 descartes para matá-lo. 2. Enquanto Drampa segura o jogo, use Beast Scales no banco para ligar energias de Luta e Raio nos seus dragões. 3. Quando Kommo-o tiver 3 energias, jogue Zínia ou Balão de Ar para trocar Drampa por Kommo-o e nocautear o Electivire rival (140 HP) em 1 hit (170 de dano!).",
          damageMath: "Electivire tem 140 HP e Magmortar tem 140 HP (Kommo-o causa 170 -> 1HKO limpo em qualquer um deles!). Kommo-o tem 160 HP (resiste a até 2 descartes de Electivire, só morre para 3 descartes de 180).",
          turnByTurn: [
            "Turno 1: Dratini ou Drampa no ativo (120 HP absorve dano). Jangmo-o seguro no banco.",
            "Turno 2: Evolua Jangmo-o para Hakamo-o. Ative Beast Scales para descer energias do topo.",
            "Turno 3: Kommo-o entra com 3 energias. Recue Drampa com Balão de Ar ou use Zínia. Bata 170 no Electivire ativo!"
          ],
          planB: "Se o rival abrir Arcanine e ameaçar 180 de dano constante: ataque com Hakamo-o primeiro ou use Sandslash com Ascensão para colocar contadores de dano no Arcanine antes de expor Kommo-o."
        }
      },
      enamorus: {
        enemyId: "enamorus",
        enemyName: "Solidariedade (Gênios)",
        advantage: "40/60 Parelho a Desfavorável",
        statusClass: "adv-even",
        target: "Landorus e Tornadus",
        plan: "Mantenha SEMPRE DOIS tanques de 120 HP em campo (Drampa + Dragonair). Se o rival jogar Repelente, você promove o outro tanque de 120 HP e mantém seus Jangmo-o 100% protegidos no banco! Assim que Kommo-o entrar com 3 energias, ele varre os terians (todos têm 110-120 HP).",
        caution: "O rival vai guardar Gládio para bater 190 com Landorus. Se o rival estiver com 1 carta na mão, espere o nocaute surpresa.",
        execution: {
          howToTarget: "O rival tem Repelente no kit e vai tentar puxar seus Jangmo-o do banco. Como neutralizar: Mantenha SEMPRE DOIS tanques de 120 HP em jogo (Drampa e Dragonair). Quando o rival jogar Repelente para tirar seu ativo, você escolhe promover o segundo tanque de 120 HP! O Tornadus rival (70 de dano por 0 energia) precisará de 2 turnos para derrubá-lo, dando tempo exato para você carregar Kommo-o no banco e entrar varrendo a mesa.",
          damageMath: "Todos os gênios rivais têm 110 HP (Kommo-o causa 170 -> 1HKO massivo em qualquer terian). Drampa tem 120 HP (sobrevive a 1 hit do Tornadus de 70).",
          turnByTurn: [
            "Turno 1: Baixe Drampa e Dratini na mesa. Mantenha Jangmo-o no banco.",
            "Turno 2: Evolua para Hakamo-o ou Dragonair. Se o rival usar Repelente, promova o segundo tanque.",
            "Turno 3: Kommo-o carrega a 3ª energia e entra batendo 170, eliminando o gênio ativo rival e tomando a frente nos prêmios."
          ],
          planB: "Se o rival jogar Gládio com Landorus e nocautear seu Kommo-o com 190 de dano: promova Hakamo-o com 2 energias e use Double Heads (até 140 de dano) para nocautear o Landorus rival que ficou sem energias."
        }
      },
      masquerain: {
        enemyId: "masquerain",
        enemyName: "Masquerain (Insetofobia)",
        advantage: "65/35 Favorável",
        statusClass: "adv-favorable",
        target: "Masquerain ativo",
        plan: "O HP alto de Kommo-o (160) e de Drampa (120) aguenta os primeiros ataques de Bug Out (que normalmente acertam 2-3 insetos, ou seja, 100-150 de dano). Um único golpe de Kommo-o (170) nocauteia Masquerain em 1 hit.",
        caution: "Se o adversário usar Padrão Pavoroso para impedir Kommo-o de atacar, use Balão de Ar ou Confiança da Zínia para destravar o atacante.",
        execution: {
          howToTarget: "Masquerain precisa vir para o ativo para declarar Bug Out. Como seu Kommo-o tem 160 HP, ele sobrevive ao primeiro golpe do Bug Out e contra-ataca com 170 de dano, matando Masquerain em 1 hit.",
          damageMath: "Masquerain tem 110 HP (Kommo-o causa 170 -> 1HKO com folga). Kommo-o tem 160 HP (Bug Out precisa de 4 insetos revelados = 200 de dano para matar, o que é estatisticamente raro no T2/T3).",
          turnByTurn: [
            "Turno 1: Coloque Jangmo-o no banco e Dratini ativo. Acelere com Brock.",
            "Turno 2: Monte Kommo-o com Doce Raro ou Hakamo-o. Carregue energias com Beast Scales.",
            "Turno 3: Bata 170 de dano no Masquerain ativo."
          ],
          planB: "Se o rival usar Padrão Pavoroso para travar o ataque do Kommo-o: ligue Balão de Ar no Kommo-o, recue para o banco e suba Hakamo-o ou use Confiança da Zínia para resetar o efeito e atacar no mesmo turno."
        }
      }
    }
  },

  masquerain: {
    id: "masquerain",
    name: "Insetofobia (Masquerain / Surskit)",
    tier: "Tier 3 (4º Lugar)",
    badgeColor: "#10b981",
    leadCard: "Masquerain (Bug Out)",
    type: "Grama",
    overview: "Motor Bug Out (1 Grama): Revela as 7 cartas do fundo do baralho. Causa 50 de dano para CADA Pokémon revelado que possua o ataque Bug Out impresso na carta. Em seguida, EMBARALHA os Pokémon revelados de volta no baralho e DESCARTA todas as outras cartas (Energias, Apoiadores, Itens e Pokémon sem Bug Out). O kit base possui exatamente 12 Bug Outers: 4 Masquerain, 4 Combee e 4 Spinarak! Surskit NÃO tem Bug Out, mas possui Multiplicar ([C]): busca 2 Surskits e coloca no banco, limpando o deck de cartas sem Bug Out! Floresta da Vitalidade permite que seus Pokémon de Grama evoluam no mesmo turno em que entram em jogo. Energia de Crescimento (+20 HP) eleva Masquerain a 130 HP, sobrevivendo a todos os ataques dos gênios rivais.",
    idealTurnOrder: "Ir Segundo se abrir com Surskit + Energia (Multiplicar no T1 busca 2 Surskit); Ir Primeiro se já tiver a linha Masquerain na mão inicial",
    goldenPullsSummary: "🔥 OURO ABSOLUTO (Tier S+): Mais cópias de Masquerain, Combee ou Spinarak dos boosters! Sem limite de 4 cópias no pré-lançamento, cada cópia extra aumenta a densidade de Bug Outers e garante nocautes de 150-200 dano todo turno. ⭐ Tier S: Linha Cacturne (005/076) + Cacnea (004/076) — Punishing Needles custa apenas 1 [G] e causa 210 de dano contra decks de 4 habilidades (Enamorus), evoluindo no mesmo turno via Floresta da Vitalidade! ⭐ Tier A: Repelente e 2ª Recuperação de Energia (essencial para resgatar energias descartadas pelo Bug Out). 🚫 ARMADILHAS DO FICHÁRIO: Vespiquen (custa [C][C][C] 3 energias e NÃO tem Bug Out), Heracross (3 energias, sem Bug Out) e Ariados (Agulha Secreta custa [C][C][C] 3 energias, veneno exige Noturna, e Fraqueza a Luta x2 morre para Landorus).",
    trapsSummary: "NUNCA corte Combee ou Spinarak: eles são os Bug Outers que garantem seus 150 de dano! Cortá-los destrói a probabilidade matemática do baralho. NUNCA coloque Vespiquen ou atacantes pesados de 3 energias que não tenham Bug Out: eles não batem no Bug Out, vão para o lixo e você não tem aceleração de energia.",
    primaryEnergy: "Energia de Grama Básica",
    ratio: { pokemon: [16, 24], trainer: [9, 14], energy: [8, 10], basicsMin: 12 },
    baseDeck: [
      { name: "Surskit", count: 4, type: "pokemon", basic: true, core: true, confidence: "confirmado", role: "Setup (busca 2 Surskit via Multiplicar)", coreReason: "Monta a mesa no T1 e limpa o deck de não-Bug Outers." },
      { name: "Masquerain", count: 4, type: "pokemon", core: true, confidence: "confirmado", role: "Atacante principal / Bug Out", coreReason: "Único atacante de impacto do kit (50x por Bug Outer)." },
      { name: "Spinarak", count: 4, type: "pokemon", basic: true, core: true, confidence: "confirmado", role: "Bug Outer (combustível do deck)", coreReason: "Possui ataque Bug Out impresso! Deve ficar no deck para somar dano." },
      { name: "Combee", count: 4, type: "pokemon", basic: true, core: true, confidence: "confirmado", role: "Bug Outer (combustível do deck)", coreReason: "Possui ataque Bug Out impresso! Deve ficar no deck para somar dano." },
      { name: "Busca do Brock (Brock's Scouting)", count: 4, type: "trainer", supporter: true, out: true, confidence: "confirmado", role: "Busca (garante Surskit no T1)" },
      { name: "Lilian (Lillie's Determination)", count: 3, type: "trainer", supporter: true, out: true, core: true, confidence: "confirmado", role: "Compra de suporte", coreReason: "Embaralha a mão e devolve insetos ao deck para alimentar o Bug Out." },
      { name: "Poké Pad", count: 4, type: "trainer", out: true, confidence: "confirmado", role: "Busca de Masquerain / Surskit" },
      { name: "Recuperação de Energia (Energy Retrieval)", count: 1, type: "trainer", core: true, confidence: "confirmado", role: "Reciclagem de energia moída", coreReason: "Essencial: Bug Out descarta energias básicas do fundo do deck." },
      { name: "Cinza Sagrada (Sacred Ash)", count: 1, type: "trainer", core: true, confidence: "confirmado", role: "Reciclagem de insetos", coreReason: "Devolve até 5 Pokémon ao deck para recarregar o Bug Out." },
      { name: "Floresta da Vitalidade (Forest of Vitality)", count: 2, type: "stadium", confidence: "confirmado", role: "Evolução no mesmo turno", coreReason: "Permite evoluir Pokémon de Grama no mesmo turno em que entram em jogo!" },
      { name: "Energia de Grama Básica", count: 7, type: "energy", confidence: "confirmado", role: "Energia básica" },
      { name: "Energia de Crescimento (Growing Energy)", count: 2, type: "energy", confidence: "confirmado", role: "Energia especial (+20 HP)", coreReason: "Dá +20 HP (130 HP) e sobrevive aos ataques de Tornadus e Landorus." }
    ],
    preSwaps: [],
    cutOrder: [
      { name: "Floresta da Vitalidade (Forest of Vitality)", max: 1, reason: "1 Estádio já é suficiente para contestar estádios adversários sem sobrecarregar treinadores." },
      { name: "Busca do Brock (Brock's Scouting)", max: 1, reason: "Reduzir de 4 para 3 Brocks é o primeiro corte ideal para abrir vaga a novos Insetos ou Zínia." },
      { name: "Poké Pad", max: 1, reason: "Com 4 Brocks e 4 Surskit de fábrica, 3 Poké Pads mantêm a busca excelente." },
      { name: "Floresta da Vitalidade (Forest of Vitality)", max: 1, reason: "Corte secundário se você abrir atacantes de impacto ou mais cópias de Masquerain." },
      { name: "Busca do Brock (Brock's Scouting)", max: 1, reason: "Corte tardio para acomodar atacantes de Grama." },
      { name: "Energia de Grama Básica", max: 1, reason: "Corte de energia apenas se o deck mantiver pelo menos 8 energias no total." }
    ],
    attackPlan: [
      "No campo, mantenha APENAS Surskit e Masquerain! NUNCA baixe Combee ou Spinarak no banco — se eles forem para a mesa, não estão mais no deck e seu Bug Out perde dano!",
      "Multiplicar no Turno 1: Com 1 incolor, Surskit busca 2 Surskit para o banco. Isso 'limpa' o baralho de cartas que não batem, concentrando os Bug Outers!",
      "Floresta da Vitalidade no Turno 2: Permite evoluir Surskit para Masquerain no mesmo turno em que baixou. Ligue 1 Grama e ataque!",
      "Padrão Pavoroso ([C] 30 dano): Use para travar o ativo rival (ele não pode atacar no próximo turno!). Excelente contra Magmortar (recuo 3) ou Kommo-o pronto.",
      "O Ciclo Autolimpante do Bug Out: Cada Bug Out embaralha os Bug Outers de volta e DESCARTA as outras cartas. A cada turno, a densidade de insetos sobe e o dano explode para 150-200!",
      "Gestão de Recursos: Bug Out descarta energias. Guarde Recuperação de Energia na mão para quando precisar de novas ligações."
    ],
    antiBrick: [
      "12 básicos: mulligan raríssimo. O risco deste deck é descartar todas as energias com Bug Out.",
      "Nunca jogue Treinadores supérfluos: cada carta não-Pokémon adicionada diminui a chance de revelar 3+ insetos.",
      "Abaixo de 10 cartas no baralho, use Cinza Sagrada para devolver Masquerains nocauteados e recarregar o motor."
    ],
    debates: [
      "Ordem de turno: Se abrir com Surskit + Energia, vá SEGUNDO para usar Multiplicar no T1 e puxar 2 Surskit pro banco. Se a mão já tiver a linha de evolução completa com Masquerain e Floresta, vá PRIMEIRO para atacar com Bug Out já no Turno 2!"
    ],
    storeEnergyConfig: {
      energies: [
        { name: "Energia de Grama Básica", count: 7, emoji: "🍃" },
        { name: "Energia de Crescimento", count: 2, emoji: "🌿" }
      ],
      totalEnergy: 9,
      weakness: "Fraqueza a Fogo x2 (Cuidado Crítico contra Mag-Vire!)",
      tip: "Pegue 7x Grama no balcão da loja. Guarde as 2 Energias de Crescimento para dar +20 HP ao Masquerain (130 HP sobrevive a Tornadus, Thundurus e Landorus)."
    },
    matchupTips: {
      masquerain: {
        enemyId: "masquerain",
        enemyName: "Masquerain (Mirror)",
        advantage: "50/50 Equilibrado",
        statusClass: "adv-even",
        target: "Surskit rival no ativo",
        plan: "Trave o ativo do adversário com Padrão Pavoroso (30 de dano + bloqueio de ataque) para forçá-lo a gastar recuo ou passar turno. Use Floresta da Vitalidade para evoluir no mesmo turno e surpreender o rival.",
        caution: "NUNCA baixe Combee e Spinarak no campo! Mantenha-os no deck para alimentar o dano do Bug Out.",
        execution: {
          howToTarget: "O rival precisa de Surskit no ativo para buscar mais cópias. Trave-o imediatamente com Padrão Pavoroso (30 de dano e bloqueio de ataque). Se o rival não puder recuar, ele perde o turno e fica exposto ao seu Bug Out no turno seguinte.",
          damageMath: "Masquerain tem 110 HP (Bug Out precisa de 3 insetos revelados = 150 de dano para 1HKO). Surskit tem 50 HP (2 insetos = 100 de dano matam).",
          turnByTurn: [
            "Turno 1: Surskit no ativo ataca por 1 incolor buscando 2 outros Surskit para o banco.",
            "Turno 2: Evolua para Masquerain. Use Padrão Pavoroso (30 de dano) para travar o ativo do oponente.",
            "Turno 3: Se o deck estiver com densidade de insetos, declare Bug Out e nocauteie o Masquerain rival."
          ],
          planB: "Se o Bug Out revelar poucos insetos e descartar energias essenciais: jogue Recuperação de Energia e Cinza Sagrada para devolver insetos e energia ao deck antes do próximo ataque."
        }
      },
      magmortar: {
        enemyId: "magmortar",
        enemyName: "Mag-Vire",
        advantage: "25/75 Muito Desfavorável",
        statusClass: "adv-unfavorable",
        target: "Magmortar ativo (travar com Padrão Pavoroso)",
        plan: "SEU ÚNICO PLANO DE VITÓRIA: Magmortar tem 140 HP, Fraqueza a Água (não importa aqui) e um custo de recuo de 3 energias, enquanto o kit Mag-Vire NÃO tem Balão de Ar de fábrica! Sua jogada mestre é usar Padrão Pavoroso ([C] 30 de dano): o Magmortar rival NÃO PODE ATACAR no turno seguinte e não consegue recuar sem queimar 3 energias manuais! No turno seguinte, finalize com Bug Out (150 de dano: 30 + 150 = 180 -> nocaute em 140 HP). Contra Electivire: ele é Raio (sem fraqueza a Fogo!). Com Energia de Crescimento (+20 HP), seu Masquerain tem 130 HP e exige 2 descartes de energia do Electivire.",
        caution: "Nunca deixe Magmortar bater desimpedido: 80 x 2 = 160 de dano mata qualquer peça de Grama.",
        execution: {
          howToTarget: "Como punir a falta de recuo rival: Se o adversário promover Magmortar, declare Padrão Pavoroso de Masquerain (30 de dano e IMPEDE O MAGMORTAR DE ATACAR). Sem Balão de Ar no kit, o rival é obrigado a passar o turno ou queimar 3 energias preciosas para recuar. No turno seguinte, execute Bug Out para 150 de dano e leve o nocaute!",
          damageMath: "Masquerain tem 110 HP e Fraqueza a Fogo x2 (Magmortar bate 80 x 2 = 160 -> 1HKO). Magmortar tem 140 HP e recuo 3 (Padrão Pavoroso 30 + Bug Out com 3 insetos 150 = 180 -> 1HKO em 2 turnos sem tomar dano!). Electivire tem 140 HP e Fraqueza a Luta (não bate na fraqueza do Masquerain).",
          turnByTurn: [
            "Turno 1: Surskit busca 2 Surskit via Multiplicar. Não baixe Combee ou Spinarak.",
            "Turno 2: Evolua Masquerain via Floresta da Vitalidade. Declare Padrão Pavoroso (30 de dano) no Magmortar ativo rival, bloqueando seu ataque.",
            "Turno 3: Com Magmortar travado, declare Bug Out com 3 insetos (150 de dano) e nocauteie o Magmortar rival!"
          ],
          planB: "Se o rival tiver Electivire ativo: Electivire não bate em fraqueza! Ligue Energia de Crescimento no Masquerain (130 HP) e ataque diretamente com Bug Out."
        }
      },
      enamorus: {
        enemyId: "enamorus",
        enemyName: "Solidariedade (Gênios)",
        advantage: "45/55 Parelho a Levemente Desfavorável (80/20 se abrir Cacturne!)",
        statusClass: "adv-even",
        target: "Tornadus ou Landorus",
        plan: "A MATEMÁTICA REAL A SEU FAVOR: Tornadus bate 70 por 0 energias. Masquerain tem 110 HP (ou 130 HP com Energia de Crescimento) — SOBREVIVE ao primeiro ataque do Tornadus! No contra-ataque, Bug Out com 3 insetos causa 150 de dano, NOCAUTEANDO Tornadus (110 HP), Thundurus (120 HP), Enamorus (120 HP) ou Landorus (130 HP) em 1 único golpe! Se você abriu Cacturne (005/076) + Cacnea nos boosters: evolua no mesmo turno com a Floresta da Vitalidade e use Punishing Needles por APENAS 1 GRAMA ([G]) — causa 210 de dano letal contra os 4 gênios em campo! Ariados é armadilha: Agulha Secreta custa 3 energias e Landorus mata Ariados por fraqueza a Luta x2.",
        caution: "Cuidado com Gládio rival jogado como última carta (Landorus bate 190). Não deixe Landorus com Gládio preparado.",
        execution: {
          howToTarget: "O rival vai manter Tornadus no ativo batendo 70 de graça. Suba Masquerain com Energia de Crescimento (130 HP). O golpe de 70 do Tornadus deixa você com 60 HP. No seu turno, declare Bug Out com 3 insetos: 150 de dano elimina o Tornadus rival em 1 hit! Se o rival promover Landorus, declare Bug Out novamente para outro nocaute de 150.",
          damageMath: "Tornadus tem 110 HP, Thundurus 120 HP, Enamorus 120 HP, Landorus 130 HP. Bug Out com 3 insetos revelados = 150 de dano (1HKO em QUALQUER gênio do rival!). Cacturne bate 10 + 50 x 4 = 210 de dano por 1 Grama (1HKO devastador).",
          turnByTurn: [
            "Turno 1: Baixe Surskit e ligue 1 Grama. Multiplicar puxa 2 Surskit pro banco.",
            "Turno 2: Evolua para Masquerain. Se tiver Energia de Crescimento, ligue para ter 130 HP. Declare Bug Out (150 de dano) e nocauteie o Tornadus rival.",
            "Turno 3: Mantenha a pressão de Bug Out. Se abriu Cacturne, baixe Cacnea e evolua no mesmo turno com Floresta da Vitalidade para bater 210 por 1 Grama."
          ],
          planB: "Se o rival tentar pressionar com Thundurus (90 de dano): trave Thundurus com Padrão Pavoroso (30 de dano + impede ataque) e finalize com Bug Out no turno seguinte."
        }
      },
      kommo: {
        enemyId: "kommo",
        enemyName: "Kommo-o (Dragões)",
        advantage: "60/40 Favorável",
        statusClass: "adv-favorable",
        target: "Jangmo-o (70 HP) e Druddigon (120 HP) antes de Kommo-o montar",
        plan: "Kommo-o leva pelo menos 3 turnos para montar um Estágio 2 com 3 energias. Pressione imediatamente: Jangmo-o (70 HP) morre para Bug Out com apenas 2 insetos (100 de dano); Druddigon (120 HP) morre para 3 insetos (150 de dano). Se Kommo-o (160 HP) subir carregado com 3 energias, trave-o com Padrão Pavoroso (30 de dano e IMPEDE O KOMMO-O DE USAR HAMMER IN DE 170!). Finalize com Bug Out no turno seguinte (30 + 150 = 180).",
        caution: "Não deixe Kommo-o desferir Hammer In de 170 livre: nocauteia Masquerain em 1 hit.",
        execution: {
          howToTarget: "Ataque rápido no T2 com Bug Out pegando Jangmo-o ou Druddigon ativo. Se o Kommo-o rival subir pronto, trave-o com Padrão Pavoroso de Masquerain para neutralizar o ataque de 170 e complete o nocaute no turno seguinte.",
          damageMath: "Jangmo-o tem 70 HP (2 insetos no Bug Out = 100 -> 1HKO). Druddigon tem 120 HP (3 insetos = 150 -> 1HKO). Kommo-o tem 160 HP (Padrão Pavoroso 30 + Bug Out 150 = 180 -> nocaute em 2 turnos sem sofrer dano).",
          turnByTurn: [
            "Turno 1: Surskit no ativo busca 2 Surskit com Multiplicar.",
            "Turno 2: Floresta da Vitalidade -> Masquerain. Bug Out nocauteia Jangmo-o ou Dratini ativo.",
            "Turno 3: Se Kommo-o subir pronto, declare Padrão Pavoroso (30 dano + bloqueia ataque). Finalize no T4 com Bug Out."
          ],
          planB: "Se Kommo-o subir com 3 energias e você não tiver Masquerain pronto: promova Druddigon ou Spinarak como sacrifício de 1 prêmio enquanto carrega Masquerain no banco com Energia de Crescimento (+20 HP)."
        }
      }
    }
  }
};

// =====================================================================
// Cartas notáveis dos boosters
// adds: cartas que entram por "1 pull" (linhas evolutivas e estádios duplos = 2 cartas)
// =====================================================================
// Catálogo Realista de Pulls Notáveis dos Boosters (Formato Selado)
// - Não força suposições fantasiosas de combos inacessíveis
// - Prioriza cópias do tema (regra sem limite de 4), suportes universais de compra/troca e staples reais
// - kitSynergies:
//     score >= 8: Recomendado forte pro deck
//     score 4-7: Compatível / neutro
//     score 0: Anti-sinergia severa (mantido no fichário)
// =====================================================================
const BOOSTER_CARDS = [
  // --- CATEGORIA 1: CÓPIAS EXTRAS DO PRÓPRIO TEMA (REGRA SEM LIMITE DE 4 CÓPIAS) ---
  {
    id: "copias_extras",
    name: "Básico Extra do Tema",
    tier: "S", type: "pokemon", category: "Cópias do Tema", badge: "Sem Limite",
    description: "Sem limite de 4 cópias no pré-lançamento. 1 cópia extra do Básico do seu kit (Electabuzz / Landorus / Jangmo-o / Surskit).",
    addsByKit: {
      magmortar: [{ name: "Electabuzz", type: "pokemon", basic: true, count: 1 }],
      enamorus: [{ name: "Landorus", type: "pokemon", basic: true, count: 1 }],
      kommo: [{ name: "Jangmo-o", type: "pokemon", basic: true, count: 1 }],
      masquerain: [{ name: "Surskit", type: "pokemon", basic: true, count: 1 }]
    },
    kitSynergies: {
      magmortar: { score: 10, note: "🔥 4º Electabuzz: o kit original tem apenas 3 e zero recuperação de Pokémon. Prioridade máxima!" },
      enamorus: { score: 10, note: "🔥 3º Landorus: blinda o baralho caso 1 ou 2 estejam nos prêmios." },
      kommo: { score: 10, note: "🔥 5º Jangmo-o: reduz o risco de mulligan e garante mais alvos para evoluir." },
      masquerain: { score: 10, note: "🔥 5º Surskit: mais aberturas consistentes no T1 e mais um Inseto no deck!" }
    }
  },
  {
    id: "atacante_extra",
    name: "Atacante Principal Extra",
    tier: "S", type: "pokemon", category: "Cópias do Tema", badge: "Sem Limite",
    description: "1 cópia adicional do atacante principal do seu kit (Electivire / Tornadus / Kommo-o / Masquerain).",
    addsByKit: {
      magmortar: [{ name: "Electivire", type: "pokemon", count: 1 }],
      enamorus: [{ name: "Tornadus", type: "pokemon", basic: true, count: 1 }],
      kommo: [{ name: "Kommo-o", type: "pokemon", count: 1 }],
      masquerain: [{ name: "Masquerain", type: "pokemon", count: 1 }]
    },
    kitSynergies: {
      magmortar: { score: 10, note: "🔥 3º Electivire: dá profundidade ao ataque principal sem medo de perder peças." },
      enamorus: { score: 8, note: "⭐ 5º Tornadus: mais chances de abrir atacando de graça por 70 de dano." },
      kommo: { score: 9, note: "⭐ 4º Kommo-o: consolida o Estágio 2 mais letal do torneio." },
      masquerain: { score: 10, note: "🔥 5º Masquerain: aumenta tanto o número de atacantes quanto o dano do Bug Out (+50)." }
    }
  },
  {
    id: "bug_outer_extra",
    name: "Bug Outers Extras (Spinarak / Combee)",
    tier: "S", type: "pokemon", category: "Cópias do Tema", badge: "+50 Dano Bug Out",
    description: "Mais cópias dos Insetos com ataque Bug Out abertos nos boosters. Alimentam diretamente o teto de dano do Masquerain.",
    adds: [{ name: "Combee", type: "pokemon", basic: true, count: 1 }],
    kitSynergies: {
      magmortar: { score: 0, note: "🚫 Sem função no Mag-Vire." },
      enamorus: { score: 0, note: "🚫 Sem função nos Gênios." },
      kommo: { score: 0, note: "🚫 Sem função em Dragões." },
      masquerain: { score: 10, note: "🔥 OURO PURO: Cada Bug Outer extra aumenta a densidade de dano do Bug Out (+50 por hit)!" }
    }
  },

  // --- CATEGORIA 2: SUPORTES UNIVERSAIS E TREINADORES DE IMPACTO ---
  {
    id: "zinia",
    name: "Confiança da Zínia (Zinnia's Trust)",
    tier: "S", type: "trainer", category: "Apoiador de Troca", badge: "MVP Suporte",
    description: "Troca o ativo pelo banco e move energia. O formato não possui Troca nem Corda de Fuga comuns.",
    adds: [{ name: "Confiança da Zínia (Zinnia's Trust)", type: "trainer", supporter: true, count: 1 }],
    kitSynergies: {
      magmortar: { score: 10, note: "🔥 Destrava o recuo pesado de Magmortar/Electivire e reseta condições especiais." },
      enamorus: { score: 9, note: "⭐ Permite alternar os terians no ativo conforme a fraqueza do oponente." },
      kommo: { score: 10, note: "🔥 Tira o Druddigon de 120 HP da frente e promove Kommo-o carregado." },
      masquerain: { score: 8, note: "⭐ Tira Surskit ou Combee travados no ativo e preserva energias." }
    }
  },
  {
    id: "repelente",
    name: "Repelente (Repel)",
    tier: "S", type: "trainer", category: "Item de Controle", badge: "Troca Forçada",
    description: "Força o adversário a recuar o ativo pro banco e subir um substituto. Excelente para furar muros de 120 HP ou puxar alvos frágeis.",
    adds: [{ name: "Repelente (Repel)", type: "trainer", count: 1 }],
    kitSynergies: {
      magmortar: { score: 9, note: "⭐ Remove tanques da frente e expõe Jangmo-o ou terians para nocaute imediato com Electivire." },
      enamorus: { score: 8, note: "⭐ O kit base já vem com 1 cópia; a 2ª cópia dá domínio total do ritmo da partida." },
      kommo: { score: 10, note: "🔥 Empurra o atacante carregado rival de volta pro banco e compra tempo para montar Kommo-o." },
      masquerain: { score: 9, note: "⭐ Força a subida de básicos leves para nocaute fácil com Bug Out." }
    }
  },
  {
    id: "doce_raro",
    name: "Doce Raro (Rare Candy)",
    tier: "S", type: "trainer", category: "Aceleração Estágio 2", badge: "Evolução T2",
    description: "Evolui um Básico diretamente para Estágio 2 no Turno 2, pulando o Estágio 1.",
    adds: [{ name: "Doce Raro (Rare Candy)", type: "trainer", count: 1 }],
    kitSynergies: {
      magmortar: { score: 0, note: "🚫 Magmortar e Electivire são Estágio 1 (não usam Doce Raro). Fichário." },
      enamorus: { score: 0, note: "🚫 Todos os 4 gênios são Básicos (sem uso). Fichário." },
      kommo: { score: 10, note: "🔥 ESSENCIAL: 2º Doce Raro no deck garante Kommo-o batendo 170 já no Turno 2!" },
      masquerain: { score: 0, note: "🚫 Masquerain e Ariados são Estágio 1 (sem uso). Fichário." }
    }
  },
  {
    id: "recuperacao_energia_extra",
    name: "Recuperação de Energia Extra",
    tier: "A", type: "trainer", category: "Reciclagem", badge: "Recupera 2",
    description: "Devolve até 2 energias básicas do descarte para a mão.",
    adds: [{ name: "Recuperação de Energia (Energy Retrieval)", type: "trainer", count: 1 }],
    kitSynergies: {
      magmortar: { score: 8, note: "⭐ 4ª Recuperação garante combustível infinito de descarte pro Electivire." },
      enamorus: { score: 5, note: "Tornadus ataca de graça; utilidade moderada." },
      kommo: { score: 7, note: "Ajuda se energias foram descartadas cedo." },
      masquerain: { score: 9, note: "🔥 2ª cópia no Masquerain é excelente: recupera energias descartadas pelo Bug Out." }
    }
  },
  {
    id: "delibird",
    name: "Delibird",
    tier: "A", type: "pokemon", category: "Básico Universal", badge: "Busca de Energia",
    description: "No ativo, 1x por turno: olha o topo 6, pega 1 energia básica, o resto vai para o fundo.",
    adds: [{ name: "Delibird", type: "pokemon", basic: true, count: 1 }],
    kitSynergies: {
      magmortar: { score: 9, note: "⭐ Garante Fogo e Raio na mão todo turno para ativar o Buddy Boost." },
      enamorus: { score: 7, note: "Acha a Luta/Raio certa, mas disputa espaço com os 4 gênios no banco." },
      kommo: { score: 9, note: "⭐ Básico extra de 90 HP que alimenta a mão de energias para a linha do dragão." },
      masquerain: { score: 5, note: "⚠️ Neutro: coloca cartas no fundo do deck onde o Bug Out olha (pode diluir insetos)." }
    }
  },

  {
    id: "pincurchin",
    name: "Pincurchin",
    tier: "A", type: "pokemon", category: "Atacante Neutro / Controle", badge: "2 Incolores (Energy Crush)",
    description: "Básico de 80 HP. Energy Crush: [C][C] (2 Incolores) — causa 20 de dano para cada energia ligada a TODOS os Pokémon do seu oponente! Destrói decks que acumulam muita energia (Mag-Vire e Kommo-o) usando qualquer energia.",
    adds: [{ name: "Pincurchin", type: "pokemon", basic: true, count: 1 }],
    kitSynergies: {
      magmortar: { score: 6, note: "Pode usar qualquer energia, mas Electivire já bate muito." },
      enamorus: { score: 8, note: "⭐ Com Solidariedade ativa, o custo [C][C] é ZERADO! Ataca de graça punindo energias do oponente." },
      kommo: { score: 7, note: "⭐ Básico neutro que bate por 2 incolores sem depender das cores certas." },
      masquerain: { score: 7, note: "⭐ Excelente punidor por [C][C] (Grama + Crescimento) contra Mag-Vire abarrotado de energia." }
    }
  },
  {
    id: "cacturne",
    name: "Cacturne + Cacnea",
    tier: "S", type: "pokemon", category: "Punidor de Habilidades", badge: "1 Grama (Anti-Gênios)",
    description: "Punishing Needles: APENAS 1 ENERGIA DE GRAMA ([G])! Causa 10 + 50 de dano para CADA Pokémon com habilidade em jogo do rival (com os 4 Gênios na mesa, causa 210 de dano por 1 energia!). Com a Floresta da Vitalidade do kit Masquerain, você pode baixar Cacnea e evoluir para Cacturne no MESMO TURNO! Conta 2 cartas.",
    adds: [
      { name: "Cacnea", type: "pokemon", basic: true, count: 1 },
      { name: "Cacturne", type: "pokemon", count: 1 }
    ],
    kitSynergies: {
      magmortar: { score: 0, note: "🚫 Fora de cor." },
      enamorus: { score: 0, note: "🚫 Pune o seu próprio campo se jogado nos gênios." },
      kommo: { score: 1, note: "Fora de cor." },
      masquerain: { score: 10, note: "🔥 O TERROR DOS GÊNIOS: Bate por apenas 1 Grama e causa 210 de dano em 1HKO nos 4 Gênios! Evolui no mesmo turno via Floresta da Vitalidade!" }
    }
  },
  {
    id: "ariados",
    name: "Ariados (Evolui sobre Spinarak)",
    tier: "C", type: "pokemon", category: "Armadilha / Fichário", badge: "Inviável [C][C][C]",
    description: "Evolui sobre Spinarak. CUIDADO: Agulha Secreta (Covert Needle) é um ATAQUE que custa 3 Incolores ([C][C][C]), NÃO uma habilidade passiva! O veneno Tormenting Poison exige Energia Noturna ([D]). Sem aceleração de energia e com Fraqueza a Luta x2 (Landorus mata em 1 hit com 220 de dano), evoluir Spinarak tira um Bug Outer do deck e quebra o motor do Masquerain.",
    addsByKit: {
      masquerain: [{ name: "Ariados", type: "pokemon", count: 1 }],
      magmortar: [{ name: "Ariados", type: "pokemon", count: 1 }],
      enamorus: [{ name: "Ariados", type: "pokemon", count: 1 }],
      kommo: [{ name: "Ariados", type: "pokemon", count: 1 }]
    },
    kitSynergies: {
      magmortar: { score: 0, note: "🚫 Fora de cor e sem Spinarak. Fichário." },
      enamorus: { score: 0, note: "🚫 Fora de tema. Fichário." },
      kommo: { score: 0, note: "🚫 Fora de tema. Fichário." },
      masquerain: { score: 2, note: "🚫 ARMADILHA: Agulha Secreta custa [C][C][C] (3 turnos para ligar energia!). Evoluir Spinarak reduz seus Bug Outers no deck. Mantenha no fichário." }
    }
  },
  {
    id: "vespiquen",
    name: "Vespiquen (Evolui sobre Combee)",
    tier: "C", type: "pokemon", category: "Armadilha / Fichário", badge: "Inviável [C][C][C]",
    description: "Pierce: [G] (40 de dano). Clean Hit: [C][C][C] (3 Incolores!) — 80 + 80 se o rival for Evolução. ATENÇÃO: Vespiquen NÃO tem o ataque Bug Out! Custa 3 energias para bater e evoluir Combee remove um Bug Outer do seu deck. Se revelada pelo Bug Out, causa 0 de dano e é descartada.",
    adds: [{ name: "Vespiquen", type: "pokemon", count: 1 }],
    kitSynergies: {
      magmortar: { score: 0, note: "🚫 Fora de cor. Fichário." },
      enamorus: { score: 0, note: "🚫 Sem base de Combee. Fichário." },
      kommo: { score: 0, note: "🚫 Sem base de Combee. Fichário." },
      masquerain: { score: 1, note: "🚫 FICHÁRIO TOTAL: Vespiquen não tem Bug Out, custa 3 energias ([C][C][C]) e evoluir Combee reduz sua densidade de insetos. Não use!" }
    }
  },
  {
    id: "heracross",
    name: "Heracross",
    tier: "B", type: "pokemon", category: "Básico de Grama", badge: "1 Grama (Compra 2)",
    description: "Spike Draw: [G] (1 Grama) causa 20 e compra 2 cartas. High Horsepower: [G][G][C] (3 energias) causa 130 de dano e 30 em si mesmo.",
    adds: [{ name: "Heracross", type: "pokemon", basic: true, count: 1 }],
    kitSynergies: {
      magmortar: { score: 0, note: "🚫 Fora de cor." },
      enamorus: { score: 2, note: "Ocupa banco." },
      kommo: { score: 2, note: "Fora de cor." },
      masquerain: { score: 6, note: "Útil pelo primeiro ataque ([G] compra 2 cartas no T1). O segundo ataque ([G][G][C]) é muito pesado." }
    }
  },
  {
    id: "arcanine",
    name: "Arcanine + Growlithe",
    tier: "B", type: "pokemon", category: "Atacante Fogo Pesado", badge: "3 Energias ([F][C][C])",
    description: "Vigorous Fangs: [F][C][C] (3 energias: 1 Fogo + 2 Incolores) causa 180 de dano se o rival tiver ≤4 prêmios. Heat Tackle: [F][F][C][C] (4 energias). Exige Magmortar para acelerar, caso contrário é lento.",
    adds: [
      { name: "Growlithe", type: "pokemon", basic: true, count: 1 },
      { name: "Arcanine", type: "pokemon", count: 1 }
    ],
    kitSynergies: {
      magmortar: { score: 8, note: "⭐ Com Magmortar (Buddy Boost liga 2 energias), você consegue atacar no Turno 2 causando 180 de dano sem descartar nada!" },
      enamorus: { score: 0, note: "🚫 Requer energias de Fogo. Fichário." },
      kommo: { score: 0, note: "🚫 Requer Fogo e 3 energias sem aceleração. Fichário." },
      masquerain: { score: 0, note: "🚫 Fora de cor. Fichário." }
    }
  },
  {
    id: "aarune",
    name: "Aarune (Buscador Tático)",
    tier: "A", type: "trainer", category: "Apoiador de Busca", badge: "Busca 3 Cartas",
    description: "Busca no deck qualquer combinação de até 3 cartas entre Apoiadores e Estádios (ex: busca Lilian + Zínia + Estádio de uma vez).",
    adds: [{ name: "Aarune", type: "trainer", supporter: true, count: 1 }],
    kitSynergies: {
      magmortar: { score: 8, note: "⭐ Busca Lilian e Hilda simultaneamente, garantindo a mão do próximo turno." },
      enamorus: { score: 10, note: "🔥 Busca Gládio + Lilian + Tubo de Lava Lendário em um único turno!" },
      kommo: { score: 8, note: "⭐ Acha Lilian e Brock para acelerar a busca da linha Kommo-o." },
      masquerain: { score: 7, note: "⭐ Garante Lilian e Brock na mão sem descartar nada." }
    }
  },
  {
    id: "emcees_hype",
    name: "Empolgação do Mestre (Emcee's Hype)",
    tier: "A", type: "trainer", category: "Apoiador de Compra", badge: "Compra 2 a 4",
    description: "Compra 2 cartas. Se o oponente tiver 3 ou menos prêmios restantes (o que acontece em quase todo o jogo de 4 prêmios), compra 4 cartas!",
    adds: [{ name: "Empolgação do Mestre (Emcee's Hype)", type: "trainer", supporter: true, count: 1 }],
    kitSynergies: {
      magmortar: { score: 7, note: "Boa compra direta sem embaralhar a mão." },
      enamorus: { score: 6, note: "Tornadus já compra até 6 todo turno, mas serve de suporte." },
      kommo: { score: 8, note: "⭐ Excelente compra no meio de jogo quando o rival pega o primeiro prêmio." },
      masquerain: { score: 7, note: "⭐ Compra limpa de cartas sem mexer no fundo do deck." }
    }
  },
  {
    id: "onigiri",
    name: "Onigiri Delicioso (Delicious Onigiri)",
    tier: "B", type: "trainer", category: "Cura", badge: "Cura 30-90 HP",
    description: "Cura 30 de dano do seu Pokémon Ativo. Cura +30 para cada outro Onigiri Delicioso no descarte (cura até 60-90 HP).",
    adds: [{ name: "Onigiri Delicioso (Delicious Onigiri)", type: "trainer", count: 1 }],
    kitSynergies: {
      magmortar: { score: 5, note: "Ajuda Magmortar/Electivire (140 HP) a sobreviverem a golpes de 70." },
      enamorus: { score: 6, note: "Mantém os terians de 110 HP fora do alcance de 1HKO do rival." },
      kommo: { score: 8, note: "⭐ Cura o Druddigon de 120 HP ou Kommo-o de 160 HP, estragando a matemática do oponente." },
      masquerain: { score: 5, note: "Cura pontual, mas dilui levemente o Bug Out se usado em excesso." }
    }
  },
  {
    id: "custom_vest",
    name: "Colete Customizado (Custom Vest)",
    tier: "B", type: "trainer", category: "Defesa contra Megas", badge: "-60 Dano de Mega",
    description: "Ferramenta: Se ligada a um Pokémon que não seja Mega, ele recebe 60 a MENOS de dano de ataques de Mega Pokémon ex rivais.",
    adds: [{ name: "Colete Customizado (Custom Vest)", type: "trainer", count: 1 }],
    kitSynergies: {
      magmortar: { score: 6, note: "Defesa excelente se o adversário subir Mega Rayquaza." },
      enamorus: { score: 6, note: "Protege seus terians básicos de serem varridos por Megas." },
      kommo: { score: 6, note: "Torna Kommo-o quase indestrutível contra Mega Pokémon." },
      masquerain: { score: 5, note: "Útil contra Megas, mas sem impacto contra baralhos de 1 prêmio." }
    }
  },
  {
    id: "tate_liza",
    name: "Treino de Tate & Liza (Tate & Liza's Training)",
    tier: "B", type: "trainer", category: "Apoiador Reutilizável", badge: "Retorna à Mão",
    description: "Compra 2 cartas. Se um Estádio Lendário estiver em jogo (Tubo de Lava, Pico ou Fossa), esta carta volta para sua mão em vez de ir pro descarte!",
    adds: [{ name: "Treino de Tate & Liza (Tate & Liza's Training)", type: "trainer", supporter: true, count: 1 }],
    kitSynergies: {
      magmortar: { score: 4, note: "Só brilha se houver estádio lendário na mesa." },
      enamorus: { score: 8, note: "⭐ Se você joga Tubo de Lava ou Pico Lendário, vira uma fonte de compra infinita todo turno!" },
      kommo: { score: 4, note: "Pouco sinérgico sem estádios no kit." },
      masquerain: { score: 4, note: "Pouco sinérgico." }
    }
  },
  {
    id: "mega_rayquaza",
    name: "Mega Rayquaza ex",
    tier: "B", type: "pokemon", category: "Mega Pokémon", badge: "3 Prêmios",
    description: "Habilidade só ativa ao ser jogado da mão para o BANCO. Cede 3 cartas de prêmio ao morrer; fraco a Raio.",
    adds: [{ name: "Mega Rayquaza ex", type: "pokemon", basic: true, count: 1 }],
    maxCopies: 1,
    kitSynergies: {
      magmortar: { score: 5, note: "⚠️ Usar no máximo 1 cópia! Cede 3 prêmios e morre em 1 hit para Electivire rival." },
      enamorus: { score: 1, note: "Lento e de alto risco." },
      kommo: { score: 1, note: "Conflita com a linha de Kommo-o." },
      masquerain: { score: 0, note: "🚫 Não tem como energizar." }
    }
  }
];
