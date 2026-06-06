
const dailyPlans = {
  1: {
    name: "Segunda-feira",
    tasks: [
      ["Português", "20 min — leitura, interpretação de texto ou gramática."],
      ["Inglês escolar", "20 min — reforço para recuperar a nota 3,30."],
      ["Projeto Interdisciplinar", "10 min — organizar pesquisa, entrega ou atividade."],
      ["Rosetta Stone", "20 min — uma lição completa."],
      ["Latim", "5 min — oração do mês."]
    ]
  },
  2: {
    name: "Terça-feira",
    tasks: [
      ["Matemática", "20 min — exercícios e revisão."],
      ["Arte", "20 min — atividade prática, pesquisa ou caderno."],
      ["Ciências", "10 min — revisão do conteúdo da semana."],
      ["Rosetta Stone", "20 min — uma lição completa."],
      ["Latim", "15 min — memorizar uma frase da oração."]
    ]
  },
  3: {
    name: "Quarta-feira",
    tasks: [
      ["Inglês escolar", "20 min — vocabulário e frases simples."],
      ["Português", "20 min — produção de frases ou resumo curto."],
      ["História", "10 min — manutenção da boa nota."],
      ["Rosetta Stone", "20 min — uma lição completa."],
      ["Leitura", "15 min — leitura livre ou texto escolar."]
    ]
  },
  4: {
    name: "Quinta-feira",
    tasks: [
      ["Projeto Interdisciplinar", "20 min — avançar entrega ou pesquisa."],
      ["Arte", "20 min — finalizar tarefa ou revisar conteúdo."],
      ["Geografia", "10 min — manutenção da nota."],
      ["Rosetta Stone", "20 min — uma lição completa."],
      ["Latim", "15 min — repetir oração do mês."]
    ]
  },
  5: {
    name: "Sexta-feira",
    tasks: [
      ["Revisão de Inglês", "20 min — revisar o que errou e o que aprendeu."],
      ["Revisão de Português", "20 min — resumo da semana."],
      ["Revisão geral", "10 min — escolher uma matéria pendente."],
      ["Teste do responsável", "Recitar latim, ler inglês e responder 3 perguntas."],
      ["Organização", "Arrumar mochila, mesa de estudo e material."]
    ]
  },
  6: {
    name: "Sábado",
    tasks: [
      ["Opcional", "Filme, desenho ou música em inglês por 30 min."],
      ["Conversa familiar", "Avaliar a semana sem cobrança excessiva."]
    ]
  },
  0: {
    name: "Domingo",
    tasks: [
      ["Descanso", "Sem cobrança escolar."],
      ["Oração", "Recitar a oração do mês antes de dormir, se desejar."]
    ]
  }
};

const months = [
  ["Junho", "Latim: Signum Crucis", "Inglês: saudações, números e cores", "Foco: Português, Inglês e Arte"],
  ["Julho", "Latim: Ave Maria, primeira parte", "Inglês: família e objetos", "Foco: Inglês, Projeto e Matemática"],
  ["Agosto", "Latim: Ave Maria completa", "Inglês: rotina e escola", "Foco: Inglês, Português e Ciências"],
  ["Setembro", "Latim: Pater Noster, primeira parte", "Inglês: verbos básicos", "Foco: Projeto, Arte e provas"],
  ["Outubro", "Latim: Pater Noster completo", "Inglês: diálogos simples", "Foco: preparação final e notas acima de 5,5"],
  ["Novembro", "Latim: Gloria Patri", "Inglês: revisão geral", "Foco: fechamento do ano e evitar recuperação"],
  ["Dezembro", "Revisão: quatro orações", "Inglês: apresentação de 2 minutos", "Meta: sem recuperação e Águia de Ouro"]
];

const state = JSON.parse(localStorage.getItem("aguiaStateV2") || '{"checked":{}, "bonuses":{}}');

function saveState() {
  localStorage.setItem("aguiaStateV2", JSON.stringify(state));
}
function money(n) { return "R$ " + n.toFixed(0); }
function iso(d) { return d.toISOString().slice(0,10); }
function todayKey() { return iso(new Date()); }

function getPlanForDate(date) {
  return dailyPlans[date.getDay()];
}

function currentWeekDates() {
  const now = new Date();
  const day = now.getDay() || 7;
  const monday = new Date(now);
  monday.setDate(now.getDate() - day + 1);
  return Array.from({length:7}, (_,i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });
}

function taskId(date, i) {
  return iso(date) + "-" + i;
}

function dayStats(date) {
  const plan = getPlanForDate(date);
  let done = 0;
  plan.tasks.forEach((_, i) => { if (state.checked[taskId(date, i)]) done++; });
  return { done, total: plan.tasks.length, percent: Math.round((done / plan.tasks.length) * 100) };
}

function renderToday() {
  const date = new Date();
  const plan = getPlanForDate(date);
  document.getElementById("todayTitle").textContent = plan.name + " — rotina de hoje";
  const wrap = document.getElementById("tasks");
  wrap.innerHTML = "";
  plan.tasks.forEach((t, i) => {
    const id = taskId(date, i);
    const checked = !!state.checked[id];
    wrap.innerHTML += `
      <label class="task">
        <input type="checkbox" data-id="${id}" ${checked ? "checked" : ""}>
        <span><span class="task-title">${t[0]}</span><br><span class="task-desc">${t[1]}</span></span>
      </label>`;
  });
}

function renderMonthGoal() {
  const m = new Date().getMonth();
  const map = {5:0,6:1,7:2,8:3,9:4,10:5,11:6};
  const item = months[map[m]] || months[0];
  document.getElementById("monthGoal").textContent = `${item[1]} • ${item[2]} • ${item[3]}`;
}

function calcWeekPercent() {
  const dates = currentWeekDates().slice(0,5);
  let done = 0, total = 0;
  dates.forEach(d => {
    const s = dayStats(d);
    done += s.done;
    total += s.total;
  });
  return total ? Math.round((done / total) * 100) : 0;
}
function rewardFromPercent(p) {
  if (p >= 100) return 50;
  if (p >= 90) return 45;
  if (p >= 80) return 40;
  if (p >= 70) return 30;
  return 0;
}

function renderWeek() {
  const p = calcWeekPercent();
  const reward = rewardFromPercent(p);
  document.getElementById("progressText").textContent = p + "%";
  document.getElementById("progressBar").style.width = p + "%";
  document.getElementById("weekReward").textContent = money(reward);
  document.getElementById("weekRewardTop").textContent = money(reward);
  renderWeekOverview();
}

function renderWeekOverview() {
  const wrap = document.getElementById("weekOverview");
  if (!wrap) return;
  wrap.innerHTML = currentWeekDates().map(d => {
    const plan = getPlanForDate(d);
    const stats = dayStats(d);
    const doneClass = stats.percent === 100 ? "done" : "";
    const label = stats.percent === 100 ? "Completo" : `${stats.done}/${stats.total}`;
    return `
      <div class="week-day">
        <div class="week-day-head">
          <strong>${plan.name}</strong>
          <span class="pill ${doneClass}">${label}</span>
        </div>
        <ul>${plan.tasks.map(t => `<li>${t[0]}</li>`).join("")}</ul>
      </div>`;
  }).join("");
}

function renderCalendar() {
  const wrap = document.getElementById("monthCalendar");
  if (!wrap) return;
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const heads = ["D","S","T","Q","Q","S","S"].map(h => `<div class="calendar-head">${h}</div>`).join("");
  let cells = "";
  for (let i=0;i<first.getDay();i++) cells += `<button class="day-cell empty"></button>`;
  for (let day=1; day<=last.getDate(); day++) {
    const d = new Date(year, month, day);
    const stats = dayStats(d);
    let cls = "";
    if (stats.done === 0) cls = "";
    else if (stats.percent === 100) cls = "done";
    else if (stats.percent >= 50) cls = "partial";
    else cls = "missed";
    cells += `<button class="day-cell ${cls}" data-date="${iso(d)}">${day}</button>`;
  }
  wrap.innerHTML = `<div class="calendar-grid">${heads}${cells}</div>`;
}

function showDay(dateString) {
  const parts = dateString.split("-").map(Number);
  const d = new Date(parts[0], parts[1]-1, parts[2]);
  const plan = getPlanForDate(d);
  const stats = dayStats(d);
  document.getElementById("selectedDay").innerHTML = `
    <h2>${plan.name} — ${dateString}</h2>
    <p class="muted">Progresso: ${stats.done}/${stats.total}</p>
    <ul>${plan.tasks.map((t,i) => `<li>${state.checked[taskId(d,i)] ? "✅" : "⬜"} <strong>${t[0]}</strong> — ${t[1]}</li>`).join("")}</ul>`;
}

function renderMonths() {
  document.getElementById("months").innerHTML = months.map(m => `
    <div class="month">
      <strong>${m[0]}</strong>
      <small>${m[1]}</small>
      <small>${m[2]}</small>
      <small>${m[3]}</small>
    </div>`).join("");
}

function renderBonuses() {
  let total = 0;
  document.querySelectorAll("[data-bonus]").forEach(box => {
    const val = Number(box.dataset.bonus);
    box.checked = !!state.bonuses[val];
    if (box.checked) total += val;
  });
  document.getElementById("bonusTotal").textContent = money(total);
}

function switchTab(tab) {
  document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
  document.querySelector("#" + tab).classList.add("active");
  document.querySelectorAll("[data-tab]").forEach(b => b.classList.toggle("active", b.dataset.tab === tab));
  renderWeek();
  renderCalendar();
}

document.addEventListener("change", e => {
  if (e.target.matches("#tasks input")) {
    state.checked[e.target.dataset.id] = e.target.checked;
    saveState();
    renderWeek();
    renderCalendar();
  }
  if (e.target.matches("[data-bonus]")) {
    state.bonuses[e.target.dataset.bonus] = e.target.checked;
    saveState();
    renderBonuses();
  }
});

document.addEventListener("click", e => {
  if (e.target.matches("[data-tab]")) switchTab(e.target.dataset.tab);
  if (e.target.id === "viewWeekBtn") switchTab("week");
  if (e.target.id === "saveDay") alert("Dia salvo. Continue firme na jornada!");
  if (e.target.id === "resetWeek") {
    currentWeekDates().forEach(d => {
      Object.keys(state.checked).forEach(id => {
        if (id.startsWith(iso(d))) delete state.checked[id];
      });
    });
    saveState();
    renderToday();
    renderWeek();
    renderCalendar();
  }
  if (e.target.matches(".day-cell[data-date]")) showDay(e.target.dataset.date);
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

renderToday();
renderMonthGoal();
renderWeek();
renderMonths();
renderBonuses();
renderCalendar();
