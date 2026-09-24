<template>
  <section id="warum-induva" class="section section--compact">
    <div class="container">
      <div class="section-heading section-heading--compact">
        <p class="eyebrow">Warum Induva</p>
        <h2>Persönlich, direkt und zuverlässig.</h2>
      </div>

      <div class="reason-grid">
        <article v-for="(reason, index) in reasons" :key="reason.title" class="reason-tile">
          <span class="reason-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path v-for="d in icons[index % icons.length]" :key="d" :d="d" />
            </svg>
          </span>
          <h3>{{ reason.title }}</h3>
          <p>{{ reason.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reasons } from '~/data/site'

// ponytail: Icons nach Position (Telefon, Kreislauf, Uhr, Haken) - wer die Reihenfolge im CMS aendert, tauscht auch die Icons
const icons = [
  ['M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'],
  ['M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8', 'M21 3v5h-5', 'M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16', 'M8 16H3v5'],
  ['M12 2a10 10 0 1 0 0 20a10 10 0 1 0 0-20', 'M12 6v6l4 2'],
  ['M22 11.08V12a10 10 0 1 1-5.93-9.14', 'M22 4 12 14.01l-3-3']
]
</script>
