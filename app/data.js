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
      { name: "Magmar", count: 4, type: "pokemon", basic: true, confidence: "estimado", role: "Básico do motor" },
      { name: "Magmortar", count: 3, type: "pokemon", core: true, confidence: "estimado", role: "Motor (Buddy Boost)", coreReason: "Sem Magmortar não há aceleração. Ideal: 2 em campo." },
      { name: "Electabuzz", count: 3, type: "pokemon", basic: true, core: true, confidence: "confirmado", role: "Básico do atacante", coreReason: "Único caminho para Electivire; o kit não tem recuperação de Pokémon." },
      { name: "Electivire", count: 2, type: "pokemon", core: true, confidence: "confirmado", role: "Atacante principal", coreReason: "Voltage Hammer é a condição de vitória." },
      { name: "Lilian (Lillie's Determination)", count: 4, type: "trainer", supporter: true, out: true, core: true, confidence: "estimado", role: "Compra (embaralha e compra 6)", coreReason: "Principal motor de compra em 40 cartas." },
      { name: "Hilda", count: 3, type: "trainer", supporter: true, out: true, confidence: "estimado", role: "Busca" },
      { name: "Recuperação de Energia (Energy Retrieval)", count: 3, type: "trainer", confidence: "confirmado", role: "Reciclagem de energia" },
      { name: "Lanterna de Aventura (Adventure Lantern)", count: 2, type: "trainer", out: true, confidence: "estimado", role: "Busca 1 Fogo + 1 Raio" },
      { name: "Poké Pad", count: 3, type: "trainer", out: true, confidence: "estimado", role: "Busca de Pokémon" },
      { name: "Balão de Ar (Air Balloon)", count: 1, type: "trainer", confidence: "estimado", role: "Recuo" },
      { name: "Energia de Fogo Básica", count: 6, type: "energy", confidence: "confirmado", role: "Energia" },
      { name: "Energia de Raio Básica", count: 6, type: "energy", confidence: "confirmado", role: "Energia" }
    ],
    preSwaps: [],
    cutOrder: [
      { name: "Hilda", max: 1, reason: "Primeiro corte para abrir espaço ao 4º Electabuzz / 3º Electivire (TrustYourPilot)." },
      { name: "Lanterna de Aventura (Adventure Lantern)", max: 1, reason: "Segundo corte do TrustYourPilot: atacante extra vale mais." },
      { name: "Magmar", max: 1, reason: "Fantasma Cinza: tire 1 Magmar para encaixar Mega Rayquaza/Arcanine. Mantenha ≥3." },
      { name: "Recuperação de Energia (Energy Retrieval)", max: 1, reason: "Só com Arcanine/Rotom (atacam sem descartar). Nunca fique com menos de 2." },
      { name: "Poké Pad", max: 1, reason: "Corte tardio: perde busca de evolução." },
      { name: "Hilda", max: 1, reason: "Corte tardio adicional." }
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
        caution: "Se o adversário usar Padrão Pavoroso para impedir seu Pokémon ativo de atacar, recue com Balão de Ar ou use Confiança da Zínia para promover um novo atacante e bater no mesmo turno.",
        execution: {
          howToTarget: "O rival precisa de Surskit ou Masquerain no ativo para tentar atacar ou fazer setup. Ambos possuem Fraqueza a Fogo x2. Promova Magmortar para o ativo: qualquer golpe de Fogo nocauteia em 1 hit.",
          damageMath: "Surskit tem 50-60 HP (ataque de Magmar de 30 vira 60 com fraqueza -> 1HKO). Masquerain tem 110 HP (Magmortar bate 80 x 2 = 160 com fraqueza -> 1HKO sem descartar nenhuma energia!).",
          turnByTurn: [
            "Turno 1: Baixe Magmar no ativo e Electabuzz no banco. Ligue 1 Fogo manual.",
            "Turno 2: Evolua para Magmortar. Ligue 2 energias via Buddy Boost. Bata com Magmortar (160 de dano com fraqueza) e leve o prêmio.",
            "Turno 3: Repita o ataque de Magmortar. Guarde os descartes de Electivire apenas se o rival subir um Pokémon sem fraqueza a Fogo."
          ],
          planB: "Se o rival usar Padrão Pavoroso e bloquear o ataque do seu Magmortar ativo: NÃO passe o turno! Ligue Balão de Ar no Magmortar (recuo grátis) e recue para promover Electivire, ou jogue Confiança da Zínia para trocar o ativo e atacar imediatamente."
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
      { name: "Thundurus", count: 3, type: "pokemon", basic: true, core: true, confidence: "confirmado", role: "Atacante (fura efeitos)", coreReason: "Peça da Solidariedade; único que atravessa a Agulha Secreta do Ariados." },
      { name: "Landorus", count: 2, type: "pokemon", basic: true, core: true, confidence: "confirmado", role: "Atacante pesado", coreReason: "Peça da Solidariedade; 90/110 por 1 Luta, 190 com Gládio." },
      { name: "Enamorus", count: 2, type: "pokemon", basic: true, core: true, confidence: "confirmado", role: "Peça da habilidade", coreReason: "Não ataque com ele, mas sem Enamorus em campo a Solidariedade desliga." },
      { name: "Lilian (Lillie's Determination)", count: 3, type: "trainer", supporter: true, out: true, core: true, confidence: "confirmado", role: "Compra", coreReason: "Motor de compra." },
      { name: "Busca do Brock (Brock's Scouting)", count: 3, type: "trainer", supporter: true, out: true, core: true, confidence: "confirmado", role: "Busca 2 básicos", coreReason: "Coloca os gênios em campo — sem isso a Solidariedade não liga." },
      { name: "Batalha Decisiva do Gládio", count: 1, type: "trainer", supporter: true, core: true, confidence: "confirmado", role: "Finalizador (+80 se última carta)", coreReason: "Único jeito de nocautear Kommo-o (160 HP) em 1 golpe." },
      { name: "Repelente (Repel)", count: 1, type: "trainer", core: true, confidence: "confirmado", role: "Força troca do ativo rival", coreReason: "Resposta ao muro de 120 HP do Kommo-o." },
      { name: "Busca de Energia (Energy Search)", count: 2, type: "trainer", out: true, confidence: "confirmado", role: "Busca energia" },
      { name: "Poké Pad", count: 2, type: "trainer", out: true, confidence: "estimado", role: "Busca de Pokémon" },
      { name: "Ultra Ball", count: 1, type: "trainer", out: true, confidence: "estimado", role: "Busca de Pokémon" },
      { name: "Balão de Ar (Air Balloon)", count: 1, type: "trainer", confidence: "confirmado", role: "Recuo" },
      { name: "Energia de Raio Básica", count: 5, type: "energy", confidence: "estimado", role: "Energia" },
      { name: "Energia de Luta Básica", count: 5, type: "energy", confidence: "estimado", role: "Energia" },
      { name: "Energia Psíquica Básica", count: 5, type: "energy", confidence: "estimado", role: "Energia (só Enamorus)" }
    ],
    preSwaps: [
      {
        remove: "Energia Psíquica Básica", count: 99,
        add: [
          { name: "Energia de Luta Básica", count: 3, type: "energy" },
          { name: "Energia de Raio Básica", count: 2, type: "energy" }
        ],
        reason: "Enamorus causa só 100 por 2 Psíquicas — não ataque com ele. Troque por Luta/Raio (TrustYourPilot e Fantasma Cinza concordam).",
        source: "TrustYourPilot + Fantasma Cinza"
      }
    ],
    cutOrder: [
      { name: "Energia de Luta Básica", max: 3, reason: "Tornadus ataca de graça: o deck precisa de pouca energia. TrustYourPilot terminou com só 4 Luta + 4 Raio." },
      { name: "Energia de Raio Básica", max: 3, reason: "Idem: libere espaço para consistência (busca, Zínia, 3º Landorus)." },
      { name: "Balão de Ar (Air Balloon)", max: 1, reason: "Dispensável se abrir Altaria (recuo grátis) ou Zínia." },
      { name: "Energia de Luta Básica", max: 1, reason: "Corte final (não desça de 8 energias no total)." },
      { name: "Energia de Raio Básica", max: 1, reason: "Corte final." }
    ],
    attackPlan: [
      "T1: Brock / Poké Pad / Ultra Ball para colocar os 4 tipos de gênio em campo. Abra com Tornadus no ativo.",
      "Com os 4 em campo, Tornadus ataca por 0 energia e recompõe a mão para 6: isso é ataque garantido todo turno.",
      "Mantenha uma 2ª cópia de pelo menos um gênio no banco: se nocautearem o único Landorus/Enamorus, a Solidariedade cai.",
      "Ligue 1 Luta no Landorus e 1 Raio no Thundurus no banco ANTES de precisar deles.",
      "Gládio: vá esvaziando a mão para que ele seja a última carta no turno do nocaute em Kommo-o.",
      "Contra Ariados (Agulha Secreta): ataque só com Thundurus."
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
        { name: "Energia de Luta Básica", count: 5, emoji: "🥊" },
        { name: "Energia de Raio Básica", count: 4, emoji: "⚡" }
      ],
      totalEnergy: 9,
      weakness: "Fraqueza a Elétrico (Tornadus), Psíquico (Landorus), Aço (Enamorus)",
      tip: "Pegue 5x Luta e 4x Raio no balcão. NUNCA use energia Psíquica no baralho — corte todas as 5 da caixa."
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
        target: "Surskit, Spinarak e Combee (todos têm ≤ 70 HP)",
        plan: "Tornadus limpa a mesa do rival nocauteando todos os básicos por 0 energias. Se o adversário subir Ariados com Agulha Secreta (imune a ataques de básicos), NUNCA ataque com Tornadus ou Landorus: ataque com THUNDURUS, cujo ataque Gume Trovejante PERFURA todas as proteções e imunidades!",
        caution: "Cuidado com o Cacturne rival, que causa dano baseado nas habilidades dos seus 4 gênios na mesa.",
        execution: {
          howToTarget: "O rival depende de manter básicos leves em campo para evoluir. Tornadus nocauteia qualquer um deles ativo. Se o rival recuar para Ariados com a habilidade de imunidade, suba Thundurus imediatamente.",
          damageMath: "Surskit, Spinarak e Combee têm 50-70 HP (Tornadus bate 70 -> 1HKO em qualquer um por 0 energia). Ariados tem 90 HP (Thundurus perfura imunidade e bate com fraqueza ou 2 hits rápidos). Masquerain tem 110 HP (Landorus bate 110 -> 1HKO).",
          turnByTurn: [
            "Turno 1: Baixe os 4 gênios. Ligue 1 Raio no Thundurus no banco prevenindo o Ariados.",
            "Turno 2: Bata 70 com Tornadus no básico ativo rival. Compre 6 cartas.",
            "Turno 3: Se o rival subir Masquerain, suba Landorus e bata 110 (1HKO). Se subir Ariados imune, ataque com Thundurus."
          ],
          planB: "Se o rival jogar Cacturne e tentar punir suas habilidades, use Repelente para mandá-lo de volta pro banco ou nocauteie com Landorus em 1 hit."
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
    ratio: { pokemon: [14, 18], trainer: [11, 14], energy: [10, 13], basicsMin: 6 },
    baseDeck: [
      { name: "Jangmo-o", count: 4, type: "pokemon", basic: true, core: true, confidence: "confirmado", role: "Básico do atacante", coreReason: "Linha 4-4-3 é a espinha do deck." },
      { name: "Hakamo-o", count: 4, type: "pokemon", core: true, confidence: "confirmado", role: "Estágio 1 / atacante reserva (Double Heads 140)", coreReason: "Ponte para Kommo-o com só 1 Doce Raro." },
      { name: "Kommo-o", count: 3, type: "pokemon", core: true, confidence: "confirmado", role: "Atacante principal + aceleração", coreReason: "Condição de vitória." },
      { name: "Dratini", count: 2, type: "pokemon", basic: true, confidence: "estimado", role: "Básico de suporte" },
      { name: "Dragonair", count: 1, type: "pokemon", confidence: "estimado", role: "Muro de 120 HP / move energia (Água+Fogo)" },
      { name: "Lilian (Lillie's Determination)", count: 4, type: "trainer", supporter: true, out: true, core: true, confidence: "confirmado", role: "Compra", coreReason: "Motor de compra." },
      { name: "Poké Pad", count: 4, type: "trainer", out: true, core: true, confidence: "confirmado", role: "Busca de evolução", coreReason: "Acha Hakamo-o/Kommo-o." },
      { name: "Busca do Brock (Brock's Scouting)", count: 2, type: "trainer", supporter: true, out: true, core: true, confidence: "estimado", role: "Busca 2 básicos", coreReason: "Apoiador ideal do T1 indo segundo (garante Jangmo-o)." },
      { name: "Doce Raro (Rare Candy)", count: 1, type: "trainer", core: true, confidence: "confirmado", role: "Pula o Estágio 1", coreReason: "Único Kommo-o no T2." },
      { name: "Balão de Ar (Air Balloon)", count: 2, type: "trainer", confidence: "confirmado", role: "Recuo" },
      { name: "Energia de Luta Básica", count: 5, type: "energy", confidence: "confirmado", role: "Energia (9 L+R no kit)" },
      { name: "Energia de Raio Básica", count: 4, type: "energy", confidence: "confirmado", role: "Energia (9 L+R no kit)" },
      { name: "Energia de Água Básica", count: 2, type: "energy", confidence: "estimado", role: "Só para Dragonair" },
      { name: "Energia de Fogo Básica", count: 2, type: "energy", confidence: "estimado", role: "Só para Dragonair" }
    ],
    preSwaps: [
      {
        remove: "Energia de Água Básica", count: 99,
        add: [{ name: "Energia de Luta Básica", count: 2, type: "energy" }],
        reason: "Kommo-o usa Luta/Raio e há só 9 no kit. Beast Scales só acelera o que estiver no topo — energia off-type é carta morta.",
        source: "TrustYourPilot"
      },
      {
        remove: "Energia de Fogo Básica", count: 99,
        add: [{ name: "Energia de Raio Básica", count: 2, type: "energy" }],
        reason: "Idem. Resultado: 7 Luta + 6 Raio.",
        source: "TrustYourPilot"
      }
    ],
    cutOrder: [
      { name: "Dragonair", max: 1, reason: "Sem Água/Fogo, Dragonair vira só um muro de 120 HP. Corte antes do Dratini (que é básico)." },
      { name: "Balão de Ar (Air Balloon)", max: 1, reason: "Mantenha pelo menos 1 para tirar Morpeko/Electabuzz do ativo." },
      { name: "Hakamo-o", max: 1, reason: "4 Hakamo-o para 3 Kommo-o é excesso quando entram básicos de busca." },
      { name: "Dratini", max: 2, reason: "Só sai se o motor confirmar que os básicos continuam ≥ mínimo." },
      { name: "Energia de Raio Básica", max: 1, reason: "Corte final (não desça de 10 energias)." }
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
        { name: "Energia de Luta Básica", count: 7, emoji: "🥊" },
        { name: "Energia de Raio Básica", count: 6, emoji: "⚡" }
      ],
      totalEnergy: 13,
      weakness: "Sem fraqueza comum em Dragões em Reinado Delta",
      tip: "Pegue 7x Luta e 6x Raio no balcão da loja. Corte totalmente Fogo e Água para o Beast Scales não acelerar energia inútil."
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
    overview: "Bug Out (1 Planta): revela as 7 cartas do fundo, 50 de dano por Pokémon com Bug Out, descarta o resto. 12 Bug Outers no kit (Masquerain, Combee, Spinarak). Surskit busca 2 Surskit. Fraco a Fogo.",
    idealTurnOrder: "Em debate: TrustYourPilot prefere ir primeiro (Bug Out no T2); Wallamoose prefere ir segundo (Surskit ataca no T1)",
    goldenPullsSummary: "Com 60 cartas abertas (10 boosters de 6 cartas), explore ao máximo a regra sem limite de 4 cópias para entupir o deck de Bug Outers (Surskit, Masquerain, Combee, Spinarak)! Caça de ouro: Ariados (evolui sobre os Spinarak para imunidade total contra básicos dos gênios), Repelente, Cacturne, Delibird e Zínia.",
    trapsSummary: "Mega Golisopod ex contra Mag-Vire = derrota instantânea (3 prêmios + fraco a Fogo). Cada carta que não é Bug Outer é carta descartada pelo seu próprio ataque.",
    primaryEnergy: "Energia de Grama Básica",
    ratio: { pokemon: [16, 22], trainer: [11, 15], energy: [8, 10], basicsMin: 10 },
    baseDeck: [
      { name: "Surskit", count: 4, type: "pokemon", basic: true, core: true, confidence: "estimado", role: "Setup (busca 2 Surskit)", coreReason: "Único jeito de montar Masquerain cedo." },
      { name: "Masquerain", count: 4, type: "pokemon", core: true, confidence: "estimado", role: "Atacante / Bug Outer", coreReason: "Único atacante real do deck." },
      { name: "Combee", count: 4, type: "pokemon", basic: true, core: true, confidence: "estimado", role: "Bug Outer (não colocar em campo)", coreReason: "Cada Bug Outer no deck = +50 de dano. Fica no deck, não no campo." },
      { name: "Spinarak", count: 4, type: "pokemon", basic: true, core: true, confidence: "estimado", role: "Bug Outer (não colocar em campo)", coreReason: "Bug Outer + base para Ariados." },
      { name: "Lilian (Lillie's Determination)", count: 4, type: "trainer", supporter: true, out: true, core: true, confidence: "estimado", role: "Compra (devolve Bug Outers ao deck)", coreReason: "Embaralha a mão de volta: recoloca Bug Outers no deck." },
      { name: "Busca do Brock (Brock's Scouting)", count: 3, type: "trainer", supporter: true, out: true, confidence: "estimado", role: "Busca (sempre Surskit)" },
      { name: "Selo Florestal da Vitalidade (Forest Seal)", count: 2, type: "trainer", confidence: "estimado", role: "Evolui na hora / bate estádios lendários" },
      { name: "Recuperação de Energia (Energy Retrieval)", count: 1, type: "trainer", core: true, confidence: "confirmado", role: "Recupera energia moída", coreReason: "Bug Out descarta energia do fundo — sem isso você fica sem combustível." },
      { name: "Cinza Sagrada (Sacred Ash)", count: 1, type: "trainer", core: true, confidence: "confirmado", role: "Devolve até 5 Pokémon ao deck", coreReason: "Recarrega o fundo do deck com Bug Outers." },
      { name: "Poké Pad", count: 2, type: "trainer", out: true, confidence: "estimado", role: "Busca de Pokémon" },
      { name: "Ultra Ball", count: 2, type: "trainer", out: true, confidence: "estimado", role: "Busca de Pokémon" },
      { name: "Energia de Grama Básica", count: 7, type: "energy", confidence: "confirmado", role: "Energia" },
      { name: "Energia de Crescimento", count: 2, type: "energy", confidence: "confirmado", role: "Energia especial (+HP: Masquerain sobrevive ao Landorus)" }
    ],
    preSwaps: [],
    cutOrder: [
      { name: "Selo Florestal da Vitalidade (Forest Seal)", max: 1, reason: "TrustYourPilot: 'é por aqui que eu começaria a cortar' — sem Balão de Ar, evoluir no ativo trava energia." },
      { name: "Ultra Ball", max: 1, reason: "Ultra Ball descarta cartas da mão: em deck que já se moe, custo alto." },
      { name: "Busca do Brock (Brock's Scouting)", max: 1, reason: "Fantasma Cinza: troque 1 Brock por Ariados." },
      { name: "Poké Pad", max: 1, reason: "Corte tardio." },
      { name: "Selo Florestal da Vitalidade (Forest Seal)", max: 1, reason: "Corte tardio (perde defesa contra estádios lendários)." },
      { name: "Ultra Ball", max: 1, reason: "Corte tardio." }
    ],
    attackPlan: [
      "Só Surskit deve ir ao campo. Combee/Spinarak ficam NO DECK — no campo eles não somam dano no Bug Out.",
      "Brock sempre busca 2 Surskit (preserva Bug Outers no deck).",
      "Evolua para Masquerain só quando for atacar: deck mais 'grosso' de Bug Outers = mais dano.",
      "Padrão Pavoroso (30 + bloqueia ataque do defensor) compra 1 turno contra ameaças. Lembre: se o rival trocar o ativo, o efeito some.",
      "Antes do Bug Out, conte: se o deck tem poucas energias restantes, guarde a Recuperação de Energia na mão.",
      "Bug Out fica mais forte a cada uso (o resto é descartado, Bug Outers voltam). Aceite um começo fraco."
    ],
    antiBrick: [
      "12 básicos: mulligan raro. O brick deste deck é diferente: moer as próprias energias. Com 9 energias, um Bug Out ruim pode levar 3-4.",
      "Abaixo de ~10 cartas no deck, só use Bug Out com Cinza Sagrada/Recuperação disponíveis.",
      "Não aumente apoiadores/itens sem necessidade: cada carta não-Pokémon dilui o dano do Bug Out."
    ],
    debates: [
      "Ordem de turno: TrustYourPilot prefere ir PRIMEIRO (sem apoiador no T1, mas Bug Out no T2 com chance de nocaute). Wallamoose prefere ir SEGUNDO (Surskit ataca no T1 e busca 2 Surskit). Regra prática: com Surskit + energia na mão inicial, vá segundo; sem isso, vá primeiro.",
      "Lista: as contagens de Pokémon e treinadores são reconstruídas (o kit tem 12 Bug Outers e 9 energias confirmados). Confira na caixa."
    ],
    storeEnergyConfig: {
      energies: [
        { name: "Energia de Grama Básica", count: 7, emoji: "🍃" },
        { name: "Energia de Crescimento", count: 2, emoji: "🌿" }
      ],
      totalEnergy: 9,
      weakness: "Fraqueza a Fogo x2 (Cuidado Crítico contra Mag-Vire!)",
      tip: "Pegue 7x Grama no balcão da loja. Guarde as 2 Energias de Crescimento para dar +HP ao Masquerain contra Landorus."
    },
    matchupTips: {
      masquerain: {
        enemyId: "masquerain",
        enemyName: "Masquerain (Mirror)",
        advantage: "50/50 Equilibrado",
        statusClass: "adv-even",
        target: "Surskit rival no ativo",
        plan: "Trave o ativo do adversário com Padrão Pavoroso (30 de dano + bloqueio de ataque) para forçá-lo a gastar recuo ou passar turno. Use Selo Florestal da Vitalidade para evoluir no mesmo turno e surpreender o rival.",
        caution: "NUNCA baixe Combee e Spinarak no campo! Mantenha-os no deck para alimentar o dano do Bug Out.",
        execution: {
          howToTarget: "O rival precisa de Surskit no ativo para buscar mais cópias. Trave-o imediatamente com Padrão Pavoroso (30 de dano e bloqueio de ataque). Se o rival não puder recuar, ele perde o turno e fica exposto ao seu Bug Out no turno seguinte.",
          damageMath: "Masquerain tem 110 HP (Bug Out precisa de 3 insetos revelados = 150 de dano para 1HKO). Surskit tem 50-60 HP (2 insetos = 100 de dano matam).",
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
        advantage: "10/90 Pior Confronto do Formato",
        statusClass: "adv-unfavorable",
        target: "Electabuzz antes de virar Electivire",
        plan: "PLANO DE EMERGÊNCIA: Sua única chance é o lock com Padrão Pavoroso (30 de dano e IMPEDE O ATIVO RIVAL DE ATACAR!). Trave o Magmortar ou Electivire rival enquanto prepara um Bug Out com 4+ insetos no fundo. Se você abriu Tubo de Lava Lendário, baixe para desligar o Magmortar rival. Use Ariados para envenenar (4 contadores).",
        caution: "Qualquer sopro de Fogo de Magmortar causa 160 de dano e nocauteia Masquerain em 1 hit. Não deixe o ativo rival desimpedido.",
        execution: {
          howToTarget: "Como sobreviver contra Fogo dobrado: Magmortar nocauteia Masquerain com qualquer golpe. Sua única rota é o LOCK DE ATAQUE: use Padrão Pavoroso de Masquerain (30 de dano e IMPEDE O ATIVO DE ATACAR!). Se o rival não tiver Zínia ou Balão de Ar, ele não pode bater com aquele Pokémon. Se abriu Tubo de Lava nos boosters, jogue para desativar o Buddy Boost do Magmortar rival. Se abriu Ariados, coloque veneno de 4 contadores.",
          damageMath: "Masquerain tem 110 HP e Fraqueza a Fogo x2 (Magmortar bate 80 x 2 = 160 -> mata em 1 hit). Magmortar e Electivire têm 140 HP (Bug Out precisa de 3 insetos = 150 de dano para 1HKO).",
          turnByTurn: [
            "Turno 1: Surskit busca 2 Surskit. Não baixe nada além de Surskit na mesa.",
            "Turno 2: Evolua Masquerain. Use Padrão Pavoroso no ativo rival para impedi-lo de atacar.",
            "Turno 3: Mantenha o lock de ataque enquanto prepara Cinza Sagrada e ataca com Bug Out quando o dano for letal."
          ],
          planB: "Se o Magmortar rival conseguir atacar e limpar seu Masquerain: promova Ariados ou o segundo Masquerain com Energia de Crescimento (+HP) e tente o golpe de misericórdia com Bug Out."
        }
      },
      enamorus: {
        enemyId: "enamorus",
        enemyName: "Solidariedade (Gênios)",
        advantage: "35/65 Parelho a Desfavorável",
        statusClass: "adv-unfavorable",
        target: "Enamorus ou Landorus (para quebrar os 4 tipos da Solidariedade)",
        plan: "Se você abriu Ariados, promova-o com a habilidade Agulha Secreta: você fica 100% IMUNE a ataques de Pokémon Básicos (Tornadus, Landorus e Enamorus não conseguem te tocar!). Se abriu Cacturne, ele causa dano massivo punindo as habilidades ativas dos 4 terians.",
        caution: "Atenção: Thundurus adversário perfura imunidade com Gume Trovejante. Foque em eliminar Thundurus imediatamente.",
        execution: {
          howToTarget: "A arma secreta: Se você abriu Ariados nos boosters (o kit base já vem com 4 Spinarak!), evolua e promova Ariados: sua habilidade Agulha Secreta torna você IMUNE a ataques de Pokémon Básicos! Tornadus, Landorus e Enamorus não conseguem causar dano. Elimine o Thundurus rival com Bug Out (110 de dano), pois ele é o único que fura a imunidade.",
          damageMath: "Terians têm 110 HP. Bug Out com 3 insetos revelados = 150 de dano (1HKO limpo em qualquer gênio!). Com 2 insetos = 100 de dano.",
          turnByTurn: [
            "Turno 1: Surskit busca 2 Surskit. Se tiver Spinarak, mantenha-o no banco.",
            "Turno 2: Se tiver Ariados, evolua e promova. Se não tiver, Masquerain usa Padrão Pavoroso no Tornadus rival.",
            "Turno 3: Declare Bug Out para nocautear Thundurus ou Landorus."
          ],
          planB: "Se o rival jogar Gládio com Landorus: lembre-se que se você estiver com Ariados na frente, o Gládio não tem efeito porque Landorus é básico e Agulha Secreta anula todo o dano!"
        }
      },
      kommo: {
        enemyId: "kommo",
        enemyName: "Kommo-o (Dragões)",
        advantage: "55/45 Favorável a Parelho",
        statusClass: "adv-favorable",
        target: "Jangmo-o (70 HP) com Bug Out rápido",
        plan: "Kommo-o leva pelo menos 3 turnos para montar. Sua janela de oportunidade é correr nos prêmios com Bug Out antes do Turno 4. Se Kommo-o subir para o ativo, trave-o com Padrão Pavoroso para impedi-lo de bater 170 e finalize com Bug Out no turno seguinte.",
        caution: "Não deixe Kommo-o bater em você desimpedido: 170 de dano elimina Masquerain em 1 golpe.",
        execution: {
          howToTarget: "Kommo-o leva 3 turnos para montar. Como vencer: 1. Ataque rápido com Bug Out no T2 e T3 pegando os básicos do oponente (Jangmo-o tem 70 HP e morre para 2 insetos no Bug Out). 2. Se o Kommo-o rival subir (160 HP), NÃO deixe ele atacar: use Padrão Pavoroso de Masquerain para causar 30 de dano e IMPEDIR KOMMO-O DE ATACAR! 3. No turno seguinte, declare Bug Out com 3+ insetos para dar os 130 de dano restantes e finalizar.",
          damageMath: "Jangmo-o tem 70 HP (2 insetos no Bug Out = 100 -> 1HKO). Drampa tem 120 HP (3 insetos = 150 -> 1HKO). Kommo-o tem 160 HP (Padrão Pavoroso 30 + Bug Out com 3 insetos 150 = 180 -> nocaute em 2 turnos sem tomar contra-ataque).",
          turnByTurn: [
            "Turno 1: Surskit busca 2 Surskit. Ligue 1 Planta.",
            "Turno 2: Masquerain declara Bug Out para nocaute imediato no Jangmo-o ou Dratini ativo.",
            "Turno 3: Conforme Kommo-o subir, trave com Padrão Pavoroso (impede ataque) e finalize no T4."
          ],
          planB: "Se Kommo-o subir com 3 energias e ameaçar 170 de dano: ligue Energia de Crescimento no Masquerain para subir o HP e tente o lock com Padrão Pavoroso imediatamente."
        }
      }
    }
  }
};

// =====================================================================
// Cartas notáveis dos boosters
// adds: cartas que entram por "1 pull" (linhas evolutivas e estádios duplos = 2 cartas)
// addsByKit: sobrescreve adds por kit
// kitAdjust: trocas extras aplicadas uma vez quando o pull entra
// score 0 em kitSynergies => vai para o fichário (não entra no deck)
// =====================================================================
const BOOSTER_CARDS = [
  {
    id: "copias_extras",
    name: "Cópia Extra do Tema",
    tier: "S", type: "pokemon", category: "Sem Limite de Cópias", badge: "Regra Especial",
    description: "Sem limite de 4 cópias no pré-lançamento. Conta 1 carta do Pokémon-chave do seu kit (Electabuzz / Landorus / Jangmo-o / Surskit).",
    addsByKit: {
      magmortar: [{ name: "Electabuzz", type: "pokemon", basic: true, count: 1 }],
      enamorus: [{ name: "Landorus", type: "pokemon", basic: true, count: 1 }],
      kommo: [{ name: "Jangmo-o", type: "pokemon", basic: true, count: 1 }],
      masquerain: [{ name: "Surskit", type: "pokemon", basic: true, count: 1 }]
    },
    kitSynergies: {
      magmortar: { score: 10, note: "🔥 4º Electabuzz: cobre o maior ponto fraco do deck (zero recuperação de Pokémon)." },
      enamorus: { score: 10, note: "🔥 3º Landorus: evita prizar os 2 e quebrar a Solidariedade." },
      kommo: { score: 10, note: "🔥 5º Jangmo-o: menos mulligan e mais chances de fechar o Estágio 2." },
      masquerain: { score: 10, note: "🔥 Mais Surskit = setup mais estável." }
    }
  },
  {
    id: "electivire_extra",
    name: "3º Electivire / Masquerain / Kommo-o extra",
    tier: "S", type: "pokemon", category: "Atacante extra do tema", badge: "Sem Limite",
    description: "Atacante principal adicional. Conta 1 carta do atacante do seu kit.",
    addsByKit: {
      magmortar: [{ name: "Electivire", type: "pokemon", count: 1 }],
      enamorus: [{ name: "Tornadus", type: "pokemon", basic: true, count: 1 }],
      kommo: [{ name: "Kommo-o", type: "pokemon", count: 1 }],
      masquerain: [{ name: "Masquerain", type: "pokemon", count: 1 }]
    },
    kitSynergies: {
      magmortar: { score: 10, note: "🔥 TrustYourPilot: sem o 3º Electivire suas chances 'despencam'." },
      enamorus: { score: 8, note: "⭐ 5º Tornadus: mais aberturas com o atacante grátis." },
      kommo: { score: 10, note: "🔥 4º Kommo-o: entra imediatamente." },
      masquerain: { score: 10, note: "🔥 Mais Masquerain = mais atacantes e mais Bug Outers." }
    }
  },
  {
    id: "bug_outer_extra",
    name: "Combee / Spinarak extra",
    tier: "A", type: "pokemon", category: "Bug Outer", badge: "+50 de dano",
    description: "Cada Pokémon com Bug Out no deck aumenta o dano médio do Masquerain.",
    adds: [{ name: "Combee", type: "pokemon", basic: true, count: 1 }],
    kitSynergies: {
      magmortar: { score: 0, note: "🚫 Sem função no Mag-Vire." },
      enamorus: { score: 0, note: "🚫 Sem função nos gênios." },
      kommo: { score: 0, note: "🚫 Sem função nos dragões." },
      masquerain: { score: 9, note: "⭐ Mais densidade de Bug Outers no fundo do deck." }
    }
  },
  {
    id: "delibird",
    name: "Delibird",
    tier: "S", type: "pokemon", category: "Básico Universal", badge: "MVP",
    description: "No ativo, 1x por turno: olha o topo 6, pega 1 energia básica, o resto vai para o fundo.",
    adds: [{ name: "Delibird", type: "pokemon", basic: true, count: 1 }],
    kitSynergies: {
      magmortar: { score: 10, note: "⭐ Garante Fogo/Raio na mão para o Buddy Boost." },
      enamorus: { score: 8, note: "⭐ Acha a Luta/Raio exata. Ocupa banco, mas é básico (+consistência)." },
      kommo: { score: 10, note: "🔥 Básico extra (o deck tem só 6) + energia todo turno." },
      masquerain: { score: 6, note: "⚠️ Cuidado: ele coloca cartas no FUNDO do deck — exatamente onde o Bug Out olha. Pode diluir o dano." }
    }
  },
  {
    id: "zinia",
    name: "Confiança da Zínia",
    tier: "S", type: "trainer", category: "Apoiador de Troca", badge: "Melhor Apoiador",
    description: "Troca o ativo pelo banco e move energia. O formato quase não tem troca.",
    adds: [{ name: "Confiança da Zínia (Zinnia's Trust)", type: "trainer", supporter: true, count: 1 }],
    kitSynergies: {
      magmortar: { score: 10, note: "🔥 Destrava recuo pesado e salva do paralisar/Padrão Pavoroso." },
      enamorus: { score: 9, note: "⭐ Troca o gênio certo para a fraqueza do rival." },
      kommo: { score: 10, note: "🔥 Tira o muro do ativo e promove Kommo-o carregado." },
      masquerain: { score: 8, note: "⭐ Tira o Surskit do ativo depois do T1." }
    }
  },
  {
    id: "repelente",
    name: "Repelente (Repel)",
    tier: "S", type: "trainer", category: "Item de Controle", badge: "Troca Forçada",
    description: "Força o adversário a recuar o ativo pro banco e subir um substituto. Crucial para tirar escudos de 120 HP ou puxar alvos fáceis.",
    adds: [{ name: "Repelente (Repel)", type: "trainer", count: 1 }],
    kitSynergies: {
      magmortar: { score: 10, note: "🔥 Fundamental: tira o escudo da frente e expõe Landorus ou Jangmo-o para nocaute imediato com Electivire!" },
      enamorus: { score: 8, note: "⭐ O kit já tem 1 cópia; a 2ª cópia dá consistência total para furar muros de 120 HP." },
      kommo: { score: 10, note: "🔥 Remove o atacante carregado do oponente do ativo e compra o tempo que você precisa para carregar Kommo-o." },
      masquerain: { score: 9, note: "⭐ Empurra ameaças com energia e promove alvos com menos de 100 HP para o Bug Out." }
    }
  },
  {
    id: "doce_raro",
    name: "Doce Raro (Rare Candy)",
    tier: "S", type: "trainer", category: "Aceleração Estágio 2", badge: "Evolução T2",
    description: "Evolui um Básico diretamente para Estágio 2 no Turno 2, pulando o Estágio 1.",
    adds: [{ name: "Doce Raro (Rare Candy)", type: "trainer", count: 1 }],
    kitSynergies: {
      magmortar: { score: 0, note: "🚫 Magmortar e Electivire são Estágio 1 (não usam Doce Raro)." },
      enamorus: { score: 0, note: "🚫 Todos os 4 gênios são Básicos (sem uso)." },
      kommo: { score: 10, note: "🔥 OURO PURO: 2º Doce Raro no deck garante Kommo-o de 160 HP batendo 170 já no Turno 2!" },
      masquerain: { score: 0, note: "🚫 Masquerain e Ariados são Estágio 1." }
    }
  },
  {
    id: "arcanine",
    name: "Arcanine + Growlithe",
    tier: "S", type: "pokemon", category: "Atacante de 1 Prêmio", badge: "180 de Dano",
    description: "180 por 1 Fogo + 1 Incolor com o rival em ≤4 prêmios (o jogo inteiro). Conta 2 cartas.",
    adds: [
      { name: "Growlithe", type: "pokemon", basic: true, count: 1 },
      { name: "Arcanine", type: "pokemon", count: 1 }
    ],
    kitSynergies: {
      magmortar: { score: 10, note: "🔥 Nocauteia Kommo-o, Magmortar e gênios por 1 prêmio, sem descartar energia." },
      enamorus: { score: 0, note: "🚫 Exige Fogo que o deck não roda." },
      kommo: { score: 0, note: "🚫 Exige Fogo (você está cortando Fogo)." },
      masquerain: { score: 0, note: "🚫 Fora de cor." }
    }
  },
  {
    id: "marshadow",
    name: "Básico de Busca (Marshadow / Morpeko / Electabuzz)",
    tier: "A", type: "pokemon", category: "Básico Setup", badge: "Call for Family",
    description: "Ataca no T1 por 1 energia e coloca 2 básicos no banco.",
    adds: [{ name: "Básico de busca (Marshadow/Morpeko)", type: "pokemon", basic: true, count: 1 }],
    kitSynergies: {
      magmortar: { score: 6, note: "Útil, mas Electabuzz extra é melhor (já é peça do motor)." },
      enamorus: { score: 9, note: "⭐ Coloca 2 gênios em campo no T1." },
      kommo: { score: 10, note: "🔥 TrustYourPilot: 'você perde se não achar Jangmo-o cedo'. Entra sempre." },
      masquerain: { score: 5, note: "Surskit já faz isso." }
    }
  },
  {
    id: "virizion",
    name: "Virizion",
    tier: "A", type: "pokemon", category: "Básico Tanque", badge: "120 HP + compra",
    description: "Compra 2 cartas por 1 energia e sobrevive a qualquer gênio.",
    adds: [{ name: "Virizion", type: "pokemon", basic: true, count: 1 }],
    kitSynergies: {
      magmortar: { score: 4, note: "Neutro." },
      enamorus: { score: 7, note: "Bom abridor, mas ocupa banco." },
      kommo: { score: 8, note: "⭐ Abridor seguro (120 HP) + básico extra." },
      masquerain: { score: 6, note: "Abridor razoável (Planta)." }
    }
  },
  {
    id: "tubo_lava",
    name: "Tubo de Lava Lendário",
    tier: "S", type: "stadium", category: "Estádio Duplo", badge: "Anti-Evolução",
    description: "Desliga habilidades de Pokémon de Evolução. As 2 metades entram juntas da mão (conta 2 cartas; se abrir uma metade, a outra vem em seguida no pacote).",
    adds: [{ name: "Tubo de Lava Lendário (2 metades)", type: "stadium", count: 2 }],
    kitSynergies: {
      magmortar: { score: 0, note: "🚫 Desliga seu próprio Magmortar. Fichário." },
      enamorus: { score: 10, note: "🔥 Seus gênios são básicos: desliga Magmortar e Kommo-o rivais sem custo." },
      kommo: { score: 0, note: "🚫 Desliga seu Beast Scales. Fichário." },
      masquerain: { score: 7, note: "⭐ Desliga Magmortar (seu pior matchup). Mas também desliga habilidades das suas evoluções." }
    }
  },
  {
    id: "pico_lendario",
    name: "Pico Lendário",
    tier: "A", type: "stadium", category: "Estádio Duplo", badge: "Controle de Prêmios",
    description: "Pokémon Incolores cedem 1 prêmio a menos. Conta 2 cartas.",
    adds: [{ name: "Pico Lendário (2 metades)", type: "stadium", count: 2 }],
    kitSynergies: {
      magmortar: { score: 6, note: "Só vale com Mega Rayquaza (vira 2 prêmios)." },
      enamorus: { score: 9, note: "⭐ Tornadus (Incolor) passa a ceder 0 prêmios." },
      kommo: { score: 2, note: "Sem efeito nos dragões." },
      masquerain: { score: 2, note: "Sem efeito nos insetos." }
    }
  },
  {
    id: "raikou_ex",
    name: "Raikou ex",
    tier: "A", type: "pokemon", category: "Básico EX", badge: "Recuo Zero",
    description: "Recuo zero e energização própria. Cede 2 prêmios.",
    adds: [{ name: "Raikou ex", type: "pokemon", basic: true, count: 1 }],
    kitSynergies: {
      magmortar: { score: 8, note: "⭐ Abridor de recuo zero com Raio." },
      enamorus: { score: 5, note: "Ataca com Raio, mas cede 2 prêmios." },
      kommo: { score: 7, note: "Abridor móvel e básico extra." },
      masquerain: { score: 1, note: "Fora de cor." }
    }
  },
  {
    id: "altaria",
    name: "Altaria + Swablu",
    tier: "A", type: "pokemon", category: "Suporte de Recuo", badge: "Recuo Grátis",
    description: "Seus Básicos ganham recuo grátis. Conta 2 cartas.",
    adds: [
      { name: "Swablu", type: "pokemon", basic: true, count: 1 },
      { name: "Altaria", type: "pokemon", count: 1 }
    ],
    kitSynergies: {
      magmortar: { score: 5, note: "Ajuda só os básicos." },
      enamorus: { score: 9, note: "⭐ Todos os gênios com recuo grátis (sucessora da Latias ex)." },
      kommo: { score: 4, note: "Não afeta Kommo-o (Estágio 2)." },
      masquerain: { score: 5, note: "Ajuda o Surskit." }
    }
  },
  {
    id: "ariados",
    name: "Ariados",
    tier: "A", type: "pokemon", category: "Anti-Básicos", badge: "Agulha Secreta",
    description: "Agulha Secreta: imune a dano de Básicos (Thundurus atravessa). Veneno de 4 contadores com energia Noturna.",
    adds: [
      { name: "Spinarak", type: "pokemon", basic: true, count: 1 },
      { name: "Ariados", type: "pokemon", count: 1 }
    ],
    addsByKit: {
      masquerain: [{ name: "Ariados", type: "pokemon", count: 1 }]
    },
    kitAdjust: {
      masquerain: [{
        remove: "Energia de Grama Básica", count: 2,
        add: [{ name: "Energia Noturna Básica", count: 2, type: "energy" }],
        reason: "Fantasma Cinza: 2 Noturnas para o veneno do Ariados.",
        source: "Fantasma Cinza"
      }]
    },
    kitSynergies: {
      magmortar: { score: 1, note: "Fora de tema." },
      enamorus: { score: 1, note: "Fora de tema." },
      kommo: { score: 1, note: "Fora de tema." },
      masquerain: { score: 10, note: "🔥 Spinarak já está no kit. Fantasma: entra no lugar de 1 Brock, com 2 Noturnas." }
    }
  },
  {
    id: "cacturne",
    name: "Cacturne + Cacnea",
    tier: "A", type: "pokemon", category: "Punidor de Habilidades", badge: "Anti-Gênios",
    description: "Dano escala com habilidades em campo (até 210 contra os gênios). Conta 2 cartas.",
    adds: [
      { name: "Cacnea", type: "pokemon", basic: true, count: 1 },
      { name: "Cacturne", type: "pokemon", count: 1 }
    ],
    kitSynergies: {
      magmortar: { score: 2, note: "Fora de tema." },
      enamorus: { score: 1, note: "Fora de tema." },
      kommo: { score: 2, note: "Fora de tema." },
      masquerain: { score: 8, note: "⭐ Planta; pune a dependência de habilidades dos gênios." }
    }
  },
  {
    id: "kecleon",
    name: "Kecleon",
    tier: "A", type: "pokemon", category: "Atacante Neutro", badge: "Dano por tipo",
    description: "Revela Pokémon de tipos diferentes da mão; 120-150 de dano por 2 energias nos gênios.",
    adds: [{ name: "Kecleon", type: "pokemon", basic: true, count: 1 }],
    kitSynergies: {
      magmortar: { score: 3, note: "Só 2 tipos na mão." },
      enamorus: { score: 8, note: "⭐ 4 gênios de tipos diferentes = 120+." },
      kommo: { score: 3, note: "Pouco útil." },
      masquerain: { score: 2, note: "Pouco útil." }
    }
  },
  {
    id: "rotom_calor_ex",
    name: "Rotom Calor ex",
    tier: "B", type: "pokemon", category: "Reciclador de Fogo", badge: "Late Game",
    description: "Reaquecer recicla energias de FOGO do descarte (não Raio). Cede 2 prêmios.",
    adds: [{ name: "Rotom Calor ex", type: "pokemon", basic: true, count: 1 }],
    kitSynergies: {
      magmortar: { score: 7, note: "⭐ Finalizador: descarte Fogo com Electivire para alimentar o Rotom." },
      enamorus: { score: 0, note: "🚫 Fora de cor." },
      kommo: { score: 0, note: "🚫 Fora de cor." },
      masquerain: { score: 0, note: "🚫 Fora de cor." }
    }
  },
  {
    id: "sandslash",
    name: "Sandslash + Sandshrew",
    tier: "B", type: "pokemon", category: "Controle", badge: "Contra-ataque",
    description: "Sandshrew tem Ascensão; Sandslash devolve 3 contadores e bate 60 por 1 Luta. Conta 2 cartas.",
    adds: [
      { name: "Sandshrew", type: "pokemon", basic: true, count: 1 },
      { name: "Sandslash", type: "pokemon", count: 1 }
    ],
    kitSynergies: {
      magmortar: { score: 1, note: "Fora de cor." },
      enamorus: { score: 6, note: "Atacante reserva de Luta (TrustYourPilot)." },
      kommo: { score: 8, note: "⭐ Fantasma: usa Luta, segura a mesa enquanto Kommo-o sobe." },
      masquerain: { score: 1, note: "Fora de cor." }
    }
  },
  {
    id: "mega_rayquaza",
    name: "Mega Rayquaza ex",
    tier: "B", type: "pokemon", category: "Mega Pokémon", badge: "3 Prêmios",
    description: "Habilidade só ativa ao ser baixado da MÃO no BANCO. Cede 3 prêmios; fraco a Raio.",
    adds: [{ name: "Mega Rayquaza ex", type: "pokemon", basic: true, count: 1 }],
    maxCopies: 1,
    kitSynergies: {
      magmortar: { score: 5, note: "⚠️ Só 1 cópia, só com Pico Lendário, sempre do banco." },
      enamorus: { score: 1, note: "Lento demais; 3 prêmios de graça." },
      kommo: { score: 1, note: "Conflita com a linha Kommo-o." },
      masquerain: { score: 0, note: "🚫 Nunca energizará." }
    }
  }
];
