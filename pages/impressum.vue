<template>
  <main id="main-content" class="legal-page">
    <div class="container legal-card">
      <p class="eyebrow">Rechtliches</p>
      <h1>Impressum</h1>

      <section>
        <h2>Anbieter</h2>
        <p>
          <strong>{{ company.legalName }}</strong><br>
          Ansprechpartner: {{ company.contactPerson }}<br>
          {{ company.street }}<br>
          {{ company.city }}<br>
          {{ company.country }}
        </p>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>
          Telefon: <a :href="company.phoneHref">{{ company.phoneDisplay }}</a><br>
          E-Mail: <a :href="`mailto:${company.email}`">{{ company.email }}</a>
        </p>
      </section>

      <section>
        <h2>Redaktionell verantwortlich</h2>
        <p>{{ company.contactPerson }}</p>
      </section>

      <section>
        <h2>Streitbeilegung</h2>
        <p>
          Die Europaeische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
            ec.europa.eu/consumers/odr
          </a>.
        </p>
        <p>
          Eine Teilnahme an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle erfolgt nicht.
        </p>
      </section>

      <section>
        <h2>Hinweis zum aktuellen Stand</h2>
        <p>
          Diese V2 beseitigt sichtbare Platzhalter aus der vorherigen Version. Vor einem
          verbindlichen Live-Betrieb sollten ladungsfaehige Anschrift sowie gegebenenfalls
          register- und steuerrechtliche Pflichtangaben noch mit den finalen Unternehmensdaten abgeglichen werden.
        </p>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { company } from '~/data/site'

useHead({
  title: 'Impressum - Induva UG',
  meta: [
    {
      name: 'description',
      content: 'Impressum und Kontaktangaben fuer die Induva UG Website.'
    }
  ]
})
</script>
