<template>
  <main id="main-content" class="subpage-main">
    <section class="subpage-hero">
      <div class="subpage-hero__media">
        <img :src="heroImage" alt="Immobilienprojekt und Gewerbeflaeche">
      </div>
      <div class="subpage-hero__overlay" />
      <div class="container subpage-hero__content">
        <p class="eyebrow">Immobilienprojekte</p>
        <h1>Immobilienverwertung, Raeumung und Rueckbau als geordneter Projektprozess.</h1>
        <p>
          Wenn Flaechen, Inventar, Material und Termine zusammenhaengen, braucht es eine
          strukturierte Abwicklung. Genau darauf ist diese Seite ausgerichtet.
        </p>
        <NuxtLink class="button" to="/#kontakt">Immobilienprojekt anfragen</NuxtLink>
      </div>
    </section>

    <section class="section">
      <div class="container split-section">
        <div>
          <p class="eyebrow">Leistungsbild</p>
          <h2>Von der Erstbewertung bis zur geordneten Uebergabe.</h2>
          <p>
            Die Immobilienseite wurde inhaltlich geschaerft und verbindet jetzt
            Verwertung, Raeumung und Dokumentation zu einem konsistenten Angebot.
          </p>
        </div>

        <div class="reason-list">
          <article v-for="benefit in realEstateBenefits" :key="benefit" class="reason-card">
            <p>{{ benefit }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--surface">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Typischer Ablauf</p>
          <h2>Vier Schritte fuer ein besser steuerbares Immobilienprojekt.</h2>
        </div>

        <div class="timeline">
          <article v-for="step in realEstateSteps" :key="step" class="timeline-card">
            <h3>{{ step }}</h3>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--dark">
      <div class="container cta-banner">
        <div>
          <p class="eyebrow">Direkter Kontakt</p>
          <h2>Sie brauchen kurzfristig eine Einschaetzung zu Flaeche, Inventar oder Rueckbau?</h2>
        </div>
        <div class="cta-banner__actions">
          <a class="button" :href="company.phoneHref">{{ company.phoneDisplay }}</a>
          <a class="button button--ghost" :href="`mailto:${company.email}`">Per E-Mail anfragen</a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { withBase } from 'ufo'
import { company, realEstateBenefits, realEstateSteps } from '~/data/site'

const { app } = useRuntimeConfig()
const heroImage = withBase('/img/IMG-20250714-Immobilien.jpg', app.baseURL)

useHead({
  title: 'Immobilienprojekte - Induva UG',
  meta: [
    {
      name: 'description',
      content:
        'Induva UG begleitet Immobilienprojekte mit Bewertung, Raeumung, Rueckbau und geordneter Verwertung in einem klaren Projektablauf.'
    }
  ]
})
</script>
