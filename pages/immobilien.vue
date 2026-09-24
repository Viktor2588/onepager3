<template>
  <main id="main-content" class="subpage-main">
    <section class="subpage-hero">
      <div class="subpage-hero__media">
        <img :src="heroImage" alt="Immobilie">
      </div>
      <div class="subpage-hero__overlay" />
      <div class="container subpage-hero__content">
        <p class="eyebrow">Immobilien</p>
        <h1>Immobilie räumen – schnell und ordentlich.</h1>
        <p>
          Ob Haus, Wohnung oder Gewerbeobjekt: Wir räumen vor Verkauf, Übergabe oder
          Neuvermietung und verwerten, was noch Wert hat.
        </p>
        <NuxtLink class="button" to="/#kontakt">Anfrage senden</NuxtLink>
      </div>
    </section>

    <section class="section">
      <div class="container split-section">
        <div>
          <p class="eyebrow">Was wir übernehmen</p>
          <h2>Von der Besichtigung bis zur Übergabe.</h2>
          <p>
            Sie haben einen Ansprechpartner, und wir kümmern uns um den Rest.
          </p>
        </div>

        <div class="reason-list">
          <article v-for="benefit in realEstateBenefits" :key="benefit" class="reason-card">
            <p>{{ benefit }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--dark">
      <div class="container cta-banner">
        <div>
          <p class="eyebrow">Direkter Kontakt</p>
          <h2>Sie möchten eine Immobilie räumen lassen?</h2>
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
import { company, realEstateBenefits } from '~/data/site'

const { app } = useRuntimeConfig()
const heroImage = withBase('/img/IMG-20250714-Immobilien.jpg', app.baseURL)

useHead({
  title: 'Immobilien räumen - Induva UG',
  meta: [
    {
      name: 'description',
      content:
        'Induva UG räumt Häuser, Wohnungen und Gewerbeobjekte vor Verkauf, Übergabe oder Neuvermietung und verwertet, was noch Wert hat.'
    }
  ]
})
</script>
