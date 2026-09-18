# COVEN — Cloudflare Ready

Projeto estático do RPG **COVEN**, pronto para GitHub + Cloudflare.

## Estrutura

```text
/
├── README.md
├── package.json
├── wrangler.jsonc
└── public/
    ├── index.html
    ├── styles.css
    ├── app.js
    ├── site-data.js
    ├── _headers
    └── assets/
```

## Se você quer endereço `*.pages.dev` — recomendado

Crie/conecte como **Cloudflare Pages**, não como Worker.

Configuração:

- Framework preset: `None`
- Production branch: `main`
- Root directory: deixe vazio
- Build command: deixe vazio
- Build output directory: `public`

Se a tela estiver pedindo **Deployment command**, você entrou no fluxo de **Workers**, não no fluxo de Pages.

## Se você quiser continuar na tela de Workers

Este mesmo repositório também funciona com Workers Static Assets.

Use:

- Build command: deixe vazio
- Deployment command: `npx wrangler deploy`
- Root directory: deixe vazio

O arquivo `wrangler.jsonc` já aponta os assets para `./public`.

> Observação: esse fluxo normalmente publica em um endereço `*.workers.dev`. Para `*.pages.dev`, use Cloudflare Pages.

## Onde editar o conteúdo

- `public/site-data.js`: textos, personagens, quests, locais, episódios, poderes e dados gerais.
- `public/assets/`: imagens do site.
- `public/styles.css`: aparência visual.
- `public/index.html`: estrutura principal.
- `public/app.js`: interações e navegação.
