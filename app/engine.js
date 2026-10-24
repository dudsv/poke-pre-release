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
