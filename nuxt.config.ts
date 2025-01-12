// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  ssr: false,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  future: {
     compatibilityVersion: 4,
  },
  modules: [
    '@nuxt/icon',
    '@nuxtjs/i18n',
    '@nuxt/eslint',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@vue-macros/nuxt',
    '@nuxthub/core',
  ]
})
