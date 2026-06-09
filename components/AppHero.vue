<template>
  <section class="hero">
    <div class="hero-media">
      <img :src="heroImage" alt="Industrieumgebung und Verwertungsprojekt">
    </div>
    <div class="hero-overlay" />

    <div class="container hero-content">
      <div class="hero-copy">
        <p class="eyebrow">Industrieverwertung, Betriebsaufloesung, Recycling</p>
        <h1>Komplexe Verwertungsprojekte brauchen klare Fuehrung statt nur starke Bilder.</h1>
        <p class="hero-text">
          Induva unterstuetzt Unternehmen bei Rueckbau-, Raeumungs- und
          Verwertungsprojekten mit strukturierter Bewertung, dokumentierter
          Umsetzung und einem festen Ansprechpartner.
        </p>

        <div class="hero-actions">
          <a class="button" href="#kontakt">Projekt anfragen</a>
          <a class="button button--ghost" href="#referenzen">Referenzen ansehen</a>
        </div>
      </div>

      <aside class="hero-panel">
        <p class="eyebrow">Schneller Ueberblick</p>
        <ul class="check-list">
          <li>Erstbewertung fuer Stilllegung, Aufloesung und Raeumung</li>
          <li>Wertorientierte Verwertung vor unnoetiger Entsorgung</li>
          <li>Dokumentation fuer Eigentuermer, Verwaltung und Entscheider</li>
          <li>Immobilien- und Standortprojekte inklusive</li>
        </ul>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
const heroImage = '/img/index-background.jpg'
</script>
