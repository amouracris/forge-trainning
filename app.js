/* ============================================================
   FORGE — Training App
   Functional version with localStorage persistence
   ============================================================ */

/* ===== ICONS ===== */
const ICONS = {
  home: '<path d="M3 12 12 4l9 8M5 10v10h14V10"/>',
  dumbbell: '<rect x="2" y="10" width="3" height="4" rx="1"/><rect x="5" y="8" width="2" height="8" rx="1"/><line x1="7" y1="12" x2="17" y2="12"/><rect x="17" y="8" width="2" height="8" rx="1"/><rect x="19" y="10" width="3" height="4" rx="1"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  run: '<circle cx="14" cy="4.5" r="1.8"/><path d="M14 7l-3 3 1.5 3-3 5"/><path d="M11 10l-3 1M12 13l5 1 1 5M14 7l3 1"/>',
  bike: '<circle cx="6" cy="17" r="3.5"/><circle cx="18" cy="17" r="3.5"/><path d="M5.5 17 9 9l4 4 4-7"/><path d="M14 6h3M9 9h4"/>',
  swim: '<path d="M2 8c2-1 3-1 5 0s3 1 5 0 3-1 5 0 3 1 5 0"/><path d="M2 14c2-1 3-1 5 0s3 1 5 0 3-1 5 0 3 1 5 0"/><path d="M2 20c2-1 3-1 5 0s3 1 5 0 3-1 5 0 3 1 5 0"/><circle cx="17" cy="5" r="1.5"/>',
  stopwatch: '<circle cx="12" cy="14" r="7"/><path d="M12 11v3l2 2M9 2h6M12 5V3"/>',
  flex: '<path d="M14 4c-2 0-3 1-3 3l-1 4c-2 1-4 3-4 5l1 5h6l1-3 4-1 2-3-1-4-3-3-2-3z"/>',
  chart: '<path d="M3 3v18h18"/><rect x="6" y="13" width="3" height="6" rx="0.5"/><rect x="11" y="8" width="3" height="11" rx="0.5"/><rect x="16" y="11" width="3" height="8" rx="0.5"/>',
  clipboard: '<rect x="6" y="4" width="12" height="18" rx="2"/><path d="M9 4V2h6v2"/><line x1="9" y1="11" x2="15" y2="11"/><line x1="9" y1="15" x2="15" y2="15"/><line x1="9" y1="19" x2="13" y2="19"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  info: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
  play: '<polygon points="5 3 19 12 5 21 5 3"/>',
  pause: '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>',
  stop: '<rect x="6" y="6" width="12" height="12"/>',
  plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  check: '<polyline points="20 6 9 17 4 12"/>',
  arrow: '<polyline points="9 18 15 12 9 6"/>',
  arrowLeft: '<polyline points="15 18 9 12 15 6"/>',
  flame: '<path d="M8.5 14c0-3.5 3.5-5 3.5-9 4 3 4 6 4 9a3.5 3.5 0 1 1-7 0z"/>',
  trending: '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',
  zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>',
  trash: '<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
};
function icon(name, size = 20) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ''}</svg>`;
}

/* ===== STORE: localStorage wrapper ===== */
const Store = {
  get(k, def) {
    try { const v = localStorage.getItem('forge.' + k); return v == null ? def : JSON.parse(v); } catch { return def; }
  },
  set(k, v) { localStorage.setItem('forge.' + k, JSON.stringify(v)); },
  del(k) { localStorage.removeItem('forge.' + k); },
};

/* ===== CONFIG ===== */
const Config = {
  get geminiKey() { return Store.get('config.geminiKey', ''); },
  set geminiKey(k) { Store.set('config.geminiKey', k); },
  get user() { return Store.get('config.user', { name: 'Cris', email: '', weight: 0, height: 0, bf: 0 }); },
  set user(u) { Store.set('config.user', u); },
};

/* ===== EXERCISES (loaded from JSON) ===== */
const IMG_BASE = 'https://raw.githubusercontent.com/mohamedatef90/exercise-library/main/';
let EXERCISES = [];
let EX_BY_ID = {};
async function loadExercises() {
  try {
    const res = await fetch('./exercises.json');
    EXERCISES = await res.json();
    EX_BY_ID = Object.fromEntries(EXERCISES.map(e => [e.id, e]));
  } catch (e) {
    console.warn('Could not load exercises.json', e);
  }
}
function exImage(ex) {
  if (!ex || !ex.images || !ex.images.length) return null;
  return IMG_BASE + ex.images[0];
}

/* Muscle group → color mapping for stylized cards */
const MUSCLE_COLORS = {
  'Peito': { color: '#ef4444', dark: '#b91c1c', label: 'Peito' },
  'Costas (meio)': { color: '#2563eb', dark: '#1e40af', label: 'Costas' },
  'Dorsais': { color: '#2563eb', dark: '#1e40af', label: 'Costas' },
  'Lombar': { color: '#2563eb', dark: '#1e40af', label: 'Costas' },
  'Quadríceps': { color: '#16a34a', dark: '#15803d', label: 'Pernas' },
  'Posterior de coxa': { color: '#16a34a', dark: '#15803d', label: 'Pernas' },
  'Panturrilhas': { color: '#16a34a', dark: '#15803d', label: 'Pernas' },
  'Adutores': { color: '#16a34a', dark: '#15803d', label: 'Pernas' },
  'Abdutores': { color: '#16a34a', dark: '#15803d', label: 'Pernas' },
  'Glúteos': { color: '#a855f7', dark: '#7e22ce', label: 'Glúteos' },
  'Ombros': { color: '#f59e0b', dark: '#b45309', label: 'Ombros' },
  'Trapézio': { color: '#f59e0b', dark: '#b45309', label: 'Ombros' },
  'Pescoço': { color: '#f59e0b', dark: '#b45309', label: 'Pescoço' },
  'Bíceps': { color: '#06b6d4', dark: '#0e7490', label: 'Bíceps' },
  'Antebraços': { color: '#06b6d4', dark: '#0e7490', label: 'Bíceps' },
  'Tríceps': { color: '#ec4899', dark: '#be185d', label: 'Tríceps' },
  'Abdômen': { color: '#14b8a6', dark: '#0f766e', label: 'Core' },
  'Serrátil': { color: '#14b8a6', dark: '#0f766e', label: 'Core' },
  'Costas (cima)': { color: '#2563eb', dark: '#1e40af', label: 'Costas' },
  'Cardio': { color: '#ff6a00', dark: '#c2410c', label: 'Cardio' },
};
function muscleStyle(ex) {
  const primary = (ex && ex.primary && ex.primary[0]) || null;
  return MUSCLE_COLORS[primary] || { color: '#ff6a00', dark: '#c2410c', label: 'Treino' };
}
function muscleIcon(ex) {
  const primary = (ex && ex.primary && ex.primary[0]) || '';
  if (['Quadríceps','Posterior de coxa','Panturrilhas','Glúteos','Adutores','Abdutores'].includes(primary)) return 'run';
  if (primary === 'Abdômen') return 'flex';
  return 'dumbbell';
}
function muscleThumb(ex, size = 72, withLabel = false) {
  const m = muscleStyle(ex);
  const ic = muscleIcon(ex);
  const photo = exImage(ex);
  // If GIF available, show it with subtle colored bottom border
  if (photo) {
    return `<div style="width: 100%; height: 100%; background: #ffffff; position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden; border-bottom: 3px solid ${m.color};">
      <img src="${photo}" alt="${escapeHtml(ex.name || '')}" style="width: 100%; height: 100%; object-fit: contain;" loading="lazy" onerror="this.parentElement.outerHTML='<div style=&quot;width:100%;height:100%;background:linear-gradient(135deg,${m.color},${m.dark});display:flex;align-items:center;justify-content:center;color:#fff;&quot;>${icon(ic, 22).replace(/"/g, '&quot;')}</div>'"/>
      ${withLabel ? `<div style="position: absolute; bottom: 5px; left: 5px; background: ${m.color}; color: #fff; font-size: 8px; font-weight: 700; padding: 2px 6px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.5px;">${m.label}</div>` : ''}
    </div>`;
  }
  // Fallback colored card (when no GIF)
  return `<div style="width: 100%; height: 100%; background: linear-gradient(135deg, ${m.color} 0%, ${m.dark} 100%); display: flex; flex-direction: column; align-items: center; justify-content: center; color: #fff; gap: 4px;">
    ${icon(ic, size > 60 ? 28 : 22)}
    ${withLabel ? `<div style="font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; opacity: 0.9;">${m.label}</div>` : ''}
  </div>`;
}

/* ===== PLANS ===== */
const Plans = {
  list() { return Store.get('plans', []); },
  get(id) { return Plans.list().find(p => p.id === id); },
  active() { return Plans.list().find(p => p.active); },
  save(plan) {
    const list = Plans.list();
    const i = list.findIndex(p => p.id === plan.id);
    if (i >= 0) list[i] = plan; else list.push(plan);
    Store.set('plans', list);
  },
  remove(id) {
    Store.set('plans', Plans.list().filter(p => p.id !== id));
  },
  setActive(id) {
    const list = Plans.list().map(p => ({ ...p, active: p.id === id }));
    Store.set('plans', list);
  },
  /** Seeds default plan if no plans exist. */
  seedIfEmpty() {
    if (Plans.list().length > 0) return;
    // Find common exercises by Portuguese name
    const find = (pt) => EXERCISES.find(e => e.name === pt) || null;
    const ex = (pt, sets, reps) => {
      const e = find(pt);
      return { exId: e ? e.id : null, name: pt, sets, reps };
    };
    const defaultPlan = {
      id: 'plan-' + Date.now(),
      name: 'Push / Pull / Legs',
      description: 'Plano padrão de hipertrofia, 6 dias/semana',
      tag: 'Hipertrofia',
      active: true,
      createdAt: Date.now(),
      days: [
        {
          id: 'push-a', name: 'Push A — Peito, ombro, tríceps', muscle: 'Push',
          exercises: [
            ex('Supino reto', 4, 8),
            ex('Supino inclinado com halter', 4, 10),
            ex('Crucifixo na máquina', 3, 12),
            ex('Desenvolvimento militar', 4, 8),
            ex('Elevação lateral', 3, 12),
            ex('Tríceps testa', 3, 10),
          ]
        },
        {
          id: 'pull-a', name: 'Pull A — Costas e bíceps', muscle: 'Pull',
          exercises: [
            ex('Levantamento terra', 4, 6),
            ex('Barra fixa', 3, 8),
            ex('Remada curvada com barra', 4, 10),
            ex('Puxada na polia', 3, 12),
            ex('Rosca direta com barra', 3, 10),
            ex('Rosca martelo', 3, 12),
          ]
        },
        {
          id: 'legs-a', name: 'Legs A — Quadríceps e glúteo', muscle: 'Legs',
          exercises: [
            ex('Agachamento', 4, 8),
            ex('Leg press', 4, 12),
            ex('Cadeira extensora', 3, 12),
            ex('Stiff (terra romeno)', 4, 10),
            ex('Hip thrust', 4, 10),
            ex('Panturrilha em pé', 4, 15),
          ]
        },
      ]
    };
    Plans.save(defaultPlan);
  }
};

/* ===== WORKOUTS ===== */
const Workouts = {
  /** Currently in-progress workout session, if any. */
  active() { return Store.get('workout.active', null); },
  /** Start a new workout from a plan day. */
  startFromDay(planId, dayId) {
    const plan = Plans.get(planId);
    if (!plan) return null;
    const day = plan.days.find(d => d.id === dayId);
    if (!day) return null;
    const w = {
      id: 'w-' + Date.now(),
      planId, dayId, planName: plan.name, dayName: day.name,
      startedAt: Date.now(),
      exercises: day.exercises.map((e, i) => ({
        idx: i,
        exId: e.exId,
        name: e.name,
        sets: e.sets,
        reps: e.reps,
        log: Array.from({ length: e.sets }, () => ({ kg: '', done: false })),
        finished: false,
      })),
    };
    Store.set('workout.active', w);
    return w;
  },
  /** Quick workout without plan: empty list, user adds exercises */
  startEmpty() {
    const w = {
      id: 'w-' + Date.now(),
      planId: null, dayId: null, planName: 'Treino livre', dayName: '',
      startedAt: Date.now(),
      exercises: [],
    };
    Store.set('workout.active', w);
    return w;
  },
  setActive(w) { Store.set('workout.active', w); },
  cancelActive() { Store.del('workout.active'); },
  finishActive() {
    const w = Workouts.active();
    if (!w) return null;
    w.finishedAt = Date.now();
    w.duration = Math.round((w.finishedAt - w.startedAt) / 60000); // minutes
    // calculate totals
    let totalVolume = 0, totalSets = 0;
    for (const ex of w.exercises) {
      for (const s of ex.log) {
        if (s.done && s.kg) {
          totalVolume += parseFloat(s.kg) * (parseInt(ex.reps) || 0);
          totalSets++;
        }
      }
    }
    w.totalVolume = totalVolume;
    w.totalSets = totalSets;
    const hist = Store.get('workout.history', []);
    hist.push(w);
    Store.set('workout.history', hist);
    Store.del('workout.active');
    return w;
  },
  history() { return Store.get('workout.history', []); },
  recentN(n = 5) { return Workouts.history().slice(-n).reverse(); },
  /** Last weight used for an exercise across history. */
  lastWeight(exName) {
    const hist = Workouts.history();
    for (let i = hist.length - 1; i >= 0; i--) {
      const w = hist[i];
      const ex = w.exercises.find(e => e.name === exName);
      if (ex) {
        for (let j = ex.log.length - 1; j >= 0; j--) {
          if (ex.log[j].done && ex.log[j].kg) return parseFloat(ex.log[j].kg);
        }
      }
    }
    return null;
  },
  /** Workouts in current week. */
  thisWeek() {
    const now = new Date();
    const day = now.getDay();
    const monday = new Date(now);
    monday.setDate(now.getDate() - ((day + 6) % 7));
    monday.setHours(0, 0, 0, 0);
    return Workouts.history().filter(w => w.startedAt >= monday.getTime());
  },
  /** Total volume by week (last n weeks). Returns array of {label, volume}. */
  volumeByWeek(weeks = 8) {
    const now = new Date();
    const day = now.getDay();
    const thisMon = new Date(now);
    thisMon.setDate(now.getDate() - ((day + 6) % 7));
    thisMon.setHours(0, 0, 0, 0);
    const out = [];
    for (let i = weeks - 1; i >= 0; i--) {
      const start = new Date(thisMon); start.setDate(thisMon.getDate() - i * 7);
      const end = new Date(start); end.setDate(start.getDate() + 7);
      const vol = Workouts.history()
        .filter(w => w.startedAt >= start.getTime() && w.startedAt < end.getTime())
        .reduce((s, w) => s + (w.totalVolume || 0), 0);
      out.push({ label: 'S' + (weeks - i), volume: vol });
    }
    return out;
  }
};

/* ===== TIMER (rest timer between sets) ===== */
const Timer = {
  state: { id: null, secs: 0, total: 0, onTick: null, onDone: null },
  start(seconds, onTick, onDone) {
    Timer.stop();
    Timer.state.total = seconds;
    Timer.state.secs = seconds;
    Timer.state.onTick = onTick;
    Timer.state.onDone = onDone;
    onTick && onTick(seconds, seconds);
    Timer.state.id = setInterval(() => {
      Timer.state.secs--;
      onTick && onTick(Timer.state.secs, Timer.state.total);
      if (Timer.state.secs <= 0) {
        Timer.stop();
        onDone && onDone();
      }
    }, 1000);
  },
  stop() {
    if (Timer.state.id) clearInterval(Timer.state.id);
    Timer.state.id = null;
  },
  isRunning() { return !!Timer.state.id; }
};

/* ===== AI: Coach via Gemini ===== */
function buildExercisesContext() {
  // Compact format: id|name|primary_muscle|equipment|level
  return EXERCISES.map(e =>
    `${e.id}|${e.name}|${(e.primary[0] || '?')}|${e.equipment}|${e.level}`
  ).join('\n');
}

function buildCoachSystem() {
  const exContext = EXERCISES.length ? buildExercisesContext() : '(biblioteca não carregada)';
  const hist = Workouts.recentN(5);
  const week = Workouts.thisWeek();
  const userCtx = `\nContexto do usuário:\n- Treinos esta semana: ${week.length}\n- Últimos treinos: ${hist.map(w => `${w.dayName || w.planName}`).join('; ') || 'nenhum'}\n- Plano ativo: ${Plans.active()?.name || 'nenhum'}`;

  return `Você é o "Forge Coach", personal trainer virtual brasileiro especializado em musculação, cardio e CrossFit.

REGRAS:
- Responda sempre em português do Brasil, tom amigável e direto
- Cria planos de treino usando APENAS exercícios da biblioteca abaixo
- Use os exIds EXATOS da biblioteca, NUNCA invente IDs
- Recomende volumes seguros (3-5 séries × 6-15 reps tipicamente)
- Considere o objetivo, nível e disponibilidade da pessoa

QUANDO criar/atualizar um PLANO de treino, responda em DUAS partes:
1. Texto curto explicando o plano (máx 2-3 frases)
2. Bloco JSON em fences markdown \`\`\`json ... \`\`\` com este formato EXATO:

\`\`\`json
{
  "type": "plan",
  "name": "Nome curto do plano",
  "tag": "Hipertrofia|Força|Cardio|Misto",
  "days": [
    {
      "name": "Push A — Peito e tríceps",
      "muscle": "Push",
      "exercises": [
        {"exId": "id_da_biblioteca", "sets": 4, "reps": 8}
      ]
    }
  ]
}
\`\`\`

QUANDO for análise de progresso, dúvida, ajuste sem novo plano, etc → texto normal sem JSON.

BIBLIOTECA DE EXERCÍCIOS (use apenas estes IDs, formato: id|nome|músculo|equipamento|nível):
${exContext}
${userCtx}`;
}

const AI = {
  async chat(messages) {
    // Use the backend proxy at /api/chat (Cloudflare Pages Function)
    // This hides the Gemini API key on the server side.
    const body = {
      contents: messages.map(m => ({ role: m.role || 'user', parts: [{ text: m.text }] })),
      systemInstruction: { parts: [{ text: buildCoachSystem() }] }
    };
    const res = await fetch('/api/chat', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    const txt = await res.text();
    if (!res.ok) {
      let msg = txt;
      try {
        const parsed = JSON.parse(txt);
        if (parsed.error) {
          // error can be string or { code, message, status }
          msg = typeof parsed.error === 'string'
            ? parsed.error
            : (parsed.error.message || JSON.stringify(parsed.error));
        }
      } catch {}
      throw new Error('Coach indisponível: ' + String(msg).slice(0, 250));
    }
    let data;
    try { data = JSON.parse(txt); } catch { throw new Error('Resposta inválida do Coach'); }
    // Gemini also wraps errors inside 200 sometimes
    if (data.error) {
      const m = typeof data.error === 'string' ? data.error : (data.error.message || JSON.stringify(data.error));
      throw new Error('Coach erro: ' + String(m).slice(0, 250));
    }
    return data.candidates?.[0]?.content?.parts?.[0]?.text || '(sem resposta)';
  }
};

/** Parse AI response: detect JSON plan block. Returns { text, plan: {...}|null }. */
function parseAIPlan(text) {
  // Look for ```json ... ``` block with type: "plan"
  const m = text.match(/```json\s*\n([\s\S]*?)\n```/);
  if (!m) return { text, plan: null };
  try {
    const obj = JSON.parse(m[1]);
    if (obj.type === 'plan' && obj.days && Array.isArray(obj.days)) {
      // Strip the JSON block from text for clean display
      const cleanText = text.replace(/```json\s*\n[\s\S]*?\n```/, '').trim();
      // Validate exIds
      const validDays = obj.days.map(day => ({
        ...day,
        exercises: (day.exercises || [])
          .filter(ex => ex.exId && EX_BY_ID[ex.exId])
          .map(ex => ({
            exId: ex.exId,
            name: EX_BY_ID[ex.exId].name,
            sets: parseInt(ex.sets) || 3,
            reps: parseInt(ex.reps) || 10,
          }))
      })).filter(d => d.exercises.length > 0);
      if (validDays.length === 0) return { text, plan: null };
      return {
        text: cleanText || 'Plano gerado:',
        plan: {
          name: obj.name || 'Plano sem nome',
          tag: obj.tag || 'Hipertrofia',
          days: validDays,
        }
      };
    }
  } catch (e) {
    console.warn('JSON parse failed:', e);
  }
  return { text, plan: null };
}

/* ===== STATE ===== */
const State = {
  screen: 'home',
  coachSubTab: 'chat',
  libFilter: { muscle: 'Todos', equipment: 'Todos', search: '' },
  libPickMode: null, // null | 'addToWorkout' | 'addToDay-N'
  editingPlan: null, // plan being created/edited
  cardioTab: 'Corrida',
  funcionalMode: 'AMRAP',
  funcionalSecs: 720,
  funcionalRunning: false,
  funcionalRounds: 0,
  chatMessages: [
    { role: 'model', text: 'Olá! Sou seu Forge Coach. Posso criar planos, analisar seu progresso ou sugerir ajustes. O que quer agora?' }
  ],
  chatLoading: false,
};

/* ===== UTILS ===== */
function fmt(n, dec = 1) {
  if (typeof n !== 'number' || !isFinite(n)) return '0';
  return n.toFixed(dec).replace('.', ',');
}
function fmtTime(secs) {
  const m = Math.floor(secs / 60), s = secs % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}
function timeAgo(ts) {
  const diff = Math.floor((Date.now() - ts) / 1000);
  if (diff < 60) return 'agora';
  if (diff < 3600) return Math.floor(diff / 60) + 'min';
  if (diff < 86400) return Math.floor(diff / 3600) + 'h';
  const days = Math.floor(diff / 86400);
  if (days < 7) return days + 'd';
  return new Date(ts).toLocaleDateString('pt-BR');
}
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' })[c]);
}

/* ===== TOAST ===== */
function toast(msg, type = 'info') {
  const t = document.createElement('div');
  t.className = 'toast toast-' + type;
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.classList.add('show'), 10);
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 2500);
}

/* ===== SCREEN: HOME (versão simplificada) ===== */
function screenHome() {
  const user = Config.user;
  const recent = Workouts.recentN(3);
  const active = Workouts.active();
  const plan = Plans.active();

  let todayExercises = 0, todayLabel = '', todayDayId = null;
  if (active) {
    todayLabel = active.dayName || active.planName;
    todayExercises = active.exercises.length;
  } else if (plan && plan.days.length) {
    const di = new Date().getDay() % plan.days.length;
    const day = plan.days[di];
    todayLabel = day.name;
    todayExercises = day.exercises.length;
    todayDayId = day.id;
  }

  return `
    <div class="greeting">
      <div>
        <div class="greeting-hi">Olá,</div>
        <div class="greeting-name">${escapeHtml(user.name)}</div>
      </div>
      <div class="avatar-mini" onclick="navigate('perfil')">${user.name[0] || 'C'}</div>
    </div>

    ${active ? `
      <div class="workout-hero">
        <span class="workout-tag">Continuar</span>
        <div class="workout-title">${escapeHtml(active.dayName || active.planName)}</div>
        <div class="workout-meta">
          <span>${active.exercises.length} exercícios</span>
          <span class="dot">·</span>
          <span>iniciado ${timeAgo(active.startedAt)}</span>
        </div>
        <button class="workout-btn" onclick="navigate('musculacao')">${icon('play', 16)} Continuar</button>
      </div>
    ` : todayLabel ? `
      <div class="workout-hero">
        <span class="workout-tag">Treino de hoje</span>
        <div class="workout-title">${escapeHtml(todayLabel)}</div>
        <div class="workout-meta"><span>${todayExercises} exercícios</span></div>
        <button class="workout-btn" onclick="startWorkout('${plan.id}', '${todayDayId}')">${icon('play', 16)} Iniciar</button>
      </div>
    ` : `
      <div class="workout-hero">
        <span class="workout-tag">Comece agora</span>
        <div class="workout-title">Sem plano ativo</div>
        <div class="workout-meta"><span>Crie pelo Coach IA</span></div>
        <button class="workout-btn" onclick="navigate('coach')">${icon('zap', 14)} Criar com IA</button>
      </div>
    `}

    ${recent.length ? `
      <div class="section-title">
        <h2>Últimos treinos</h2>
        <a href="#" onclick="navigate('historico'); return false;">Ver tudo ${icon('arrow', 12)}</a>
      </div>
      <div class="recent-list">
        ${recent.map(w => `
          <div class="recent-item">
            <div class="recent-icon">${icon('dumbbell', 20)}</div>
            <div class="recent-info">
              <div class="recent-name">${escapeHtml(w.dayName || w.planName || 'Treino')}</div>
              <div class="recent-meta">${w.duration || 0} min</div>
            </div>
            <div class="recent-time">${timeAgo(w.startedAt)}</div>
          </div>
        `).join('')}
      </div>
    ` : ''}
  `;
}

/* ===== SCREEN: TREINO TIPO ===== */
function screenTreinoTipo() {
  const plan = Plans.active();
  return `
    <div class="screen-title">
      <div class="screen-title-main">Que treino vai fazer?</div>
      <div class="screen-title-sub">Escolha a modalidade</div>
    </div>
    <div class="training-type-grid" style="margin-top: 12px;">
      <div class="type-card" onclick="navigate('musculacao')">
        <div class="type-icon-wrap">${icon('dumbbell', 22)}</div>
        <div class="type-title">Musculação</div>
        <div class="type-sub">Séries, reps, cargas</div>
      </div>
      <div class="type-card" onclick="navigate('cardio')">
        <div class="type-icon-wrap">${icon('run', 22)}</div>
        <div class="type-title">Corrida</div>
        <div class="type-sub">Distância, ritmo</div>
      </div>
      <div class="type-card" onclick="navigate('cardio')">
        <div class="type-icon-wrap">${icon('bike', 22)}</div>
        <div class="type-title">Bike</div>
        <div class="type-sub">Indoor ou outdoor</div>
      </div>
      <div class="type-card" onclick="navigate('cardio')">
        <div class="type-icon-wrap">${icon('swim', 22)}</div>
        <div class="type-title">Natação</div>
        <div class="type-sub">Voltas e estilos</div>
      </div>
      <div class="type-card" onclick="navigate('funcional')">
        <div class="type-icon-wrap">${icon('stopwatch', 22)}</div>
        <div class="type-title">CrossFit</div>
        <div class="type-sub">AMRAP, EMOM, FT</div>
      </div>
      <div class="type-card" onclick="navigate('funcional')">
        <div class="type-icon-wrap">${icon('flex', 22)}</div>
        <div class="type-title">Funcional</div>
        <div class="type-sub">Circuito, mobilidade</div>
      </div>
    </div>

    ${plan ? `
      <div class="section-title" style="margin-top: 20px;"><h2>Plano ativo: ${escapeHtml(plan.name)}</h2></div>
      ${plan.days.map(d => `
        <div class="plan-card" onclick="startWorkout('${plan.id}', '${d.id}')">
          <div class="plan-head">
            <div class="plan-name">${escapeHtml(d.name)}</div>
            <div class="plan-tag">${d.exercises.length} ex.</div>
          </div>
          <div class="plan-meta"><span>${escapeHtml(d.muscle || '')}</span></div>
        </div>
      `).join('')}
    ` : ''}
  `;
}

/* ===== SCREEN: MUSCULAÇÃO (the workout) ===== */
function screenMusculacao() {
  const w = Workouts.active();
  if (!w) {
    // No active workout — show start options
    const plan = Plans.active();
    return `
      <div class="screen-title">
        <div class="screen-title-main">Musculação</div>
        <div class="screen-title-sub">Escolha o que treinar hoje</div>
      </div>
      ${plan ? `
        <div class="section-title"><h2>Plano: ${escapeHtml(plan.name)}</h2></div>
        ${plan.days.map(d => `
          <div class="plan-card" onclick="startWorkout('${plan.id}', '${d.id}')">
            <div class="plan-head">
              <div class="plan-name">${escapeHtml(d.name)}</div>
              <div class="plan-tag">${d.exercises.length} ex.</div>
            </div>
            <div class="plan-meta"><span>${escapeHtml(d.muscle || '')}</span></div>
          </div>
        `).join('')}
      ` : `
        <div style="text-align:center; padding: 24px; background: var(--surface); border-radius: 14px; color: var(--text-dim); font-size: 13px;">
          Você ainda não tem um plano ativo.<br/><br/>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px;">
            <button class="workout-btn" style="margin: 0;" onclick="openPlanEditor()">${icon('plus', 14)} Criar manual</button>
            <button class="ctrl-btn primary" style="font-size: 13px;" onclick="navigate('coach')">${icon('zap', 14)} Com IA</button>
          </div>
        </div>
      `}
      <button class="new-plan-btn" style="margin-top: 16px;" onclick="startEmptyWorkout()">${icon('plus', 16)} Treino livre (escolher exercícios)</button>
    `;
  }

  // Active workout in progress (simplified)
  return `
    <div class="workout-header">
      <div class="workout-header-info">
        <div class="title">${escapeHtml(w.dayName || w.planName)}</div>
      </div>
      <button class="end-btn" onclick="finishWorkout()">Encerrar</button>
    </div>

    ${w.exercises.length === 0 ? `
      <div style="text-align:center; padding: 24px; background: var(--surface); border-radius: 14px; color: var(--text-dim); font-size: 13px; margin-bottom: 12px;">
        Treino vazio. Adicione exercícios pela biblioteca.
      </div>
    ` : ''}

    ${w.exercises.map((ex, i) => exerciseCard(ex, i, w)).join('')}

    <button class="new-plan-btn" style="margin-top: 12px;" onclick="addExerciseToWorkout()">${icon('plus', 14)} Adicionar exercício</button>
    <button class="workout-btn" style="margin-top: 12px;" onclick="finishWorkout()">${icon('check', 16)} Finalizar treino</button>
  `;
}

function exerciseCard(ex, idx, workout) {
  const done = ex.finished;
  const setsDone = ex.log.filter(s => s.done).length;
  const setsTotal = ex.log.length;
  const isExpanded = State.expandedEx === idx;
  const status = done ? 'feito' : (isExpanded ? 'atual' : 'pendente');
  const statusLabel = done ? 'Feito' : (isExpanded ? 'Atual' : (setsDone > 0 ? 'Em andamento' : 'Pendente'));

  const exData = ex.exId ? EX_BY_ID[ex.exId] : null;
  return `
    <div class="ex-card ${done ? 'done' : ''} ${isExpanded ? 'active' : ''}">
      <div class="ex-row" onclick="toggleExpand(${idx})">
        <div class="ex-thumb">
          ${muscleThumb(exData)}
          ${done ? `<div class="ex-pill feito">✓</div>` : (setsDone > 0 ? `<div class="ex-pill atual">${setsDone}/${setsTotal}</div>` : '')}
        </div>
        <div class="ex-info">
          <div class="ex-name">${escapeHtml(ex.name)}</div>
          <div class="ex-meta">${ex.sets} × ${ex.reps} reps</div>
        </div>
      </div>
      ${isExpanded ? exerciseExpanded(ex, idx) : ''}
    </div>
  `;
}

function exerciseExpanded(ex, idx) {
  const exData = ex.exId ? EX_BY_ID[ex.exId] : null;
  const photo = exImage(exData);
  const lastWeight = Workouts.lastWeight(ex.name);
  const prev = lastWeight ? `${fmt(lastWeight, 1)} kg` : '—';
  const m = muscleStyle(exData);

  return `
    <div class="ex-expanded" onclick="event.stopPropagation()">
      <div style="aspect-ratio: 16/10; border-radius: 12px; margin: 8px 0 12px; overflow: hidden; position: relative;">
        ${muscleThumb(exData, 100, true)}
      </div>
      ${exData ? `<div style="font-size: 11px; color: var(--text-dim); margin-bottom: 8px;">${escapeHtml(exData.primary.join(', '))} · ${escapeHtml(exData.equipment)} · ${escapeHtml(exData.level)}</div>` : ''}

      <div class="sets-list">
        ${ex.log.map((s, si) => `
          <div class="set-row-simple">
            <div class="set-num-simple">${si+1}</div>
            <div class="set-input-wrap">
              <input class="set-input" inputmode="decimal" placeholder="—" value="${s.kg}" oninput="updateSetKg(${idx}, ${si}, this.value)" />
              <span class="set-input-suffix">kg</span>
            </div>
            <div class="set-check ${s.done ? 'checked' : ''}" onclick="toggleSetDone(${idx}, ${si})">${s.done ? icon('check', 16) : ''}</div>
          </div>
        `).join('')}
      </div>
      ${lastWeight ? `<div style="font-size: 10px; color: var(--text-faint); text-align: right; margin-top: 4px;">última carga: ${prev}</div>` : ''}

      <div class="rest-timer" id="rest-timer-${idx}" style="display: ${Timer.isRunning() ? 'flex' : 'none'};">
        <div class="timer-circle pulse" id="rest-num-${idx}">—</div>
        <div class="timer-text">
          <b>Descanso</b><br/>
          <span style="color: var(--text-dim); font-size: 11px;" id="rest-label-${idx}">Aguardando próxima série…</span>
        </div>
        <button class="ctrl-btn" style="flex:0; padding: 8px 12px;" onclick="stopRestTimer()">${icon('x', 14)}</button>
      </div>

      ${ex.finished ? `
        <button class="new-plan-btn" style="margin-top: 8px;" onclick="markExerciseFinished(${idx}, false)">↻ Reabrir exercício</button>
      ` : `
        <button class="workout-btn" style="margin-top: 12px;" onclick="markExerciseFinished(${idx}, true)">${icon('check', 14)} Marcar exercício concluído</button>
      `}
    </div>
  `;
}

/* ===== SCREEN: CARDIO ===== */
function screenCardio() {
  const recent = Workouts.history().filter(w => w.type === 'cardio').slice(-5).reverse();
  return `
    <div class="screen-title">
      <div class="screen-title-main">Cardio</div>
      <div class="screen-title-sub">Registre uma sessão</div>
    </div>
    <div class="tabs">
      <div class="tab ${State.cardioTab === 'Corrida' ? 'active' : ''}" onclick="setCardioTab('Corrida')">${icon('run', 14)} Corrida</div>
      <div class="tab ${State.cardioTab === 'Bike' ? 'active' : ''}" onclick="setCardioTab('Bike')">${icon('bike', 14)} Bike</div>
      <div class="tab ${State.cardioTab === 'Natação' ? 'active' : ''}" onclick="setCardioTab('Natação')">${icon('swim', 14)} Natação</div>
    </div>
    <div class="input-group">
      <div class="input-label">${State.cardioTab === 'Natação' ? 'Distância (m)' : 'Distância (km)'}</div>
      <input class="input-field" id="cardio-dist" inputmode="decimal" placeholder="Ex: 5,2" />
    </div>
    <div class="input-group">
      <div class="input-label">Tempo (min)</div>
      <input class="input-field" id="cardio-time" inputmode="numeric" placeholder="Ex: 28" />
    </div>
    <div class="input-group">
      <div class="input-label">Tipo de treino</div>
      <input class="input-field" id="cardio-note" placeholder="Ex: ${State.cardioTab} intervalada" />
    </div>
    <button class="workout-btn" onclick="saveCardio()">${icon('check', 14)} Salvar treino</button>

    ${recent.length ? `
      <div class="section-title"><h2>Últimos ${State.cardioTab.toLowerCase()}s</h2></div>
      <div class="recent-list">
        ${recent.map(w => `
          <div class="recent-item">
            <div class="recent-icon">${icon('run', 18)}</div>
            <div class="recent-info">
              <div class="recent-name">${fmt(w.distance, 2)} ${w.unit || 'km'} · ${w.duration} min</div>
              <div class="recent-meta">${escapeHtml(w.note || '')}</div>
            </div>
            <div class="recent-time">${timeAgo(w.startedAt)}</div>
          </div>
        `).join('')}
      </div>
    ` : ''}
  `;
}

/* ===== SCREEN: FUNCIONAL ===== */
function screenFuncional() {
  return `
    <div class="screen-title">
      <div class="screen-title-main">CrossFit / Funcional</div>
      <div class="screen-title-sub">Escolha o modo</div>
    </div>
    <div class="crossfit-mode">
      ${['AMRAP', 'EMOM', 'FOR TIME'].map(m => `
        <div class="mode-pill ${State.funcionalMode === m ? 'active' : ''}" onclick="setFuncionalMode('${m}')">
          ${m} <small>${m === 'AMRAP' ? 'Maior nº rounds' : m === 'EMOM' ? 'A cada minuto' : 'Menor tempo'}</small>
        </div>
      `).join('')}
    </div>
    <div class="input-group">
      <div class="input-label">Tempo total (min)</div>
      <input class="input-field" inputmode="numeric" id="func-mins" value="${Math.floor(State.funcionalSecs/60)}" oninput="setFuncionalMins(this.value)" />
    </div>
    <div class="mega-timer">
      <div class="mega-time" id="func-time">${fmtTime(State.funcionalSecs)}</div>
      <div class="mega-label">${State.funcionalMode}${State.funcionalRunning ? ' · rodando' : ''}</div>
    </div>
    <div class="timer-controls">
      <button class="ctrl-btn primary" onclick="startFuncional()">${icon(State.funcionalRunning ? 'pause' : 'play', 14)} ${State.funcionalRunning ? 'Pausar' : 'Iniciar'}</button>
      <button class="ctrl-btn danger" onclick="resetFuncional()">${icon('stop', 14)} Parar</button>
    </div>
    <div class="round-counter">
      <div class="round-info">Rounds completos<b>${State.funcionalRounds}</b></div>
      <button class="round-add" onclick="addRound()">${icon('plus', 18)}</button>
    </div>
  `;
}

/* ===== SCREEN: HISTÓRICO ===== */
function screenHistorico() {
  const hist = Workouts.history();
  const week = Workouts.thisWeek();
  const totalMin = hist.reduce((s, w) => s + (w.duration || 0), 0);
  const totalVol = hist.reduce((s, w) => s + (w.totalVolume || 0), 0);
  const volByWeek = Workouts.volumeByWeek(8);
  const maxVol = Math.max(...volByWeek.map(v => v.volume), 1);

  return `
    <div class="screen-title">
      <div class="screen-title-main">Seu progresso</div>
      <div class="screen-title-sub">Tudo o que você já fez</div>
    </div>
    <div class="stats-grid">
      <div class="stat-card"><div class="stat-value">${hist.length}</div><div class="stat-label">Treinos</div></div>
      <div class="stat-card"><div class="stat-value">${Math.floor(totalMin/60)}h</div><div class="stat-label">Tempo</div></div>
      <div class="stat-card"><div class="stat-value">${fmt(totalVol/1000, 1)}t</div><div class="stat-label">Volume</div></div>
    </div>
    ${hist.length === 0 ? `
      <div style="text-align:center; padding: 24px; background: var(--surface); border-radius: 14px; color: var(--text-faint); font-size: 13px;">
        Nenhum treino salvo ainda. Comece um treino na aba Home.
      </div>
    ` : `
      <div class="chart-card">
        <div class="chart-title">Volume por semana</div>
        <div class="chart-sub">Carga total levantada (kg)</div>
        <div class="chart-area">
          ${volByWeek.map(v => `<div class="chart-bar" style="height: ${(v.volume/maxVol)*100}%" title="${v.label}: ${fmt(v.volume,0)}kg"></div>`).join('')}
        </div>
        <div class="chart-labels">
          ${volByWeek.map(v => `<div class="chart-label">${v.label}</div>`).join('')}
        </div>
      </div>
      <div class="section-title"><h2>Treinos recentes</h2></div>
      <div class="recent-list">
        ${hist.slice().reverse().slice(0, 30).map(w => `
          <div class="recent-item">
            <div class="recent-icon">${icon(w.type === 'cardio' ? 'run' : 'dumbbell', 18)}</div>
            <div class="recent-info">
              <div class="recent-name">${escapeHtml(w.dayName || w.planName || 'Treino')}</div>
              <div class="recent-meta">${w.totalSets ? w.totalSets+' séries · ' : ''}${w.duration||0} min${w.totalVolume ? ' · '+fmt(w.totalVolume/1000,2)+'t' : ''}</div>
            </div>
            <div class="recent-time">${timeAgo(w.startedAt)}</div>
          </div>
        `).join('')}
      </div>
    `}
  `;
}

/* ===== SCREEN: COACH ===== */
function screenCoach() {
  return `
    <div class="coach-header">
      <div>
        <div class="coach-title">Coach IA</div>
        <div class="coach-sub">Crie planos, refine conversando, peça análise</div>
      </div>
      <div class="coach-status">Online</div>
    </div>
    <div class="sub-tabs">
      <div class="sub-tab ${State.coachSubTab === 'chat' ? 'active' : ''}" onclick="setCoachTab('chat')">Conversar</div>
      <div class="sub-tab ${State.coachSubTab === 'planos' ? 'active' : ''}" onclick="setCoachTab('planos')">Meus planos</div>
    </div>
    ${State.coachSubTab === 'chat' ? coachChat() : coachPlans()}
  `;
}

function coachChat() {
  return `
    <div class="coach-suggestions">
      <div class="coach-sug-pill" onclick="askCoach('Como tá meu progresso esse mês?')">${icon('chart', 12)} Como tá meu progresso?</div>
      <div class="coach-sug-pill" onclick="askCoach('Sugere um treino curto pra hoje, ${Math.round((Date.now()/3600000)%24) < 12 ? 'manhã' : 'tarde'}.')">${icon('flame', 12)} Sugestão pra hoje</div>
      <div class="coach-sug-pill" onclick="askCoach('Quero criar um plano novo. Pergunta o que precisa pra montar.')">${icon('clipboard', 12)} Criar plano</div>
      <div class="coach-sug-pill" onclick="askCoach('Quais meus pontos fracos no treino baseado no histórico?')">${icon('target', 12)} Pontos fracos</div>
    </div>

    <div class="msg-list" id="msg-list">
      ${State.chatMessages.map((m, i) => msgBubble(m, i)).join('')}
      ${State.chatLoading ? `<div class="msg ai" style="opacity: 0.6;"><span class="pulse">Pensando…</span></div>` : ''}
    </div>

    <div class="chat-input">
      <input class="chat-input-field" id="chat-input" placeholder="Pergunta ou pede um plano..." onkeydown="if(event.key==='Enter') sendChat()" />
      <button class="chat-send" onclick="sendChat()">${icon('arrow', 18)}</button>
    </div>
  `;
}

function msgBubble(m, i) {
  const isAI = m.role === 'model' || m.role === 'ai';
  if (isAI) {
    return `
      <div class="msg-author">
        <div class="ai-avatar">F</div>
        <span>Forge Coach</span>
      </div>
      ${m.text ? `<div class="msg ai">${formatMsgText(m.text)}</div>` : ''}
      ${m.plan ? aiPlanCard(m, i) : ''}
    `;
  }
  return `<div class="msg user">${escapeHtml(m.text)}</div>`;
}

function aiPlanCard(m, i) {
  const p = m.plan;
  const totalEx = p.days.reduce((s, d) => s + d.exercises.length, 0);
  return `
    <div class="ai-plan-card">
      <div class="ai-plan-tag">${escapeHtml(p.tag)} · ${p.days.length} dias · ${totalEx} exercícios</div>
      <div class="ai-plan-name">${escapeHtml(p.name)}</div>
      <div class="ai-plan-days">
        ${p.days.map(d => `
          <div class="ai-plan-day">
            <div class="ai-plan-day-name">${escapeHtml(d.name)}</div>
            <div class="ai-plan-day-ex">
              ${d.exercises.map(ex => {
                const exData = EX_BY_ID[ex.exId];
                const photo = exImage(exData);
                return `
                <div class="ai-ex-row">
                  <div class="ai-ex-thumb">
                    ${photo ? `<img src="${photo}" alt="${escapeHtml(ex.name)}" loading="lazy" onerror="this.style.display='none'"/>` : ''}
                  </div>
                  <span class="ai-ex-name">${escapeHtml(ex.name)}</span>
                  <span class="ai-ex-vol">${ex.sets}×${ex.reps}</span>
                </div>`;
              }).join('')}
            </div>
          </div>
        `).join('')}
      </div>
      <div class="ai-plan-actions">
        ${m.planAdded ? `
          <button class="pp-secondary" disabled style="opacity:0.6; cursor:default;">${icon('check', 14)} Adicionado aos seus planos</button>
        ` : `
          <button class="pp-primary" onclick="adoptPlan(${i})">${icon('check', 14)} Adicionar plano</button>
          <button class="pp-secondary" onclick="editAIPlan(${i})">${icon('edit', 14)} Editar antes</button>
        `}
      </div>
    </div>
  `;
}

function formatMsgText(text) {
  // simple markdown-ish: **bold**, line breaks
  let html = escapeHtml(text);
  html = html.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
  html = html.replace(/\n/g, '<br/>');
  return html;
}

function coachPlans() {
  const plans = Plans.list();
  return `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 14px;">
      <button class="workout-btn" style="margin: 0;" onclick="openPlanEditor()">${icon('plus', 14)} Criar manual</button>
      <button class="ctrl-btn primary" style="font-size: 13px;" onclick="setCoachTab('chat')">${icon('zap', 14)} Criar com IA</button>
    </div>
    ${plans.length === 0 ? `
      <div style="text-align:center; padding: 24px; background: var(--surface); border-radius: 14px; color: var(--text-dim); font-size: 13px;">
        Sem planos ainda. Crie do zero ou peça pra IA montar.
      </div>
    ` : plans.map(p => `
      <div class="plan-card ${p.active ? 'featured' : ''}">
        <div class="plan-head">
          <div class="plan-name">${escapeHtml(p.name)}</div>
          ${p.active ? `<div class="plan-tag">ATIVO</div>` : `<div class="plan-tag muted">Salvo</div>`}
        </div>
        <div class="plan-meta"><span>${p.days.length} dias</span>${p.tag ? `<span class="dot">·</span><span>${escapeHtml(p.tag)}</span>` : ''}</div>
        <div style="display: flex; gap: 6px; margin-top: 10px;">
          ${p.active ? '' : `<button class="ctrl-btn primary" style="font-size: 11px; padding: 8px;" onclick="setPlanActive('${p.id}')">Ativar</button>`}
          <button class="ctrl-btn" style="font-size: 11px; padding: 8px;" onclick="openPlanEditor('${p.id}')">${icon('edit', 12)}</button>
          <button class="ctrl-btn" style="font-size: 11px; padding: 8px;" onclick="deletePlan('${p.id}')">${icon('trash', 12)}</button>
        </div>
      </div>
    `).join('')}
  `;
}

/* ===== SCREEN: BIBLIOTECA ===== */
const MUSCLE_FILTERS = ['Todos', 'Peito', 'Costas', 'Ombros', 'Quadríceps', 'Glúteos', 'Posterior de coxa', 'Bíceps', 'Tríceps', 'Abdômen', 'Panturrilhas'];
const EQUIP_FILTERS = ['Todos', 'Barra', 'Halter', 'Máquina', 'Peso corporal', 'Cabo', 'Kettlebell'];

function filterExercises() {
  const f = State.libFilter;
  return EXERCISES.filter(ex => {
    if (f.muscle !== 'Todos' && !ex.primary.includes(f.muscle)) return false;
    if (f.equipment !== 'Todos' && ex.equipment !== f.equipment) return false;
    if (f.search && !ex.name.toLowerCase().includes(f.search.toLowerCase()) &&
                    !ex.name_en.toLowerCase().includes(f.search.toLowerCase())) return false;
    return true;
  });
}

function screenBiblioteca() {
  const filtered = filterExercises();
  const showing = filtered.slice(0, 60);
  return `
    <div class="screen-title">
      <div class="screen-title-main">Biblioteca</div>
      <div class="screen-title-sub">${EXERCISES.length} exercícios catalogados</div>
    </div>
    <div class="lib-search">
      ${icon('search', 16)}
      <input placeholder="Buscar exercício..." value="${escapeHtml(State.libFilter.search)}" oninput="setLibSearch(this.value)" />
    </div>
    <div class="filter-pills">
      ${MUSCLE_FILTERS.map(m => `
        <div class="filter-pill ${State.libFilter.muscle === m ? 'active' : ''}" onclick="setLibFilter('muscle','${m}')">${m}</div>
      `).join('')}
    </div>
    <div class="filter-pills">
      ${EQUIP_FILTERS.map(e => `
        <div class="filter-pill ${State.libFilter.equipment === e ? 'active' : ''}" onclick="setLibFilter('equipment','${e}')">${e}</div>
      `).join('')}
    </div>
    <div class="lib-grid">
      ${showing.map(ex => `
        <div class="lib-card" onclick="openExerciseDetail('${ex.id}')">
          <div class="lib-photo">
            ${muscleThumb(ex, 100, true)}
            <div class="lib-level">${escapeHtml(ex.level)}</div>
          </div>
          <div class="lib-info">
            <div class="lib-name">${escapeHtml(ex.name)}</div>
            <div class="lib-muscle">${escapeHtml((ex.primary[0] || '') + (ex.primary[1] ? ', ' + ex.primary[1] : ''))}</div>
            <div class="lib-equip">${escapeHtml(ex.equipment)}</div>
          </div>
        </div>
      `).join('')}
    </div>
    <div style="text-align: center; margin-top: 14px; padding: 12px; background: var(--surface); border: 1px dashed var(--border); border-radius: 12px; font-size: 11px; color: var(--text-faint);">
      Mostrando ${showing.length} de ${filtered.length} exercícios
    </div>
  `;
}

/* ===== SCREEN: PERFIL ===== */
function screenPerfil() {
  const u = Config.user;
  const hist = Workouts.history();
  const hasKey = !!Config.geminiKey;

  // Compute PRs from history (max kg per exercise name)
  const prs = {};
  for (const w of hist) {
    for (const ex of (w.exercises || [])) {
      for (const s of (ex.log || [])) {
        if (s.done && s.kg) {
          const v = parseFloat(s.kg);
          if (!prs[ex.name] || v > prs[ex.name].kg) prs[ex.name] = { kg: v, ts: w.startedAt };
        }
      }
    }
  }
  const prList = Object.entries(prs).sort((a,b) => b[1].kg - a[1].kg).slice(0, 6);

  return `
    <div class="profile-head">
      <div class="avatar-big">${(u.name[0]||'C').toUpperCase()}</div>
      <div class="profile-name">${escapeHtml(u.name || 'Sem nome')}</div>
      <div class="profile-email">${escapeHtml(u.email || '—')}</div>
    </div>
    <div class="stats-grid">
      <div class="stat-card"><div class="stat-value">${u.weight ? fmt(u.weight,1) : '—'}</div><div class="stat-label">Peso (kg)</div></div>
      <div class="stat-card"><div class="stat-value">${u.height || '—'}</div><div class="stat-label">Altura (cm)</div></div>
      <div class="stat-card"><div class="stat-value">${u.bf ? u.bf+'%' : '—'}</div><div class="stat-label">% gordura</div></div>
    </div>

    <div class="section-title"><h2>Recordes pessoais</h2></div>
    ${prList.length === 0 ? `
      <div style="text-align:center; padding: 16px; background: var(--surface); border-radius: 12px; color: var(--text-faint); font-size: 12px;">
        Sem recordes ainda. Faça um treino e registre as cargas.
      </div>
    ` : `
      <div class="pr-grid">
        ${prList.map(([name, p]) => `
          <div class="pr-card">
            <div class="pr-icon">${icon('dumbbell', 16)}</div>
            <div class="pr-name">${escapeHtml(name)}</div>
            <div class="pr-value">${fmt(p.kg, 1)} kg</div>
            <div class="pr-meta">${timeAgo(p.ts)}</div>
          </div>
        `).join('')}
      </div>
    `}

    <div class="section-title"><h2>Configurações</h2></div>
    <div class="menu-list">
      <div class="menu-item" onclick="editProfile()">
        <div class="menu-icon">${icon('user', 18)}</div>
        <div class="menu-text"><div class="menu-name">Dados pessoais</div><div class="menu-sub">Nome, peso, altura, % gordura</div></div>
        <div class="menu-arrow">${icon('arrow', 16)}</div>
      </div>
      <div class="menu-item" onclick="exportData()">
        <div class="menu-icon">${icon('download', 18)}</div>
        <div class="menu-text"><div class="menu-name">Exportar dados</div><div class="menu-sub">Backup JSON com tudo</div></div>
        <div class="menu-arrow">${icon('arrow', 16)}</div>
      </div>
      <div class="menu-item" onclick="resetApp()">
        <div class="menu-icon" style="background: rgba(225,29,72,0.15); color: var(--red);">${icon('trash', 18)}</div>
        <div class="menu-text"><div class="menu-name" style="color: var(--red);">Apagar dados</div><div class="menu-sub">Remove todos os treinos e planos</div></div>
        <div class="menu-arrow">${icon('arrow', 16)}</div>
      </div>
      <div class="menu-item">
        <div class="menu-icon">${icon('info', 18)}</div>
        <div class="menu-text"><div class="menu-name">FORGE</div><div class="menu-sub">Versão 1.0 · ${EXERCISES.length} exercícios</div></div>
      </div>
    </div>
  `;
}

/* ===== SCREEN: PLAN EDITOR ===== */
function screenPlanEditor() {
  const p = State.editingPlan;
  if (!p) { setTimeout(() => navigate('coach'), 0); return ''; }

  return `
    <div style="display: flex; align-items: center; gap: 8px; padding: 10px 0;">
      <button class="ctrl-btn" style="flex: 0; padding: 8px 12px;" onclick="cancelPlanEdit()">${icon('arrowLeft', 16)}</button>
      <div style="flex: 1;">
        <div style="font-size: 11px; color: var(--text-dim); text-transform: uppercase; letter-spacing: 1px;">Editor de plano</div>
        <div style="font-size: 18px; font-weight: 800;">${escapeHtml(p.name) || 'Novo plano'}</div>
      </div>
    </div>

    <div class="input-group">
      <div class="input-label">Nome do plano</div>
      <input class="input-field" placeholder="Ex: Push/Pull/Legs Glúteo" value="${escapeHtml(p.name)}" oninput="setEditPlanField('name', this.value)" />
    </div>

    <div class="input-group">
      <div class="input-label">Tag (objetivo)</div>
      <input class="input-field" placeholder="Hipertrofia / Força / Cardio..." value="${escapeHtml(p.tag || '')}" oninput="setEditPlanField('tag', this.value)" />
    </div>

    <div class="section-title"><h2>Dias do treino (${p.days.length})</h2></div>

    ${p.days.length === 0 ? `
      <div style="text-align:center; padding: 20px; background: var(--surface); border: 1px dashed var(--border); border-radius: 12px; color: var(--text-dim); font-size: 13px;">
        Sem dias ainda. Adiciona o primeiro abaixo.
      </div>
    ` : p.days.map((day, di) => editorDayCard(day, di)).join('')}

    <button class="new-plan-btn" style="margin-top: 12px;" onclick="addEditorDay()">${icon('plus', 16)} Adicionar dia</button>

    <div style="display: flex; gap: 8px; margin-top: 20px;">
      <button class="ctrl-btn" onclick="cancelPlanEdit()">Cancelar</button>
      <button class="ctrl-btn primary" onclick="savePlan()">${icon('check', 14)} Salvar plano</button>
    </div>
  `;
}

function editorDayCard(day, di) {
  return `
    <div style="background: var(--surface); border: 1px solid var(--border); border-radius: 14px; padding: 12px; margin-bottom: 10px;">
      <div style="display: flex; gap: 6px; margin-bottom: 8px;">
        <input class="input-field" style="font-size: 14px; padding: 10px;" placeholder="Nome do dia (ex: Push A)" value="${escapeHtml(day.name)}" oninput="setEditorDay(${di}, 'name', this.value)" />
        <button class="ctrl-btn" style="flex: 0; padding: 8px 10px; background: rgba(239,68,68,0.15); color: var(--red); border-color: rgba(239,68,68,0.3);" onclick="removeEditorDay(${di})">${icon('trash', 14)}</button>
      </div>
      <input class="input-field" style="font-size: 12px; padding: 8px; margin-bottom: 10px;" placeholder="Foco (Push, Legs, Glúteos...)" value="${escapeHtml(day.muscle || '')}" oninput="setEditorDay(${di}, 'muscle', this.value)" />

      ${day.exercises.length === 0 ? `
        <div style="text-align: center; padding: 12px; color: var(--text-faint); font-size: 11px; border: 1px dashed var(--border); border-radius: 8px;">
          Sem exercícios neste dia
        </div>
      ` : day.exercises.map((ex, ei) => editorExerciseRow(ex, di, ei)).join('')}

      <button class="new-plan-btn" style="margin-top: 8px; padding: 10px;" onclick="pickExerciseForDay(${di})">${icon('plus', 14)} Adicionar exercício</button>
    </div>
  `;
}

function editorExerciseRow(ex, di, ei) {
  const exData = ex.exId ? EX_BY_ID[ex.exId] : null;
  return `
    <div style="display: flex; gap: 8px; align-items: center; padding: 8px; background: var(--bg-2); border-radius: 10px; margin-bottom: 6px;">
      <div style="width: 44px; height: 44px; border-radius: 8px; overflow: hidden; flex-shrink: 0;">
        ${muscleThumb(exData, 30)}
      </div>
      <div style="flex: 1; min-width: 0;">
        <div style="font-size: 12px; font-weight: 700; line-height: 1.2; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${escapeHtml(ex.name)}</div>
        <div style="display: flex; gap: 4px; align-items: center; margin-top: 4px;">
          <input type="number" min="1" max="10" class="set-input" style="width: 38px; padding: 4px;" value="${ex.sets}" oninput="setEditorEx(${di}, ${ei}, 'sets', parseInt(this.value)||0)" />
          <span style="font-size: 11px; color: var(--text-dim);">×</span>
          <input type="number" min="1" max="50" class="set-input" style="width: 42px; padding: 4px;" value="${ex.reps}" oninput="setEditorEx(${di}, ${ei}, 'reps', parseInt(this.value)||0)" />
          <span style="font-size: 11px; color: var(--text-dim);">reps</span>
        </div>
      </div>
      <button class="ctrl-btn" style="flex: 0; padding: 6px 8px; font-size: 11px;" onclick="removeEditorEx(${di}, ${ei})">${icon('x', 12)}</button>
    </div>
  `;
}

/* ===== ROUTING ===== */
const screens = {
  home: screenHome,
  'treino-tipo': screenTreinoTipo,
  musculacao: screenMusculacao,
  cardio: screenCardio,
  funcional: screenFuncional,
  historico: screenHistorico,
  coach: screenCoach,
  biblioteca: screenBiblioteca,
  'plan-editor': screenPlanEditor,
  perfil: screenPerfil,
};
const screenLabels = {
  home: 'Home', 'treino-tipo': 'Escolher treino', musculacao: 'Musculação',
  cardio: 'Cardio', funcional: 'Funcional', historico: 'Histórico',
  coach: 'Coach IA', biblioteca: 'Biblioteca',
  'plan-editor': 'Editor de plano', perfil: 'Perfil',
};
const navMap = {
  home: 'home', 'treino-tipo': 'treino-tipo', musculacao: 'treino-tipo',
  cardio: 'treino-tipo', funcional: 'treino-tipo',
  historico: 'historico', coach: 'coach', biblioteca: 'coach',
  'plan-editor': 'coach', perfil: 'perfil',
};
const sidebarItems = [
  { id: 'home', icon: 'home', name: 'Home', desc: 'Resumo e treino do dia' },
  { id: 'treino-tipo', icon: 'target', name: 'Escolher treino', desc: 'Modalidades' },
  { id: 'musculacao', icon: 'dumbbell', name: 'Musculação', desc: 'Treino atual' },
  { id: 'cardio', icon: 'run', name: 'Cardio', desc: 'Corrida, bike, natação' },
  { id: 'funcional', icon: 'stopwatch', name: 'Funcional', desc: 'AMRAP, EMOM, FT' },
  { id: 'historico', icon: 'chart', name: 'Histórico', desc: 'Progresso e gráficos' },
  { id: 'coach', icon: 'zap', name: 'Coach IA', desc: 'Chat + planos' },
  { id: 'biblioteca', icon: 'clipboard', name: 'Biblioteca', desc: '800+ exercícios' },
  { id: 'perfil', icon: 'user', name: 'Perfil', desc: 'Dados, metas, config' },
];
const navItems = [
  { id: 'home', icon: 'home', label: 'Home' },
  { id: 'treino-tipo', icon: 'dumbbell', label: 'Treinar' },
  { id: 'coach', icon: 'zap', label: 'Coach' },
  { id: 'historico', icon: 'chart', label: 'Histórico' },
  { id: 'perfil', icon: 'user', label: 'Perfil' },
];

function buildSidebar() {
  const list = document.getElementById('screenList');
  if (!list) return;
  list.innerHTML = sidebarItems.map(it => `
    <div class="screen-item" data-screen="${it.id}" onclick="navigate('${it.id}')">
      <div class="screen-icon">${icon(it.icon, 18)}</div>
      <div><div class="screen-name">${it.name}</div><div class="screen-desc">${it.desc}</div></div>
    </div>
  `).join('');
}
function buildBottomNav() {
  const nav = document.getElementById('bottomNav');
  if (!nav) return;
  nav.innerHTML = navItems.map(it => `
    <div class="nav-item" data-screen="${it.id}" onclick="navigate('${it.id}')">
      <div class="nav-icon-wrap">${icon(it.icon, 22)}</div>
      <div class="nav-label">${it.label}</div>
    </div>
  `).join('');
}
function navigate(name) {
  if (!screens[name]) return;
  State.screen = name;
  if (name !== 'musculacao') State.expandedEx = null;
  render();
  const content = document.getElementById('content');
  if (content) content.scrollTop = 0;
}
function render() {
  const content = document.getElementById('content');
  if (!content) return;
  content.innerHTML = screens[State.screen]();
  document.querySelectorAll('.screen-item').forEach(el => {
    el.classList.toggle('active', el.dataset.screen === State.screen);
  });
  const navTarget = navMap[State.screen];
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.screen === navTarget);
  });
  const lbl = document.getElementById('currentScreenLabel');
  if (lbl) lbl.textContent = screenLabels[State.screen];
}

/* ===== ACTIONS ===== */
function startWorkout(planId, dayId) {
  if (Workouts.active()) {
    if (!confirm('Já tem um treino em andamento. Substituir?')) return;
    Workouts.cancelActive();
  }
  Workouts.startFromDay(planId, dayId);
  State.expandedEx = 0;
  navigate('musculacao');
}
function startEmptyWorkout() {
  if (Workouts.active()) {
    if (!confirm('Já tem um treino em andamento. Substituir?')) return;
    Workouts.cancelActive();
  }
  Workouts.startEmpty();
  State.expandedEx = null;
  navigate('musculacao');
}
function finishWorkout() {
  const w = Workouts.active();
  if (!w) return;
  const setsLogged = w.exercises.reduce((s, ex) => s + ex.log.filter(l => l.done).length, 0);
  if (setsLogged === 0) {
    if (!confirm('Nenhuma série registrada. Encerrar mesmo assim?')) return;
  }
  Workouts.finishActive();
  Timer.stop();
  State.expandedEx = null;
  toast('Treino salvo!', 'success');
  navigate('historico');
}
function toggleExpand(idx) {
  State.expandedEx = (State.expandedEx === idx) ? null : idx;
  render();
}
function updateSetKg(exIdx, setIdx, value) {
  const w = Workouts.active();
  if (!w) return;
  w.exercises[exIdx].log[setIdx].kg = value;
  Workouts.setActive(w);
}
function toggleSetDone(exIdx, setIdx) {
  const w = Workouts.active();
  if (!w) return;
  const set = w.exercises[exIdx].log[setIdx];
  set.done = !set.done;
  Workouts.setActive(w);
  if (set.done) {
    // Start rest timer (default 60s)
    startRestTimer(60, exIdx);
  }
  render();
}
function markExerciseFinished(idx, val) {
  const w = Workouts.active();
  if (!w) return;
  w.exercises[idx].finished = val;
  Workouts.setActive(w);
  if (val) {
    State.expandedEx = w.exercises.findIndex((e, i) => i > idx && !e.finished);
    if (State.expandedEx < 0) State.expandedEx = null;
  }
  render();
}
function startRestTimer(seconds, exIdx) {
  Timer.start(seconds,
    (s, total) => {
      const num = document.getElementById('rest-num-' + exIdx);
      const label = document.getElementById('rest-label-' + exIdx);
      const wrap = document.getElementById('rest-timer-' + exIdx);
      if (wrap) wrap.style.display = 'flex';
      if (num) num.textContent = s;
      if (label) label.textContent = `Próxima série em ${s}s`;
    },
    () => {
      const wrap = document.getElementById('rest-timer-' + exIdx);
      const label = document.getElementById('rest-label-' + exIdx);
      if (label) label.textContent = 'Pode ir!';
      if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
      try { new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=').play(); } catch {}
      setTimeout(() => { if (wrap) wrap.style.display = 'none'; }, 3000);
    }
  );
}
function stopRestTimer() {
  Timer.stop();
  document.querySelectorAll('[id^="rest-timer-"]').forEach(el => el.style.display = 'none');
}
function addExerciseToWorkout() {
  State.libPickMode = 'addToWorkout';
  navigate('biblioteca');
  toast('Toque num exercício pra adicionar ao treino');
}
function openExerciseDetail(exId) {
  const ex = EX_BY_ID[exId];
  if (!ex) return;

  // Picker mode: add to active workout
  if (State.libPickMode === 'addToWorkout') {
    const w = Workouts.active();
    if (w) {
      w.exercises.push({
        idx: w.exercises.length,
        exId: ex.id, name: ex.name,
        sets: 3, reps: 10,
        log: Array.from({ length: 3 }, () => ({ kg: '', done: false })),
        finished: false,
      });
      Workouts.setActive(w);
      State.libPickMode = null;
      toast('Adicionado ao treino!');
      navigate('musculacao');
    }
    return;
  }

  // Picker mode: add to plan editor day
  if (typeof State.libPickMode === 'string' && State.libPickMode.startsWith('addToDay-')) {
    const di = parseInt(State.libPickMode.split('-')[1]);
    if (State.editingPlan && State.editingPlan.days[di]) {
      State.editingPlan.days[di].exercises.push({
        exId: ex.id, name: ex.name, sets: 3, reps: 10
      });
      State.libPickMode = null;
      toast('Exercício adicionado');
      navigate('plan-editor');
    }
    return;
  }

  // Default: show details modal
  alert(`${ex.name}\n${ex.primary.join(', ')}\n${ex.equipment} · ${ex.level}\n\n${ex.name_en}`);
}

/* ===== Plan editor actions ===== */
function openPlanEditor(planId) {
  if (planId) {
    State.editingPlan = JSON.parse(JSON.stringify(Plans.get(planId)));
  } else {
    State.editingPlan = {
      id: 'plan-' + Date.now(),
      name: '', tag: 'Hipertrofia', active: false,
      createdAt: Date.now(), days: []
    };
  }
  navigate('plan-editor');
}
function setEditPlanField(field, val) {
  if (!State.editingPlan) return;
  State.editingPlan[field] = val;
}
function setEditorDay(di, field, val) {
  if (!State.editingPlan) return;
  State.editingPlan.days[di][field] = val;
}
function setEditorEx(di, ei, field, val) {
  if (!State.editingPlan) return;
  State.editingPlan.days[di].exercises[ei][field] = val;
}
function addEditorDay() {
  if (!State.editingPlan) return;
  const n = State.editingPlan.days.length + 1;
  State.editingPlan.days.push({
    id: 'day-' + Date.now(),
    name: 'Dia ' + n, muscle: '', exercises: []
  });
  render();
}
function removeEditorDay(di) {
  if (!confirm('Remover este dia? Os exercícios desse dia também somem.')) return;
  State.editingPlan.days.splice(di, 1);
  render();
}
function pickExerciseForDay(di) {
  State.libPickMode = 'addToDay-' + di;
  toast('Toque num exercício pra adicionar');
  navigate('biblioteca');
}
function removeEditorEx(di, ei) {
  State.editingPlan.days[di].exercises.splice(ei, 1);
  render();
}
function savePlan() {
  const p = State.editingPlan;
  if (!p) return;
  if (!p.name.trim()) { toast('Dá um nome pro plano', 'error'); return; }
  if (p.days.length === 0) { toast('Adiciona pelo menos um dia', 'error'); return; }
  const hasAnyEx = p.days.some(d => d.exercises.length > 0);
  if (!hasAnyEx) { toast('Adiciona pelo menos 1 exercício', 'error'); return; }
  Plans.save(p);
  if (Plans.list().length === 1) Plans.setActive(p.id);
  toast('Plano salvo!', 'success');
  State.editingPlan = null;
  State.coachSubTab = 'planos';
  navigate('coach');
}
function cancelPlanEdit() {
  if (State.editingPlan && (State.editingPlan.name || State.editingPlan.days.length > 0)) {
    if (!confirm('Descartar mudanças?')) return;
  }
  State.editingPlan = null;
  State.libPickMode = null;
  navigate('coach');
}
function setLibSearch(q) { State.libFilter.search = q; render(); }
function setLibFilter(key, val) { State.libFilter[key] = val; render(); }
function showExercisePhoto(exId) {
  const ex = EX_BY_ID[exId];
  if (!ex) return;
  const photo = exImage(ex);
  if (!photo) { toast('Sem foto disponível'); return; }
  // Simple modal
  const modal = document.createElement('div');
  modal.style.cssText = 'position:fixed; inset:0; background:rgba(0,0,0,0.7); z-index:2000; display:flex; align-items:center; justify-content:center; padding:20px;';
  modal.innerHTML = `
    <div style="background:var(--surface); border-radius:14px; max-width:400px; max-height:90vh; overflow:auto; padding:14px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
        <div style="font-weight:700; font-size:14px;">${escapeHtml(ex.name)}</div>
        <button class="ctrl-btn" style="padding:6px 10px;" onclick="this.closest('div[style*=fixed]').remove()">${icon('x', 14)}</button>
      </div>
      <img src="${photo}" style="width:100%; border-radius:8px;" alt="${escapeHtml(ex.name)}"/>
      <div style="font-size:11px; color:var(--text-faint); margin-top:8px; text-align:center;">Foto: Free Exercise DB</div>
    </div>
  `;
  modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
  document.body.appendChild(modal);
}

/* Cardio */
function setCardioTab(t) { State.cardioTab = t; render(); }
function saveCardio() {
  const dist = parseFloat(document.getElementById('cardio-dist').value);
  const time = parseInt(document.getElementById('cardio-time').value);
  const note = document.getElementById('cardio-note').value;
  if (!dist || !time) { toast('Preencha distância e tempo', 'error'); return; }
  const unit = State.cardioTab === 'Natação' ? 'm' : 'km';
  const w = {
    id: 'w-' + Date.now(),
    type: 'cardio',
    cardioType: State.cardioTab,
    planName: State.cardioTab,
    dayName: State.cardioTab + (note ? ' · ' + note : ''),
    startedAt: Date.now() - time * 60000,
    finishedAt: Date.now(),
    duration: time,
    distance: dist,
    unit, note,
    exercises: [],
    totalSets: 0, totalVolume: 0,
  };
  const hist = Store.get('workout.history', []);
  hist.push(w);
  Store.set('workout.history', hist);
  toast('Cardio salvo!', 'success');
  document.getElementById('cardio-dist').value = '';
  document.getElementById('cardio-time').value = '';
  document.getElementById('cardio-note').value = '';
  render();
}

/* Funcional */
function setFuncionalMode(m) { State.funcionalMode = m; render(); }
function setFuncionalMins(v) { State.funcionalSecs = (parseInt(v) || 12) * 60; }
function startFuncional() {
  if (State.funcionalRunning) {
    Timer.stop();
    State.funcionalRunning = false;
    render();
    return;
  }
  State.funcionalRunning = true;
  Timer.start(State.funcionalSecs,
    (s) => {
      State.funcionalSecs = s;
      const el = document.getElementById('func-time');
      if (el) el.textContent = fmtTime(s);
    },
    () => {
      State.funcionalRunning = false;
      if (navigator.vibrate) navigator.vibrate([400, 100, 400]);
      toast('Tempo encerrado! ' + State.funcionalRounds + ' rounds');
      render();
    }
  );
  render();
}
function resetFuncional() {
  Timer.stop();
  State.funcionalRunning = false;
  State.funcionalRounds = 0;
  State.funcionalSecs = 720;
  render();
}
function addRound() { State.funcionalRounds++; render(); }

/* Coach */
function setCoachTab(t) { State.coachSubTab = t; render(); }
function saveGeminiKey() {
  const v = document.getElementById('gemini-key').value.trim();
  if (!v) return;
  Config.geminiKey = v;
  toast('Chave salva!', 'success');
  render();
}
function editGeminiKey() {
  const v = prompt('Cole sua chave do Gemini (deixe vazio pra remover):', Config.geminiKey || '');
  if (v === null) return;
  Config.geminiKey = v.trim();
  toast(v.trim() ? 'Chave atualizada' : 'Chave removida');
  render();
}
async function sendChat() {
  const inp = document.getElementById('chat-input');
  const text = inp.value.trim();
  if (!text || State.chatLoading) return;
  await askCoach(text);
  inp.value = '';
}
async function askCoach(text) {
  State.chatMessages.push({ role: 'user', text });
  State.chatLoading = true;
  render();
  try {
    // Filter out previously embedded plan objects from the API call (only send text)
    const apiMessages = State.chatMessages.map(m => ({
      role: m.role === 'model' ? 'model' : 'user',
      text: m.text
    }));
    const rawReply = await AI.chat(apiMessages);
    // Parse for plan
    const { text: cleanText, plan } = parseAIPlan(rawReply);
    State.chatMessages.push({
      role: 'model',
      text: cleanText,
      plan: plan, // {name, tag, days} or null
      planAdded: false,
    });
  } catch (e) {
    State.chatMessages.push({ role: 'model', text: '⚠️ ' + e.message });
  }
  State.chatLoading = false;
  render();
  setTimeout(() => {
    const list = document.getElementById('msg-list');
    if (list) list.scrollTop = list.scrollHeight;
  }, 50);
}

/** Save AI-generated plan to user's plans */
function adoptPlan(msgIdx) {
  const msg = State.chatMessages[msgIdx];
  if (!msg || !msg.plan) return;
  const plan = {
    id: 'plan-ai-' + Date.now(),
    name: msg.plan.name,
    tag: msg.plan.tag,
    description: 'Criado pelo Coach IA',
    active: false,
    createdAt: Date.now(),
    days: msg.plan.days.map((d, i) => ({
      id: 'day-' + Date.now() + '-' + i,
      name: d.name,
      muscle: d.muscle || '',
      exercises: d.exercises.map(ex => ({
        exId: ex.exId,
        name: ex.name,
        sets: ex.sets,
        reps: ex.reps,
      }))
    }))
  };
  Plans.save(plan);
  if (Plans.list().length === 1 || !Plans.active()) Plans.setActive(plan.id);
  msg.planAdded = true;
  toast('Plano adicionado! Veja em Meus Planos', 'success');
  render();
}

/** Open editor to refine an AI plan before saving */
function editAIPlan(msgIdx) {
  const msg = State.chatMessages[msgIdx];
  if (!msg || !msg.plan) return;
  State.editingPlan = {
    id: 'plan-ai-' + Date.now(),
    name: msg.plan.name,
    tag: msg.plan.tag,
    active: false,
    createdAt: Date.now(),
    days: msg.plan.days.map((d, i) => ({
      id: 'day-' + Date.now() + '-' + i,
      name: d.name,
      muscle: d.muscle || '',
      exercises: d.exercises.map(ex => ({
        exId: ex.exId,
        name: ex.name,
        sets: ex.sets,
        reps: ex.reps,
      }))
    }))
  };
  navigate('plan-editor');
}

/* Plans CRUD */
function setPlanActive(id) { Plans.setActive(id); toast('Plano ativado'); render(); }
function deletePlan(id) {
  if (!confirm('Apagar esse plano?')) return;
  Plans.remove(id);
  render();
}

/* Profile */
function editProfile() {
  const u = Config.user;
  const name = prompt('Nome:', u.name) || u.name;
  const weight = parseFloat(prompt('Peso (kg):', u.weight || '')) || u.weight;
  const height = parseInt(prompt('Altura (cm):', u.height || '')) || u.height;
  const bf = parseFloat(prompt('% gordura:', u.bf || '')) || u.bf;
  Config.user = { ...u, name, weight, height, bf };
  render();
}
function exportData() {
  const data = {
    plans: Plans.list(),
    history: Workouts.history(),
    user: Config.user,
    exportedAt: new Date().toISOString(),
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'forge-backup-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
  URL.revokeObjectURL(url);
}
function resetApp() {
  if (!confirm('TEM CERTEZA? Isso apaga TODOS os planos, treinos e histórico. Não tem volta.')) return;
  if (!confirm('Sério mesmo? Última chance.')) return;
  Object.keys(localStorage).filter(k => k.startsWith('forge.')).forEach(k => localStorage.removeItem(k));
  toast('Tudo limpo. Recarregando...');
  setTimeout(() => location.reload(), 1000);
}

/* Migrate old plans (Free Exercise DB IDs) to new lib (mohamedatef90 IDs) */
function migratePlans() {
  const plans = Plans.list();
  let changed = false;
  for (const plan of plans) {
    for (const day of plan.days || []) {
      for (const ex of day.exercises || []) {
        if (!EX_BY_ID[ex.exId]) {
          const found = EXERCISES.find(e => e.name === ex.name);
          if (found) { ex.exId = found.id; changed = true; }
        }
      }
    }
  }
  if (changed) Store.set('plans', plans);
}

/* ===== INIT ===== */
async function init() {
  await loadExercises();
  Plans.seedIfEmpty();
  migratePlans();
  buildSidebar();
  buildBottomNav();
  navigate('home');

  // Service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
}
window.addEventListener('DOMContentLoaded', init);

// Export functions to global for onclick handlers
window.navigate = navigate;
window.startWorkout = startWorkout;
window.startEmptyWorkout = startEmptyWorkout;
window.finishWorkout = finishWorkout;
window.toggleExpand = toggleExpand;
window.updateSetKg = updateSetKg;
window.toggleSetDone = toggleSetDone;
window.markExerciseFinished = markExerciseFinished;
window.stopRestTimer = stopRestTimer;
window.addExerciseToWorkout = addExerciseToWorkout;
window.openExerciseDetail = openExerciseDetail;
window.setLibSearch = setLibSearch;
window.setLibFilter = setLibFilter;
window.setCardioTab = setCardioTab;
window.saveCardio = saveCardio;
window.setFuncionalMode = setFuncionalMode;
window.setFuncionalMins = setFuncionalMins;
window.startFuncional = startFuncional;
window.resetFuncional = resetFuncional;
window.addRound = addRound;
window.setCoachTab = setCoachTab;
window.saveGeminiKey = saveGeminiKey;
window.editGeminiKey = editGeminiKey;
window.sendChat = sendChat;
window.askCoach = askCoach;
window.setPlanActive = setPlanActive;
window.deletePlan = deletePlan;
window.editProfile = editProfile;
window.exportData = exportData;
window.resetApp = resetApp;
window.openPlanEditor = openPlanEditor;
window.setEditPlanField = setEditPlanField;
window.setEditorDay = setEditorDay;
window.setEditorEx = setEditorEx;
window.addEditorDay = addEditorDay;
window.removeEditorDay = removeEditorDay;
window.pickExerciseForDay = pickExerciseForDay;
window.removeEditorEx = removeEditorEx;
window.savePlan = savePlan;
window.cancelPlanEdit = cancelPlanEdit;
window.showExercisePhoto = showExercisePhoto;
window.adoptPlan = adoptPlan;
window.editAIPlan = editAIPlan;
