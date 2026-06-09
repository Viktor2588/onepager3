<template>
  <section class="section">
    <div class="container split-section">
      <div>
        <p class="eyebrow">Typische Einsatzfelder</p>
        <h2>Geeignet fuer Unternehmen, Verwalter und Projektbeteiligte mit echtem Koordinationsbedarf.</h2>
      </div>

      <div class="industry-list">
        <article v-for="industry in industries" :key="industry" class="industry-pill">
          {{ industry }}
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { industries } from '~/data/site'
</script>

