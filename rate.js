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
  { id: "vokal", max: 10, emoji: "🎤" },
  { id: "obraz", max: 10, emoji: "💅" },
  { id: "nomer", max: 10, emoji: "🎭" },
  { id: "novyzna", max: 10, emoji: "🆕" },
  { id: "prognoz", max: 25, emoji: "😎" },
];

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

function setValue(idx, crit, raw, inputEl) {
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
    // Якщо користувач увів більше за max — перезаписуємо input актуальним значенням
    if (inputEl && clamped !== n) inputEl.value = String(clamped);
  }
  saveRatings();
  updateRow(idx);
  renderLeaderboard();
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
      const input = document.createElement("input");
      input.type = "number";
      input.inputMode = "decimal";
      input.min = "0";
      input.max = String(c.max);
      input.step = "0.5";
      input.placeholder = "—";
      input.dataset.idx = String(i);
      input.dataset.crit = c.id;
      const v = getValue(i, c.id);
      if (Number.isFinite(v)) input.value = String(v);
      input.addEventListener("input", () =>
        setValue(i, c.id, input.value, input),
      );
      input.addEventListener("focus", () => input.select());
      td.appendChild(input);
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
