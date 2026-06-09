<template>
  <section id="leistungen" class="section section--surface">
    <div class="container">
      <div class="section-heading">
        <p class="eyebrow">Leistungsbereiche</p>
        <h2>Leistungen, die aus komplexen Situationen wieder ein steuerbares Projekt machen.</h2>
        <p>
          Die neue Website spricht nicht mehr nur ueber Motive und Bilder, sondern
          ueber Ergebnis, Projektlogik und Entscheidungssicherheit.
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
