# martinheterjag.com

Portfolio website, built with [Eleventy](https://www.11ty.dev/).

Originally based on https://github.com/vktrwlt/vktr-portfolio-v5 by Victor Tsang.

## Stack

- [Eleventy 3](https://www.11ty.dev/) with Nunjucks templates
- Plain CSS (no build step), inlined into each page
- [Eleventy Image](https://www.11ty.dev/docs/plugins/image/) for responsive AVIF/WebP images
- [Mulish](https://fontsource.org/fonts/mulish) variable font, self-hosted

## Project layout

- `src/_data/` – site content: projects, navigation, page titles
- `src/_includes/` – layout, header, footer, icons and CSS
- `src/*.njk` – pages; `src/project.njk` generates one page per project
- `src/assets/images/<project>/` – project images (`hero`, `thumbnail`, section images)
- `src/static/` – files copied as-is to the site root (favicons, manifest)

## Adding a project

1. Add an entry to `src/_data/portfolioList.js`.
2. Add its images to `src/assets/images/<id>/`.

## Running locally

Requires Node 22 or newer.

```bash
npm install
npm start        # dev server at http://localhost:8080
npm run build    # production build into dist/
```
