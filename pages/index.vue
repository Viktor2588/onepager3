<template>
  <main id="main-content">
    <AppHero />
    <AppTrustBar />
    <AppServices />
    <AppReasons />
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
  title: 'Induva UG - Räumung, Entsorgung und Verwertung',
  meta: [
    {
      name: 'description',
      content:
        'Induva UG aus Rodgau: Räumung von Büros, Lagern und Immobilien, Sicherstellung von Fahrzeugen und Verwertung von Fahrzeugen, Baumaschinen und Elektronik.'
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
