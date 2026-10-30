// Aplicação do Assistente de Pré-lançamento Reinado Delta
const engine = new DeckOptimizationEngine(KITS_DATA, BOOSTER_CARDS);

const state = {
  selectedKit: "magmortar",
  userPulls: {},
  currentResult: null,
  activeMatchupFilter: "all",
  expandedMatchups: {}
};

document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  renderKits();
  renderKitDetails();
  renderKitSuggestionsBanner();
  renderStaples();
  setupQuickParser();
  setupActionButtons();
  recalculate();
});

function initTabs() {
  const tabs = document.querySelectorAll(".step-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetStep = tab.dataset.step;
      switchStep(targetStep);
    });
  });
}

function switchStep(stepId) {
  document.querySelectorAll(".step-tab").forEach(t => {
    t.classList.toggle("active", t.dataset.step === stepId);
  });
  document.querySelectorAll(".section-view").forEach(s => {
    s.classList.toggle("active", s.id === stepId);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderKits() {
  const container = document.getElementById("kitsContainer");
  if (!container) return;

  container.innerHTML = Object.values(KITS_DATA).map(kit => `
    <div class="kit-card ${state.selectedKit === kit.id ? 'selected' : ''}" 
         id="kit-card-${kit.id}"
         onclick="selectKit('${kit.id}')">
      <span class="kit-tier-badge" style="background:${kit.badgeColor}22; color:${kit.badgeColor}; border:1px solid ${kit.badgeColor}55">
        ${kit.tier}
      </span>
      <h3 class="kit-name">${kit.name}</h3>
      <div class="kit-type-tag">⚡ ${kit.type} | Promo: ${kit.leadCard}</div>
      <p class="kit-desc">${kit.overview}</p>
    </div>
  `).join("");
}

function selectKit(kitId) {
  state.selectedKit = kitId;
  renderKits();
  renderKitDetails();
  renderKitSuggestionsBanner();
  renderStaples();
  updateTextPlaceholder();
  recalculate();
  updateQuickSwitcherButtons();
}

function selectKitAndRecalculate(kitId) {
  selectKit(kitId);
}

function updateQuickSwitcherButtons() {
  document.querySelectorAll(".btn-switch-deck").forEach(btn => {
    const isTarget = btn.id === `switch-btn-${state.selectedKit}`;
    btn.classList.toggle("active", isTarget);
  });
}

function toggleMobileHelpModal() {
  const modal = document.getElementById("mobileHelpModal");
  if (!modal) return;
  modal.style.display = (modal.style.display === "none" || !modal.style.display) ? "block" : "none";
}

function renderKitDetails() {
  const container = document.getElementById("kitDetailPanel");
  if (!container) return;

  const kit = KITS_DATA[state.selectedKit];
  if (!kit) return;

  const coreCards = kit.baseDeck.filter(c => c.core);
  const debatesHtml = kit.debates && kit.debates.length > 0 ? `
    <div style="margin-top:14px; background:rgba(99, 102, 241, 0.08); border-left:3px solid #6366f1; padding:10px 14px; border-radius:4px;">
      <strong style="color:#a5b4fc; font-size:0.85rem;">⚖️ Debate entre Especialistas (TrustYourPilot vs Fantasma Cinza):</strong>
      <div style="font-size:0.8rem; color:#cbd5e1; margin-top:4px; line-height:1.45;">
        ${kit.debates.join("<br><br>")}
      </div>
    </div>
  ` : "";

  container.innerHTML = `
    <div class="kit-detail-card">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
        <h4 style="font-size:1rem; font-weight:700; color:#facc15;">🔒 Núcleo Intocável do ${kit.name} (Nunca Cortar)</h4>
        <span style="font-size:0.75rem; color:var(--text-muted)">Proteção Automática Ativa</span>
      </div>
      <p style="font-size:0.85rem; color:var(--text-muted);">
        O motor de otimização <strong>blindou estas cartas</strong>: mesmo adicionando múltiplos pulls dos boosters, estas peças nunca serão removidas porque sustentam a condição de vitória do baralho.
      </p>

      <div class="core-cards-grid">
        ${coreCards.map(c => `
          <div class="core-card-item">
            <div class="core-card-name">
              <span>${c.count}x ${c.name}</span>
              <span style="font-size:0.65rem; background:rgba(234, 179, 8, 0.25); color:#fef08a; padding:1px 5px; border-radius:3px;">INTOCÁVEL</span>
            </div>
            <div class="core-card-reason">${c.coreReason || c.role}</div>
          </div>
        `).join("")}
      </div>

      ${debatesHtml}
    </div>
  `;
}

function renderKitSuggestionsBanner() {
  const container = document.getElementById("kitSuggestionBannerContainer");
  if (!container) return;

  const kit = KITS_DATA[state.selectedKit];
  if (!kit) return;

  container.innerHTML = `
    <div class="kit-suggestion-banner">
      <div class="banner-title-row">
        <span class="banner-kit-badge" style="background:${kit.badgeColor}22; color:${kit.badgeColor}; border:1px solid ${kit.badgeColor}66">
          DECK SELECIONADO: ${kit.name.toUpperCase()}
        </span>
        <span style="font-size:0.8rem; color:#38bdf8; cursor:pointer;" onclick="switchStep('view-kit')">Trocar Deck ↺</span>
      </div>
      <div class="banner-section-text banner-golden">
        <strong>🎯 O que caçar nos 10 Boosters (60 Cartas):</strong> ${kit.goldenPullsSummary}
      </div>
      <div class="banner-section-text banner-traps">
        <strong>⚠️ Armadilhas e Atenção:</strong> ${kit.trapsSummary}
      </div>
    </div>
  `;
}

function updateTextPlaceholder() {
  const textarea = document.getElementById("quickTextInput");
  if (!textarea) return;

  const placeholders = {
    magmortar: "Ex: 1 arcanine com growlithe, 1 delibird, 1 zinia, 1 electabuzz extra, 1 raikou ex",
    enamorus: "Ex: 1 tubo de lava, 1 altaria com swablu, 1 kecleon, 1 delibird, 1 zinia",
    kommo: "Ex: 1 morpeko, 1 sandslash com sandshrew, 1 raikou ex, 1 delibird, 1 zinia",
    masquerain: "Ex: 1 cacturne com cacnea, 2 masquerain extra, 1 pincurchin, 1 repelente, 1 zinia"
  };

  textarea.placeholder = placeholders[state.selectedKit] || "Exemplo: 1 delibird, 2 zinia...";
}

function renderStaples() {
  const container = document.getElementById("staplesContainer");
  if (!container) return;

  const kitId = state.selectedKit;

  // Ordena as cartas dinamicamente com base na sinergia com o deck selecionado (maior sinergia primeiro)
  const sortedCards = [...BOOSTER_CARDS].sort((a, b) => {
    const scoreA = a.kitSynergies?.[kitId]?.score ?? 5;
    const scoreB = b.kitSynergies?.[kitId]?.score ?? 5;
    return scoreB - scoreA;
  });

  container.innerHTML = sortedCards.map(card => {
    const currentCount = state.userPulls[card.id] || 0;
    const synergy = card.kitSynergies?.[kitId] || { score: 5, note: "Compatível." };
    const isRecommended = synergy.score >= 8;
    const isAntiSynergy = synergy.score <= 3;

    return `
      <div class="staple-card ${isRecommended ? 'recommended-for-deck' : ''} ${isAntiSynergy ? 'anti-synergy-for-deck' : ''}" 
           id="staple-card-${card.id}">
        <div>
          <div class="staple-header">
            <span class="staple-title">${card.name}</span>
            <span class="staple-tier tier-${card.tier}">${card.tier}</span>
          </div>
          <div style="font-size:0.75rem; color:#38bdf8; margin: 4px 0;">${card.category} • ${card.badge}</div>
          <p class="staple-desc">${card.description}</p>
          
          <!-- Nota Dinâmica de Sinergia com o Deck Selecionado -->
          <div class="synergy-note-box ${isAntiSynergy ? 'warning-note' : ''}">
            ${synergy.note}
          </div>
        </div>
        
        <div class="counter-controls" style="margin-top:10px;">
          <span style="font-size:0.8rem; color:var(--text-muted)">Qtd no Deck:</span>
          <div style="display:flex; align-items:center; gap:8px;">
            <button class="btn-counter" onclick="changePull('${card.id}', -1)">-</button>
            <span class="counter-val" id="counter-${card.id}">${currentCount}</span>
            <button class="btn-counter" onclick="changePull('${card.id}', 1)">+</button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function changePull(cardId, delta) {
  const cur = state.userPulls[cardId] || 0;
  const next = Math.max(0, cur + delta);
  if (next === 0) {
    delete state.userPulls[cardId];
  } else {
    state.userPulls[cardId] = next;
  }
  const counterEl = document.getElementById(`counter-${cardId}`);
  if (counterEl) counterEl.textContent = next;
  recalculate();
}

function setupQuickParser() {
  const btn = document.getElementById("btnParseText");
  const textarea = document.getElementById("quickTextInput");
  if (!btn || !textarea) return;

  btn.addEventListener("click", () => {
    const text = textarea.value.toLowerCase();
    if (!text.trim()) return;

    // Reconhecimento de nomes e quantidades comuns
    const keywords = [
      { id: "copias_extras", terms: ["electabuzz extra", "surskit extra", "jangmo-o extra", "landorus extra", "basico extra", "copia extra"] },
      { id: "atacante_extra", terms: ["electivire extra", "masquerain extra", "kommo-o extra", "tornadus extra", "atacante extra"] },
      { id: "bug_outer_extra", terms: ["combee extra", "spinarak extra", "bug outer", "inseto extra", "combee", "spinarak"] },
      { id: "zinia", terms: ["zinia", "zinnia", "confianca da zinia"] },
      { id: "repelente", terms: ["repelente", "repel"] },
      { id: "doce_raro", terms: ["doce raro", "rare candy"] },
      { id: "recuperacao_energia_extra", terms: ["recuperacao de energia", "energy retrieval", "recuperacao extra"] },
      { id: "delibird", terms: ["delibird", "deli bird"] },
      { id: "ariados", terms: ["ariados", "agulha secreta"] },
      { id: "tubo_lava", terms: ["tubo de lava", "tubo", "pyroar", "lava"] },
      { id: "arcanine", terms: ["arcanine", "growlithe", "presa energetica"] },
      { id: "raikou_ex", terms: ["raikou", "raikou ex"] },
      { id: "altaria", terms: ["altaria", "swablu"] },
      { id: "sandslash", terms: ["sandslash", "sandshrew"] },
      { id: "vespiquen", terms: ["vespiquen", "vespiqueen", "clean hit"] },
      { id: "heracross", terms: ["heracross", "spike draw"] },
      { id: "cacturne", terms: ["cacturne", "cacnea"] },
      { id: "aarune", terms: ["aarune", "arune"] },
      { id: "emcees_hype", terms: ["emcee", "emcees hype", "empolgacao do mestre", "mestre"] },
      { id: "onigiri", terms: ["onigiri", "delicious onigiri", "onigiri delicioso"] },
      { id: "custom_vest", terms: ["colete", "custom vest", "colete customizado"] },
      { id: "tate_liza", terms: ["tate", "liza", "tate & liza", "treino de tate"] },
      { id: "mega_rayquaza", terms: ["mega rayquaza", "rayquaza", "rayquaza ex"] }
    ];

    let foundAny = false;
    keywords.forEach(kw => {
      for (const term of kw.terms) {
        if (text.includes(term)) {
          // Tenta capturar número antes da palavra (ex: "2 delibird")
          const regex = new RegExp(`(\\d+)\\s*(?:x\\s*)?${term}`, 'i');
          const match = text.match(regex);
          const count = match ? parseInt(match[1]) : 1;
          state.userPulls[kw.id] = (state.userPulls[kw.id] || 0) + count;
          foundAny = true;
          break;
        }
      }
    });

    renderStaples();
    recalculate();
    if (foundAny) {
      alert("Cartas identificadas e adicionadas com sucesso!");
      textarea.value = "";
    } else {
      alert("Não identificamos nomes correspondentes. Selecione diretamente nos botões abaixo!");
    }
  });
}

function recalculate() {
  const result = engine.optimizeDeck(state.selectedKit, state.userPulls);
  state.currentResult = result;
  renderResults(result);
}

function renderResults(result) {
  updateQuickSwitcherButtons();

  // Renderizar Dashboard de Saúde Anti-Brick
  const healthDashboard = document.getElementById("deckHealthDashboard");
  if (healthDashboard && result.health) {
    const h = result.health;
    const r = h.targetRatio;

    healthDashboard.innerHTML = `
      <div class="health-dashboard">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h4 style="font-size:1.05rem; font-weight:700; color:#38bdf8;">📊 Painel de Saúde do Deck (Anti-Brick Diagnostic)</h4>
          <span style="font-size:0.75rem; color:#10b981; font-weight:700;">Balanceamento Automático Ativo</span>
        </div>

        <div class="health-grid">
          <div class="health-metric-box">
            <span class="health-metric-title">Pokémon</span>
            <div class="health-metric-val">
              ${h.pokemonCount}
              <span class="metric-status-badge ${h.status.pokemonOk ? 'status-ok' : 'status-warn'}">
                ${h.status.pokemonOk ? 'OK' : 'Fora da Meta'}
              </span>
            </div>
            <span class="health-metric-sub">Meta: ${r.pokemon[0]} a ${r.pokemon[1]} cards</span>
          </div>

          <div class="health-metric-box">
            <span class="health-metric-title">Treinadores</span>
            <div class="health-metric-val">
              ${h.trainerCount}
              <span class="metric-status-badge ${h.status.trainerOk ? 'status-ok' : 'status-warn'}">
                ${h.status.trainerOk ? 'OK' : 'Ajustar'}
              </span>
            </div>
            <span class="health-metric-sub">Meta: ${r.trainer[0]} a ${r.trainer[1]} cards</span>
          </div>

          <div class="health-metric-box">
            <span class="health-metric-title">Energias</span>
            <div class="health-metric-val">
              ${h.energyCount}
              <span class="metric-status-badge ${h.status.energyOk ? 'status-ok' : 'status-warn'}">
                ${h.status.energyOk ? 'OK' : 'Ajustar'}
              </span>
            </div>
            <span class="health-metric-sub">Meta: ${r.energy[0]} a ${r.energy[1]} cards</span>
          </div>

          <div class="health-metric-box">
            <span class="health-metric-title">Básicos / Mulligan</span>
            <div class="health-metric-val">
              ${h.basicsCount} básicos
              <span class="metric-status-badge ${h.status.basicsOk ? 'status-ok' : 'status-warn'}">
                ${h.openingBasicProb}
              </span>
            </div>
            <span class="health-metric-sub">Risco de Mulligan: ${h.mulliganRisk}</span>
          </div>

          <div class="health-metric-box">
            <span class="health-metric-title">Outs (Compra/Busca)</span>
            <div class="health-metric-val" style="color:#facc15;">
              ${h.outsCount} cartas
            </div>
            <span class="health-metric-sub">Evitam travamentos de mão</span>
          </div>
        </div>
      </div>
    `;
  }

  // Renderizar Plano para Atacar Todo Turno
  const attackPlanContainer = document.getElementById("attackPlanContainer");
  if (attackPlanContainer && result.attackPlan) {
    attackPlanContainer.innerHTML = `
      <div class="attack-plan-list">
        ${result.attackPlan.map((step, idx) => `
          <div class="attack-plan-step">
            <strong style="color:#10b981;">Passo ${idx + 1}:</strong> ${step}
          </div>
        `).join("")}
      </div>
    `;
  }

  // 1. Renderizar Pre-Swaps (Ajustes de Base)
  const preSwapsContainer = document.getElementById("preSwapsContainer");
  if (preSwapsContainer) {
    if (result.preSwaps && result.preSwaps.length > 0) {
      preSwapsContainer.innerHTML = result.preSwaps.map(ps => `
        <div class="cut-item" style="border-left-color:#38bdf8; background:rgba(56, 189, 248, 0.08);">
          <strong style="color:#38bdf8;">🔄 Ajuste de Base Obrigatório (${ps.source}):</strong> Cortar ${ps.count}x ${ps.remove}
          <div style="font-size:0.75rem; color:#bae6fd; margin-top:2px;">${ps.reason}</div>
        </div>
      `).join("");
    } else {
      preSwapsContainer.innerHTML = "";
    }
  }

  // 2. Renderizar Cortes
  const cutsContainer = document.getElementById("cutsContainer");
  if (cutsContainer) {
    if (result.cuts.length > 0) {
      cutsContainer.innerHTML = result.cuts.map(c => `
        <div class="cut-item">
          <strong>❌ Remover ${c.count}x ${c.card}</strong>
          <div style="font-size:0.75rem; color:#fca5a5; margin-top:2px;">Motivo: ${c.reason}</div>
        </div>
      `).join("");
    } else {
      cutsContainer.innerHTML = "";
    }
  }

  // 3. Renderizar Adições
  const addsContainer = document.getElementById("addsContainer");
  if (addsContainer) {
    if (result.adds.length > 0) {
      addsContainer.innerHTML = result.adds.map(a => `
        <div class="add-item">
          <strong>✅ Adicionar ${a.count}x ${a.card}</strong>
          <div style="font-size:0.75rem; color:#86efac; margin-top:2px;">Efeito: ${a.reason}</div>
        </div>
      `).join("");
    } else {
      addsContainer.innerHTML = "";
    }
  }

  // 4. Standby Cuts (Fila de Prontidão quando não há cortes ativos)
  const standbyContainer = document.getElementById("standbyCutsContainer");
  if (standbyContainer) {
    if (result.cuts.length === 0 && result.adds.length === 0) {
      const standbyItems = result.standbyCuts || [];
      standbyContainer.innerHTML = `
        <div style="background:rgba(16, 185, 129, 0.06); border:1px solid rgba(16, 185, 129, 0.2); border-radius:var(--radius-sm); padding:10px 14px; margin-bottom:8px;">
          <div style="display:flex; align-items:center; gap:8px;">
            <span style="color:#10b981; font-weight:800; font-size:0.9rem;">🟢 Núcleo Base Estável & Validado (40 Cartas)</span>
          </div>
          <div style="font-size:0.78rem; color:#94a3b8; margin-top:4px;">
            Nenhum pull foi inserido na Etapa 2. Seu baralho original está pronto para disputar o torneio.
          </div>
        </div>

        ${standbyItems.length > 0 ? `
          <div class="standby-cuts-box">
            <div class="standby-cuts-header">
              <span>📋 Fila de Cortes de Prontidão (se você abrir novos Pokémon nos 10 boosters):</span>
            </div>
            ${standbyItems.map((item, idx) => `
              <div class="standby-cut-item">
                <span class="standby-cut-badge">${idx + 1}º Corte: ${item.name}</span>
                <span>${item.reason}</span>
              </div>
            `).join("")}
          </div>
        ` : ''}
      `;
    } else {
      standbyContainer.innerHTML = "";
    }
  }

  // 5. Estação de Energia do Balcão da Loja
  const energyStationContainer = document.getElementById("energyStationContainer");
  if (energyStationContainer) {
    const ec = result.tacticAdvice.energyConfig;
    if (ec) {
      energyStationContainer.innerHTML = `
        <div class="energy-station-box">
          <div class="energy-station-title">
            <span>🏢 Balcão de Energias Básicas da Loja</span>
          </div>
          <div class="energy-pills-row">
            ${ec.energies.map(e => `
              <div class="energy-pill">
                <span>${e.emoji} ${e.name}</span>
                <span class="energy-pill-count">${e.count}x no Balcão</span>
              </div>
            `).join("")}
          </div>
          <div class="energy-tip-box">${ec.tip}</div>
          <div style="margin-top:6px;">
            <span class="energy-weakness-tag">🛡️ ${ec.weakness}</span>
          </div>
        </div>
      `;
    } else {
      energyStationContainer.innerHTML = "";
    }
  }

  // 6. Alertas Táticos Ativos e Fichário
  const warningsContainer = document.getElementById("warningsContainer");
  if (warningsContainer) {
    let html = "";
    if (result.warnings.length > 0) {
      html += result.warnings.map(w => `<div class="alert-warning">${w}</div>`).join("");
    }
    if (result.binderAlerts && result.binderAlerts.length > 0) {
      html += result.binderAlerts.map(b => `
        <div class="cut-item" style="border-left-color:#ef4444; background:rgba(239, 68, 68, 0.1);">
          <strong>🚫 MANTIDO NO FICHÁRIO: ${b.count}x ${b.card}</strong>
          <div style="font-size:0.75rem; color:#fca5a5; margin-top:2px;">${b.reason}</div>
        </div>
      `).join("");
    }
    if (!html) {
      html = `
        <div class="clean-status-banner">
          <span>✅ Nenhuma anti-sinergia detectada. Curva e tipos de energia perfeitamente alinhados para atacar todo turno.</span>
        </div>
      `;
    }
    warningsContainer.innerHTML = html;
  }

  // 7. Renderizar Baralho Completo de 40 Cartas com Selo de Núcleo Intocável
  const deckListContainer = document.getElementById("deckListContainer");
  const deckCountEl = document.getElementById("deckCountBadge");
  if (deckCountEl) deckCountEl.textContent = `${result.totalCards} Cartas`;

  if (deckListContainer) {
    const renderCategory = (title, items) => {
      if (!items || items.length === 0) return "";
      const totalInCat = items.reduce((acc, i) => acc + i.count, 0);
      return `
        <div class="deck-category">
          <div class="category-title">${title} (${totalInCat})</div>
          ${items.map(card => `
            <div class="deck-card-row">
              <span>
                <span class="deck-card-count">${card.count}x</span> ${card.name}
                ${card.core ? `<span class="badge-core-tag">🔒 NÚCLEO</span>` : ''}
              </span>
              <span style="font-size:0.75rem; color:var(--text-muted);">${card.role || ''}</span>
            </div>
          `).join("")}
        </div>
      `;
    };

    deckListContainer.innerHTML = `
      ${renderCategory("Pokémon", result.deck.pokemon)}
      ${renderCategory("Treinadores", result.deck.trainer)}
      ${renderCategory("Estádios", result.deck.stadium)}
      ${renderCategory("Energias", result.deck.energy)}
    `;
  }

  // 8. Ordem de Turno & Guia de Confrontos (VS Cada Arquétipo)
  const turnOrderBanner = document.getElementById("turnOrderBanner");
  if (turnOrderBanner) {
    turnOrderBanner.innerHTML = `
      <div class="turn-order-card">
        <span class="turn-order-label">🎯 Ordem de Turno Ideal:</span>
        <span class="turn-order-text">${result.tacticAdvice.turnOrder}</span>
      </div>
    `;
  }

  renderMatchupSystem(result.tacticAdvice.matchups);
}

function renderMatchupSystem(matchups) {
  const filterContainer = document.getElementById("matchupFilterContainer");
  const tacticsMatchupsEl = document.getElementById("tacticsMatchups");
  if (!tacticsMatchupsEl || !matchups) return;

  const deckKeys = Object.keys(matchups);
  if (deckKeys.length === 0) {
    tacticsMatchupsEl.innerHTML = `<div style="color:var(--text-muted); font-size:0.85rem;">Confrontos em sincronização.</div>`;
    return;
  }

  // Renderizar Barra de Filtros
  if (filterContainer) {
    const filterOptions = [
      { id: "all", label: "👁️ Ver Todos os Confrontos" },
      { id: "magmortar", label: "⚡ vs Mag-Vire" },
      { id: "enamorus", label: "🌪️ vs Gênios" },
      { id: "kommo", label: "🐉 vs Kommo-o" },
      { id: "masquerain", label: "🐛 vs Masquerain" }
    ];

    filterContainer.innerHTML = `
      <div class="matchup-filter-bar">
        ${filterOptions.map(opt => `
          <button class="matchup-filter-btn ${state.activeMatchupFilter === opt.id ? 'active' : ''}"
                  onclick="setMatchupFilter('${opt.id}')">
            ${opt.label}
          </button>
        `).join("")}
      </div>
    `;
  }

  // Filtrar e Renderizar os Cards de Matchup
  const listToRender = state.activeMatchupFilter === "all" 
    ? Object.values(matchups)
    : [matchups[state.activeMatchupFilter]].filter(Boolean);

  tacticsMatchupsEl.innerHTML = `
    <div class="matchup-cards-grid">
      ${listToRender.map(m => {
        const isExpanded = !!state.expandedMatchups[m.enemyId];
        const ex = m.execution;

        return `
          <div class="matchup-card-modern" id="matchup-card-${m.enemyId}">
            <div class="matchup-header-modern">
              <span class="matchup-title-text">Confronto vs ${m.enemyName}</span>
              <span class="matchup-adv-badge ${m.statusClass}">${m.advantage}</span>
            </div>
            
            <div class="matchup-section">
              <div class="matchup-section-label label-target">🎯 Alvo Prioritário no Banco:</div>
              <div style="color:#f1f5f9; font-weight:600;">${m.target}</div>
            </div>

            <div class="matchup-section">
              <div class="matchup-section-label label-plan">⚔️ Plano de Jogo & Sequenciamento:</div>
              <div style="color:#cbd5e1;">${m.plan}</div>
            </div>

            <div class="matchup-caution-box">
              <div class="matchup-section-label label-caution">⚠️ Cuidado Crítico & Armadilha Rival:</div>
              <div>${m.caution}</div>
            </div>

            <!-- Botão Expansível de Detalhamento Tático Passo a Passo -->
            <button class="btn-toggle-details" onclick="toggleMatchupDetails('${m.enemyId}')">
              <span>${isExpanded ? '▲ Ocultar Detalhamento Tático' : '▼ Como Fazer na Prática (Cálculos de Dano, Combos e Passos)'}</span>
              <span style="font-size:0.72rem; opacity:0.85;">${isExpanded ? 'Recolher' : 'Ver Detalhes'}</span>
            </button>

            <!-- Detalhamento Tático Expansível -->
            ${isExpanded && ex ? `
              <div class="matchup-details-accordion">
                <div class="details-block">
                  <div class="details-block-header header-pull">🎣 Como Puxar / Mirar no Alvo do Banco:</div>
                  <div style="color:#e2e8f0;">${ex.howToTarget}</div>
                </div>

                <div class="details-block">
                  <div class="details-block-header header-math">🧮 Matemática Exata do Nocaute (Dano x HP):</div>
                  <div style="color:#fef08a;">${ex.damageMath}</div>
                </div>

                <div class="details-block">
                  <div class="details-block-header header-steps">📋 Sequência de Turno Recomendada (Passo a Passo):</div>
                  <div class="details-step-list">
                    ${ex.turnByTurn.map(step => `
                      <div class="details-step-item">${step}</div>
                    `).join("")}
                  </div>
                </div>

                <div class="details-block">
                  <div class="details-block-header header-planb">🔄 Cenário de Desespero (Plano B de Recuperação):</div>
                  <div class="details-planb-box">${ex.planB}</div>
                </div>
              </div>
            ` : ''}

          </div>
        `;
      }).join("")}
    </div>
  `;
}

function toggleMatchupDetails(enemyId) {
  state.expandedMatchups[enemyId] = !state.expandedMatchups[enemyId];
  if (state.currentResult) {
    renderMatchupSystem(state.currentResult.tacticAdvice.matchups);
  }
}

function setMatchupFilter(filterKey) {
  state.activeMatchupFilter = filterKey;
  if (state.currentResult) {
    renderMatchupSystem(state.currentResult.tacticAdvice.matchups);
  }
}

function setupActionButtons() {
  const btnCopy = document.getElementById("btnCopyDeck");
  if (btnCopy) {
    btnCopy.addEventListener("click", () => {
      if (!state.currentResult) return;
      const res = state.currentResult;
      let text = `=== BARALHO PRÉ-LANÇAMENTO: ${res.kit.name} (${res.totalCards} Cartas) ===\n\n`;
      text += `[POKÉMON (${res.health.pokemonCount})]\n` + res.deck.pokemon.map(c => `${c.count}x ${c.name} ${c.core ? '[NÚCLEO]' : ''}`).join("\n") + "\n\n";
      text += `[TREINADORES (${res.health.trainerCount})]\n` + res.deck.trainer.map(c => `${c.count}x ${c.name} ${c.core ? '[NÚCLEO]' : ''}`).join("\n") + "\n\n";
      if (res.deck.stadium.length > 0) {
        text += `[ESTÁDIOS]\n` + res.deck.stadium.map(c => `${c.count}x ${c.name}`).join("\n") + "\n\n";
      }
      text += `[ENERGIAS (${res.health.energyCount})]\n` + res.deck.energy.map(c => `${c.count}x ${c.name}`).join("\n") + "\n\n";
      text += `[DIAGNÓSTICO ANTI-BRICK]: Básico na mão inicial: ${res.health.openingBasicProb} | Outs de compra/busca: ${res.health.outsCount}\n`;
      text += `[DICA DE TURNO]: ${res.tacticAdvice.turnOrder}\n`;

      navigator.clipboard.writeText(text).then(() => {
        alert("Lista do baralho copiada para a área de transferência!");
      });
    });
  }
}

// Garante exposição no escopo global para eventos inline HTML
window.selectKit = selectKit;
window.selectKitAndRecalculate = selectKitAndRecalculate;
window.switchStep = switchStep;
window.toggleMatchupDetails = toggleMatchupDetails;
window.setMatchupFilter = setMatchupFilter;
window.toggleMobileHelpModal = toggleMobileHelpModal;
window.updatePull = updatePull;
window.addPull = addPull;
window.resetPulls = resetPulls;
