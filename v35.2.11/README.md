# 🦅 Projeto Águia V35.2 Final

**Lema:** *Cognoscere, amare et servire Deum.*

## Visão Geral

A versão **V35.2 Final** introduz a nova **Academia Inteligente com Banco de Perguntas**, permitindo ao estudante escolher a disciplina, a quantidade de perguntas e o nível de dificuldade.

Esta versão mantém os recursos da V35, incluindo IndexedDB, Backup e Restauração.

---

## Novidades da V35.2 Final

### 🏛️ Academia Inteligente

Recursos implementados:

- escolha de disciplina;
- escolha de quantidade de perguntas;
- opções de 5, 10, 20, 30 ou 50 questões;
- escolha de dificuldade: fácil, médio, difícil ou misto;
- sorteio automático de perguntas;
- correção automática;
- explicação da resposta;
- cálculo de acertos e erros;
- ganho de XP;
- histórico recente de treinos;
- estatísticas por disciplina.

---

## Banco de Perguntas

Os arquivos da base ficam em:

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

Cada pergunta possui:

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

O campo `resposta` usa índice começando em zero.

---

## Como usar a Academia

1. Abrir a aba **Academia**.
2. Escolher uma disciplina.
3. Escolher a quantidade de perguntas.
4. Escolher a dificuldade.
5. Clicar em **Começar treino**.
6. Responder até o final.
7. Ver o resultado e o XP conquistado.

---

## Funcionalidades preservadas

- Missão do Dia;
- Catecismo Anual;
- Calendário;
- Boletim OCR;
- Conquistas;
- Mapa da Jornada;
- Área do Responsável;
- Backup e Restauração;
- IndexedDB.

---

## Publicação

Publique os arquivos dentro da pasta:

```text
v35.2/
```

Link sugerido:

```text
https://marciohenning.github.io/projeto-aguia/v35.2/
```

---

## Próximas melhorias

- expandir cada disciplina para 60 a 100 perguntas;
- revisão automática de erros;
- recomendação inteligente com base no boletim;
- integração com a versão mobile React Native;
- backup específico da base de perguntas.

---

**Projeto Águia V35.2 Final**  
**Academia Inteligente com Banco de Perguntas**


---

## Correção V35.2.1

Corrigida a exibição das alternativas da Academia Inteligente.

Problema anterior:
- Os botões das respostas apareciam, mas o texto ficava invisível por herdar a cor branca do estilo geral dos botões.

Correção:
- Adicionado estilo específico para `.answer-session`;
- As alternativas agora aparecem com texto escuro e legível;
- A correção vale para todas as disciplinas.


---

## V35.2.10 — Correção de login e Academia

Esta versão volta a usar como base a V35.2 corrigida original, preservando:

- tela de login;
- senha familiar;
- navegação inicial;
- estrutura visual da V35.2.

Correções aplicadas somente na Academia:

- treinos com 10, 20, 30, 50 ou 100 perguntas;
- cálculo real do percentual por disciplina;
- inclusão de Geometria no desempenho;
- conteúdos por disciplina conforme seleção;
- banco pedagógico V35.7 com 11 disciplinas.


---

## V35.2.11 — Correção de acesso

Correção emergencial para impedir travamento na página inicial.

Mudanças:
- O aplicativo abre direto na tela principal;
- A tela de senha não bloqueia mais o acesso;
- O botão de login continua funcional caso a tela apareça por cache;
- Mantidas as correções da Academia da V35.2.10.
