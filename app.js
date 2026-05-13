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
      { e: "🎭", t: "Театральний грим" },
      { e: "🌈", t: "Прапор ЛГБТК+" },
      { e: "👑", t: "Корона/діадема" },
      { e: "🥸", t: "Вусатий робить щось дивне" },
      { e: "🥲", t: "Ведучий плаче" },
      { e: "🇬🇧", t: "Мова оригіналу але приспів англійською" },
      { e: "🥷", t: "Фантомас" },
      { e: "🤩", t: "Несподіваний фаворит" },
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
      { e: "🗯️", t: "Контроверсійний виступ" },
      { e: "🚩", t: "Прапори в залі (політика)" },
      { e: "📵", t: "Обрив трансляції" },
      { e: "🎙️", t: "Мікрофон не працює" },
      { e: "😤", t: "Скандал у журі" },
      { e: "🥊", t: "Конфлікт між країнами" },
      { e: "🫥", t: "Учасник зник зі сцени" },
      { e: "⌛", t: "Виступ перервали" },
      { e: "💸", t: "Звинувачення в купівлі голосів" },
      { e: "📰", t: "Скандал у пресі" },
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
//  STATE
// ============================================================
const FREE_CELL = 12; // index 12 = center (FREE)
// seed = null тут, реальне значення буде або з кукісів, або новий Math.random() в init()
let state = {
  pack: 0,
  playerName: "",
  cardItems: [],
  checked: [],
  seed: null,
  wonLines: [],
  hasBingo: false,
};

function saveState() {
  try {
    const d = {
      pack: state.pack,
      playerName: state.playerName,
      seed: state.seed,
      checked: state.checked,
      wonLines: state.wonLines,
      hasBingo: state.hasBingo,
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
    if (!d || d.seed === null || d.seed === undefined) return false;
    Object.assign(state, d);
    state.checked = (state.checked || []).map(Number);
    state.wonLines = (state.wonLines || []).map((line) => line.map(Number));
    state.cardItems = generateCard(state.pack, state.seed);
    return state.cardItems.length === 24;
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
    if (line.every((i) => checked.includes(i) || i === FREE_CELL)) {
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

    if (i === FREE_CELL) {
      cell.classList.add("free", "checked");
      cell.innerHTML =
        '<span class="cell-emoji">⭐</span><span class="cell-text">FREE</span>';
    } else {
      const itemIdx = i < FREE_CELL ? i : i - 1;
      const item = state.cardItems[itemIdx];
      if (item) {
        cell.innerHTML = `<span class="cell-emoji">${item.e}</span><span class="cell-text">${item.t}</span>`;
      }
      if (state.checked.includes(i)) {
        cell.classList.add("checked");
      }
    }

    // Mark winning lines
    if (state.wonLines.some((line) => line.includes(i))) {
      cell.classList.add("line-win");
    }

    if (i !== FREE_CELL) {
      cell.addEventListener("click", () => toggleCell(i));
    }

    grid.appendChild(cell);
  }

  updateStats();
  updateProgress();
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
  const checked = state.checked.filter((i) => i !== FREE_CELL).length;
  document.getElementById("statChecked").textContent = checked;
  document.getElementById("statLines").textContent = state.wonLines.length;
  document.getElementById("statLeft").textContent = 24 - checked;
  const name = state.playerName || "Гравець";
  document.getElementById("playerTag").textContent = "👤 " + name;
}

function updateProgress() {
  const checked = state.checked.length;
  const pct = Math.round((checked / 25) * 100);
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
    state.checked = state.checked.filter((i) => i !== idx);
  } else {
    state.checked.push(idx);
    spawnSparkles(event);
  }

  const cell = document.querySelector(`[data-idx="${idx}"]`);
  cell.classList.toggle("checked", !wasChecked);
  cell.classList.add("cell-pop");
  setTimeout(() => cell.classList.remove("cell-pop"), 300);

  // Check win
  const newLines = checkWin(state.checked);
  const genuinelyNew = newLines.filter(
    (l) => !state.wonLines.some((ol) => ol.join() === l.join()),
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
  document
    .querySelectorAll(".bingo-cell")
    .forEach((c) => c.classList.remove("line-win"));
  state.wonLines.flat().forEach((i) => {
    const cell = document.querySelector(`[data-idx="${i}"]`);
    if (cell) cell.classList.add("line-win");
  });
}

function triggerBingo() {
  const shout = document.getElementById("bingoShout");
  shout.classList.remove("fire");
  void shout.offsetWidth;
  shout.classList.add("fire");
  setTimeout(() => {
    shout.classList.remove("fire");
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
  state.checked = [FREE_CELL];
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
  ctx.fillText(
    "🎤 Базель • Швейцарія • 13–17 травня",
    SIZE / 2,
    SIZE - 35,
  );

  return new Promise((resolve) => cv.toBlob(resolve, "image/png", 0.92));
}

async function shareResult() {
  const name = state.playerName || "Гравець";
  const lines = state.wonLines.length;
  const checked = state.checked.filter((i) => i !== FREE_CELL).length;
  const text =
    `🎤 Eurovision Bingo 2026 – я виграв(ла) BINGO!\n` +
    `👤 ${name} | ${lines} лін. | ${checked} відмічено\n` +
    `📸 IG: https://instagram.com/i_kurnytskyi\n` +
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
  document.getElementById("installBanner").classList.add("hidden");
  try {
    localStorage.setItem("escHideInstall", "1");
  } catch (e) {}
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
//  PWA install prompt
// ============================================================
let deferredPrompt;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  document
    .getElementById("installBanner")
    .addEventListener("click", async () => {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") closeInstall();
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
  if (localStorage.getItem("escHideInstall") === "1") {
    document.getElementById("installBanner").classList.add("hidden");
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
}

init();

// Register service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  });
}
