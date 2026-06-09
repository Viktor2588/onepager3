<template>
  <section class="section section--surface">
    <div class="container faq-layout">
      <div>
        <p class="eyebrow">FAQ</p>
        <h2>Die Seite beantwortet jetzt auch die Fragen, die vor einer Anfrage wirklich auftreten.</h2>
      </div>

      <div class="faq-list">
        <details v-for="item in faqItems" :key="item.question" class="faq-item">
          <summary>{{ item.question }}</summary>
          <p>{{ item.answer }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { faqItems } from '~/data/site'
</script>

