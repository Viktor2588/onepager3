const appBaseURL = process.env.NUXT_APP_BASE_URL || '/'

export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  runtimeConfig: {
    basicAuthUser: process.env.NUXT_BASIC_AUTH_USER || 'Dark',
    basicAuthPassword: process.env.NUXT_BASIC_AUTH_PASSWORD || 'Dante'
  },
  nitro: {
    preset: 'github-pages',
    prerender: {
      routes: ['/', '/immobilien', '/impressum', '/datenschutz']
    }
  },
  app: {
    baseURL: appBaseURL,
    head: {
      htmlAttrs: {
        lang: 'de'
      },
      title: 'Induva UG - Räumung, Entsorgung und Verwertung',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Induva UG aus Rodgau: Räumung von Büros, Lagern und Immobilien, Sicherstellung von Fahrzeugen und Verwertung von Fahrzeugen, Baumaschinen und Elektronik.'
        },
        { name: 'theme-color', content: '#17372a' },
        // GitHub Pages ist nur Dev-Vorschau, nicht indexieren
        ...(process.env.NOINDEX ? [{ name: 'robots', content: 'noindex, nofollow' }] : []),
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Induva UG' },
        {
          property: 'og:title',
          content: 'Induva UG - Räumung, Entsorgung und Verwertung'
        },
        {
          property: 'og:description',
          content: 'Induva UG aus Rodgau: Räumung von Büros, Lagern und Immobilien, Sicherstellung von Fahrzeugen und Verwertung von Fahrzeugen, Baumaschinen und Elektronik.'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/jpeg', href: `${appBaseURL}IMG-20250708-WA0002.jpg` }
      ]
    }
  },
  css: ['~/assets/css/main.css']
})
