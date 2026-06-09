<template>
  <section id="warum-induva" class="section">
    <div class="container split-section">
      <div>
        <p class="eyebrow">Warum Induva</p>
        <h2>Mehr Ruhe im Projekt, weil Ablauf, Verantwortung und Ergebnis klarer werden.</h2>
        <p>
          Die ueberarbeitete Seite stellt Vertrauen nicht ueber Allgemeinplaetze,
          sondern ueber nachvollziehbare Arbeitsweise her.
        </p>
      </div>

      <div class="reason-list">
        <article v-for="reason in reasons" :key="reason.title" class="reason-card">
          <h3>{{ reason.title }}</h3>
          <p>{{ reason.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reasons } from '~/data/site'
</script>
