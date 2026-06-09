<template>
  <main id="main-content">
    <AppHero />
    <AppTrustBar />
    <AppServices />
    <AppReasons />
    <AppReferences />
    <AppProcess />
    <AppIndustries />
    <AppFaq />
    <AppContact />
  </main>
</template>

<script setup lang="ts">
import { company, services } from '~/data/site'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: company.brand,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: company.phoneDisplay,
    email: company.email,
    contactType: 'customer support',
    areaServed: 'DE',
    availableLanguage: ['German']
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: company.city,
    addressCountry: company.country
  },
  makesOffer: services.map((service) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: service.title,
      description: service.description
    }
  }))
}

useHead({
  title: 'Induva UG - Industrieverwertung mit klarer Projektfuehrung',
  meta: [
    {
      name: 'description',
      content:
        'Induva UG unterstuetzt Unternehmen bei Industrieverwertung, Betriebsaufloesung, Recycling und Immobilienprojekten mit klaren Prozessen und dokumentierter Abwicklung.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(schema)
    }
  ]
})
</script>
