# Projeto Águia V35.2.4 Recuperada — Academia 500

Esta versão foi reconstruída a partir da V35.2 estável, sem alterar a estrutura principal de login, navegação, missão, catecismo, calendário, boletim, responsável e backup.

## Correções aplicadas

- Recuperação da base estável V35.2.
- Inclusão do banco ampliado com até 500 questões por disciplina.
- Inclusão de Geometria.
- Opções de treino: 5, 10, 20, 30, 50, 100, 200 e 500 perguntas.
- Correção do conflito entre a variável JavaScript `subjects` e o elemento HTML `id="subjects"`.
- Correção do conflito entre `curriculum` e o elemento HTML `id="curriculum"`.
- Service Worker atualizado para evitar cache antigo.

## Importante

Esta é uma versão de recuperação. Ela prioriza estabilidade. As perguntas continuam dentro do `app.js` para evitar falhas de carregamento em JSON externo no GitHub Pages.

Depois de confirmar que tudo funciona, a separação definitiva em JSON deve ser feita em uma nova versão, com testes etapa por etapa.

## Publicação

Subir todo o conteúdo desta pasta para:

`v35.2.4/`

Depois acessar:

`https://marciohenning.github.io/projeto-aguia/v35.2.4/`

Após publicar, abrir em aba anônima ou pressionar Ctrl + F5.
