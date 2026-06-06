
const PASSWORD = "aguia2026";
const XP_TASK = 10;
const XP_CORRECT = 5;
const XP_DAILY = 10;

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

const questionBank = {
  "Inglês": [
    {q:'Qual a tradução de "book"?', a:["Mesa","Livro","Casa","Escola"], c:1, e:"Book = livro."},
    {q:'Como se diz "bom dia" em inglês?', a:["Good night","Good morning","Good afternoon","Hello school"], c:1, e:"Good morning = bom dia."},
    {q:'Qual frase significa "Eu gosto de estudar"?', a:["I like to study","I live in Brazil","I am tired","I have a dog"], c:0, e:"I like to study = Eu gosto de estudar."},
    {q:'Qual é o plural de "child"?', a:["Childs","Children","Childes","Childrens"], c:1, e:"Child tem plural irregular: children."}
  ],
  "Latim": [
    {q:"Complete: In nomine _____, et Filii, et Spiritus Sancti.", a:["Patris","Mariae","Regis","Pacis"], c:0, e:"A forma correta é Patris."},
    {q:'"Ave Maria" começa com qual expressão?', a:["Pater noster","Ave Maria, gratia plena","Gloria Patri","Credo in unum"], c:1, e:"Ave Maria, gratia plena."},
    {q:'"Pater Noster" significa:', a:["Ave Maria","Pai Nosso","Glória ao Pai","Espírito Santo"], c:1, e:"Pater Noster = Pai Nosso."}
  ],
  "Português": [
    {q:"Qual alternativa possui um substantivo?", a:["Correr","Feliz","Livro","Rapidamente"], c:2, e:"Livro é substantivo."},
    {q:"Em qual opção há um verbo?", a:["Casa","Bonito","Estudar","Azul"], c:2, e:"Estudar é verbo."},
    {q:"Qual frase está no passado?", a:["Eu estudo hoje","Eu estudarei amanhã","Eu estudei ontem","Eu estudo agora"], c:2, e:"Estudei indica passado."}
  ],
  "Matemática": [
    {q:"Quanto é 25% de 200?", a:["25","40","50","100"], c:2, e:"25% de 200 = 50."},
    {q:"Qual é o resultado de 7 × 8?", a:["54","56","64","58"], c:1, e:"7 × 8 = 56."},
    {q:"Se x + 5 = 12, então x vale:", a:["5","7","12","17"], c:1, e:"x = 12 - 5 = 7."}
  ],
  "Ciências": [
    {q:"Qual órgão bombeia o sangue?", a:["Pulmão","Coração","Estômago","Rim"], c:1, e:"O coração bombeia o sangue."},
    {q:"As plantas produzem alimento pela:", a:["Fotossíntese","Digestão","Respiração animal","Evaporação"], c:0, e:"Fotossíntese."},
    {q:"A água ferve aproximadamente a:", a:["0°C","50°C","100°C","200°C"], c:2, e:"Ao nível do mar, ferve perto de 100°C."}
  ],
  "História": [
    {q:"A Independência do Brasil ocorreu em:", a:["1500","1822","1889","1964"], c:1, e:"A Independência foi proclamada em 1822."},
    {q:"A Proclamação da República ocorreu em:", a:["1822","1888","1889","1930"], c:2, e:"A República foi proclamada em 1889."}
  ],
  "Geografia": [
    {q:"Qual é a capital do Brasil?", a:["São Paulo","Rio de Janeiro","Brasília","Salvador"], c:2, e:"A capital é Brasília."},
    {q:"O Cerrado é um bioma muito presente em:", a:["Distrito Federal","Antártida","Deserto do Saara","Europa"], c:0, e:"O DF está no Cerrado."}
  ],
  "Arte": [
    {q:"As cores primárias tradicionais são:", a:["Vermelho, azul e amarelo","Verde, preto e branco","Roxo, laranja e marrom","Cinza, rosa e azul"], c:0, e:"Vermelho, azul e amarelo."},
    {q:"Uma escultura é uma obra:", a:["Apenas sonora","Tridimensional","Sempre digital","Somente escrita"], c:1, e:"Escultura é tridimensional."}
  ],
  "Projeto Interdisciplinar": [
    {q:"Um bom projeto começa com:", a:["Conclusão pronta","Problema ou pergunta","Entrega atrasada","Cópia sem fonte"], c:1, e:"Todo projeto precisa de uma pergunta ou problema."},
    {q:"Ao pesquisar, devemos:", a:["Copiar tudo","Ignorar fontes","Registrar fontes","Não revisar"], c:2, e:"É essencial registrar as fontes."}
  ]
};

const state = JSON.parse(localStorage.getItem("aguiaStateV4") || '{"checked":{}, "quiz":{}, "xp":0, "lives":5, "streak":0, "answeredDaily":{}, "approved":false, "lastCorrectDate":""}');
function saveState(){ localStorage.setItem("aguiaStateV4", JSON.stringify(state)); }
function money(n){ return "R$ " + n.toFixed(0); }
function iso(d){ return d.toISOString().slice(0,10); }
function getPlanForDate(date){ return dailyPlans[date.getDay()]; }
function taskId(date,i){ return iso(date)+"-"+i; }
function currentWeekDates(){ const now=new Date(); const day=now.getDay()||7; const mon=new Date(now); mon.setDate(now.getDate()-day+1); return Array.from({length:7},(_,i)=>{const d=new Date(mon); d.setDate(mon.getDate()+i); return d;}); }
function dayStats(date){ const plan=getPlanForDate(date); let done=0; plan.tasks.forEach((_,i)=>{ if(state.checked[taskId(date,i)]) done++; }); return {done,total:plan.tasks.length,percent:Math.round(done/plan.tasks.length*100)}; }
function calcWeekStats(){ const dates=currentWeekDates().slice(0,5); let done=0,total=0; dates.forEach(d=>{const s=dayStats(d); done+=s.done; total+=s.total;}); const percent=total?Math.round(done/total*100):0; return {done,total,percent}; }
function rewardFromPercent(p){ if(p>=100)return 50; if(p>=90)return 45; if(p>=80)return 40; if(p>=70)return 30; return 0; }
function levelName(xp){ if(xp>=1000)return "Nível 5 — Águia de Ouro"; if(xp>=600)return "Nível 4 — Cavaleiro"; if(xp>=300)return "Nível 3 — Guardião"; if(xp>=100)return "Nível 2 — Escudeiro"; return "Nível 1 — Aspirante"; }
function quizTotals(){ let correct=0,total=0; Object.values(state.quiz).forEach(s=>{correct+=s.correct||0; total+=s.total||0}); return {correct,total,acc: total?Math.round(correct/total*100):0}; }
function addXP(n){ state.xp += n; saveState(); renderAll(); }
function loseLife(){ state.lives = Math.max(0, state.lives - 1); saveState(); renderAll(); }

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
  renderDailyChallenge();
}

function getDailyChallenge(){
  const all = Object.entries(questionBank).flatMap(([subject, qs]) => qs.map(q => ({subject, ...q})));
  const idx = new Date().getDate() % all.length;
  return all[idx];
}
function renderDailyChallenge(){
  const q = getDailyChallenge();
  const key = iso(new Date());
  const answered = state.answeredDaily[key];
  document.getElementById("dailyChallenge").innerHTML = `
    <p class="quiz-question">${q.q}</p>
    <div class="answers">${q.a.map((ans,i)=>`<button class="answer-btn" data-daily="${i}" ${answered?'disabled':''}>${ans}</button>`).join("")}</div>
    <div id="dailyFeedback" class="feedback ${answered?'':'hidden'}">${answered ? "Desafio do dia já respondido." : ""}</div>`;
}

let currentSubject = null;
let currentQuestionIndex = 0;

function renderSubjectButtons(){
  const subjects = Object.keys(questionBank);
  document.getElementById("subjectButtons").innerHTML = subjects.map(s => `<button data-subject="${s}">${s}</button>`).join("");
}
function renderQuiz(subject){
  currentSubject = subject;
  const qs = questionBank[subject];
  currentQuestionIndex = ((state.quiz[subject]?.total || 0) % qs.length);
  const q = qs[currentQuestionIndex];
  document.getElementById("quizSubject").textContent = subject;
  document.getElementById("quizContent").innerHTML = `
    <p class="quiz-question">${q.q}</p>
    <div class="answers">${q.a.map((ans,i)=>`<button class="answer-btn" data-answer="${i}">${ans}</button>`).join("")}</div>
    <div id="quizFeedback" class="feedback hidden"></div>`;
}
function answerQuiz(choice){
  if(!currentSubject) return;
  const q = questionBank[currentSubject][currentQuestionIndex];
  const stat = state.quiz[currentSubject] || {correct:0,total:0};
  stat.total += 1;
  const correct = Number(choice) === q.c;
  if(correct){ stat.correct += 1; state.xp += XP_CORRECT; state.streak += 1; if(state.streak % 10 === 0) state.lives = Math.min(5, state.lives + 1); }
  else { state.streak = 0; state.lives = Math.max(0, state.lives - 1); }
  state.quiz[currentSubject] = stat;
  saveState();
  document.querySelectorAll("[data-answer]").forEach(btn=>{
    const idx=Number(btn.dataset.answer);
    if(idx===q.c) btn.classList.add("correct");
    if(idx===Number(choice) && !correct) btn.classList.add("wrong");
    btn.disabled = true;
  });
  document.getElementById("quizFeedback").classList.remove("hidden");
  document.getElementById("quizFeedback").textContent = correct ? `✅ Correto! +${XP_CORRECT} XP` : `❌ Ainda não. ${q.e}`;
  setTimeout(()=>{ renderQuiz(currentSubject); renderAll(); }, 1400);
}
function answerDaily(choice){
  const q = getDailyChallenge();
  const key = iso(new Date());
  if(state.answeredDaily[key]) return;
  const correct = Number(choice) === q.c;
  state.answeredDaily[key] = correct ? "correct" : "wrong";
  const stat = state.quiz[q.subject] || {correct:0,total:0};
  stat.total += 1;
  if(correct){ stat.correct += 1; state.xp += XP_DAILY; state.streak += 1; }
  else { state.streak = 0; state.lives = Math.max(0, state.lives - 1); }
  state.quiz[q.subject] = stat;
  saveState();
  document.querySelectorAll("[data-daily]").forEach(btn=>{
    const idx=Number(btn.dataset.daily);
    if(idx===q.c) btn.classList.add("correct");
    if(idx===Number(choice) && !correct) btn.classList.add("wrong");
    btn.disabled = true;
  });
  document.getElementById("dailyFeedback").classList.remove("hidden");
  document.getElementById("dailyFeedback").textContent = correct ? `✅ Correto! +${XP_DAILY} XP` : `❌ Ainda não. ${q.e}`;
  renderDashboard();
}

function renderPerformance(){
  document.getElementById("subjectPerformance").innerHTML = Object.keys(questionBank).map(s=>{
    const st=state.quiz[s] || {correct:0,total:0};
    const acc=st.total?Math.round(st.correct/st.total*100):0;
    return `<div class="perf-row"><div class="perf-head"><strong>${s}</strong><span class="pill">${st.correct}/${st.total}</span></div><small>${acc}% de acertos</small><div class="bar"><div style="width:${acc}%"></div></div></div>`;
  }).join("");
}

function renderDashboard(){
  const s=calcWeekStats(), reward=rewardFromPercent(s.percent), qt=quizTotals();
  ["dashboardPercent","progressText","parentPercent"].forEach(id=>document.getElementById(id).textContent=s.percent+"%");
  ["dashboardBar","progressBar"].forEach(id=>document.getElementById(id).style.width=s.percent+"%");
  ["weekRewardTop","weekReward","parentReward"].forEach(id=>document.getElementById(id).textContent=money(reward));
  document.getElementById("parentDone").textContent=s.done+"/"+s.total;
  document.getElementById("parentQuiz").textContent=qt.correct+"/"+qt.total;
  document.getElementById("xpTotal").textContent=state.xp+" XP";
  document.getElementById("levelName").textContent=levelName(state.xp);
  document.getElementById("lives").textContent="❤️".repeat(state.lives)+"🤍".repeat(5-state.lives);
  document.getElementById("accuracy").textContent=qt.acc+"%";
  document.getElementById("streak").textContent=state.streak;
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
  const qt=quizTotals();
  document.getElementById("badges").innerHTML=[
    ["🥉 Bronze","1 semana com 70%+"],
    ["🥈 Prata","3 semanas completas"],
    ["🥇 Ouro","6 meses de jornada"],
    ["🏆 Águia de Ouro","Sem recuperação"],
    ["🇺🇸 Mestre do Inglês","Inglês acima de 6"],
    ["✝️ Guardião do Latim","4 orações memorizadas"],
    ["🧠 50 exercícios","Praticar com constância"],
    ["🔥 10 acertos seguidos","Sequência de excelência"]
  ].map(b=>`<span>${b[0]}<br><small>${b[1]}</small></span>`).join("");
}

function renderWeeklyReport(){
  const qt=quizTotals();
  const weak = Object.entries(state.quiz).sort((a,b)=>((a[1].correct/a[1].total||0)-(b[1].correct/b[1].total||0)))[0];
  document.getElementById("weeklyReport").innerHTML = `
    <div class="absence-row"><strong>Exercícios feitos</strong><br><small>${qt.total} questões • ${qt.correct} acertos • ${qt.acc}% de aproveitamento</small></div>
    <div class="absence-row"><strong>XP acumulado</strong><br><small>${state.xp} XP • ${levelName(state.xp)}</small></div>
    <div class="absence-row"><strong>Recomendação</strong><br><small>${weak ? "Reforçar " + weak[0] + " nesta semana." : "Começar pelos exercícios de Inglês e Português."}</small></div>`;
}

function switchTab(tab){
  document.querySelectorAll(".panel").forEach(p=>p.classList.remove("active"));
  document.getElementById(tab).classList.add("active");
  document.querySelectorAll("[data-tab]").forEach(b=>b.classList.toggle("active", b.dataset.tab===tab));
  renderAll();
}
function renderAll(){ renderToday(); renderDashboard(); renderWeekOverview(); renderCalendar(); renderGrades(); renderJourney(); renderSubjectButtons(); renderPerformance(); renderWeeklyReport(); }

document.addEventListener("change", e=>{
  if(e.target.matches("#tasks input")){
    const was = !!state.checked[e.target.dataset.id];
    state.checked[e.target.dataset.id]=e.target.checked;
    if(e.target.checked && !was) state.xp += XP_TASK;
    if(!e.target.checked && was) state.xp = Math.max(0, state.xp-XP_TASK);
    saveState(); renderAll();
  }
});
document.addEventListener("click", e=>{
  if(e.target.matches("[data-tab]")) switchTab(e.target.dataset.tab);
  if(e.target.id==="viewWeekBtn") switchTab("week");
  if(e.target.id==="saveDay") alert("Dia salvo. Continue firme na jornada!");
  if(e.target.id==="resetWeek"){ currentWeekDates().forEach(d=>Object.keys(state.checked).forEach(id=>{ if(id.startsWith(iso(d))) delete state.checked[id]; })); saveState(); renderAll(); }
  if(e.target.matches(".day-cell[data-date]")) showDay(e.target.dataset.date);
  if(e.target.matches("[data-subject]")) renderQuiz(e.target.dataset.subject);
  if(e.target.matches("[data-answer]")) answerQuiz(e.target.dataset.answer);
  if(e.target.matches("[data-daily]")) answerDaily(e.target.dataset.daily);
  if(e.target.id==="approveWeek"){ state.approved=true; saveState(); document.getElementById("approvalMsg").textContent="Semana aprovada pelo responsável."; }
  if(e.target.id==="logout"){ localStorage.removeItem("aguiaUnlocked"); location.reload(); }
  if(e.target.id==="exportData"){
    const blob=new Blob([JSON.stringify({exportedAt:new Date().toISOString(), state},null,2)],{type:"application/json"});
    const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download="projeto-aguia-v4-progresso.json"; a.click();
  }
});

if("serviceWorker" in navigator){ navigator.serviceWorker.register("service-worker.js"); }
checkAuth(); renderAll();
