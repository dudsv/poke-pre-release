// =====================================================================
// Motor Determinístico de Otimização e Diagnóstico de Decks
// Garante 40 cartas exatas, respeita o núcleo intocável (core: true),
// executa pré-swaps competitivos e calcula métricas anti-brick.
// =====================================================================
class DeckOptimizationEngine {
  constructor(kitsData, boosterCards) {
    this.kits = kitsData;
    this.boosterCards = boosterCards;
  }

  optimizeDeck(kitId, userPulls, customBaseDeck = null) {
    const kit = this.kits[kitId];
    if (!kit) throw new Error(`Kit ${kitId} não encontrado.`);

    // 1. Clona a lista base (customizada pelo editor ou original do kit)
    const sourceBase = customBaseDeck && customBaseDeck.length > 0 ? customBaseDeck : kit.baseDeck;
    let currentDeck = sourceBase.map(c => ({ ...c }));

    let cutsLog = [];
    let addsLog = [];
    let preSwapsLog = [];
    let warnings = [];
    let binderAlerts = [];

    // 2. Aplica Pre-Swaps Competitivos Obrigatórios do Kit (ex: cortar energias off-type)
    if (kit.preSwaps && kit.preSwaps.length > 0) {
      for (const swap of kit.preSwaps) {
        const targetIdx = currentDeck.findIndex(c => c.name === swap.remove);
        if (targetIdx !== -1) {
          const removedCount = Math.min(currentDeck[targetIdx].count, swap.count);
          currentDeck[targetIdx].count -= removedCount;
          if (currentDeck[targetIdx].count <= 0) {
            currentDeck.splice(targetIdx, 1);
          }
          preSwapsLog.push({
            remove: swap.remove,
            count: removedCount,
            reason: swap.reason,
            source: swap.source
          });

          // Adiciona as energias/cartas substitutas
          if (swap.add && swap.add.length > 0) {
            for (const addCard of swap.add) {
              this._addOrIncrement(currentDeck, addCard.name, addCard.count, addCard.type, {
                basic: !!addCard.basic,
                role: "Ajuste de consistência inicial"
              });
            }
          }
        }
      }
    }

    // 3. Processa os Pulls dos Boosters
    for (const [cardId, count] of Object.entries(userPulls)) {
      if (!count || count <= 0) continue;
      const cardMeta = this.boosterCards.find(c => c.id === cardId);
      if (!cardMeta) continue;

      const synergy = cardMeta.kitSynergies?.[kitId] || { score: 5, note: "Compatível." };

      // Se a sinergia for 0, é uma armadilha para este deck (ex: Tubo de Lava no Magmortar/Kommo-o)
      if (synergy.score === 0) {
        binderAlerts.push({
          card: cardMeta.name,
          count: count,
          reason: synergy.note
        });
        warnings.push(`🚫 ${cardMeta.name} tem anti-sinergia severa com seu kit (${synergy.note}). Mantido no fichário.`);
        continue; // Não adiciona ao deck ativo
      }

      // Aplica limite de cópias se houver (ex: Mega Rayquaza max 1)
      let effectiveCount = count;
      if (cardMeta.maxCopies && count > cardMeta.maxCopies) {
        warnings.push(`⚠️ ${cardMeta.name}: limitado a ${cardMeta.maxCopies} cópia no deck. O excedente fica no fichário.`);
        effectiveCount = cardMeta.maxCopies;
      }

      // Identifica a lista de adições (pode ser 1 carta, ou 2 no caso de linha evolutiva / estádio duplo)
      const addsTemplate = cardMeta.addsByKit?.[kitId] || cardMeta.adds || [{
        name: cardMeta.ptName || cardMeta.name,
        type: cardMeta.type,
        count: 1,
        basic: cardMeta.type === "pokemon" && !cardMeta.name.includes("+")
      }];

      for (const piece of addsTemplate) {
        const totalPieceCount = piece.count * effectiveCount;
        this._addOrIncrement(currentDeck, piece.name, totalPieceCount, piece.type, {
          basic: !!piece.basic,
          role: cardMeta.badge || "Pull do Booster"
        });
        addsLog.push({
          card: piece.name,
          count: totalPieceCount,
          reason: synergy.note || cardMeta.description
        });
      }

      // Aplica kitAdjust específico se existir (ex: Ariados no Masquerain adiciona 2 energias Noturnas)
      if (cardMeta.kitAdjust?.[kitId]) {
        for (const adj of cardMeta.kitAdjust[kitId]) {
          const remIdx = currentDeck.findIndex(c => c.name === adj.remove);
          if (remIdx !== -1) {
            const cutAmt = Math.min(currentDeck[remIdx].count, adj.count);
            currentDeck[remIdx].count -= cutAmt;
            if (currentDeck[remIdx].count <= 0) currentDeck.splice(remIdx, 1);
            cutsLog.push({ card: adj.remove, count: cutAmt, reason: adj.reason });
          }
          if (adj.add) {
            for (const addC of adj.add) {
              this._addOrIncrement(currentDeck, addC.name, addC.count, addC.type, { basic: !!addC.basic });
              addsLog.push({ card: addC.name, count: addC.count, reason: adj.reason });
            }
          }
        }
      }
    }

    // 4. Regularização de Contagem para 40 Cartas Exatas (Cortes Prioritários)
    let totalCards = this._countTotal(currentDeck);
    let cutsNeeded = totalCards - 40;

    if (cutsNeeded > 0 && kit.cutOrder) {
      for (const cutRule of kit.cutOrder) {
        if (cutsNeeded <= 0) break;
        const targetIdx = currentDeck.findIndex(c => c.name === cutRule.name);
        if (targetIdx === -1) continue;

        const targetCard = currentDeck[targetIdx];

        // PROTEÇÃO SAGRADA: O motor NUNCA corta cartas com core: true
        if (targetCard.core) continue;

        // Se for Pokémon básico, verifica se remover desce abaixo de basicsMin
        const currentBasics = currentDeck.filter(c => c.basic).reduce((a, b) => a + b.count, 0);
        let maxAllowedByBasics = 999;
        if (targetCard.basic && kit.ratio?.basicsMin) {
          maxAllowedByBasics = Math.max(0, currentBasics - kit.ratio.basicsMin);
        }

        const toCut = Math.min(targetCard.count, cutRule.max, cutsNeeded, maxAllowedByBasics);
        if (toCut > 0) {
          targetCard.count -= toCut;
          cutsLog.push({ card: cutRule.name, count: toCut, reason: cutRule.reason });
          cutsNeeded -= toCut;
          if (targetCard.count <= 0) {
            currentDeck.splice(targetIdx, 1);
          }
        }
      }
    }

    // Se ainda precisar de cortes após esgotar o cutOrder, apara energias excedentes não-core
    if (cutsNeeded > 0) {
      for (let i = currentDeck.length - 1; i >= 0 && cutsNeeded > 0; i--) {
        const card = currentDeck[i];
        if (card.type === "energy" && !card.core && card.count > 4) {
          const cutAmt = Math.min(card.count - 4, cutsNeeded);
          card.count -= cutAmt;
          cutsLog.push({ card: card.name, count: cutAmt, reason: "Ajuste fino de curva para fechar 40 cartas" });
          cutsNeeded -= cutAmt;
        }
      }
    }

    // 5. Se faltarem cartas (menos de 40), preenche com a energia primária do kit
    totalCards = this._countTotal(currentDeck);
    if (totalCards < 40) {
      const deficit = 40 - totalCards;
      const primary = kit.primaryEnergy || "Energia de Raio Básica";
      this._addOrIncrement(currentDeck, primary, deficit, "energy", { role: "Preenchimento de curva" });
      addsLog.push({ card: primary, count: deficit, reason: "Preenchimento de curva para 40 cartas exatas" });
    }

    // 6. Diagnóstico de Saúde e Anti-Brick do Deck
    const health = this._calculateDeckHealth(currentDeck, kit);

    // 7. Agrupa o deck por categorias para exibição
    const categorizedDeck = {
      pokemon: currentDeck.filter(c => c.type === "pokemon"),
      trainer: currentDeck.filter(c => c.type === "trainer"),
      stadium: currentDeck.filter(c => c.type === "stadium"),
      energy: currentDeck.filter(c => c.type === "energy")
    };

    return {
      kit,
      totalCards: this._countTotal(currentDeck),
      deck: categorizedDeck,
      flatDeck: currentDeck,
      cuts: cutsLog,
      adds: addsLog,
      preSwaps: preSwapsLog,
      warnings,
      binderAlerts,
      health,
      attackPlan: kit.attackPlan || [],
      antiBrick: kit.antiBrick || [],
      debates: kit.debates || [],
      standbyCuts: (kit.cutOrder || []).slice(0, 3),
      tacticAdvice: {
        turnOrder: kit.idealTurnOrder,
        overview: kit.overview,
        weaknessWarning: kit.storeEnergyConfig?.weakness || kit.weaknessWarning || "",
        matchups: kit.matchupTips || {},
        energyConfig: kit.storeEnergyConfig || null
      }
    };
  }

  _calculateDeckHealth(deck, kit) {
    const pokes = deck.filter(c => c.type === "pokemon").reduce((a, b) => a + b.count, 0);
    const trainers = deck.filter(c => c.type === "trainer").reduce((a, b) => a + b.count, 0);
    const stadiums = deck.filter(c => c.type === "stadium").reduce((a, b) => a + b.count, 0);
    const energies = deck.filter(c => c.type === "energy").reduce((a, b) => a + b.count, 0);
    const basics = deck.filter(c => c.basic).reduce((a, b) => a + b.count, 0);

    // Identifica "Outs" de consistência: cartas que compram ou buscam
    const outs = deck.filter(c => c.out || c.supporter || c.role?.includes("busca") || c.role?.includes("compra"))
                     .reduce((a, b) => a + b.count, 0);

    // Probabilidade de NÃO abrir com básico na mão inicial de 7 cartas:
    // P(no basic) = C(40 - basics, 7) / C(40, 7)
    const mulliganProb = this._hypergeometricNoBasic(40, basics, 7);
    const openingBasicProb = Math.max(0, Math.min(100, Math.round((1 - mulliganProb) * 100)));

    // Checagem de equilíbrio contra o ratio recomendado
    const targetRatio = kit.ratio || { pokemon: [12, 16], trainer: [12, 16], energy: [10, 13], basicsMin: 7 };
    const status = {
      pokemonOk: pokes >= targetRatio.pokemon[0] && pokes <= targetRatio.pokemon[1],
      trainerOk: (trainers + stadiums) >= targetRatio.trainer[0] && (trainers + stadiums) <= targetRatio.trainer[1],
      energyOk: energies >= targetRatio.energy[0] && energies <= targetRatio.energy[1],
      basicsOk: basics >= targetRatio.basicsMin
    };

    return {
      pokemonCount: pokes,
      trainerCount: trainers + stadiums,
      energyCount: energies,
      basicsCount: basics,
      outsCount: outs,
      openingBasicProb: `${openingBasicProb}%`,
      mulliganRisk: `${Math.round(mulliganProb * 100)}%`,
      status,
      targetRatio
    };
  }

  _hypergeometricNoBasic(N, K, n) {
    if (K <= 0) return 1.0;
    if (N - K < n) return 0.0;
    // C(N-K, n) / C(N, n)
    return this._combinations(N - K, n) / this._combinations(N, n);
  }

  _combinations(n, k) {
    if (k < 0 || k > n) return 0;
    if (k === 0 || k === n) return 1;
    if (k > n / 2) k = n - k;
    let res = 1;
    for (let i = 1; i <= k; i++) {
      res = (res * (n - i + 1)) / i;
    }
    return res;
  }

  _addOrIncrement(deck, name, count, type, extraProps = {}) {
    const existing = deck.find(c => c.name === name);
    if (existing) {
      existing.count += count;
      if (extraProps.basic !== undefined) existing.basic = existing.basic || extraProps.basic;
    } else {
      deck.push({ name, count, type, ...extraProps });
    }
  }

  _countTotal(deck) {
    return deck.reduce((acc, c) => acc + c.count, 0);
  }
}

// =====================================================================
// Simulador Estocástico Monte Carlo de Alta Performance
// Executa 10.000 iterações em ~35-50ms para mensurar probabilidades
// reais de abertura, Lead Starter, viabilidade ofensiva e Prize Bricking.
// =====================================================================
class MonteCarloSimulator {
  constructor(iterations = 10000) {
    this.iterations = iterations;
  }

  getLeadStarterNames(kitId) {
    switch (kitId) {
      case "masquerain": return ["Surskit"];
      case "magmortar": return ["Electabuzz", "Magmar"];
      case "enamorus": return ["Tornadus", "Landorus", "Thundurus"];
      case "kommo": return ["Jangmo-o", "Druddigon"];
      default: return [];
    }
  }

  run(flatDeck, kitId) {
    const cardPool = [];
    const leadStarters = this.getLeadStarterNames(kitId);

    flatDeck.forEach((card, cardIndex) => {
      const isLead = leadStarters.some(s => card.name.toLowerCase().includes(s.toLowerCase()));
      const isSupporter = card.type === "trainer" && (card.out || card.supporter || (card.role && (card.role.includes("busca") || card.role.includes("compra"))));
      const isEnergy = card.type === "energy";
      const isBasic = !!card.basic;

      for (let i = 0; i < card.count; i++) {
        cardPool.push({
          cardIndex,
          name: card.name,
          type: card.type,
          basic: isBasic,
          lead: isLead,
          supporter: isSupporter,
          energy: isEnergy
        });
      }
    });

    const totalDeckSize = cardPool.length;
    let totalMulligans = 0;
    let handsWithMulliganCount = 0;
    let leadStarterHands = 0;
    let energyInHandCount = 0;
    let supporterInHandCount = 0;
    let offensiveT1Count = 0;
    let totalBasicsInHand = 0;
    let totalEnergiesInHand = 0;
    let totalSupportersInHand = 0;

    const distinctCards = flatDeck.map((c, idx) => ({
      index: idx,
      name: c.name,
      totalCopies: c.count,
      type: c.type,
      core: !!c.core,
      prizesDistribution: [0, 0, 0, 0, 0]
    }));

    const deckIndices = new Array(totalDeckSize);
    for (let i = 0; i < totalDeckSize; i++) deckIndices[i] = i;

    const iterations = this.iterations;
    const startTime = typeof performance !== "undefined" ? performance.now() : Date.now();

    for (let it = 0; it < iterations; it++) {
      // Fisher-Yates Shuffle
      for (let i = totalDeckSize - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = deckIndices[i];
        deckIndices[i] = deckIndices[j];
        deckIndices[j] = temp;
      }

      let handHasBasic = false;
      let mulliganTries = 0;

      for (let i = 0; i < 7 && i < totalDeckSize; i++) {
        if (cardPool[deckIndices[i]].basic) {
          handHasBasic = true;
          break;
        }
      }

      if (!handHasBasic) {
        handsWithMulliganCount++;
        while (!handHasBasic && mulliganTries < 25) {
          mulliganTries++;
          totalMulligans++;
          for (let i = totalDeckSize - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = deckIndices[i];
            deckIndices[i] = deckIndices[j];
            deckIndices[j] = temp;
          }
          for (let i = 0; i < 7 && i < totalDeckSize; i++) {
            if (cardPool[deckIndices[i]].basic) {
              handHasBasic = true;
              break;
            }
          }
        }
      }

      let basicsInHand = 0;
      let energiesInHand = 0;
      let supportersInHand = 0;
      let hasLead = false;

      for (let i = 0; i < 7 && i < totalDeckSize; i++) {
        const card = cardPool[deckIndices[i]];
        if (card.basic) basicsInHand++;
        if (card.energy) energiesInHand++;
        if (card.supporter) supportersInHand++;
        if (card.lead) hasLead = true;
      }

      totalBasicsInHand += basicsInHand;
      totalEnergiesInHand += energiesInHand;
      totalSupportersInHand += supportersInHand;

      if (hasLead) leadStarterHands++;
      if (energiesInHand > 0) energyInHandCount++;
      if (supportersInHand > 0) supporterInHandCount++;
      if (hasLead && energiesInHand > 0) offensiveT1Count++;

      // 4 Cartas de Prêmio do Formato Selado (índices 7..10)
      const prizeCountsByCardIndex = {};
      for (let i = 7; i < 11 && i < totalDeckSize; i++) {
        const card = cardPool[deckIndices[i]];
        prizeCountsByCardIndex[card.cardIndex] = (prizeCountsByCardIndex[card.cardIndex] || 0) + 1;
      }

      for (let d = 0; d < distinctCards.length; d++) {
        const cIdx = distinctCards[d].index;
        const countInPrizes = prizeCountsByCardIndex[cIdx] || 0;
        distinctCards[d].prizesDistribution[countInPrizes]++;
      }
    }

    const elapsed = (typeof performance !== "undefined" ? performance.now() : Date.now()) - startTime;

    const prizeRisk = distinctCards.map(dc => {
      const atLeastOne = ((iterations - dc.prizesDistribution[0]) / iterations) * 100;
      const allCopies = (dc.prizesDistribution[dc.totalCopies] || 0) / iterations * 100;
      let riskLevel = "safe";
      if (dc.totalCopies === 1 && atLeastOne > 8) riskLevel = "warning";
      if (allCopies > 8 || (dc.totalCopies > 1 && atLeastOne > 38)) riskLevel = "danger";

      return {
        name: dc.name,
        totalCopies: dc.totalCopies,
        type: dc.type,
        core: dc.core,
        atLeastOnePrizing: atLeastOne.toFixed(1) + "%",
        allPrizing: allCopies.toFixed(1) + "%",
        riskLevel
      };
    });

    // Ordena o risco de prêmios: cartas com maior risco de brick total primeiro
    prizeRisk.sort((a, b) => parseFloat(b.allPrizing) - parseFloat(a.allPrizing) || parseFloat(b.atLeastOnePrizing) - parseFloat(a.atLeastOnePrizing));

    return {
      iterations,
      elapsedMs: elapsed.toFixed(1),
      mulliganRate: ((handsWithMulliganCount / iterations) * 100).toFixed(1) + "%",
      leadStarterRate: ((leadStarterHands / iterations) * 100).toFixed(1) + "%",
      energyInHandRate: ((energyInHandCount / iterations) * 100).toFixed(1) + "%",
      supporterInHandRate: ((supporterInHandCount / iterations) * 100).toFixed(1) + "%",
      t1OffensiveRate: ((offensiveT1Count / iterations) * 100).toFixed(1) + "%",
      avgBasics: (totalBasicsInHand / iterations).toFixed(2),
      avgEnergies: (totalEnergiesInHand / iterations).toFixed(2),
      avgSupporters: (totalSupportersInHand / iterations).toFixed(2),
      prizeRisk
    };
  }
}

// =====================================================================
// Gerenciador de Torneio, Rastreador de Partidas & Telemetria de Estudo
// Persiste dados no localStorage e compila relatórios analíticos em MD.
// =====================================================================
class TournamentManager {
  constructor(storageKey = "PRERELEASE_TOURNAMENT_DATA_v1") {
    this.storageKey = storageKey;
    this.data = this.load();
  }

  load() {
    try {
      if (typeof localStorage !== "undefined") {
        const saved = localStorage.getItem(this.storageKey);
        if (saved) return JSON.parse(saved);
      }
    } catch (e) {
      console.warn("Aviso ao carregar dados locais do torneio:", e);
    }
    return {
      matches: [],
      livePrizeState: {
        prizesRemaining: 4,
        prizesMarked: []
      }
    };
  }

  save() {
    try {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(this.storageKey, JSON.stringify(this.data));
      }
    } catch (e) {
      console.warn("Aviso ao salvar dados locais do torneio:", e);
    }
  }

  addMatch(match) {
    const newMatch = {
      id: "match_" + Date.now(),
      createdAt: new Date().toISOString(),
      ...match
    };
    this.data.matches.push(newMatch);
    this.save();
    return newMatch;
  }

  deleteMatch(matchId) {
    this.data.matches = this.data.matches.filter(m => m.id !== matchId);
    this.save();
  }

  clearMatches() {
    this.data.matches = [];
    this.save();
  }

  updateLivePrizes(prizesRemaining, prizesMarked) {
    this.data.livePrizeState = {
      prizesRemaining,
      prizesMarked
    };
    this.save();
  }

  resetLiveMatch() {
    this.data.livePrizeState = {
      prizesRemaining: 4,
      prizesMarked: []
    };
    this.save();
  }

  getStats() {
    const matches = this.data.matches || [];
    const total = matches.length;
    if (total === 0) {
      return {
        total: 0, wins: 0, losses: 0, ties: 0,
        winRate: "0%", firstTurnWinRate: "0%", secondTurnWinRate: "0%",
        prizesTaken: 0, prizesConceded: 0, prizeDiff: 0,
        byKit: {}
      };
    }

    let wins = 0, losses = 0, ties = 0;
    let firstTurnWins = 0, firstTurnTotal = 0;
    let secondTurnWins = 0, secondTurnTotal = 0;
    let prizesTaken = 0, prizesConceded = 0;
    const byKit = {};

    matches.forEach(m => {
      if (m.result === "win") wins++;
      else if (m.result === "loss") losses++;
      else ties++;

      if (m.turnOrder === "1st") {
        firstTurnTotal++;
        if (m.result === "win") firstTurnWins++;
      } else if (m.turnOrder === "2nd") {
        secondTurnTotal++;
        if (m.result === "win") secondTurnWins++;
      }

      prizesTaken += Number(m.prizesTaken || 0);
      prizesConceded += Number(m.prizesConceded || 0);

      const k = m.opponentKit || "outro";
      if (!byKit[k]) byKit[k] = { wins: 0, losses: 0, ties: 0, total: 0 };
      byKit[k].total++;
      if (m.result === "win") byKit[k].wins++;
      else if (m.result === "loss") byKit[k].losses++;
      else byKit[k].ties++;
    });

    return {
      total,
      wins,
      losses,
      ties,
      winRate: Math.round((wins / total) * 100) + "%",
      firstTurnWinRate: firstTurnTotal > 0 ? Math.round((firstTurnWins / firstTurnTotal) * 100) + "%" : "N/A",
      secondTurnWinRate: secondTurnTotal > 0 ? Math.round((secondTurnWins / secondTurnTotal) * 100) + "%" : "N/A",
      prizesTaken,
      prizesConceded,
      prizeDiff: prizesTaken - prizesConceded,
      byKit
    };
  }

  generateCaseStudyMarkdown(kitData, deckResult, simResult) {
    const stats = this.getStats();
    const dateFormatted = new Date().toLocaleDateString("pt-BR", {
      year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit"
    });

    let md = `# 📊 Estudo de Caso de Torneio: Pré-Lançamento Pokémon TCG\n`;
    md += `## Coleção Reinado Delta (Delta Reign / ME6)\n\n`;
    md += `- **Data de Execução:** ${dateFormatted}\n`;
    md += `- **Deck Base Utilizado:** ${kitData.name} (${kitData.tier})\n`;
    md += `- **Formato:** Selado Build & Battle (Baralho de 40 cartas + 10 Boosters Copag / 4 Prêmios / MD1)\n\n`;
    md += `---\n\n`;

    md += `## 1. Resumo Executivo & Métricas de Desempenho\n\n`;
    md += `| Métrica | Resultado Obtido |\n`;
    md += `| :--- | :--- |\n`;
    md += `| **Total de Rodadas Jogadas** | **${stats.total}** |\n`;
    md += `| **Campanha Final (V - D - E)** | **${stats.wins}V - ${stats.losses}D - ${stats.ties}E** |\n`;
    md += `| **Taxa de Vitória Global (Win Rate)** | **${stats.winRate}** |\n`;
    md += `| **Win Rate Indo em 1º Turno** | **${stats.firstTurnWinRate}** |\n`;
    md += `| **Win Rate Indo em 2º Turno** | **${stats.secondTurnWinRate}** |\n`;
    md += `| **Saldo de Prêmios** | **${stats.prizeDiff > 0 ? '+' : ''}${stats.prizeDiff}** (${stats.prizesTaken} conquistados / ${stats.prizesConceded} concedidos) |\n\n`;
    md += `---\n\n`;

    md += `## 2. Arquitetura do Baralho de 40 Cartas\n\n`;
    if (deckResult) {
      md += `### Composição Final do Baralho:\n`;
      md += `- **Pokémon (${deckResult.health.pokemonCount}):** ${deckResult.deck.pokemon.map(c => `${c.count}x ${c.name}${c.core ? ' [NÚCLEO]' : ''}`).join(", ")}\n`;
      md += `- **Treinadores & Estádios (${deckResult.health.trainerCount}):** ${[...deckResult.deck.trainer, ...deckResult.deck.stadium].map(c => `${c.count}x ${c.name}${c.core ? ' [NÚCLEO]' : ''}`).join(", ")}\n`;
      md += `- **Energias (${deckResult.health.energyCount}):** ${deckResult.deck.energy.map(c => `${c.count}x ${c.name}`).join(", ")}\n\n`;

      if (deckResult.adds.length > 0 || deckResult.cuts.length > 0) {
        md += `### Otimizações Aplicadas a partir dos 10 Boosters:\n`;
        deckResult.adds.forEach(a => {
          md += `- **+${a.count}x ${a.card}:** ${a.reason}\n`;
        });
        deckResult.cuts.forEach(c => {
          md += `- **-${c.count}x ${c.card}:** ${c.reason}\n`;
        });
        md += `\n`;
      }
    }
    md += `---\n\n`;

    md += `## 3. Modelo Estocástico: Benchmark Monte Carlo (10.000 Simulações)\n\n`;
    if (simResult) {
      md += `Antes do início do torneio, o algoritmo submeteu o baralho a 10.000 compras aleatórias simulando as regras oficiais de compra, mulligan e separação de 4 prêmios:\n\n`;
      md += `- **Probabilidade de Abrir com Lead Starter:** ${simResult.leadStarterRate}\n`;
      md += `- **Risco de Mulligan (Zero Básicos na Mão):** ${simResult.mulliganRate}\n`;
      md += `- **Viabilidade Ofensiva no Turno 1 (Lead + Energia):** ${simResult.t1OffensiveRate}\n`;
      md += `- **Presença de Apoiador/Busca no T1:** ${simResult.supporterInHandRate}\n`;
      md += `- **Presença de Energia no T1:** ${simResult.energyInHandRate}\n`;
      md += `- **Média de Recursos na Mão Inicial:** ${simResult.avgBasics} Básicos, ${simResult.avgEnergies} Energias, ${simResult.avgSupporters} Apoiadores.\n\n`;

      md += `### Risco de Prize Bricking Mapeado:\n\n`;
      md += `| Carta | Cópias no Deck | 1+ nos Prêmios | Todas nos Prêmios (Brick Total) |\n`;
      md += `| :--- | :---: | :---: | :---: |\n`;
      simResult.prizeRisk.slice(0, 10).forEach(r => {
        md += `| ${r.name} | ${r.totalCopies} | ${r.atLeastOnePrizing} | ${r.allPrizing} |\n`;
      });
      md += `\n`;
    }
    md += `---\n\n`;

    md += `## 4. Diário de Bordo Rodada a Rodada\n\n`;
    if (this.data.matches.length === 0) {
      md += `_Nenhuma partida registrada no caderno de bordo até o momento._\n\n`;
    } else {
      this.data.matches.forEach((m, idx) => {
        const resLabel = m.result === "win" ? "✅ VITÓRIA" : m.result === "loss" ? "❌ DERROTA" : "🤝 EMPATE";
        md += `### ⚔️ Rodada ${m.round || idx + 1}: vs. ${m.opponentName || 'Adversário'} (${m.opponentKit.toUpperCase()})\n`;
        md += `- **Resultado:** **${resLabel}** (Placar: **${m.prizesTaken} a ${m.prizesConceded}**)\n`;
        md += `- **Ordem de Turno:** Foi **${m.turnOrder === '1st' ? '1º a jogar' : '2º a jogar'}**\n`;
        md += `- **Duração da Partida:** ${m.durationMinutes ? m.durationMinutes + ' minutos' : 'Não informada'}\n`;
        md += `- **Carta MVP:** ${m.mvpCard || 'Não informada'}\n`;
        md += `- **Erro Crítico / Aprendizado:** ${m.criticalError || 'Nenhum erro grave relatado.'}\n`;
        md += `- **Notas Táticas:** ${m.notes || 'Sem observações adicionais.'}\n\n`;
      });
    }
    md += `---\n\n`;

    md += `## 5. Análise Crítica dos Resultados & Conclusões\n\n`;
    md += `### Aproveitamento por Arquétipo Enfrentado:\n`;
    if (Object.keys(stats.byKit).length === 0) {
      md += `- Sem confrontos registrados.\n`;
    } else {
      Object.entries(stats.byKit).forEach(([kitKey, val]) => {
        const wr = Math.round((val.wins / val.total) * 100);
        md += `- **vs. ${kitKey.toUpperCase()}:** ${val.wins}V - ${val.losses}D - ${val.ties}E (${wr}% em ${val.total} partida(s))\n`;
      });
    }
    md += `\n`;

    md += `### Síntese do Caso de Estudo:\n`;
    md += `1. **Aderência ao Modelo Teórico:** Comparar as mãos observadas na prática com a expectativa estocástica do Monte Carlo.\n`;
    md += `2. **Gestão de Prêmios:** Avaliar se a perda de peças cruciais nos 4 prêmios causou derrotas e se a dedução no primeiro turno com o Prize Checker evitou jogadas precipitadas.\n`;
    md += `3. **Filosofia Akita:** Pragmatismo, disciplina de execução, sem apego a hypes ou cartas lentas de múltiplos prêmios.\n`;

    return md;
  }
}

// Suporte isomórfico para execução em Node.js (testes) e no Navegador
if (typeof module !== "undefined" && module.exports) {
  module.exports = { DeckOptimizationEngine, MonteCarloSimulator, TournamentManager };
}

