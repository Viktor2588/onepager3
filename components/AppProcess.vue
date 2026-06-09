<template>
  <section id="ablauf" class="section section--surface">
    <div class="container">
      <div class="section-heading">
        <p class="eyebrow">Projektablauf</p>
        <h2>Ein klarer Prozess fuer Situationen mit Zeitdruck, Substanzwert und Abstimmungsbedarf.</h2>
      </div>

      <div class="timeline">
        <article v-for="step in processSteps" :key="step.title" class="timeline-card">
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { processSteps } from '~/data/site'
</script>

