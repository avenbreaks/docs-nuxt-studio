export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: '@nuxt-themes/docus',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/plausible',
    '@use-wagmi/nuxt',
    '@nuxthq/studio',
  ]
})
