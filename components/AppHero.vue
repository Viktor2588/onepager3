<template>
  <section class="hero">
    <div class="hero-media">
      <img :src="heroImage" alt="Räumung und Verwertung">
    </div>
    <div class="hero-overlay" />

    <div class="container hero-content">
      <div class="hero-copy">
        <p class="eyebrow">Räumung · Entsorgung · Verwertung</p>
        <h1>Wir räumen, entsorgen und verwerten – zuverlässig und unkompliziert.</h1>
        <p class="hero-text">
          Wir räumen Büros, Lager und Gewerbeflächen, stellen Fahrzeuge sicher und verwerten,
          was noch Wert hat – von Fahrzeugen und Baumaschinen bis zu Elektronik. Außerdem
          verwerten wir Immobilienbestände.
        </p>

        <div class="hero-actions">
          <a class="button" href="#kontakt">Anfrage senden</a>
          <a class="button button--ghost" href="#leistungen">Leistungen ansehen</a>
        </div>
      </div>

      <AppReasons />
    </div>
  </section>
</template>

<script setup lang="ts">
import { withBase } from 'ufo'

const { app } = useRuntimeConfig()
const heroImage = withBase('/img/index-background.jpg', app.baseURL)
</script>
