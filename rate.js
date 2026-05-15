// ============================================================
//  PERFORMERS — список учасників фіналу Євробачення 2026
//  ⚠️ Running order оголошується після другого півфіналу.
//  Заміни список нижче на реальний порядок виступів.
//  Кожен запис: { country: "🏳 Назва", song?: "Виконавець — Назва" }
// ============================================================
const PERFORMERS = [
  { country: "🇩🇰 Данія", song: "—" },
  { country: "🇩🇪 Німеччина", song: "—" },
  { country: "🇮🇱 Ізраїль", song: "—" },
  { country: "🇧🇪 Бельгія", song: "—" },
  { country: "🇦🇱 Албанія", song: "—" },
  { country: "🇬🇷 Греція", song: "—" },
  { country: "🇺🇦 Україна", song: "—" },
  { country: "🇦🇺 Австралія", song: "—" },
  { country: "🇷🇸 Сербія", song: "—" },
  { country: "🇲🇹 Мальта", song: "—" },
  { country: "🇨🇿 Чехія", song: "—" },
  { country: "🇧🇬 Болгарія", song: "—" },
  { country: "🇭🇷 Хорватія", song: "—" },
  { country: "🇬🇧 Велика Британія", song: "—" },
  { country: "🇫🇷 Франція", song: "—" },
  { country: "🇲🇩 Молдова", song: "—" },
  { country: "🇫🇮 Фінляндія", song: "—" },
  { country: "🇵🇱 Польща", song: "—" },
  { country: "🇱🇹 Литва", song: "—" },
  { country: "🇸🇪 Швеція", song: "—" },
  { country: "🇨🇾 Кіпр", song: "—" },
  { country: "🇮🇹 Італія", song: "—" },
  { country: "🇳🇴 Норвегія", song: "—" },
  { country: "🇷🇴 Румунія", song: "—" },
  { country: "🇦🇹 Австрія", song: "—" },
];

const STORAGE_KEY = "escBingoRatings2026";
const CRITERIA = [
  { id: "vokal", max: 10, emoji: "🎤", label: "Вокал" },
  { id: "obraz", max: 10, emoji: "💅", label: "Образ" },
  { id: "nomer", max: 10, emoji: "🎭", label: "Номер" },
  { id: "novyzna", max: 10, emoji: "🆕", label: "Новизна" },
  { id: "prognoz", max: 25, emoji: "😎", label: "Прогноз" },
];

const WHEEL_ITEM_HEIGHT = 48; // px — має збігатись з CSS

let ratings = {};

function performerKey(idx) {
  // Стабільний ключ — за країною, а не індексом (на випадок зміни порядку)
  return PERFORMERS[idx]?.country || String(idx);
}

function loadRatings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object") ratings = parsed;
    }
  } catch (e) {
    console.warn("ratings load failed", e);
    ratings = {};
  }
}

function saveRatings() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ratings));
  } catch (e) {
    console.warn("ratings save failed", e);
  }
}

function getValue(idx, crit) {
  return ratings[performerKey(idx)]?.[crit];
}

function setValue(idx, crit, raw) {
  const key = performerKey(idx);
  if (!ratings[key]) ratings[key] = {};
  if (raw === "" || raw === null || raw === undefined) {
    delete ratings[key][crit];
  } else {
    const n = Number(raw);
    if (!Number.isFinite(n)) return;
    const meta = CRITERIA.find((c) => c.id === crit);
    const max = meta?.max || 10;
    const clamped = Math.max(0, Math.min(max, n));
    ratings[key][crit] = clamped;
  }
  saveRatings();
  updateCell(idx, crit);
  updateRow(idx);
  renderLeaderboard();
}

function updateCell(idx, crit) {
  const btn = document.querySelector(
    `#rateBody tr[data-idx="${idx}"] button.score-btn[data-crit="${crit}"]`,
  );
  if (!btn) return;
  const v = getValue(idx, crit);
  btn.textContent = Number.isFinite(v) ? String(v) : "—";
  btn.classList.toggle("filled", Number.isFinite(v));
}

// ============================================================
//  WHEEL PICKER — iOS-style bottom sheet
// ============================================================
let pickerState = null;
let _pickerScrollTimer = null;

function openPicker(idx, crit) {
  const performer = PERFORMERS[idx];
  const meta = CRITERIA.find((c) => c.id === crit);
  if (!performer || !meta) return;

  pickerState = { idx, crit, max: meta.max };

  const wheel = document.getElementById("pickerWheel");
  const parts = ['<div class="wheel-spacer"></div>'];
  for (let v = 1; v <= meta.max; v++) {
    parts.push(`<div class="wheel-item" data-value="${v}">${v}</div>`);
  }
  parts.push('<div class="wheel-spacer"></div>');
  wheel.innerHTML = parts.join("");

  // Тап по конкретному пункту → скрол до нього
  wheel.querySelectorAll(".wheel-item").forEach((item, i) => {
    item.addEventListener("click", () => {
      wheel.scrollTo({ top: i * WHEEL_ITEM_HEIGHT, behavior: "smooth" });
    });
  });

  document.getElementById("pickerTitle").textContent = performer.country;
  document.getElementById("pickerSubtitle").textContent =
    `${meta.emoji} ${meta.label}`;

  const overlay = document.getElementById("pickerOverlay");
  overlay.classList.add("show");

  // Початкова позиція: поточне значення або середина шкали
  const current = getValue(idx, crit);
  const startIdx = Number.isFinite(current)
    ? Math.max(0, current - 1)
    : Math.floor(meta.max / 2);

  // requestAnimationFrame щоб layout встиг порахувати розміри
  requestAnimationFrame(() => {
    wheel.scrollTop = startIdx * WHEEL_ITEM_HEIGHT;
    highlightWheelItem();
  });

  wheel.addEventListener("scroll", onWheelScroll);
}

function onWheelScroll() {
  // Throttle через rAF, оновлюємо підсвічування на льоту
  if (_pickerScrollTimer) cancelAnimationFrame(_pickerScrollTimer);
  _pickerScrollTimer = requestAnimationFrame(highlightWheelItem);
}

function highlightWheelItem() {
  const wheel = document.getElementById("pickerWheel");
  if (!wheel) return;
  const idx = Math.round(wheel.scrollTop / WHEEL_ITEM_HEIGHT);
  wheel.querySelectorAll(".wheel-item").forEach((el, i) => {
    el.classList.toggle("selected", i === idx);
  });
}

function commitPicker() {
  if (!pickerState) return;
  const wheel = document.getElementById("pickerWheel");
  const i = Math.round(wheel.scrollTop / WHEEL_ITEM_HEIGHT);
  const value = i + 1; // елементи починаються з 1
  setValue(pickerState.idx, pickerState.crit, String(value));
  closePicker();
}

function clearPicker() {
  if (!pickerState) return;
  setValue(pickerState.idx, pickerState.crit, "");
  closePicker();
}

function closePicker() {
  const overlay = document.getElementById("pickerOverlay");
  if (overlay) overlay.classList.remove("show");
  const wheel = document.getElementById("pickerWheel");
  if (wheel) wheel.removeEventListener("scroll", onWheelScroll);
  pickerState = null;
}

function onPickerBackdrop(e) {
  if (e?.target?.id === "pickerOverlay") commitPicker();
}

function calcAverage(idx) {
  const r = ratings[performerKey(idx)] || {};
  // Середнє по 4-х критеріях 1-10 (Прогноз окремо, бо інша шкала)
  const main = ["vokal", "obraz", "nomer", "novyzna"]
    .map((c) => r[c])
    .filter((v) => Number.isFinite(v));
  if (!main.length) return null;
  return main.reduce((a, b) => a + b, 0) / main.length;
}

function calcTotal(idx) {
  const r = ratings[performerKey(idx)] || {};
  return CRITERIA.reduce((sum, c) => sum + (Number(r[c.id]) || 0), 0);
}

function updateRow(idx) {
  const tr = document.querySelector(`#rateBody tr[data-idx="${idx}"]`);
  if (!tr) return;
  const avg = calcAverage(idx);
  const cell = tr.querySelector(".avg-cell");
  if (avg === null) {
    cell.textContent = "—";
    cell.classList.remove("filled");
  } else {
    cell.textContent = avg.toFixed(1);
    cell.classList.add("filled");
  }
}

function renderTable() {
  const tbody = document.getElementById("rateBody");
  tbody.innerHTML = "";
  PERFORMERS.forEach((p, i) => {
    const tr = document.createElement("tr");
    tr.dataset.idx = i;

    const num = document.createElement("td");
    num.className = "num";
    num.textContent = i + 1;
    tr.appendChild(num);

    const country = document.createElement("td");
    country.className = "country";
    const songLine =
      p.song && p.song !== "—"
        ? `<div class="country-song">${p.song}</div>`
        : "";
    country.innerHTML = `<div class="country-name">${p.country}</div>${songLine}`;
    tr.appendChild(country);

    CRITERIA.forEach((c) => {
      const td = document.createElement("td");
      td.className = "score";
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "score-btn";
      btn.dataset.idx = String(i);
      btn.dataset.crit = c.id;
      const v = getValue(i, c.id);
      btn.textContent = Number.isFinite(v) ? String(v) : "—";
      if (Number.isFinite(v)) btn.classList.add("filled");
      btn.addEventListener("click", () => openPicker(i, c.id));
      td.appendChild(btn);
      tr.appendChild(td);
    });

    const avg = document.createElement("td");
    avg.className = "avg-cell";
    tr.appendChild(avg);

    tbody.appendChild(tr);
    updateRow(i);
  });
}

function renderLeaderboard() {
  const board = document.getElementById("leaderboard");
  if (!board) return;
  const scored = PERFORMERS.map((p, i) => ({
    idx: i,
    country: p.country,
    avg: calcAverage(i),
  })).filter((x) => x.avg !== null);

  if (!scored.length) {
    board.innerHTML =
      '<div class="leaderboard-empty">Оціни виступи — побачиш рейтинг</div>';
    return;
  }

  scored.sort((a, b) => b.avg - a.avg);
  const medals = ["🥇", "🥈", "🥉"];

  board.innerHTML = scored
    .map((x, i) => {
      const isMedal = i < 3;
      const rankEl = isMedal
        ? `<span class="lb-medal">${medals[i]}</span>`
        : `<span class="lb-rank">${i + 1}</span>`;
      return `<div class="leaderboard-row${isMedal ? " is-medal" : ""}">
        ${rankEl}
        <span class="lb-country">${x.country}</span>
        <span class="lb-score">${x.avg.toFixed(1)}</span>
      </div>`;
    })
    .join("");
}

function resetAllRatings() {
  if (!confirm("Точно скинути всі оцінки? Це не можна повернути.")) return;
  ratings = {};
  saveRatings();
  renderTable();
  renderLeaderboard();
}

function exportRatings() {
  const lines = ["🎤 Моя оцінка фіналу Eurovision 2026:\n"];
  const scored = PERFORMERS.map((p, i) => ({
    idx: i,
    country: p.country,
    avg: calcAverage(i),
    total: calcTotal(i),
  })).filter((x) => x.avg !== null);
  scored.sort((a, b) => b.avg - a.avg);
  scored.forEach((x, i) => {
    lines.push(`${i + 1}. ${x.country} — ${x.avg.toFixed(1)}/10`);
  });
  if (!scored.length) lines.push("(жодних оцінок ще немає)");
  const text = lines.join("\n");

  if (navigator.share) {
    navigator.share({ title: "Моя оцінка Eurovision 2026", text }).catch(() => {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(() => alert("Скопійовано! 📋"))
      .catch(() => prompt("Скопіюй:", text));
  } else {
    prompt("Скопіюй:", text);
  }
}

// Init
loadRatings();
renderTable();
renderLeaderboard();
