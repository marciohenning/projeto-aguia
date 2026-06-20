# Procedimento — Projeto Águia V35.2.4 Estável com Academia em JSON

## Objetivo
Retomar a versão estável V35.2/V35.2.3 e adicionar a Academia com 500 perguntas por disciplina sem colocar as questões dentro do `app.js`.

## O que foi preservado
- Login e senha `aguia2026`.
- Navegação principal.
- Missão diária.
- Catecismo anual.
- Calendário.
- Boletim/OCR.
- Conquistas.
- Backup.

## O que foi alterado
- As perguntas agora ficam em `data/perguntas/*.json`.
- O `app.js` carrega os JSONs ao abrir a Academia.
- Foi adicionada a disciplina Geometria.
- Foram adicionadas opções de treino com 100, 200 e 500 perguntas.
- O Service Worker foi atualizado para cache `aguia-v35-2-4`.

## Como publicar no GitHub Pages
1. Criar uma nova pasta no repositório: `v35.2.4/`.
2. Enviar todos os arquivos desta pasta, mantendo exatamente a estrutura:

```
v35.2.4/
  index.html
  styles.css
  app.js
  manifest.json
  service-worker.js
  data/
    perguntas/
      matematica.json
      geometria.json
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

3. Abrir no navegador:

```
https://marciohenning.github.io/projeto-aguia/v35.2.4/
```

4. Testar nesta ordem:
- Login com `aguia2026`.
- Clicar em Academia.
- Ver se aparecem as disciplinas com a contagem de perguntas.
- Escolher Geometria.
- Treinar 5 perguntas.
- Treinar 50 perguntas.
- Treinar 100 ou 500 perguntas apenas depois de confirmar que as menores funcionaram.

## Regra para próximas versões
Não colocar novas perguntas dentro do `app.js`. Toda nova pergunta deve entrar somente nos arquivos JSON da pasta `data/perguntas`.

## Se der erro depois de publicar
1. Abrir no navegador anônimo.
2. Limpar cache do site.
3. Conferir se a pasta `data/perguntas` foi enviada.
4. Conferir letras maiúsculas/minúsculas nos nomes dos arquivos.
5. Nunca substituir a V35.2.3; manter ela como backup permanente.


## Correção 35.2.4-disciplinas

Corrigido conflito entre a lista interna de disciplinas e o elemento HTML `#subjects`, que deixava o seletor de disciplinas vazio em alguns navegadores.
