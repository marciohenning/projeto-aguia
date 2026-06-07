# 🦅 Projeto Águia — Versão 35

## Novidade principal

A Versão 35 implementa um **Banco de Dados Interno com IndexedDB** e um **Sistema de Backup e Restauração**.

Essa melhoria protege o progresso do aluno e prepara o Projeto Águia para uma futura migração para React Native.

---

## 🗄 Banco de Dados Interno

O aplicativo agora usa o banco local:

```text
ProjetoAguiaDB
```

Ele preserva:

- Missões;
- XP;
- Recompensas;
- Catecismo Anual;
- Academia;
- Conquistas;
- Mapa da Jornada;
- Boletim OCR;
- Favoritos;
- Configurações.

---

## 💾 Nova aba Backup

A nova área de Backup permite:

- Exportar Backup JSON;
- Importar Backup JSON;
- Restaurar último backup;
- Migrar dados para IndexedDB;
- Limpar banco interno.

---

## 📤 Exportação

O backup gera um arquivo `.json` contendo o progresso completo do Projeto Águia.

Exemplo de nome:

```text
Projeto_Aguia_Backup_V35_2026-06-06.json
```

---

## 📥 Importação

A importação permite restaurar o progresso em outro navegador, computador ou celular.

Isso facilita:

- trocar de aparelho;
- reinstalar navegador;
- preservar histórico;
- preparar futura migração para React Native.

---

## 🔄 Migração automática

Ao abrir a V35, os dados atuais são migrados automaticamente para o IndexedDB.

O sistema mantém também o `localStorage` como camada de compatibilidade.

---

## Mantido da Versão 34

- Missão, XP e Conquistas normalizados;
- Mapa da Jornada;
- Academia com escolha livre;
- Catecismo Anual preservado;
- Boletim OCR;
- Painel do Responsável;
- Navegação PWA.

---

## Senha

```text
aguia2026
```

---

## Estrutura

Publique os arquivos dentro da pasta:

```text
v35/
```

Arquivos:

```text
index.html
app.js
styles.css
manifest.json
service-worker.js
README.md
```

---

## Link

```text
https://marciohenning.github.io/projeto-aguia/v35/
```

---

## Lema

> **Cognoscere, amare et servire Deum.**

**Conhecer, amar e servir a Deus.**
