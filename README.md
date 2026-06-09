# Induva UG Website V2

Neu aufgesetzte Nuxt-Website fuer Induva UG mit klarerer Positionierung, staerkeren Vertrauenselementen und saubererem Lead-Fokus.

## Stack

- Nuxt 3
- statische Generierung fuer GitHub Pages oder andere Static-Hosts

## Entwicklung

```bash
pnpm install
pnpm dev
```

## Build

```bash
NUXT_APP_BASE_URL=/onepager3/ pnpm build
```

## Deployment

- GitHub Pages wird ueber `.github/workflows/deploy.yml` aus dem Branch `main` deployed.
- Fuer das Projekt-Repo muss `NUXT_APP_BASE_URL=/onepager3/` gesetzt sein, damit Assets und Routen unter dem Repo-Pfad funktionieren.

## Hinweise

- Das Projekt wurde als neues, separates Repo in `onepager3` angelegt.
- Bildmaterial aus `onepager2` wurde uebernommen und in die neue Struktur eingebunden.
- Fuer einen finalen Go-live sollten die rechtlichen Pflichtangaben noch mit der echten ladungsfaehigen Anschrift und ggf. Register-/Steuerdaten abgeglichen werden.
