
const PASSWORD = "aguia2026";

const dailyPlans = {
  1:{name:"Segunda-feira",tasks:[["Português","20 min — leitura, interpretação de texto ou gramática."],["Inglês escolar","20 min — reforço para recuperar a nota 3,30."],["Projeto Interdisciplinar","10 min — organizar pesquisa, entrega ou atividade."],["Rosetta Stone","20 min — uma lição completa."],["Latim","5 min — oração do mês."]]},
  2:{name:"Terça-feira",tasks:[["Matemática","20 min — exercícios e revisão."],["Arte","20 min — atividade prática, pesquisa ou caderno."],["Ciências","10 min — revisão do conteúdo da semana."],["Rosetta Stone","20 min — uma lição completa."],["Latim","15 min — memorizar uma frase da oração."]]},
  3:{name:"Quarta-feira",tasks:[["Inglês escolar","20 min — vocabulário e frases simples."],["Português","20 min — produção de frases ou resumo curto."],["História","10 min — manutenção da boa nota."],["Rosetta Stone","20 min — uma lição completa."],["Leitura","15 min — leitura livre ou texto escolar."]]},
  4:{name:"Quinta-feira",tasks:[["Projeto Interdisciplinar","20 min — avançar entrega ou pesquisa."],["Arte","20 min — finalizar tarefa ou revisar conteúdo."],["Geografia","10 min — manutenção da nota."],["Rosetta Stone","20 min — uma lição completa."],["Latim","15 min — repetir oração do mês."]]},
  5:{name:"Sexta-feira",tasks:[["Revisão de Inglês","20 min — revisar o que errou e o que aprendeu."],["Revisão de Português","20 min — resumo da semana."],["Revisão geral","10 min — escolher uma matéria pendente."],["Teste do responsável","Recitar latim, ler inglês e responder 3 perguntas."],["Organização","Arrumar mochila, mesa de estudo e material."]]},
  6:{name:"Sábado",tasks:[["Opcional","Filme, desenho ou música em inglês por 30 min."],["Conversa familiar","Avaliar a semana sem cobrança excessiva."]]},
  0:{name:"Domingo",tasks:[["Descanso","Sem cobrança escolar."],["Oração","Recitar a oração do mês antes de dormir, se desejar."]]}
};

const months = [
  ["Junho","Latim: Signum Crucis","Inglês: saudações, números e cores","Foco: Português, Inglês e Arte"],
  ["Julho","Latim: Ave Maria, primeira parte","Inglês: família e objetos","Foco: Inglês, Projeto e Matemática"],
  ["Agosto","Latim: Ave Maria completa","Inglês: rotina e escola","Foco: Inglês, Português e Ciências"],
  ["Setembro","Latim: Pater Noster, primeira parte","Inglês: verbos básicos","Foco: Projeto, Arte e provas"],
  ["Outubro","Latim: Pater Noster completo","Inglês: diálogos simples","Foco: preparação final e notas acima de 5,5"],
  ["Novembro","Latim: Gloria Patri","Inglês: revisão geral","Foco: fechamento do ano e evitar recuperação"],
  ["Dezembro","Revisão: quatro orações","Inglês: apresentação de 2 minutos","Meta: sem recuperação e Águia de Ouro"]
];

const grades = [
  ["Inglês",3.3,12,"Crítico: Rosetta Stone diário + reforço escolar"],
  ["Arte",3.8,0,"Crítico: organizar entregas e atividades práticas"],
  ["Projeto Interdisciplinar",3.9,0,"Crítico: acompanhar tarefas e prazos"],
  ["Português",5.3,12,"Atenção: leitura e produção de texto"],
  ["Ciências",5.0,8,"Atenção: revisão semanal"],
  ["Ensino Religioso",5.0,0,"Atenção: manutenção"],
  ["Geografia",6.0,2,"Manutenção"],
  ["História",7.3,0,"Bom desempenho: manter"]
];

const latin = [
  ["Signum Crucis","In nomine Patris, et Filii, et Spiritus Sancti. Amen."],
  ["Ave Maria","Ave Maria, gratia plena..."],
  ["Pater Noster","Pater noster, qui es in caelis..."],
  ["Gloria Patri","Gloria Patri, et Filio, et Spiritui Sancto..."]
];

const state = JSON.parse(localStorage.getItem("aguiaStateV3") || '{"checked":{}, "bonuses":{}, "approved":false}');
function saveState(){ localStorage.setItem("aguiaStateV3", JSON.stringify(state)); }
function money(n){ return "R$ " + n.toFixed(0); }
function iso(d){ return d.toISOString().slice(0,10); }
function getPlanForDate(date){ return dailyPlans[date.getDay()]; }
function taskId(date,i){ return iso(date)+"-"+i; }
function currentWeekDates(){ const now=new Date(); const day=now.getDay()||7; const mon=new Date(now); mon.setDate(now.getDate()-day+1); return Array.from({length:7},(_,i)=>{const d=new Date(mon); d.setDate(mon.getDate()+i); return d;}); }
function dayStats(date){ const plan=getPlanForDate(date); let done=0; plan.tasks.forEach((_,i)=>{ if(state.checked[taskId(date,i)]) done++; }); return {done,total:plan.tasks.length,percent:Math.round(done/plan.tasks.length*100)}; }
function calcWeekStats(){ const dates=currentWeekDates().slice(0,5); let done=0,total=0; dates.forEach(d=>{const s=dayStats(d); done+=s.done; total+=s.total;}); const percent=total?Math.round(done/total*100):0; return {done,total,percent}; }
function rewardFromPercent(p){ if(p>=100)return 50; if(p>=90)return 45; if(p>=80)return 40; if(p>=70)return 30; return 0; }

function checkAuth(){
  if(localStorage.getItem("aguiaUnlocked")==="yes"){ document.getElementById("lockScreen").classList.add("hidden"); document.getElementById("appShell").classList.remove("hidden"); }
}
document.getElementById("unlockBtn").onclick=()=>{ if(document.getElementById("passwordInput").value===PASSWORD){ localStorage.setItem("aguiaUnlocked","yes"); checkAuth(); } else alert("Senha incorreta."); };
document.getElementById("passwordInput").addEventListener("keydown", e=>{ if(e.key==="Enter") document.getElementById("unlockBtn").click(); });

function renderToday(){
  const date=new Date(), plan=getPlanForDate(date);
  document.getElementById("todayTitle").textContent=plan.name+" — rotina de hoje";
  document.getElementById("nextTask").textContent="Próxima atividade: "+(plan.tasks.find((_,i)=>!state.checked[taskId(date,i)])?.[0] || "todas concluídas");
  document.getElementById("tasks").innerHTML=plan.tasks.map((t,i)=>`
    <label class="task">
      <input type="checkbox" data-id="${taskId(date,i)}" ${state.checked[taskId(date,i)]?"checked":""}>
      <span><span class="task-title">${t[0]}</span><br><span class="task-desc">${t[1]}</span></span>
    </label>`).join("");
}

function renderDashboard(){
  const s=calcWeekStats(), reward=rewardFromPercent(s.percent);
  ["dashboardPercent","progressText","parentPercent"].forEach(id=>document.getElementById(id).textContent=s.percent+"%");
  ["dashboardBar","progressBar"].forEach(id=>document.getElementById(id).style.width=s.percent+"%");
  ["weekRewardTop","weekReward","parentReward"].forEach(id=>document.getElementById(id).textContent=money(reward));
  document.getElementById("parentDone").textContent=s.done+"/"+s.total;
  const start=new Date(new Date().getFullYear(),5,1), end=new Date(new Date().getFullYear(),11,31), now=new Date();
  const total=end-start, passed=Math.max(0, Math.min(total, now-start));
  const days=Math.ceil((end-now)/(1000*60*60*24));
  document.getElementById("daysLeft").textContent = days > 0 ? `Faltam ${days} dias para concluir a missão 2026.` : "Missão 2026 concluída.";
  document.getElementById("annualBar").style.width = Math.round((passed/total)*100)+"%";
}

function renderWeekOverview(){
  document.getElementById("weekOverview").innerHTML=currentWeekDates().map(d=>{
    const plan=getPlanForDate(d), s=dayStats(d);
    return `<div class="week-day"><div class="week-day-head"><strong>${plan.name}</strong><span class="pill ${s.percent===100?"done":""}">${s.percent===100?"Completo":s.done+"/"+s.total}</span></div><ul>${plan.tasks.map(t=>`<li>${t[0]}</li>`).join("")}</ul></div>`;
  }).join("");
}

function renderCalendar(){
  const wrap=document.getElementById("monthCalendar"), now=new Date(), year=now.getFullYear(), month=now.getMonth();
  const first=new Date(year,month,1), last=new Date(year,month+1,0);
  const heads=["D","S","T","Q","Q","S","S"].map(h=>`<div class="calendar-head">${h}</div>`).join("");
  let cells=""; for(let i=0;i<first.getDay();i++) cells+=`<button class="day-cell empty"></button>`;
  for(let day=1;day<=last.getDate();day++){ const d=new Date(year,month,day), s=dayStats(d); let cls=s.done===0?"":s.percent===100?"done":s.percent>=50?"partial":"missed"; cells+=`<button class="day-cell ${cls}" data-date="${iso(d)}">${day}</button>`; }
  wrap.innerHTML=`<div class="calendar-grid">${heads}${cells}</div>`;
}
function showDay(dateString){ const [y,m,day]=dateString.split("-").map(Number), d=new Date(y,m-1,day), plan=getPlanForDate(d), s=dayStats(d); document.getElementById("selectedDay").innerHTML=`<h2>${plan.name} — ${dateString}</h2><p class="muted">Progresso: ${s.done}/${s.total}</p><ul>${plan.tasks.map((t,i)=>`<li>${state.checked[taskId(d,i)]?"✅":"⬜"} <strong>${t[0]}</strong> — ${t[1]}</li>`).join("")}</ul>`; }

function renderGrades(){
  document.getElementById("gradesList").innerHTML=grades.map(g=>{ const cls=g[1]<5?"danger":g[1]<6?"warn":"ok"; return `<div class="grade-row"><div class="grade-head"><strong>${g[0]}</strong><span class="pill ${cls}">${g[1].toFixed(1)}</span></div><small>${g[3]}</small><div class="bar"><div style="width:${g[1]*10}%"></div></div></div>`; }).join("");
  document.getElementById("absenceList").innerHTML=grades.filter(g=>g[2]>0).map(g=>`<div class="absence-row"><strong>${g[0]}</strong><br><small>${g[2]} faltas registradas — atenção à frequência.</small></div>`).join("");
}

function renderJourney(){
  document.getElementById("months").innerHTML=months.map(m=>`<div class="month"><strong>${m[0]}</strong><small>${m[1]}</small><small>${m[2]}</small><small>${m[3]}</small></div>`).join("");
  document.getElementById("latinProgress").innerHTML=latin.map((l,i)=>`<div class="latin-row"><strong>${i<1?"✅":"⬜"} ${l[0]}</strong><small>${l[1]}</small></div>`).join("");
  const s=calcWeekStats();
  document.getElementById("badges").innerHTML=[
    ["🥉 Bronze","1 semana com 70%+"],
    ["🥈 Prata","3 semanas completas"],
    ["🥇 Ouro","6 meses de jornada"],
    ["🏆 Águia de Ouro","Sem recuperação"],
    ["🇺🇸 Mestre do Inglês","Inglês acima de 6"],
    ["✝️ Guardião do Latim","4 orações memorizadas"]
  ].map(b=>`<span>${b[0]}<br><small>${b[1]}</small></span>`).join("");
}

function switchTab(tab){
  document.querySelectorAll(".panel").forEach(p=>p.classList.remove("active"));
  document.getElementById(tab).classList.add("active");
  document.querySelectorAll("[data-tab]").forEach(b=>b.classList.toggle("active", b.dataset.tab===tab));
  renderAll();
}
function renderAll(){ renderToday(); renderDashboard(); renderWeekOverview(); renderCalendar(); renderGrades(); renderJourney(); }

document.addEventListener("change", e=>{
  if(e.target.matches("#tasks input")){ state.checked[e.target.dataset.id]=e.target.checked; saveState(); renderAll(); }
});
document.addEventListener("click", e=>{
  if(e.target.matches("[data-tab]")) switchTab(e.target.dataset.tab);
  if(e.target.id==="viewWeekBtn") switchTab("week");
  if(e.target.id==="saveDay") alert("Dia salvo. Continue firme na jornada!");
  if(e.target.id==="resetWeek"){ currentWeekDates().forEach(d=>Object.keys(state.checked).forEach(id=>{ if(id.startsWith(iso(d))) delete state.checked[id]; })); saveState(); renderAll(); }
  if(e.target.matches(".day-cell[data-date]")) showDay(e.target.dataset.date);
  if(e.target.id==="approveWeek"){ state.approved=true; saveState(); document.getElementById("approvalMsg").textContent="Semana aprovada pelo responsável."; }
  if(e.target.id==="logout"){ localStorage.removeItem("aguiaUnlocked"); location.reload(); }
  if(e.target.id==="exportData"){
    const blob=new Blob([JSON.stringify({exportedAt:new Date().toISOString(), state},null,2)],{type:"application/json"});
    const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download="projeto-aguia-progresso.json"; a.click();
  }
});

if("serviceWorker" in navigator){ navigator.serviceWorker.register("service-worker.js"); }
checkAuth(); renderAll();
