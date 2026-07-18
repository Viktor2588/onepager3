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

Der lokale DEV-Server ist voruebergehend mit HTTP Basic Auth geschuetzt:

- Benutzer: `Dark`
- Passwort: `Dante`

Die Zugangsdaten koennen bei Bedarf ueber `NUXT_BASIC_AUTH_USER` und
`NUXT_BASIC_AUTH_PASSWORD` ueberschrieben werden. Der Schutz ist nur im
DEV-Modus aktiv und wird nicht in statischen Builds aktiviert.

## Inhaltspflege (CMS)

Alle Texte, Bilder und Kontaktdaten liegen in `content/site.json` und werden
ueber Sveltia CMS unter `/admin` gepflegt (Formulare statt Code). Speichern im
CMS erzeugt einen Commit auf `main`, der das GitHub-Pages-Deployment
automatisch ausloest.

- Lokal testen: `pnpm dev`, dann `http://localhost:3000/admin` oeffnen und
  "Work with Local Repository" waehlen (Chrome/Edge).
- Online: Login via GitHub. Redakteure brauchen einen GitHub-Account mit
  Schreibzugriff auf dieses Repo. Der OAuth-Login laeuft ueber einen
  Cloudflare Worker ([sveltia-cms-auth](https://github.com/sveltia/sveltia-cms-auth)),
  dessen URL als `base_url` in `public/admin/config.yml` eingetragen ist.

## Build

```bash
NUXT_APP_BASE_URL=/onepager3/ pnpm build
```

## Deployment

- GitHub Pages wird ueber `.github/workflows/deploy.yml` bei Pushes nach
  `main` deployed. Fuer dieses Preview-Deployment wird
  `NUXT_APP_BASE_URL=/onepager3/` verwendet.
- Das IONOS-Produktionsdeployment wird manuell ueber den GitHub-Workflow
  `Deploy to IONOS` gestartet. Es erzeugt einen Build mit der Basis-URL `/`
  und synchronisiert den Inhalt von `.output/public/` in das Verzeichnis
  `/induva-website/` auf dem Webspace. Das Deployment erzeugt voruebergehend
  eine serverseitige Apache-Basic-Auth-Konfiguration fuer `Dark` / `Dante`.
- Fuer IONOS muessen die Repository-Secrets `IONOS_SFTP_USERNAME` und
  `IONOS_SFTP_PASSWORD` konfiguriert sein.

## Hinweise

- Das Projekt wurde als neues, separates Repo in `onepager3` angelegt.
- Bildmaterial aus `onepager2` wurde uebernommen und in die neue Struktur eingebunden.
- Fuer einen finalen Go-live sollten die rechtlichen Pflichtangaben noch mit der echten ladungsfaehigen Anschrift und ggf. Register-/Steuerdaten abgeglichen werden.
