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
      title: 'Induva UG - Industrieverwertung mit klarer Projektfuehrung',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Induva UG unterstuetzt Unternehmen bei Industrieverwertung, Betriebsaufloesung, Recycling und Immobilienprojekten mit klaren Prozessen und dokumentierter Abwicklung.'
        },
        { name: 'theme-color', content: '#17372a' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Induva UG' },
        {
          property: 'og:title',
          content: 'Induva UG - Industrieverwertung mit klarer Projektfuehrung'
        },
        {
          property: 'og:description',
          content: 'Industrieverwertung, Betriebsaufloesung, Recycling und Immobilienprojekte mit dokumentierter Abwicklung und festem Ansprechpartner.'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/jpeg', href: `${appBaseURL}IMG-20250708-WA0002.jpg` }
      ]
    }
  },
  css: ['~/assets/css/main.css']
})
