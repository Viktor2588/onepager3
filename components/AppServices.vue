<template>
  <section id="leistungen" class="section section--surface">
    <div class="container">
      <div class="section-heading">
        <p class="eyebrow">Leistungen</p>
        <h2>Was wir für Sie erledigen.</h2>
        <p>
          Vom einzelnen Büro bis zum ganzen Lager, vom einzelnen Auto bis zur Baumaschine:
          Wir räumen, entsorgen und verwerten – alles aus einer Hand.
        </p>
      </div>

      <div class="card-grid">
        <article v-for="service in resolvedServices" :key="service.title" class="service-card">
          <img class="service-card__image" :src="service.image" :alt="service.title">
          <div class="service-card__body">
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <p class="service-card__result">{{ service.result }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { withBase } from 'ufo'
import { services } from '~/data/site'

const { app } = useRuntimeConfig()
const resolvedServices = computed(() =>
  services.map((service) => ({
    ...service,
    image: withBase(service.image, app.baseURL)
  }))
)
</script>
