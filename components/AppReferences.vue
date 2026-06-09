<template>
  <section id="referenzen" class="section section--dark">
    <div class="container">
      <div class="section-heading section-heading--light">
        <p class="eyebrow">Projektbeispiele</p>
        <h2>Echte Bilder, konkrete Einsatzfelder, klarere Nutzenkommunikation.</h2>
        <p>
          Statt Demo-Platzhaltern zeigt die V2 nur noch reale Motive aus dem
          vorhandenen Bildbestand und verankert sie in nachvollziehbaren Szenarien.
        </p>
      </div>

      <div class="card-grid">
        <article v-for="study in caseStudies" :key="study.title" class="reference-card">
          <img class="reference-card__image" :src="study.image" :alt="study.title">
          <div class="reference-card__body">
            <h3>{{ study.title }}</h3>
            <p>{{ study.description }}</p>
            <ul class="metric-list">
              <li v-for="metric in study.metrics" :key="metric">{{ metric }}</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { caseStudies } from '~/data/site'
</script>

