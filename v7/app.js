
const PASSWORD='aguia2026';
const grades=[['Matemática',3.3,5],['Inglês',3.3,5],['Projeto',3.3,5],['Ciências',5.0,4],['Arte',5.0,3],['Português',6.7,2],['Geografia',6.0,1],['História',7.3,1]];
const curriculum={
Matemática:['Porcentagem','Equações','Funções','Estatística','Geometria'],
Português:['Interpretação textual','Produção textual','Gramática contextualizada','Gêneros textuais'],
Ciências:['Genética','Ecologia','Corpo humano','Sustentabilidade'],
História:['República Brasileira','Guerras Mundiais','História Contemporânea'],
Geografia:['Globalização','Geopolítica','Economia mundial','Questões ambientais'],
Inglês:['Reading','Vocabulário','Verbos','Interpretação de textos curtos'],
Arte:['Artes visuais','Música','Artes cênicas','Leitura de imagens'],
Projeto:['Pesquisa','Fontes','Produção escrita','Apresentação oral']
};
const plans={
1:['Segunda-feira','Gramática',[['Português','Interpretação e gramática'],['Inglês','Vocabulário e reading'],['Rosetta Stone','20 minutos'],['Latim','Oração do mês'],['Exercício','Quiz de gramática'],['Finanças','Registrar recompensa se aprovado']]],
2:['Terça-feira','Dialética',[['Matemática','Porcentagem, equações ou funções'],['Ciências','Genética, ecologia ou corpo humano'],['Educação Financeira','Problema prático'],['Exercício','Quiz de raciocínio'],['Revisão','Questões erradas'],['Virtude','Perseverança']]],
3:['Quarta-feira','Retórica',[['Projeto','Pesquisa e organização'],['Português','Produção de texto curto'],['Apresentação oral','Explicar ao responsável'],['Inglês','Frases simples'],['Diário Águia','O que aprendi hoje?'],['Exercício','Argumentação']]],
4:['Quinta-feira','Quadrivium',[['Geometria','Número no espaço'],['Geografia','Mapas, economia ou ambiente'],['Arte','Forma, imagem e proporção'],['Astronomia/Ciências','Tempo e movimento'],['Latim cantado','Gloria Patri'],['Exercício','Quiz do Quadrivium']]],
5:['Sexta-feira','Síntese',[['Revisão geral','Matemática, Inglês e Projeto'],['Boss Battle','20 questões'],['Simulado curto','3º/4º bimestre'],['Organização','Material e pendências'],['Relatório','Responsável confere'],['Diário','Fechamento semanal']]],
6:['Sábado','Catecismo',[['Catecismo','Leitura São Pio X'],['Perguntas','3 perguntas e respostas'],['Oração','Credo ou Sinal da Cruz'],['Reflexão','O que aprendi sobre Deus?'],['Latim','Uma oração em latim']]],
0:['Domingo','Vida Cristã',[['Missa','Participar da Santa Missa'],['Catecismo','Revisão breve'],['Orações','Pai Nosso, Ave Maria, Glória e Salve Rainha'],['Diário espiritual','Gratidão e propósito'],['Família','Conversar sobre a semana']]]
};
const qs={
Matemática:[['15% de 200 é:',['15','20','30','50'],2,'15% = 0,15; 0,15 × 200 = 30.']],
Inglês:[['Book significa:',['Mesa','Livro','Casa','Caneta'],1,'Book = livro.']],
Projeto:[['Um projeto começa com:',['Cópia','Pergunta ou problema','Atraso'],1,'Começa com uma pergunta/problema.']],
Catecismo:[['As partes principais da Doutrina Cristã são:',['Credo, Padre-Nosso, Mandamentos e Sacramentos','Somente Latim','Somente História'],0,'São quatro partes principais.']],
Latim:[['Cognoscere significa:',['Conhecer','Amar','Servir'],0,'Cognoscere = conhecer.']],
'Ed. Financeira':[['20% de R$10 é:',['R$1','R$2','R$5'],1,'20% de 10 = R$2.']]
};
let state=JSON.parse(localStorage.getItem('aguiaV7')||'{"checked":{},"money":{},"xp":0,"quiz":{},"piggy":{"free":0,"saved":0,"charity":0,"goal":500}}');
function save(){localStorage.setItem('aguiaV7',JSON.stringify(state))}
function iso(d){return d.toISOString().slice(0,10)}
function today(){return iso(new Date())}
function money(n){return 'R$ '+Number(n).toFixed(0)}
function plan(d){return plans[d.getDay()]}
function tid(d,i){return iso(d)+'-'+i}
function stats(d=new Date()){let p=plan(d),done=0;p[2].forEach((_,i)=>{if(state.checked[tid(d,i)])done++});return{done,total:p[2].length,pct:Math.round(done/p[2].length*100),complete:done===p[2].length}}
function critical(){return grades.slice().sort((a,b)=>a[1]-b[1])[0][0]}
function weekDates(){let n=new Date(),day=n.getDay()||7,m=new Date(n);m.setDate(n.getDate()-day+1);return Array.from({length:7},(_,i)=>{let d=new Date(m);d.setDate(m.getDate()+i);return d})}
function weekMoney(){return Object.values(state.money).reduce((a,b)=>a+b,0)}
enter.onclick=()=>{if(pass.value===PASSWORD){localStorage.setItem('unlockedV7','yes');lock.classList.add('hidden');app.classList.remove('hidden')}else alert('Senha incorreta')};
if(localStorage.getItem('unlockedV7')==='yes'){lock.classList.add('hidden');app.classList.remove('hidden')}
function renderMission(){let d=new Date(),p=plan(d),s=stats(d);todayTitle.textContent=p[0]+' — '+p[1];tasks.innerHTML=p[2].map((t,i)=>`<label class="task"><input type="checkbox" data-id="${tid(d,i)}" ${state.checked[tid(d,i)]?'checked':''}><span><b>${t[0]}</b><small>${t[1]}</small></span></label>`).join('');dayPct.textContent=s.pct+'%';dayBar.style.width=s.pct+'%';todayMoney.textContent=state.money[today()]?money(10):'R$ 0';missionText.textContent=s.complete?'Missão completa. Peça aprovação.':'Complete tudo para liberar R$ 10.';tasksDone.textContent=s.done+'/'+s.total}
function renderTutor(){let c=critical();tutorText.textContent=`Prioridade do boletim: ${c}. Use o currículo do GDF como conteúdo-base e organize o estudo pelo ${plan(new Date())[1]} de hoje.`;criticalEl=document.getElementById('critical'); if(criticalEl) criticalEl.textContent=c}
function renderChallenge(){let all=Object.entries(qs).flatMap(([s,a])=>a.map(q=>({s,q})));let x=all[new Date().getDate()%all.length];challenge.innerHTML=`<p><b>${x.s}</b></p><p>${x.q[0]}</p>`+x.q[1].map((a,i)=>`<button class="answer" data-sub="${x.s}" data-i="${i}">${a}</button>`).join('')+`<div id="fb" class="feedback hidden"></div>`;window.current=x}
function renderCalendar(){let n=new Date(),y=n.getFullYear(),m=n.getMonth(),first=new Date(y,m,1),last=new Date(y,m+1,0);let h=['D','S','T','Q','Q','S','S'].map(x=>`<div class="head">${x}</div>`).join('');let cells='';for(let i=0;i<first.getDay();i++)cells+='<button class="day empty"></button>';for(let day=1;day<=last.getDate();day++){let d=new Date(y,m,day),key=iso(d),dow=d.getDay(),cls='',icon=day;if(state.money[key]){cls='done';icon='🟢'}else if(dow===0||dow===6){cls='cateDay';icon='✝️'}else if(dow===5){cls='boss';icon='🏆'}else cls='miss';cells+=`<button class="day ${cls}" data-date="${key}">${icon}<br><small>${day}</small></button>`}month.innerHTML=`<div class="daygrid">${h}${cells}</div>`}
function renderWeek(){weekView.innerHTML=weekDates().map(d=>{let p=plan(d),s=stats(d);return`<div class="week"><b>${p[0]} — ${p[1]}</b><br><small>${s.done}/${s.total} tarefas</small><ul>${p[2].map(t=>`<li>${t[0]}</li>`).join('')}</ul></div>`}).join('')}
function renderAcademy(){curriculum.innerHTML=Object.entries(curriculum).map(([s,it])=>`<div class="item"><b>${s}</b><br><small>${it.join(' • ')}</small></div>`).join('');subjects.innerHTML=Object.keys(qs).map(s=>`<button class="subject" data-subject="${s}">${s}</button>`).join('')}
function renderCate(){catePlan.innerHTML=[['Sábado','Ler uma seção do Catecismo de São Pio X e responder 3 perguntas.'],['Domingo','Missa, orações e revisão breve.'],['Sequência','Doutrina Cristã → Credo → Oração → Mandamentos → Sacramentos → Virtudes.']].map(x=>`<div class="cate"><b>${x[0]}</b><br><small>${x[1]}</small></div>`).join('')}
function renderGrades(){gradesEl=document.getElementById('grades'); gradesEl.innerHTML=grades.map(g=>`<div class="grade"><b>${g[0]}</b><br><small>Nota ${g[1].toFixed(1)} • peso ${g[2]}</small></div>`).join('');weekMoneyEl=document.getElementById('weekMoney');weekMoneyEl.textContent=money(weekMoney());xp.textContent=state.xp+' XP'}
function approve(){let s=stats();if(!s.complete){approval.textContent='A missão ainda não está completa.';return}if(state.money[today()]){approval.textContent='Missão já aprovada hoje.';return}state.money[today()]=10;state.xp+=10;state.piggy.free+=7;state.piggy.saved+=2;state.piggy.charity+=1;save();approval.textContent='🦅 Missão aprovada. R$ 10 liberados.';renderAll()}
function renderAll(){renderMission();renderTutor();renderChallenge();renderCalendar();renderWeek();renderAcademy();renderCate();renderGrades()}
document.addEventListener('change',e=>{if(e.target.matches('#tasks input')){state.checked[e.target.dataset.id]=e.target.checked;save();renderAll()}})
document.addEventListener('click',e=>{if(e.target.matches('[data-tab]')){document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));document.getElementById(e.target.dataset.tab).classList.add('active');document.querySelectorAll('[data-tab]').forEach(b=>b.classList.toggle('active',b.dataset.tab===e.target.dataset.tab));renderAll()}if(e.target.id==='goParent'){document.querySelector('[data-tab="parent"]').click()}if(e.target.id==='approve')approve();if(e.target.matches('[data-date]')){let d=new Date(e.target.dataset.date+'T00:00:00'),p=plan(d),s=stats(d);dayDetails.innerHTML=`<div class="selected-day"><b>${p[0]} — ${p[1]}</b><br><small>${s.done}/${s.total} tarefas</small></div>`}if(e.target.matches('[data-subject]')){let sub=e.target.dataset.subject,q=qs[sub][0];quiz.innerHTML=`<h3>${sub}</h3><p>${q[0]}</p>`+q[1].map((a,i)=>`<button class="answer" data-sub="${sub}" data-i="${i}">${a}</button>`).join('')+`<div id="qfb" class="feedback hidden"></div>`}if(e.target.matches('.answer')){let sub=e.target.dataset.sub,q=qs[sub][0],ok=Number(e.target.dataset.i)===q[2];e.target.classList.add(ok?'correct':'wrong');state.xp+=ok?5:0;let fb=document.getElementById('qfb')||document.getElementById('fb');fb.classList.remove('hidden');fb.textContent=ok?'✅ Correto! +5 XP':'❌ '+q[3];save();renderGrades()}if(e.target.id==='export'){let blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'});let a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='projeto-aguia-v7-progresso.json';a.click()}if(e.target.id==='logout'){localStorage.removeItem('unlockedV7');location.reload()}})
if('serviceWorker' in navigator)navigator.serviceWorker.register('service-worker.js');
renderAll();
