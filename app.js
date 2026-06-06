
const tasksByDay = {
  1: [
    ["Estudos escolares", "50 minutos revisando a escola e fazendo tarefas."],
    ["Inglês", "20 minutos no Rosetta Stone."],
    ["Latim", "5 minutos lendo a oração da semana."]
  ],
  2: [
    ["Português ou Matemática", "30 minutos de exercícios extras."],
    ["Inglês", "20 minutos no Rosetta Stone."],
    ["Latim", "15 minutos memorizando uma frase."]
  ],
  3: [
    ["Ciências ou História", "30 minutos de revisão."],
    ["Inglês", "20 minutos no Rosetta Stone."],
    ["Leitura", "15 minutos de leitura adequada para a idade."]
  ],
  4: [
    ["Arte ou Projeto", "30 minutos organizando trabalhos e pesquisas."],
    ["Inglês", "20 minutos no Rosetta Stone."],
    ["Latim", "15 minutos repetindo as orações."]
  ],
  5: [
    ["Revisão geral", "20 minutos revisando a semana."],
    ["Inglês", "20 minutos no Rosetta Stone."],
    ["Teste do responsável", "Perguntas sobre a semana e recitação em latim."],
    ["Organização", "Arrumar mochila, material e mesa de estudos."]
  ],
  6: [
    ["Opcional", "Filme ou desenho em inglês por 30 minutos."]
  ],
  0: [
    ["Descanso", "Apenas oração antes de dormir, se desejar."]
  ]
};

const months = [
  ["Junho", "Latim: Sinal da Cruz", "Inglês: saudações, números e cores", "Foco: Português e Inglês"],
  ["Julho", "Latim: Ave Maria, primeira parte", "Inglês: família e objetos", "Foco: Português e Matemática"],
  ["Agosto", "Latim: Ave Maria completa", "Inglês: rotina e escola", "Foco: Inglês, Arte e Projeto"],
  ["Setembro", "Latim: Pai Nosso, primeira parte", "Inglês: verbos básicos", "Foco: preparação para provas"],
  ["Outubro", "Latim: Pai Nosso completo", "Inglês: diálogos simples", "Foco: todas acima de 5,5"],
  ["Novembro", "Latim: Glória ao Pai", "Inglês: revisão geral", "Foco: fechamento do ano"],
  ["Dezembro", "Revisão: quatro orações", "Inglês: apresentação de 2 minutos", "Meta: sem recuperação"]
];

const state = JSON.parse(localStorage.getItem("aguiaState") || '{"checked":{}, "bonuses":{}}');

function saveState() {
  localStorage.setItem("aguiaState", JSON.stringify(state));
}

function money(n) { return "R$ " + n.toFixed(0); }

function todayKey() {
  const d = new Date();
  return d.toISOString().slice(0,10);
}

function weekKeys() {
  const now = new Date();
  const day = now.getDay() || 7;
  const monday = new Date(now);
  monday.setDate(now.getDate() - day + 1);
  return Array.from({length:5}, (_,i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d.toISOString().slice(0,10);
  });
}

function renderToday() {
  const day = new Date().getDay();
  const key = todayKey();
  const tasks = tasksByDay[day] || tasksByDay[1];
  document.getElementById("todayTitle").textContent = day >= 1 && day <= 5 ? "Rotina de hoje" : "Rotina de descanso";
  const wrap = document.getElementById("tasks");
  wrap.innerHTML = "";
  tasks.forEach((t, i) => {
    const id = key + "-" + i;
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
  const keys = weekKeys();
  let done = 0, total = 0;
  keys.forEach(k => {
    for (let i=0;i<5;i++) {
      const id = k + "-" + i;
      if (state.checked.hasOwnProperty(id)) total++;
      if (state.checked[id]) done++;
    }
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
  document.getElementById("progressText").textContent = p + "%";
  document.getElementById("progressBar").style.width = p + "%";
  document.getElementById("weekReward").textContent = money(rewardFromPercent(p));
  const monthTotal = rewardFromPercent(p); 
  document.getElementById("monthTotal").textContent = money(monthTotal);
}

function renderMonths() {
  const wrap = document.getElementById("months");
  wrap.innerHTML = months.map(m => `
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
}

document.addEventListener("change", e => {
  if (e.target.matches("#tasks input")) {
    state.checked[e.target.dataset.id] = e.target.checked;
    saveState();
    renderWeek();
  }
  if (e.target.matches("[data-bonus]")) {
    state.bonuses[e.target.dataset.bonus] = e.target.checked;
    saveState();
    renderBonuses();
  }
});

document.addEventListener("click", e => {
  if (e.target.matches("[data-tab]")) switchTab(e.target.dataset.tab);
  if (e.target.id === "saveDay") {
    alert("Dia salvo. Continue firme na jornada!");
  }
  if (e.target.id === "resetWeek") {
    weekKeys().forEach(k => {
      Object.keys(state.checked).forEach(id => {
        if (id.startsWith(k)) delete state.checked[id];
      });
    });
    saveState();
    renderToday();
    renderWeek();
  }
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

renderToday();
renderMonthGoal();
renderWeek();
renderMonths();
renderBonuses();
