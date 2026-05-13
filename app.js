// ============================================================
//  CARD PACKS
// ============================================================
const PACKS = [
  {
    id: 'classic',
    name: '🎤 Класика',
    items: [
      {e:'🔥',t:'Драматичний вихід'},
      {e:'💃',t:'Синхронний танець'},
      {e:'🎸',t:'Електрогітара'},
      {e:'🇺🇦',t:'Участь України'},
      {e:'💔',t:'Пісня про серце'},
      {e:'🎭',t:'Театральний грим'},
      {e:'🌈',t:'Прапор ЛГБТК+'},
      {e:'👑',t:'Корона/діадема'},
      {e:'🕯️',t:'Сцена зі свічками'},
      {e:'🥲',t:'Ведучий плаче'},
      {e:'🎵',t:'Мова оригіналу'},
      {e:'🤖',t:'Костюм робота'},
      {e:'💃',t:'Розкол на сцені'},
      {e:'🎻',t:'Живий оркестр'},
      {e:'🌍',t:'Кліп про мир'},
      {e:'😭',t:'Фанати плачуть'},
      {e:'🐉',t:'Дракон/чудовисько'},
      {e:'👄',t:'Поцілунок в камеру'},
      {e:'🦅',t:'Птахи в виступі'},
      {e:'💥',t:'Піротехніка'},
      {e:'🎯',t:'12 балів!'},
      {e:'🪩',t:'Диско-куля'},
      {e:'🌙',t:'Нічна тематика'},
      {e:'🦄',t:'Незвичайний образ'},
    ]
  },
  {
    id: 'drama',
    name: '😱 Драма',
    items: [
      {e:'😱',t:'Технічний збій'},
      {e:'🤬',t:'Скандал у коментарях'},
      {e:'🔇',t:'Забули слова'},
      {e:'💬',t:'Провокаційна заява'},
      {e:'🎙️',t:'Мікрофон впав'},
      {e:'👊',t:'Конфлікт країн'},
      {e:'📺',t:'Несподіваний переможець'},
      {e:'😤',t:'Незгода з журі'},
      {e:'🩹',t:'Травма на сцені'},
      {e:'🚫',t:'Дискваліфікація'},
      {e:'😬',t:'Незручна пауза'},
      {e:'🤦',t:'Помилка ведучого'},
      {e:'🎤',t:'Фальш нота'},
      {e:'😰',t:'Розлад за лаштунками'},
      {e:'🗳️',t:'Суперечка щодо голосування'},
      {e:'😒',t:'Нудний виступ'},
      {e:'💸',t:'Занадто дорогий образ'},
      {e:'📵',t:'Обрив трансляції'},
      {e:'🤩',t:'Зіркова кросівка'},
      {e:'😵',t:'Непритомність фаната'},
      {e:'🎭',t:'Роздягнення на сцені'},
      {e:'🐾',t:'Тварина на сцені'},
      {e:'👻',t:'Голограма'},
      {e:'🌊',t:'Хвиля хейту в мережі'},
    ]
  },
  {
    id: 'fashion',
    name: '👗 Мода',
    items: [
      {e:'✨',t:'Блискітки всюди'},
      {e:'🪶',t:'Пір\'я в костюмі'},
      {e:'🥿',t:'Незвичне взуття'},
      {e:'🎩',t:'Капелюх'},
      {e:'💍',t:'Величезні прикраси'},
      {e:'🕶️',t:'Сонцезахисні окуляри'},
      {e:'🧣',t:'Накидка/плащ'},
      {e:'💜',t:'Фіолетовий образ'},
      {e:'🌹',t:'Квіти у вбранні'},
      {e:'🎀',t:'Банти'},
      {e:'🦊',t:'Хутро (штучне)'},
      {e:'⚔️',t:'Лицарський образ'},
      {e:'🧚',t:'Фея/ельф'},
      {e:'👠',t:'Неможливі підбори'},
      {e:'🤍',t:'Все біле'},
      {e:'🖤',t:'Все чорне'},
      {e:'🌺',t:'Гавайський стиль'},
      {e:'🎪',t:'Цирковий образ'},
      {e:'🧊',t:'Крижаний образ'},
      {e:'🌸',t:'Ніжний рожевий'},
      {e:'🎸',t:'Роковий образ'},
      {e:'🦸',t:'Супергерой'},
      {e:'🏺',t:'Античний стиль'},
      {e:'🌴',t:'Екзотичний стиль'},
    ]
  },
  {
    id: 'ukraine',
    name: '🇺🇦 Україна',
    items: [
      {e:'🇺🇦',t:'Виступ України'},
      {e:'🌻',t:'Соняшники в виступі'},
      {e:'💙',t:'Синьо-жовті кольори'},
      {e:'🎵',t:'Українська мова'},
      {e:'🕊️',t:'Символ миру'},
      {e:'🏆',t:'Перемога!'},
      {e:'🎤',t:'Калина в пісні'},
      {e:'🌾',t:'Пшениця/степ'},
      {e:'🪗',t:'Бандура/кобза'},
      {e:'👘',t:'Вишиванка'},
      {e:'💪',t:'Підтримка ЗСУ'},
      {e:'📣',t:'Рекордні аплодисменти'},
      {e:'😍',t:'Глядачі з UA прапором'},
      {e:'🏅',t:'12 балів від глядачів'},
      {e:'🎭',t:'Фолк-елементи'},
      {e:'🌍',t:'Міжнародна підтримка'},
      {e:'🦁',t:'Сила духу'},
      {e:'🌈',t:'Надія на мир'},
      {e:'🎶',t:'Потрапляє в топ-3'},
      {e:'📸',t:'Вірусне фото з UA'},
      {e:'✊',t:'Стоїть після виступу'},
      {e:'💬',t:'Слова подяки'},
      {e:'🌟',t:'Зіркове журі'},
      {e:'🎁',t:'Подарунок від країни'},
    ]
  },
  {
    id: 'weird',
    name: '🤪 Дивацтва',
    items: [
      {e:'🦞',t:'Дивний реквізит'},
      {e:'🤸',t:'Акробатика'},
      {e:'😂',t:'Жарт від ведучого'},
      {e:'🐄',t:'Тварина в ролику'},
      {e:'🎂',t:'Торт на сцені'},
      {e:'🚿',t:'Вода/дощ на сцені'},
      {e:'🌮',t:'Дивна їжа в кліпі'},
      {e:'👾',t:'Відеогра тематика'},
      {e:'🎠',t:'Каруселі/атракціони'},
      {e:'🤣',t:'Несподіваний хореограф'},
      {e:'🧸',t:'Плюшевий ведмідь'},
      {e:'🎪',t:'Вогняне шоу'},
      {e:'🌵',t:'Пустельна тематика'},
      {e:'🦜',t:'Папуга/екзотика'},
      {e:'🧲',t:'Левітація'},
      {e:'🎈',t:'Кульки на сцені'},
      {e:'🤿',t:'Підводний образ'},
      {e:'🎡',t:'Гігантський реквізит'},
      {e:'👽',t:'Космічна тематика'},
      {e:'🧙',t:'Чарівник'},
      {e:'🎭',t:'Маски'},
      {e:'🦩',t:'Фламінго'},
      {e:'🪄',t:'Ілюзіоніст'},
      {e:'🎰',t:'Казино тема'},
    ]
  }
];

// ============================================================
//  STATE
// ============================================================
const FREE_CELL = 12; // index 12 = center (FREE)
// seed = null тут, реальне значення буде або з кукісів, або новий Math.random() в init()
let state = {
  pack: 0,
  playerName: '',
  cardItems: [],
  checked: [],
  seed: null,
  wonLines: [],
  hasBingo: false
};

function saveState() {
  try {
    const d = {
      pack: state.pack,
      playerName: state.playerName,
      seed: state.seed,
      checked: state.checked,
      wonLines: state.wonLines,
      hasBingo: state.hasBingo
    };
    localStorage.setItem('escBingo2026', JSON.stringify(d));
  } catch(e) { console.warn('save failed', e); }
}

function loadState() {
  try {
    const raw = localStorage.getItem('escBingo2026');
    if (!raw) return false;
    const d = JSON.parse(raw);
    if (!d || d.seed === null || d.seed === undefined) return false;
    Object.assign(state, d);
    state.checked = (state.checked || []).map(Number);
    state.wonLines = (state.wonLines || []).map(line => line.map(Number));
    state.cardItems = generateCard(state.pack, state.seed);
    return state.cardItems.length === 24;
  } catch(e) { return false; }
}

// Aliases for backward compat with any remaining calls
const saveCookie = saveState;
const loadCookie = loadState;

// ============================================================
//  SEEDED SHUFFLE
// ============================================================
function seededRandom(seed) {
  let s = seed;
  return function() {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function shuffleWithSeed(arr, seed) {
  const rng = seededRandom(Math.floor(seed * 2147483647));
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateCard(packIdx, seed) {
  const items = [...PACKS[packIdx].items];
  const shuffled = shuffleWithSeed(items, seed);
  return shuffled.slice(0, 24);
}

// ============================================================
//  WIN CHECK
// ============================================================
function getLines() {
  const lines = [];
  // Rows
  for (let r = 0; r < 5; r++) lines.push([r*5, r*5+1, r*5+2, r*5+3, r*5+4]);
  // Cols
  for (let c = 0; c < 5; c++) lines.push([c, c+5, c+10, c+15, c+20]);
  // Diagonals
  lines.push([0,6,12,18,24]);
  lines.push([4,8,12,16,20]);
  return lines;
}

function checkWin(checked) {
  const lines = getLines();
  const newWinLines = [];
  for (const line of lines) {
    if (line.every(i => checked.includes(i) || i === FREE_CELL)) {
      newWinLines.push(line);
    }
  }
  return newWinLines;
}

// ============================================================
//  RENDER
// ============================================================
function renderCard() {
  const grid = document.getElementById('bingoGrid');
  grid.innerHTML = '';

  for (let i = 0; i < 25; i++) {
    const cell = document.createElement('div');
    cell.className = 'bingo-cell';
    cell.dataset.idx = i;

    if (i === FREE_CELL) {
      cell.classList.add('free', 'checked');
      cell.innerHTML = '<span class="cell-emoji">⭐</span><span class="cell-text">FREE</span>';
    } else {
      const itemIdx = i < FREE_CELL ? i : i - 1;
      const item = state.cardItems[itemIdx];
      if (item) {
        cell.innerHTML = `<span class="cell-emoji">${item.e}</span><span class="cell-text">${item.t}</span>`;
      }
      if (state.checked.includes(i)) {
        cell.classList.add('checked');
      }
    }

    // Mark winning lines
    if (state.wonLines.some(line => line.includes(i))) {
      cell.classList.add('line-win');
    }

    if (i !== FREE_CELL) {
      cell.addEventListener('click', () => toggleCell(i));
    }

    grid.appendChild(cell);
  }

  updateStats();
  updateProgress();
}

function updateStats() {
  const checked = state.checked.filter(i => i !== FREE_CELL).length;
  document.getElementById('statChecked').textContent = checked;
  document.getElementById('statLines').textContent = state.wonLines.length;
  document.getElementById('statLeft').textContent = 24 - checked;
  const name = state.playerName || 'Гравець';
  document.getElementById('playerTag').textContent = '👤 ' + name;
}

function updateProgress() {
  const checked = state.checked.length;
  const pct = Math.round((checked / 25) * 100);
  document.getElementById('progressBar').style.width = pct + '%';
  document.getElementById('progressTxt').textContent = pct + '%';
}

function renderPacks() {
  const wrap = document.getElementById('packSelector');
  wrap.innerHTML = '';
  PACKS.forEach((p, i) => {
    const btn = document.createElement('button');
    btn.className = 'pack-btn' + (i === state.pack ? ' active' : '');
    btn.textContent = p.name;
    btn.onclick = () => {
      state.pack = i;
      state.checked = [FREE_CELL];
      state.wonLines = [];
      state.hasBingo = false;
      state.seed = Math.random();
      state.cardItems = generateCard(i, state.seed);
      saveState();
      renderPacks();
      renderCard();
    };
    wrap.appendChild(btn);
  });
}

// ============================================================
//  INTERACTIONS
// ============================================================
function toggleCell(idx) {
  if (idx === FREE_CELL) return;
  const wasChecked = state.checked.includes(idx);

  if (wasChecked) {
    state.checked = state.checked.filter(i => i !== idx);
  } else {
    state.checked.push(idx);
    spawnSparkles(event);
  }

  const cell = document.querySelector(`[data-idx="${idx}"]`);
  cell.classList.toggle('checked', !wasChecked);
  cell.classList.add('cell-pop');
  setTimeout(() => cell.classList.remove('cell-pop'), 300);

  // Check win
  const newLines = checkWin(state.checked);
  const genuinelyNew = newLines.filter(l =>
    !state.wonLines.some(ol => ol.join() === l.join())
  );

  if (genuinelyNew.length > 0) {
    state.wonLines = newLines;
    highlightWinLines();

    if (!state.hasBingo) {
      state.hasBingo = true;
      triggerBingo();
    }
  }

  updateStats();
  updateProgress();
  saveState();
}

function highlightWinLines() {
  document.querySelectorAll('.bingo-cell').forEach(c => c.classList.remove('line-win'));
  state.wonLines.flat().forEach(i => {
    const cell = document.querySelector(`[data-idx="${i}"]`);
    if (cell) cell.classList.add('line-win');
  });
}

function triggerBingo() {
  const shout = document.getElementById('bingoShout');
  shout.classList.remove('fire');
  void shout.offsetWidth;
  shout.classList.add('fire');
  setTimeout(() => {
    shout.classList.remove('fire');
    document.getElementById('winSubtitle').textContent =
      `${state.playerName || 'Ти'} – справжня зірка Євробачення! 🌟`;
    document.getElementById('winOverlay').classList.add('show');
  }, 1000);
}

function spawnSparkles(e) {
  const emojis = ['✨','⭐','🌟','💫','🎵','🎶','🎤'];
  for (let i = 0; i < 6; i++) {
    const el = document.createElement('div');
    el.className = 'sparkle';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    const x = (e?.clientX || window.innerWidth/2);
    const y = (e?.clientY || window.innerHeight/2);
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    el.style.setProperty('--tx', (Math.random()-0.5)*120 + 'px');
    el.style.setProperty('--ty', (Math.random()-1.2)*120 + 'px');
    el.style.animationDelay = (Math.random()*0.2) + 's';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1200);
  }
}

function newCard() {
  state.seed = Math.random();
  state.cardItems = generateCard(state.pack, state.seed);
  state.checked = [FREE_CELL];
  state.wonLines = [];
  state.hasBingo = false;
  saveState();
  renderCard();
  document.getElementById('winOverlay').classList.remove('show');
}

function continueGame() {
  document.getElementById('winOverlay').classList.remove('show');
}

function shareResult() {
  const name = state.playerName || 'Гравець';
  const lines = state.wonLines.length;
  const checked = state.checked.filter(i => i !== FREE_CELL).length;
  const text = `🎤 Eurovision Bingo 2026 – я виграв(ла) BINGO!\n👤 ${name} | ${lines} лін. | ${checked} відмічено\n#Eurovision2026 #EurovisionBingo\n🔗 Грай і ти: ${location.href}`;

  if (navigator.share) {
    navigator.share({ title: 'Eurovision Bingo 2026', text });
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => alert('Скопійовано! 📋'));
  } else {
    prompt('Скопіюй:', text);
  }
}

function closeInstall() {
  document.getElementById('installBanner').classList.add('hidden');
  try { localStorage.setItem('escHideInstall', '1'); } catch(e) {}
}

function showRules() {
  alert('🎤 Як грати в Eurovision Bingo:\n\n1. Вибери набір карток\n2. Введи своє ім\'я\n3. Дивись трансляцію і відмічай клітинки, коли бачиш відповідні події\n4. Зберіть 5 відміток в ряд, стовпці або діагоналі\n5. BINGO! 🎉');
}

function easterEggClick() {
  window.open('https://www.youtube.com/watch?v=hq3yfQnllfQ', '_blank');
}

// ============================================================
//  PWA install prompt
// ============================================================
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById('installBanner').addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') closeInstall();
    deferredPrompt = null;
  });
});

// ============================================================
//  INIT
// ============================================================
function init() {
  const loaded = loadState();

  if (loaded && state.cardItems && state.cardItems.length === 24) {
    // Відновлюємо з кукісів — картку НЕ перегенеруємо
    // Гарантуємо що FREE_CELL завжди відмічено
    if (!state.checked.includes(FREE_CELL)) {
      state.checked.push(FREE_CELL);
    }
  } else {
    // Перший запуск або пошкоджений стан — генеруємо нову картку
    state.seed = Math.random();
    state.cardItems = generateCard(state.pack, state.seed);
    state.checked = [FREE_CELL];
    state.wonLines = [];
    state.hasBingo = false;
    saveState();
  }

  renderPacks();
  renderCard();

  // Hide install banner if dismissed
  if (localStorage.getItem('escHideInstall') === '1') {
    document.getElementById('installBanner').classList.add('hidden');
  }

  // Player name
  const nameInput = document.getElementById('playerName');
  nameInput.value = state.playerName || '';
  nameInput.addEventListener('input', () => {
    state.playerName = nameInput.value;
    document.getElementById('playerTag').textContent = '👤 ' + (state.playerName || 'Гравець');
    saveState();
  });
}

init();

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}
