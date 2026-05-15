// ============================================================
//  FEATURE FLAGS
// ============================================================
// Тимчасово приховуємо набір "🎨 Свої" та URL-імпорт.
// Код залишається у файлі — щоб увімкнути, постав true.
const FEATURE_CUSTOM_EVENTS = false;

// ============================================================
//  CARD PACKS
// ============================================================
const PACKS = [
  {
    id: "classic",
    name: "🎤 Класика",
    items: [
      { e: "🤕", t: "Перечепився і мало не впав" },
      { e: "✨", t: "Блискучий костюм" },
      { e: "🎸", t: "Електрогітара" },
      { e: "😬", t: "Технічна проблема або незручна пауза" },
      { e: "🎙️", t: "Пісня починається a cappella" },
      { e: "🎭", t: "Несподіваний спів друга" },
      { e: "🌈", t: "Прапор ЛГБТК+" },
      { e: "👑", t: "Корона/діадема" },
      { e: "🥸", t: "Вусатий робить щось дивне" },
      { e: "🥲", t: "Ведучий плаче" },
      { e: "🇬🇧", t: "Мова оригіналу але приспів англійською" },
      { e: "🥷", t: "Фантомас" },
      { e: "🤩", t: "Неочікуваний лідер" },
      { e: "🎻", t: "Скрипка грає під плюс" },
      { e: "🎼", t: "Модуляція в останньому приспіві" },
      { e: "😭", t: "Фанати плачуть" },
      { e: "📈", t: "Дуже висока нота" },
      { e: "💋", t: "Поцілунок в камеру" },
      { e: "🕴️", t: "Танцюристи в чорному" },
      { e: "💥", t: "Піротехніка" },
      { e: "🤝", t: "Сусіди дають високі бали" },
      { e: "📱", t: "Пісня звучить як TikTok-хіт" },
      { e: "💨", t: "Вітер у волоссі" },
      { e: "🇪🇺", t: "Хтось каже: Europe, I love you!" },
    ],
  },
  {
    id: "drama",
    name: "😱 Драма",
    items: [
      { e: "😭", t: "Сльози після виступу" },
      { e: "🤦", t: "Ведучий плутає країну" },
      { e: "0️⃣", t: "0 балів від журі" },
      { e: "📣", t: "Бу-інг/свист у залі" },
      { e: "😳", t: "Шоковане обличчя в кадрі" },
      { e: "⏸️", t: "Драматична пауза перед балами" },
      { e: "🔄", t: "Сусіди обмінялись нулями" },
      { e: "🤐", t: "Забув слова/закашлявся" },
      { e: "😬", t: "Жарт ведучого провалився" },
      { e: "⚡", t: "Технічний збій (світло/звук)" },
      { e: "1️⃣2️⃣", t: "12 балів від сусіда" },
      { e: "📉", t: "Фаворит провалився у фіналі" },
      { e: "✊", t: "«Це для мого народу!»" },
      { e: "😭", t: "Учасник ледь стримує сльози" },
      { e: "😱", t: "Масовий «ой» або стогін залу" },
      { e: "📵", t: "Обрив трансляції" },
      { e: "🎙️", t: "Мікрофон не працює" },
      { e: "😤", t: "Скандал у журі" },
      { e: "💩", t: "Московит" },
      { e: "🫥", t: "Учасник зник зі сцени" },
      { e: "⌛", t: "Виступ перервали" },
      { e: "🎶", t: "Не потрапив у такт музики" },
      { e: "🤯", t: "Паніка за лаштунками" },
      { e: "🌊", t: "Хвиля хейту в мережі" },
    ],
  },
  {
    id: "fashion",
    name: "👗 Мода",
    items: [
      { e: "✨", t: "Блискітки сліплять камеру" },
      { e: "🪶", t: "Пір'я як в альбатроса" },
      { e: "👘", t: "Дизайнерська вишиванка" },
      { e: "📐", t: "Плечі ширші за сцену" },
      { e: "👗", t: "Прозоре вбрання" },
      { e: "👠", t: "Чоловік на каблуках/в спідниці" },
      { e: "✂️", t: "Костюм розпадається в танці" },
      { e: "💡", t: "LED-одяг як ялинка" },
      { e: "🚀", t: "Нац. стиль + футуризм" },
      { e: "🥿", t: "Танець на підборах 20см" },
      { e: "🍑", t: "Майже голий «для арту»" },
      { e: "🎭", t: "Маска лякає дітей" },
      { e: "🧥", t: "Плащ 15 кг" },
      { e: "💰", t: "Outfit за 5000€" },
      { e: "🌈", t: "Райдужні кольори" },
      { e: "👑", t: "Корона/тіара" },
      { e: "🦋", t: "Крила на спині" },
      { e: "🩰", t: "Балетна пачка" },
      { e: "🕶️", t: "Окуляри вночі" },
      { e: "💍", t: "Шалені прикраси" },
      { e: "🖤", t: "Все чорне" },
      { e: "🤍", t: "Все біле" },
      { e: "🧊", t: "Прозорий пластик" },
      { e: "🌹", t: "Квіти у волоссі" },
    ],
  },
  {
    id: "weird",
    name: "🤡 Дивацтва",
    items: [
      { e: "🪂", t: "Літає/падає з тросів" },
      { e: "🎭", t: "Грим закриває обличчя" },
      { e: "🔥", t: "Фінн з вогнеметом" },
      { e: "👚", t: "Переодягання 3+ рази" },
      { e: "🤪", t: "Незрозуміла хореографія" },
      { e: "🏛️", t: "Велетенські декорації" },
      { e: "☕", t: "Пісня про Відень/каву" },
      { e: "🪩", t: "LED-костюм як диско 80-х" },
      { e: "🕺", t: "Танці не в тему пісні" },
      { e: "💥", t: "Реквізит ламається" },
      { e: "🌐", t: "Куплет англ., приспів — мовою" },
      { e: "🌫️", t: "Дим/вода б'є в камеру" },
      { e: "😬", t: "Жарт ведучого про Австрію" },
      { e: "🏋️", t: "Костюм важчий за нього" },
      { e: "🐎", t: "Тварина на сцені" },
      { e: "🚿", t: "Дощ на сцені" },
      { e: "🦞", t: "Дивний реквізит" },
      { e: "🛸", t: "Космічна тематика" },
      { e: "🍕", t: "Дивна їжа в шоу" },
      { e: "🪄", t: "Фокус/ілюзія" },
      { e: "🧙", t: "Чарівник на сцені" },
      { e: "🎪", t: "Цирковий номер" },
      { e: "👽", t: "Інопланетянин" },
      { e: "🦩", t: "Фламінго на сцені" },
    ],
  },
];

// ============================================================
//  HARD MODE — пул «хардкорних» центральних подій
// ============================================================
const HARD_CENTERS = [
  { e: "🏆", t: "Україна в топ-5" },
  { e: "⚡", t: "Виступ запам'ятається роками" },
  { e: "🎯", t: "Угадай переможця вечора" },
  { e: "⚖️", t: "Журі і глядачі різко не згодні" },
  { e: "🔥", t: "Соцмережі вибухають" },
  { e: "🌍", t: "Скандал між країнами" },
];

// ============================================================
//  STATE
// ============================================================
const FREE_CELL = 12; // index 12 = center
let state = {
  pack: 0,
  playerName: "",
  cardItems: [],
  checked: [],
  seed: null,
  wonLines: [],
  hasBingo: false,
  hardMode: false,
  // Прогрес окремо для кожного набору: { [packId]: { seed, checked, wonLines, hasBingo, hardMode } }
  // Маркер hardMode потрібен щоб не відновлювати стан, створений в іншому режимі.
  progressByPack: {},
};

function hasFree() {
  return !state.hardMode;
}
function cardLen() {
  return state.hardMode ? 25 : 24;
}
// Мапа клітинки на індекс в state.cardItems.
// Нормальний режим: пропускаємо центр (FREE), тож після центру зсув -1.
// Хард-режим: 1-в-1 (центр теж зі своїм елементом).
function cellItemIndex(i) {
  if (state.hardMode) return i;
  return i < FREE_CELL ? i : i - 1;
}

// Композитний ключ: packId__mode → дозволяє зберігати окремі стани
// для (pack, mode) пар. Прогрес у Хард-режимі не затирає нормальний — і навпаки.
function progressKeyFor(idx, hardMode) {
  const id = PACKS[idx]?.id;
  if (!id) return null;
  return id + "__" + (hardMode ? "h" : "n");
}

function snapshotCurrentPack() {
  const key = progressKeyFor(state.pack, state.hardMode);
  if (!key) return;
  if (!state.progressByPack) state.progressByPack = {};
  state.progressByPack[key] = {
    seed: state.seed,
    checked: [...state.checked],
    wonLines: state.wonLines.map((l) => [...l]),
    hasBingo: state.hasBingo,
  };
}

// Відновлює (або генерує новий) стан для (pack, current mode) пари
function applyPackProgress(idx) {
  const key = progressKeyFor(idx, state.hardMode);
  const saved = key && state.progressByPack?.[key];
  if (saved?.seed !== null && saved?.seed !== undefined) {
    state.seed = saved.seed;
    state.checked = (saved.checked || []).map(Number);
    state.wonLines = (saved.wonLines || []).map((l) => l.map(Number));
    state.hasBingo = !!saved.hasBingo;
    state.cardItems = generateCard(idx, state.seed);
    if (state.cardItems.length === cardLen()) {
      if (hasFree() && !state.checked.includes(FREE_CELL)) {
        state.checked.push(FREE_CELL);
      }
      return true;
    }
  }
  state.seed = Math.random();
  state.cardItems = generateCard(idx, state.seed);
  if (!state.cardItems.length) return false;
  state.checked = hasFree() ? [FREE_CELL] : [];
  state.wonLines = [];
  state.hasBingo = false;
  return true;
}

function saveState() {
  try {
    // Перед записом — підхопимо поточний прогрес в snapshot активного набору
    snapshotCurrentPack();
    const d = {
      v: 2,
      pack: state.pack,
      playerName: state.playerName,
      hardMode: state.hardMode,
      progressByPack: state.progressByPack,
    };
    localStorage.setItem("escBingo2026", JSON.stringify(d));
  } catch (e) {
    console.warn("save failed", e);
  }
}

function loadState() {
  try {
    const raw = localStorage.getItem("escBingo2026");
    if (!raw) return false;
    const d = JSON.parse(raw);
    if (!d) return false;

    state.pack = typeof d.pack === "number" ? d.pack : 0;
    state.playerName = d.playerName || "";
    state.hardMode = !!d.hardMode;
    if (!PACKS[state.pack]) state.pack = 0;

    // v2 формат: progressByPack з composite-ключами packId__mode
    if (d.progressByPack && typeof d.progressByPack === "object") {
      state.progressByPack = d.progressByPack;
    } else if (d.seed !== null && d.seed !== undefined) {
      // Міграція з v1 (один стан на все) → переносимо в slot активного (pack, mode)
      const key = progressKeyFor(state.pack, state.hardMode);
      state.progressByPack = {};
      if (key) {
        state.progressByPack[key] = {
          seed: d.seed,
          checked: (d.checked || []).map(Number),
          wonLines: (d.wonLines || []).map((line) => line.map(Number)),
          hasBingo: !!d.hasBingo,
        };
      }
    } else {
      state.progressByPack = {};
    }

    // Активуємо стан для поточного набору
    return applyPackProgress(state.pack);
  } catch (e) {
    return false;
  }
}

// Aliases for backward compat with any remaining calls
const saveCookie = saveState;
const loadCookie = loadState;

// ============================================================
//  SEEDED SHUFFLE
// ============================================================
function seededRandom(seed) {
  let s = seed;
  return function () {
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
  const pack = PACKS[packIdx];
  if (!pack || !Array.isArray(pack.items) || pack.items.length < 24) return [];
  const shuffled = shuffleWithSeed([...pack.items], seed);
  const base = shuffled.slice(0, 24);
  if (state.hardMode) {
    // Детерміністично з seed обираємо хард-центр і вставляємо в позицію 12
    const centerIdx =
      Math.floor(seed * HARD_CENTERS.length) % HARD_CENTERS.length;
    base.splice(12, 0, HARD_CENTERS[centerIdx]);
    return base; // 25 елементів
  }
  return base; // 24 елементи
}

// ============================================================
//  WIN CHECK
// ============================================================
function getLines() {
  const lines = [];
  // Rows
  for (let r = 0; r < 5; r++)
    lines.push([r * 5, r * 5 + 1, r * 5 + 2, r * 5 + 3, r * 5 + 4]);
  // Cols
  for (let c = 0; c < 5; c++) lines.push([c, c + 5, c + 10, c + 15, c + 20]);
  // Diagonals
  lines.push([0, 6, 12, 18, 24]);
  lines.push([4, 8, 12, 16, 20]);
  return lines;
}

function checkWin(checked) {
  const lines = getLines();
  const newWinLines = [];
  for (const line of lines) {
    // У хард-моді FREE-бонус не діє — кожна клітинка має бути відмічена
    if (
      line.every((i) => checked.includes(i) || (hasFree() && i === FREE_CELL))
    ) {
      newWinLines.push(line);
    }
  }
  return newWinLines;
}

// ============================================================
//  RENDER
// ============================================================
function renderCard() {
  const grid = document.getElementById("bingoGrid");
  grid.innerHTML = "";

  for (let i = 0; i < 25; i++) {
    const cell = document.createElement("div");
    cell.className = "bingo-cell";
    cell.dataset.idx = i;

    const isFree = hasFree() && i === FREE_CELL;
    if (isFree) {
      cell.classList.add("free", "checked");
      cell.innerHTML =
        '<span class="cell-emoji">⭐</span><span class="cell-text">FREE</span>';
    } else {
      const itemIdx = cellItemIndex(i);
      const item = state.cardItems[itemIdx];
      if (item) {
        cell.innerHTML = `<span class="cell-emoji">${item.e}</span><span class="cell-text">${item.t}</span>`;
      }
      // У хард-моді центр позначаємо рамкою з акцентом
      if (state.hardMode && i === FREE_CELL) {
        cell.classList.add("hard-center");
      }
      if (state.checked.includes(i)) {
        cell.classList.add("checked");
      }
    }

    if (state.wonLines.some((line) => line.includes(i))) {
      cell.classList.add("line-win");
    }
    if (!isFree) {
      cell.addEventListener("click", () => toggleCell(i));
    }

    grid.appendChild(cell);
  }

  updateStats();
  updateProgress();
  updateGiftEgg();
  // Авто-підгонка шрифту після того, як браузер порахує реальні розміри
  requestAnimationFrame(fitAllCellTexts);
}

// Зменшує шрифт тексту в кожній клітинці, доки текст не вліземе без overflow
function fitAllCellTexts() {
  const cells = document.querySelectorAll(".bingo-cell");
  cells.forEach((cell) => {
    const textEl = cell.querySelector(".cell-text");
    if (!textEl) return;
    // Скидаємо до базового, щоб повторні виклики не накопичували зменшення
    textEl.style.fontSize = "";
    const emojiEl = cell.querySelector(".cell-emoji");
    const emojiH = emojiEl ? emojiEl.offsetHeight : 0;
    // Доступна висота для тексту: висота клітинки − висота емоджі − padding/gap
    const styles = getComputedStyle(cell);
    const padV =
      parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);
    const gap = parseFloat(styles.rowGap || styles.gap || 0) || 0;
    const available = cell.clientHeight - emojiH - padV - gap;
    const maxW = cell.clientWidth - padV;
    if (available <= 0) return;

    let size = parseFloat(getComputedStyle(textEl).fontSize) || 10;
    const min = 7;
    // Швидкий цикл зменшення з кроком 0.5px
    for (let i = 0; i < 20; i++) {
      textEl.style.fontSize = size + "px";
      const fits =
        textEl.scrollHeight <= available && textEl.scrollWidth <= maxW;
      if (fits || size <= min) break;
      size -= 0.5;
    }
  });
}

// Перевикликаємо при resize / зміні орієнтації
window.addEventListener("resize", () => {
  clearTimeout(window.__fitTimer);
  window.__fitTimer = setTimeout(fitAllCellTexts, 120);
});

function updateStats() {
  // У нормальному режимі FREE не рахуємо як «відмічене»; у хард-режимі — рахуємо
  const checked = hasFree()
    ? state.checked.filter((i) => i !== FREE_CELL).length
    : state.checked.length;
  const total = state.hardMode ? 25 : 24;
  document.getElementById("statChecked").textContent = checked;
  document.getElementById("statLines").textContent = state.wonLines.length;
  document.getElementById("statLeft").textContent = total - checked;
  const name = state.playerName || "Гравець";
  document.getElementById("playerTag").textContent = "👤 " + name;
  // Ховаємо stats-row поки нема жодної відміченої клітинки — менше шуму на старті
  const statsRow = document.getElementById("statsRow");
  if (statsRow) statsRow.hidden = checked === 0;
}

function updateProgress() {
  // У normal-моді FREE — це "безкоштовно", тож рахуємо тільки реальні відмітки
  const checked = hasFree()
    ? state.checked.filter((i) => i !== FREE_CELL).length
    : state.checked.length;
  const total = state.hardMode ? 25 : 24;
  const pct = total > 0 ? Math.round((checked / total) * 100) : 0;
  document.getElementById("progressBar").style.width = pct + "%";
  document.getElementById("progressTxt").textContent = pct + "%";
}

function renderPacks() {
  const wrap = document.getElementById("packSelector");
  wrap.innerHTML = "";
  PACKS.forEach((p, i) => {
    const btn = document.createElement("button");
    btn.className = "pack-btn" + (i === state.pack ? " active" : "");
    btn.textContent = p.name;
    btn.onclick = () => {
      const isCustomInsufficient =
        p.id === CUSTOM_PACK_ID && (!p.items || p.items.length < 24);
      if (isCustomInsufficient) {
        pendingPackSwitch = i;
        openCustomEditor();
        return;
      }
      if (state.pack === i) return; // вже активний — нічого не робимо
      // 1) Зберігаємо прогрес ПОТОЧНОГО набору перед перемиканням
      snapshotCurrentPack();
      // 2) Перемикаємось і відновлюємо (або створюємо новий) стан нового набору
      state.pack = i;
      if (!applyPackProgress(i)) {
        // Не вдалось згенерувати картку (наприклад, custom з нестачею подій)
        return;
      }
      saveState();
      renderPacks();
      renderCard();
    };
    wrap.appendChild(btn);
  });
  updateCustomEditRow();
}

function updateCustomEditRow() {
  const row = document.getElementById("customEditRow");
  if (!row) return;
  const isCustomActive = PACKS[state.pack]?.id === CUSTOM_PACK_ID;
  row.hidden = !isCustomActive;
}

// ============================================================
//  INTERACTIONS
// ============================================================
function toggleCell(idx) {
  if (hasFree() && idx === FREE_CELL) return;
  const wasChecked = state.checked.includes(idx);

  if (wasChecked) {
    state.checked = state.checked.filter((i) => i !== idx);
  } else {
    state.checked.push(idx);
    spawnSparkles(event);
  }

  const cell = document.querySelector(`[data-idx="${idx}"]`);
  cell.classList.toggle("checked", !wasChecked);
  cell.classList.add("cell-pop");
  setTimeout(() => cell.classList.remove("cell-pop"), 300);

  // Перерахунок ліній: завжди береться актуальний знімок,
  // інакше при знятті відмітки лічильник «лінії» не зменшується.
  const newLines = checkWin(state.checked);
  const genuinelyNew = newLines.filter(
    (l) => !state.wonLines.some((ol) => ol.join() === l.join()),
  );
  state.wonLines = newLines;
  highlightWinLines();

  if (newLines.length === 0) {
    // Усі лінії розпались — скидаємо прапорець, щоб наступне бінго знов тригернулось
    state.hasBingo = false;
  } else if (genuinelyNew.length > 0 && !state.hasBingo) {
    state.hasBingo = true;
    triggerBingo();
  }

  updateStats();
  updateProgress();
  updateGiftEgg();
  saveState();
}

function updateGiftEgg() {
  const el = document.getElementById("giftEgg");
  if (!el) return;
  el.classList.toggle("visible", state.wonLines.length >= 2);
}

function giftEggClick() {
  window.open(
    "https://youtu.be/PvVsdj5hE_0?si=b6UzUoYoj5YEsgeh&t=43",
    "_blank",
    "noopener",
  );
}

function highlightWinLines() {
  document
    .querySelectorAll(".bingo-cell")
    .forEach((c) => c.classList.remove("line-win"));
  state.wonLines.flat().forEach((i) => {
    const cell = document.querySelector(`[data-idx="${i}"]`);
    if (cell) cell.classList.add("line-win");
  });
}

// Зберігаємо timer, щоб мати змогу скасувати показ overlay якщо лінія розпалась
let _bingoOverlayTimer = null;

function triggerBingo() {
  const shout = document.getElementById("bingoShout");
  shout.classList.remove("fire");
  void shout.offsetWidth;
  shout.classList.add("fire");
  if (_bingoOverlayTimer) clearTimeout(_bingoOverlayTimer);
  _bingoOverlayTimer = setTimeout(() => {
    _bingoOverlayTimer = null;
    shout.classList.remove("fire");
    // B1 fix: якщо за час анімації лінія була знята — overlay не показуємо
    if (!state.hasBingo || state.wonLines.length === 0) return;
    document.getElementById("winSubtitle").textContent =
      `${state.playerName || "Ти"} – справжня зірка Євробачення! 🌟`;
    document.getElementById("winOverlay").classList.add("show");
  }, 1000);
}

function spawnSparkles(e) {
  const emojis = ["✨", "⭐", "🌟", "💫", "🎵", "🎶", "🎤"];
  for (let i = 0; i < 6; i++) {
    const el = document.createElement("div");
    el.className = "sparkle";
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    const x = e?.clientX || window.innerWidth / 2;
    const y = e?.clientY || window.innerHeight / 2;
    el.style.left = x + "px";
    el.style.top = y + "px";
    el.style.setProperty("--tx", (Math.random() - 0.5) * 120 + "px");
    el.style.setProperty("--ty", (Math.random() - 1.2) * 120 + "px");
    el.style.animationDelay = Math.random() * 0.2 + "s";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1200);
  }
}

function newCard() {
  state.seed = Math.random();
  state.cardItems = generateCard(state.pack, state.seed);
  if (!state.cardItems.length) {
    alert("У цьому наборі замало подій (потрібно мінімум 24). Додай через ✏️.");
    return;
  }
  state.checked = hasFree() ? [FREE_CELL] : [];
  state.wonLines = [];
  state.hasBingo = false;
  saveState();
  renderCard();
  document.getElementById("winOverlay").classList.remove("show");
}

function continueGame() {
  document.getElementById("winOverlay").classList.remove("show");
}

// Малює знімок картки на canvas і повертає Blob (PNG)
function renderCardImage() {
  const SIZE = 1080; // квадрат, IG-friendly
  const cv = document.createElement("canvas");
  cv.width = SIZE;
  cv.height = SIZE;
  const ctx = cv.getContext("2d");

  // фон-градієнт
  const bg = ctx.createLinearGradient(0, 0, SIZE, SIZE);
  bg.addColorStop(0, "#1a0533");
  bg.addColorStop(0.5, "#2a0850");
  bg.addColorStop(1, "#0d0120");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, SIZE, SIZE);

  // заголовок
  ctx.fillStyle = "#ffe600";
  ctx.font = "bold 64px 'Bebas Neue', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("EUROVISION BINGO 2026", SIZE / 2, 90);

  // ім'я гравця
  const name = state.playerName || "Гравець";
  ctx.fillStyle = "#00e5ff";
  ctx.font = "bold 38px 'Nunito', sans-serif";
  ctx.fillText("👤 " + name, SIZE / 2, 150);

  // BINGO заголовок над клітинками
  const gridStart = 230;
  const gridSize = 820;
  const cellGap = 12;
  const cellSize = (gridSize - cellGap * 4) / 5;
  const gridX = (SIZE - gridSize) / 2;

  // букви BINGO
  ctx.fillStyle = "#00e5ff";
  ctx.font = "bold 48px 'Bebas Neue', sans-serif";
  const letters = ["B", "I", "N", "G", "O"];
  letters.forEach((L, i) => {
    const cx = gridX + i * (cellSize + cellGap) + cellSize / 2;
    ctx.fillText(L, cx, gridStart - 20);
  });

  // клітинки
  for (let i = 0; i < 25; i++) {
    const row = Math.floor(i / 5);
    const col = i % 5;
    const x = gridX + col * (cellSize + cellGap);
    const y = gridStart + row * (cellSize + cellGap);

    const isFree = i === FREE_CELL;
    const isChecked = state.checked.includes(i);
    const isWinLine = state.wonLines.some((line) => line.includes(i));

    // фон клітинки
    ctx.beginPath();
    const r = 18;
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + cellSize, y, x + cellSize, y + cellSize, r);
    ctx.arcTo(x + cellSize, y + cellSize, x, y + cellSize, r);
    ctx.arcTo(x, y + cellSize, x, y, r);
    ctx.arcTo(x, y, x + cellSize, y, r);
    ctx.closePath();

    if (isFree) {
      const g = ctx.createLinearGradient(x, y, x + cellSize, y + cellSize);
      g.addColorStop(0, "#ffe600");
      g.addColorStop(1, "#ff8c00");
      ctx.fillStyle = g;
    } else if (isWinLine) {
      const g = ctx.createLinearGradient(x, y, x + cellSize, y + cellSize);
      g.addColorStop(0, "#ffe600");
      g.addColorStop(1, "#ff2d78");
      ctx.fillStyle = g;
    } else if (isChecked) {
      const g = ctx.createLinearGradient(x, y, x + cellSize, y + cellSize);
      g.addColorStop(0, "#ff2d78");
      g.addColorStop(1, "#7c3aed");
      ctx.fillStyle = g;
    } else {
      ctx.fillStyle = "#1e0640";
    }
    ctx.fill();

    // текст клітинки
    let emoji, text;
    if (isFree) {
      emoji = "⭐";
      text = "FREE";
    } else {
      const itemIdx = i < FREE_CELL ? i : i - 1;
      const item = state.cardItems[itemIdx];
      if (!item) continue;
      emoji = item.e;
      text = item.t;
    }

    ctx.fillStyle = isFree ? "#1a0533" : "#fff";
    ctx.textAlign = "center";
    ctx.font = "44px sans-serif";
    ctx.fillText(emoji, x + cellSize / 2, y + cellSize / 2 - 8);

    ctx.font = "bold 16px 'Nunito', sans-serif";
    // обрізаємо текст, якщо задовгий
    const maxWidth = cellSize - 16;
    const words = text.split(" ");
    const lines = [];
    let cur = "";
    for (const w of words) {
      const test = cur ? cur + " " + w : w;
      if (ctx.measureText(test).width > maxWidth && cur) {
        lines.push(cur);
        cur = w;
      } else {
        cur = test;
      }
    }
    if (cur) lines.push(cur);
    const lineH = 18;
    const startY = y + cellSize / 2 + 30;
    lines.slice(0, 3).forEach((ln, idx) => {
      ctx.fillText(ln, x + cellSize / 2, startY + idx * lineH);
    });

    // галочка для відмічених
    if (isChecked && !isFree) {
      ctx.fillStyle = "rgba(255,255,255,0.7)";
      ctx.font = "bold 22px sans-serif";
      ctx.textAlign = "right";
      ctx.fillText("✓", x + cellSize - 12, y + 28);
      ctx.textAlign = "center";
    }
  }

  // підпис внизу
  ctx.fillStyle = "#a78bbf";
  ctx.font = "bold 24px 'Nunito', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("🎤 Базель • Швейцарія • 13–17 травня", SIZE / 2, SIZE - 35);

  return new Promise((resolve) => cv.toBlob(resolve, "image/png", 0.92));
}

async function shareResult() {
  const name = state.playerName || "Гравець";
  const lines = state.wonLines.length;
  const checked = state.checked.filter((i) => i !== FREE_CELL).length;
  const text =
    `🎤 Eurovision Bingo 2026 – я виграв(ла) BINGO!\n` +
    `👤 ${name} | ${lines} лін. | ${checked} відмічено\n` +
    `🧵 Threads: https://threads.com/@i_kurnytskyi\n` +
    `#Eurovision2026 #EurovisionBingo\n` +
    `🔗 Грай і ти: ${location.href}`;

  // намагаємось поділитись із картинкою
  try {
    const blob = await renderCardImage();
    if (blob) {
      const file = new File([blob], "eurovision-bingo.png", {
        type: "image/png",
      });
      if (
        navigator.canShare &&
        navigator.canShare({ files: [file] }) &&
        navigator.share
      ) {
        await navigator.share({
          title: "Eurovision Bingo 2026",
          text,
          files: [file],
        });
        return;
      }
      // якщо файли не підтримуються — скачати картинку
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "eurovision-bingo.png";
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }
  } catch (e) {
    console.warn("image share failed", e);
  }

  // fallback — звичайний share/копіювання тексту
  if (navigator.share) {
    try {
      await navigator.share({ title: "Eurovision Bingo 2026", text });
      return;
    } catch (e) {}
  }
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => alert("Скопійовано! 📋"));
  } else {
    prompt("Скопіюй:", text);
  }
}

function closeInstall() {
  document.getElementById("installBanner")?.classList.add("hidden");
  try {
    localStorage.setItem("escHideInstall", "1");
  } catch (e) {
    /* ignore */
  }
}

function showRules() {
  const o = document.getElementById("rulesOverlay");
  if (o) {
    o.classList.add("show");
    o.scrollTop = 0;
  }
}

function hideRules(e) {
  // якщо клік був по фоновому overlay або по кнопках/закриттю
  if (e?.target?.id && e.target.id !== "rulesOverlay") return;
  const o = document.getElementById("rulesOverlay");
  if (o) o.classList.remove("show");
}

function showSettings() {
  const o = document.getElementById("settingsOverlay");
  if (o) o.classList.add("show");
}

function hideSettings(e) {
  if (e?.target?.id && e.target.id !== "settingsOverlay") return;
  const o = document.getElementById("settingsOverlay");
  if (o) o.classList.remove("show");
}

// ============================================================
//  ROTATE HINT
// ============================================================
function dismissRotateHint() {
  const el = document.getElementById("rotateHint");
  if (el) el.classList.add("dismissed");
  try {
    localStorage.setItem("escRotateHintDone", "1");
  } catch (e) {}
}

function initRotateHint() {
  const el = document.getElementById("rotateHint");
  if (!el) return;
  try {
    if (localStorage.getItem("escRotateHintDone") === "1") {
      el.classList.add("dismissed");
      return;
    }
  } catch (e) {}

  // Показуємо тільки в portrait і на не-дуже-широких екранах (телефон/планшет)
  const isPortrait = window.matchMedia("(orientation: portrait)").matches;
  const isNarrow = window.innerWidth < 900;
  if (!isPortrait || !isNarrow) return;

  // М'яка поява через 1.2с після завантаження
  setTimeout(() => el.classList.add("visible"), 1200);

  // Якщо користувач реально перевернув телефон — ховаємо назавжди
  window
    .matchMedia("(orientation: landscape)")
    .addEventListener("change", (ev) => {
      if (ev.matches) dismissRotateHint();
    });

  // Авто-сховати через 12с навіть якщо не клікнули
  setTimeout(() => {
    el.classList.remove("visible");
  }, 12000);
}

function easterEggClick() {
  window.open(
    "https://youtu.be/d4N82wPpdg8?si=KmaxksCmiYVGtrgL&t=69",
    "_blank",
  );
}

// ============================================================
//  PWA install
// ============================================================
let deferredPrompt = null;

function isIOS() {
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  );
}
function isStandalone() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
}

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  document.body.classList.add("can-install");
});

window.addEventListener("appinstalled", () => {
  deferredPrompt = null;
  document.body.classList.remove("can-install");
  document.body.classList.add("is-installed");
  const banner = document.getElementById("installBanner");
  if (banner) banner.classList.add("hidden");
});

async function tryInstall() {
  if (isStandalone()) {
    alert("✅ Додаток вже встановлено!");
    return;
  }
  // Android / Chrome / Edge — нативний промпт
  if (deferredPrompt) {
    try {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        const banner = document.getElementById("installBanner");
        if (banner) banner.classList.add("hidden");
      }
      deferredPrompt = null;
      document.body.classList.remove("can-install");
      return;
    } catch (e) {
      console.warn("install prompt failed", e);
    }
  }
  // iOS Safari + інші браузери без API — показуємо інструкцію
  showInstallHelp();
}

function showInstallHelp() {
  const o = document.getElementById("iosInstallOverlay");
  if (!o) return;
  // Перемикаємо вміст залежно від платформи
  const iosBlock = o.querySelector(".ios-install-ios");
  const androidBlock = o.querySelector(".ios-install-android");
  if (iosBlock && androidBlock) {
    const ios = isIOS();
    iosBlock.style.display = ios ? "" : "none";
    androidBlock.style.display = ios ? "none" : "";
  }
  o.classList.add("show");
}

function hideInstallHelp(e) {
  if (e?.target?.id && e.target.id !== "iosInstallOverlay") return;
  const o = document.getElementById("iosInstallOverlay");
  if (o) o.classList.remove("show");
}

// ============================================================
//  COOKIE CONSENT (GDPR)
// ============================================================
const COOKIE_CONSENT_KEY = "escCookieConsent";

function checkCookieConsent() {
  let stored = null;
  try {
    stored = localStorage.getItem(COOKIE_CONSENT_KEY);
  } catch (e) {
    /* ignore */
  }
  if (stored === "accepted") {
    enableAnalytics();
    return;
  }
  if (stored === "rejected") {
    return; // GA лишається у denied стані
  }
  // Перший візит — показуємо банер з невеликою затримкою (не одразу при завантаженні)
  setTimeout(() => {
    const b = document.getElementById("cookieBanner");
    if (b) b.classList.add("show");
  }, 1500);
}

function enableAnalytics() {
  if (typeof gtag !== "function") return;
  gtag("consent", "update", {
    analytics_storage: "granted",
  });
}

function acceptCookies() {
  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
  } catch (e) {
    /* ignore */
  }
  enableAnalytics();
  const b = document.getElementById("cookieBanner");
  if (b) b.classList.remove("show");
}

function rejectCookies() {
  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, "rejected");
  } catch (e) {
    /* ignore */
  }
  const b = document.getElementById("cookieBanner");
  if (b) b.classList.remove("show");
}

// ============================================================
//  HARD MODE — toggle
// ============================================================
function toggleHardMode() {
  // Зберігаємо поточний прогрес у старому режимі (для ІНШИХ пакетів)
  snapshotCurrentPack();
  state.hardMode = !state.hardMode;
  // applyPackProgress спробує відновити прогрес уже в новому режимі;
  // якщо для цієї пари (pack, mode) збереженого немає — згенерує свіжу картку.
  if (!applyPackProgress(state.pack)) {
    state.hardMode = !state.hardMode; // revert
    snapshotCurrentPack(); // повертаємо як було
    alert("У цьому наборі замало подій (потрібно мінімум 24).");
    return;
  }
  saveState();
  updateHardToggleUI();
  renderCard();
}

function updateHardToggleUI() {
  const btn = document.getElementById("hardToggle");
  if (btn) btn.classList.toggle("active", state.hardMode);
}

// ============================================================
//  CUSTOM EVENTS — свій набір (зберігається в localStorage)
// ============================================================
const CUSTOM_PACK_ID = "custom";
const CUSTOM_STORAGE_KEY = "escBingoCustomEvents";
// Якщо користувач відкрив редактор клікнувши на "Свої" з малою к-стю подій —
// після закриття редактора (з достатньою к-стю) авто-переключаємось.
let pendingPackSwitch = null;

function loadCustomEvents() {
  if (!FEATURE_CUSTOM_EVENTS) return; // фіча приховується — не додаємо набір
  let items = [];
  try {
    const raw = localStorage.getItem(CUSTOM_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) items = parsed.filter((x) => x?.e && x?.t);
    }
  } catch (e) {
    console.warn("load custom failed", e);
  }
  // Додаємо/оновлюємо набір у PACKS
  const existing = PACKS.findIndex((p) => p.id === CUSTOM_PACK_ID);
  const pack = { id: CUSTOM_PACK_ID, name: "🎨 Свої", items };
  if (existing >= 0) PACKS[existing] = pack;
  else PACKS.push(pack);
}

function saveCustomEvents() {
  const pack = PACKS.find((p) => p.id === CUSTOM_PACK_ID);
  if (!pack) return;
  try {
    localStorage.setItem(CUSTOM_STORAGE_KEY, JSON.stringify(pack.items));
  } catch (e) {
    console.warn("save custom failed", e);
  }
}

function openCustomEditor() {
  const o = document.getElementById("customOverlay");
  if (!o) return;
  renderCustomList();
  o.classList.add("show");
}

function hideCustomEditor(e) {
  if (e?.target?.id && e.target.id !== "customOverlay") return;
  const o = document.getElementById("customOverlay");
  if (o) o.classList.remove("show");

  const customPack = PACKS.find((p) => p.id === CUSTOM_PACK_ID);
  const enoughEvents = customPack?.items?.length >= 24;

  // Якщо чекаємо на перемикання (юзер тицьнув "Свої" коли був порожній)
  // і тепер є ≥24 подій — авто-переключаємось.
  if (pendingPackSwitch !== null && enoughEvents) {
    state.pack = pendingPackSwitch;
    state.seed = Math.random();
    state.cardItems = generateCard(state.pack, state.seed);
    state.checked = hasFree() ? [FREE_CELL] : [];
    state.wonLines = [];
    state.hasBingo = false;
    saveState();
    renderPacks();
    renderCard();
    pendingPackSwitch = null;
    return;
  }
  pendingPackSwitch = null;

  // Якщо зараз активний «Свої» — спробувати перегенерувати картку
  if (PACKS[state.pack]?.id === CUSTOM_PACK_ID && enoughEvents) {
    state.seed = Math.random();
    state.cardItems = generateCard(state.pack, state.seed);
    state.checked = hasFree() ? [FREE_CELL] : [];
    state.wonLines = [];
    state.hasBingo = false;
    saveState();
    renderCard();
  }
  renderPacks();
}

function renderCustomList() {
  const pack = PACKS.find((p) => p.id === CUSTOM_PACK_ID);
  const list = document.getElementById("customList");
  const counter = document.getElementById("customCounter");
  if (!list || !pack) return;
  list.innerHTML = "";
  pack.items.forEach((item, idx) => {
    const row = document.createElement("div");
    row.className = "custom-item";
    row.innerHTML = `
      <span class="custom-item-emoji">${item.e}</span>
      <span class="custom-item-text">${item.t}</span>
      <button class="custom-item-del" data-idx="${idx}" aria-label="Видалити">🗑</button>
    `;
    row.querySelector(".custom-item-del").addEventListener("click", () => {
      pack.items.splice(idx, 1);
      saveCustomEvents();
      renderCustomList();
    });
    list.appendChild(row);
  });
  const n = pack.items.length;
  counter.textContent =
    n >= 24 ? `${n} подій ✅` : `${n}/24 — додай ще ${24 - n}`;
  counter.classList.toggle("ok", n >= 24);
}

// ============================================================
//  CUSTOM EVENTS — share / import via URL (з gzip-стисненням)
// ============================================================

// === bytes ↔ URL-safe base64 (з відновленням padding на decode) ===
function bytesToB64Url(bytes) {
  let bin = "";
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function b64UrlToBytes(b64) {
  let fixed = b64.replace(/-/g, "+").replace(/_/g, "/");
  while (fixed.length % 4) fixed += "="; // ← повертаємо padding
  const bin = atob(fixed);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

// === gzip compress/decompress (з фолбеком на plain коли API недоступне) ===
async function gzipCompress(str) {
  if (typeof CompressionStream === "undefined") return null;
  const cs = new CompressionStream("gzip");
  const writer = cs.writable.getWriter();
  writer.write(new TextEncoder().encode(str));
  writer.close();
  const buf = await new Response(cs.readable).arrayBuffer();
  return new Uint8Array(buf);
}
async function gzipDecompress(bytes) {
  const ds = new DecompressionStream("gzip");
  const writer = ds.writable.getWriter();
  writer.write(bytes);
  writer.close();
  const buf = await new Response(ds.readable).arrayBuffer();
  return new TextDecoder().decode(buf);
}

// === legacy plain base64 (для зворотної сумісності зі старими URL) ===
function b64encodeUnicode(str) {
  return btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p) =>
      String.fromCharCode("0x" + p),
    ),
  )
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}
function b64decodeUnicode(b64) {
  let fixed = b64.replace(/-/g, "+").replace(/_/g, "/");
  while (fixed.length % 4) fixed += "="; // ← fix: відновлюємо padding
  return decodeURIComponent(
    Array.prototype.map
      .call(
        atob(fixed),
        (c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2),
      )
      .join(""),
  );
}

// === encode / decode payload із префіксом версії ===
//  c1.<base64>  — gzip-стиснутий JSON (новий формат, ~50% коротше)
//  <base64>     — звичайний base64 JSON (старий, fallback)
async function encodePayload(payload) {
  const json = JSON.stringify(payload);
  const compressed = await gzipCompress(json);
  if (compressed) return "c1." + bytesToB64Url(compressed);
  return b64encodeUnicode(json); // фолбек: без префіксу = легасі
}
async function decodePayload(encoded) {
  if (encoded.startsWith("c1.")) {
    const bytes = b64UrlToBytes(encoded.slice(3));
    return JSON.parse(await gzipDecompress(bytes));
  }
  return JSON.parse(b64decodeUnicode(encoded));
}

async function shareCustomSet() {
  const pack = PACKS.find((p) => p.id === CUSTOM_PACK_ID);
  if (!pack || !pack.items.length) return;

  const name = prompt(
    "Як назвати твій набір? (Друг побачить цю назву)",
    "Мій набір",
  );
  if (name === null) return;

  const payload = {
    v: 1,
    name: (name || "Без назви").slice(0, 40),
    items: pack.items.map((i) => ({ e: i.e, t: i.t })),
  };
  const encoded = await encodePayload(payload);
  const url = `${location.origin}${location.pathname}?import=${encoded}`;

  console.log(
    `Share URL length: ${url.length} chars (encoded payload: ${encoded.length})`,
  );

  const text =
    `🎤 Eurovision Bingo — мій набір "${payload.name}"\n` +
    `${payload.items.length} подій 🎯\n` +
    `Тицьни щоб імпортувати: ${url}`;

  if (navigator.share) {
    try {
      await navigator.share({ title: "Мій набір Eurovision Bingo", text, url });
      return;
    } catch (e) {
      /* користувач скасував — продовжуємо до fallback */
    }
  }
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(url);
      alert(
        `Посилання скопійовано! 📋\n\n${payload.items.length} подій · ${url.length} символів\n\nНадішли його другу.`,
      );
      return;
    } catch (e) {
      /* ignore */
    }
  }
  prompt("Скопіюй посилання:", url);
}

// При завантаженні сторінки — перевіряємо URL на ?import=
async function checkImportFromURL() {
  if (!FEATURE_CUSTOM_EVENTS) return; // фіча прихована — імпорт теж
  const params = new URLSearchParams(location.search);
  const encoded = params.get("import");
  if (!encoded) return;
  try {
    const payload = await decodePayload(encoded);
    if (!payload || !Array.isArray(payload.items)) throw new Error("bad");
    const items = payload.items
      .filter((x) => x?.e && x?.t)
      .map((x) => ({ e: String(x.e), t: String(x.t).slice(0, 60) }));
    if (!items.length) throw new Error("empty");
    showImportDialog({ name: payload.name || "Без назви", items });
  } catch (e) {
    console.warn("import parse failed", e);
    alert(
      "Не вдалося розпакувати набір 😕\nМожливо, посилання обрізалось при пересилці. Попроси друга надіслати ще раз.",
    );
  }
  // Очищуємо URL, щоб refresh не повторював імпорт
  history.replaceState({}, "", location.pathname);
}

let _importPayload = null;

function showImportDialog(payload) {
  _importPayload = payload;
  const o = document.getElementById("importOverlay");
  if (!o) return;
  document.getElementById("importTitle").textContent = `«${payload.name}»`;
  document.getElementById("importCount").textContent =
    `${payload.items.length} подій`;
  const preview = document.getElementById("importPreview");
  preview.innerHTML = "";
  payload.items.slice(0, 8).forEach((it) => {
    const row = document.createElement("div");
    row.className = "custom-item";
    row.innerHTML = `<span class="custom-item-emoji">${it.e}</span><span class="custom-item-text">${it.t}</span>`;
    preview.appendChild(row);
  });
  if (payload.items.length > 8) {
    const more = document.createElement("div");
    more.className = "import-more";
    more.textContent = `…ще ${payload.items.length - 8} подій`;
    preview.appendChild(more);
  }
  o.classList.add("show");
}

function hideImportDialog(e) {
  if (e?.target?.id && e.target.id !== "importOverlay") return;
  const o = document.getElementById("importOverlay");
  if (o) o.classList.remove("show");
  _importPayload = null;
}

function importApply(mode) {
  if (!_importPayload) return;
  const pack = PACKS.find((p) => p.id === CUSTOM_PACK_ID);
  if (!pack) return;
  if (mode === "replace") {
    pack.items = [..._importPayload.items];
  } else {
    // merge — пропускаємо точні дублікати (e+t)
    const seen = new Set(pack.items.map((i) => i.e + "|" + i.t));
    _importPayload.items.forEach((i) => {
      const key = i.e + "|" + i.t;
      if (!seen.has(key)) {
        pack.items.push(i);
        seen.add(key);
      }
    });
  }
  saveCustomEvents();
  hideImportDialog();
  // Перемикаємось на "Свої" і генеруємо нову картку (якщо подій ≥24)
  if (pack.items.length >= 24) {
    const customIdx = PACKS.findIndex((p) => p.id === CUSTOM_PACK_ID);
    state.pack = customIdx;
    state.seed = Math.random();
    state.cardItems = generateCard(customIdx, state.seed);
    state.checked = hasFree() ? [FREE_CELL] : [];
    state.wonLines = [];
    state.hasBingo = false;
    saveState();
    renderPacks();
    renderCard();
  } else {
    renderPacks();
  }
}

function addCustomEvent() {
  const eInput = document.getElementById("customEmojiInput");
  const tInput = document.getElementById("customTextInput");
  if (!eInput || !tInput) return;
  const e = (eInput.value || "").trim();
  const t = (tInput.value || "").trim();
  if (!e || !t) {
    eInput.focus();
    return;
  }
  const pack = PACKS.find((p) => p.id === CUSTOM_PACK_ID);
  if (!pack) return;
  pack.items.push({ e, t: t.slice(0, 40) });
  saveCustomEvents();
  eInput.value = "";
  tInput.value = "";
  eInput.focus();
  renderCustomList();
}

// ============================================================
//  INIT
// ============================================================
function init() {
  loadCustomEvents(); // має йти першим — заповнює PACKS додатковим набором
  const loaded = loadState();
  // Якщо URL містить ?import=... — покажемо діалог імпорту після ініціалізації
  setTimeout(checkImportFromURL, 300);

  if (loaded && state.cardItems?.length === cardLen()) {
    if (hasFree() && !state.checked.includes(FREE_CELL)) {
      state.checked.push(FREE_CELL);
    }
  } else {
    // Перший запуск або пошкоджений стан — створюємо картку для активного набору
    applyPackProgress(state.pack);
    saveState();
  }

  updateHardToggleUI();
  renderPacks();
  renderCard();

  // Hide install banner if dismissed (банер може бути взагалі прибраний з HTML)
  if (localStorage.getItem("escHideInstall") === "1") {
    document.getElementById("installBanner")?.classList.add("hidden");
  }

  // Player name
  const nameInput = document.getElementById("playerName");
  nameInput.value = state.playerName || "";
  nameInput.addEventListener("input", () => {
    state.playerName = nameInput.value;
    document.getElementById("playerTag").textContent =
      "👤 " + (state.playerName || "Гравець");
    saveState();
  });

  initRotateHint();
  checkCookieConsent();
  // B3: якщо вже встановлено як PWA — ховаємо точки входу для встановлення
  if (isStandalone()) document.body.classList.add("is-installed");
}

init();

// Register service worker (відносний шлях — щоб працював на GitHub Pages у підпапці)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}
