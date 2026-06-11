# 🦅 Projeto Águia V35.2 Final

**Lema:** *Cognoscere, amare et servire Deum.*
("Conhecer, amar e servir a Deus.")

---

# Sobre o Projeto

O Projeto Águia é uma plataforma educacional criada para promover a formação integral do estudante, unindo:

* excelência acadêmica;
* disciplina e responsabilidade;
* educação financeira;
* formação cristã;
* desenvolvimento do caráter.

O objetivo é ajudar jovens a construírem hábitos sólidos de estudo, vida espiritual e preparação para o futuro.

---

# Novidades da V35.2 Final

A V35.2 Final introduz oficialmente a **Academia Inteligente**, baseada em um banco de questões versionável.

## Academia Inteligente

Agora o estudante pode:

* escolher a disciplina;
* escolher quantas perguntas deseja responder;
* selecionar o nível de dificuldade;
* realizar treinos personalizados;
* receber correção automática;
* visualizar explicações das respostas;
* acumular XP;
* acompanhar sua evolução.

---

# Disciplinas Disponíveis

* Matemática;
* Português;
* Ciências;
* História;
* Geografia;
* Inglês;
* Catecismo;
* Educação Financeira;
* Latim.

---

# Quantidade de Questões

O estudante pode escolher:

* 5 perguntas;
* 10 perguntas;
* 20 perguntas;
* 30 perguntas;
* 50 perguntas.

---

# Banco de Perguntas

A base de questões encontra-se em:

```text
data/
└── perguntas/
```

Arquivos disponíveis:

```text
index.json
matematica.json
portugues.json
ciencias.json
historia.json
geografia.json
ingles.json
catecismo.json
educacao_financeira.json
latim.json
```

Cada disciplina possui seu próprio banco de dados, permitindo expansão contínua sem necessidade de alterar a estrutura principal do aplicativo.

---

# Estrutura das Perguntas

Cada pergunta contém:

* identificador único;
* tema;
* nível de dificuldade;
* enunciado;
* alternativas;
* resposta correta;
* explicação curta.

Exemplo:

```json
{
  "id": "mat-001",
  "nivel": "facil",
  "tema": "Porcentagem",
  "pergunta": "Quanto é 10% de 200?",
  "opcoes": ["10", "20", "30", "40"],
  "resposta": 1,
  "explicacao": "10% de 200 é 20."
}
```

O campo `resposta` utiliza índice iniciado em zero.

---

# Estatísticas e Desempenho

A Academia registra:

* disciplina estudada;
* data do treino;
* quantidade de questões;
* número de acertos;
* número de erros;
* XP conquistado;
* histórico recente de sessões.

Essas informações servirão como base para futuras recomendações inteligentes.

---

# Funcionalidades Mantidas

A V35.2 Final preserva todos os recursos anteriores do Projeto Águia:

* Missão do Dia;
* Catecismo Anual;
* Calendário;
* Boletim;
* Conquistas;
* Mapa da Jornada;
* Área do Responsável;
* Backup e Restauração;
* IndexedDB.

---

# Roadmap Futuro

## V35.3

* revisão automática das questões erradas;
* repetição espaçada;
* prioridade inteligente baseada no desempenho;
* estatísticas avançadas.

## V36+

* integração com a versão mobile React Native;
* sincronização entre dispositivos;
* relatórios para os responsáveis;
* Tutor Águia com IA educativa.

---

# Missão Educativa

O Projeto Águia busca formar jovens capazes de unir conhecimento, virtude e responsabilidade.

Não se trata apenas de melhorar notas, mas de formar pessoas preparadas para servir a Deus, à família e à sociedade.

> *Cognoscere, amare et servire Deum.*

---

**Projeto:** Projeto Águia
**Versão:** V35.2 Final
**Tipo:** PWA (Progressive Web App)
**Licença:** Uso educacional e familiar.
