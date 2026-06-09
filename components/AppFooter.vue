<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <p class="eyebrow">Kontakt</p>
        <h2>{{ company.brand }}</h2>
        <p>{{ company.slogan }}</p>
        <ul class="footer-list">
          <li>{{ company.contactPerson }}</li>
          <li>{{ company.street }}</li>
          <li>{{ company.city }}, {{ company.country }}</li>
          <li><a :href="company.phoneHref">{{ company.phoneDisplay }}</a></li>
          <li><a :href="`mailto:${company.email}`">{{ company.email }}</a></li>
        </ul>
      </div>

      <div>
        <p class="eyebrow">Leistungen</p>
        <ul class="footer-list">
          <li v-for="service in services" :key="service.title">{{ service.title }}</li>
        </ul>
      </div>

      <div>
        <p class="eyebrow">Seiten</p>
        <ul class="footer-list">
          <li><NuxtLink to="/#leistungen">Leistungen</NuxtLink></li>
          <li><NuxtLink to="/#referenzen">Referenzen</NuxtLink></li>
          <li><NuxtLink to="/immobilien">Immobilien</NuxtLink></li>
          <li><NuxtLink to="/impressum">Impressum</NuxtLink></li>
          <li><NuxtLink to="/datenschutz">Datenschutz</NuxtLink></li>
        </ul>
      </div>
    </div>

    <div class="container footer-bottom">
      <p>&copy; {{ currentYear }} {{ company.brand }}. Alle Rechte vorbehalten.</p>
      <p>Website V2 mit Fokus auf klare Projektfuehrung, Vertrauen und Anfragequalitaet.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { company, services } from '~/data/site'

const currentYear = new Date().getFullYear()
</script>
