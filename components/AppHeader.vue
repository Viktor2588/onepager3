<template>
  <header :class="['site-header', { 'site-header--scrolled': isScrolled }]">
    <div class="container header-inner">
      <NuxtLink class="brand" to="/" @click="closeMenu">
        <img
          class="brand-logo"
          :src="brandLogo"
          :alt="`${company.brand} Logo`"
        >
        <span>
          <strong>{{ company.brand }}</strong>
          <small>{{ company.slogan }}</small>
        </span>
      </NuxtLink>

      <button
        class="nav-toggle"
        type="button"
        :aria-expanded="isMenuOpen ? 'true' : 'false'"
        aria-controls="site-navigation"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span />
        <span />
        <span />
      </button>

      <nav id="site-navigation" :class="['site-nav', { 'site-nav--open': isMenuOpen }]">
        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          @click="closeMenu"
        >
          {{ item.label }}
        </NuxtLink>
        <a class="button button--small" :href="company.phoneHref" @click="closeMenu">
          Direkt anrufen
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { company, navigation } from '~/data/site'

const brandLogo = '/IMG-20250708-WA0002.jpg'
const isMenuOpen = ref(false)
const isScrolled = ref(false)

const updateScrollState = () => {
  isScrolled.value = window.scrollY > 24
}

const closeMenu = () => {
  isMenuOpen.value = false
}

onMounted(() => {
  updateScrollState()
  window.addEventListener('scroll', updateScrollState, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollState)
})
</script>
