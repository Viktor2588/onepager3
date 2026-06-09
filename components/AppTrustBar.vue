<template>
  <section class="trust-bar">
    <div class="container trust-grid">
      <div v-for="item in trustItems" :key="item" class="trust-item">
        {{ item }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { trustItems } from '~/data/site'
</script>

