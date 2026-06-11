# 🦅 Projeto Águia V35.2

**Lema:** *Cognoscere, amare et servire Deum.*
("Conhecer, amar e servir a Deus.")

---

## Visão Geral

O Projeto Águia é uma plataforma de formação integral voltada para o desenvolvimento acadêmico, espiritual e financeiro do estudante.

A versão **V35.2** introduz a nova **Academia Inteligente**, baseada em um banco de questões organizado por disciplinas e níveis de dificuldade.

---

## Principais Funcionalidades

### 🎯 Missão Diária

* Português;
* Matemática;
* Catecismo;
* Aprovação pelo responsável;
* Ganho de XP;
* Recompensa diária.

### 🏛️ Academia Inteligente

* Escolha da disciplina;
* Banco de questões por matéria;
* Quantidade configurável de perguntas;
* Correção automática;
* Explicação das respostas;
* Registro do desempenho do estudante.

### ✝️ Catecismo

* Catecismo Menor de São Pio X;
* Leitura anual organizada;
* Controle de progresso.

### 📅 Calendário

* Planejamento anual;
* Organização das atividades;
* Visualização do progresso.

### 🏅 Conquistas

* Evolução do estudante;
* Registro das missões cumpridas;
* Histórico de crescimento.

### 💾 Backup

* Exportação dos dados;
* Importação dos dados;
* Recuperação do progresso.

---

# Academia Inteligente (V35.2)

## Disciplinas disponíveis

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

## Quantidade de questões

O estudante poderá escolher quantas perguntas deseja responder:

* 5 questões;
* 10 questões;
* 20 questões;
* 30 questões;
* 50 questões.

---

## Estrutura das Perguntas

Cada pergunta contém:

* ID único;
* Tema;
* Nível de dificuldade;
* Enunciado;
* Alternativas;
* Resposta correta;
* Explicação curta.

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

---

## Banco de Questões

Os arquivos encontram-se em:

```text
data/
└── perguntas/
```

Arquivos disponíveis:

```text
matematica.json
portugues.json
ciencias.json
historia.json
geografia.json
ingles.json
catecismo.json
educacao_financeira.json
latim.json
index.json
```

---

## Registro de Desempenho

A Academia registra:

* Disciplina estudada;
* Data da atividade;
* Quantidade de questões;
* Número de acertos;
* Número de erros;
* XP conquistado.

Essas informações poderão ser utilizadas para recomendações futuras.

---

## Roadmap

### V35.2

* Banco de questões;
* Seleção de disciplina;
* Quantidade configurável;
* Correção automática.

### Futuras versões

* Revisão automática dos erros;
* Priorização inteligente das disciplinas;
* Estatísticas avançadas;
* Integração com boletim escolar;
* Recomendações do Tutor Águia;
* IA educativa personalizada.

---

## Missão Educativa

O Projeto Águia busca formar jovens capazes de unir:

* Excelência acadêmica;
* Disciplina pessoal;
* Responsabilidade financeira;
* Vida espiritual sólida;
* Amor à verdade e ao bem.

*"Cognoscere, amare et servire Deum."*

---

**Versão:** V35.2
**Projeto:** Projeto Águia
**Licença:** Uso educacional e familiar.
