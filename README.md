# Oficina Leão — Site Institucional

> Tradição que move gerações desde 1974 · Recife

Site institucional da **Oficina Leão**, oficina mecânica familiar fundada em 1974
por Seu João de Freitas e hoje tocada pelos filhos especialistas em caixa de marcha, pintura
& lanternagem e motor / mecânica geral.

## Stack

- **[Astro](https://astro.build/)** 4 (SSG, Islands Architecture)
- **[Tailwind CSS](https://tailwindcss.com/)** 3
- **[Phosphor Icons](https://phosphoricons.com/)** via `astro-icon`
- **Fontes**: Playfair Display (títulos) + Inter (corpo)
- **Imagens**: componente `<Image />` do Astro + `sharp`
- **SEO**: metatags, Open Graph, `@astrojs/sitemap`, Schema.org `AutoRepair`

## Identidade Visual — Paleta "Legado Clássico"

| Token           | Hex       | Uso                            |
| --------------- | --------- | ------------------------------ |
| `leao-blue`     | `#1A2B3C` | Fundo / Primária               |
| `leao-orange`   | `#E67E22` | Destaques / CTA / Leão         |
| `leao-silver`   | `#BDC3C7` | Textos secundários / Metálico  |
| `leao-white`    | `#F4F4F4` | Texto principal                |

## Estrutura

```
.
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   └── robots.txt
└── src/
    ├── components/
    │   ├── Footer.astro
    │   ├── Nav.astro
    │   ├── ServiceCard.astro        # Card reutilizável (glassmorphism)
    │   └── Testimonial.astro
    ├── layouts/
    │   └── Layout.astro             # SEO + Schema.org LocalBusiness
    ├── pages/
    │   └── index.astro              # Hero + História + Especialidades + Depoimentos + Footer
    └── styles/
        └── global.css
```

## Scripts

Este projeto usa **[pnpm](https://pnpm.io/)** como gerenciador de pacotes.

```bash
pnpm install      # instala dependências
pnpm dev          # servidor de desenvolvimento em http://localhost:4321
pnpm build        # build estático em ./dist
pnpm preview      # preview local do build
```

> Não tem pnpm? `corepack enable && corepack prepare pnpm@latest --activate`

## Decisões de design

- **Glassmorphism sutil** nos cards de serviços (`backdrop-blur-md` + bordas
  translúcidas) sobre o fundo azul escuro `leao-blue`.
- **Sombras premium** (`shadow-premium`, `shadow-orange-glow`) e bordas
  arredondadas (`rounded-3xl`) para um aspecto "Premium Vintage".
- **Arquitetura de Ilhas**: o site é 100% estático hoje; qualquer ilha interativa
  futura (formulário, galeria) pode ser adicionada via React/Svelte sem custo
  para o restante da página.
- **Mobile-first**: testado para funcionar impecável em iPhone 17 Pro e
  Galaxy A56 (viewport-fit, tipografia fluida, botão flutuante de WhatsApp).

## SEO Local

- `<meta geo.*>` apontando para Recife.
- **Schema.org `AutoRepair`** (subclasse de `LocalBusiness`) com endereço,
  horário de funcionamento, coordenadas e serviços oferecidos.
- Sitemap gerado automaticamente no build.

## Próximos passos sugeridos

- Substituir telefone/endereço/coordenadas placeholder pelos dados reais.
- Adicionar fotos reais em `src/assets/` e consumir via `<Image />`.
- Integrar formulário de contato como ilha React (opcional).
