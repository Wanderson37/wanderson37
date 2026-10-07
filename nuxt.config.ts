// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-10-07',
  devtools: { enabled: false },

  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxtjs/i18n'],

  css: ['~/assets/css/main.css'],

  fonts: {
    defaults: { subsets: ['latin'], styles: ['normal'] },
    families: [
      {
        name: 'Archivo',
        provider: 'google',
        weights: ['400 700'],
        // Only the widths the design uses: 100% for text, 112% for headings.
        providerOptions: { google: { experimental: { variableAxis: { wdth: [['100', '112']] } } } }
      },
      { name: 'IBM Plex Mono', provider: 'google', weights: [400, 500] }
    ]
  },

  image: {
    format: ['avif', 'webp']
  },

  // English at the root, Portuguese under /pt. No automatic redirect by browser
  // language: crawlers and visitors always get the URL they asked for.
  i18n: {
    baseUrl: 'https://www.wanderson37.dev',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    locales: [
      { code: 'en', language: 'en', name: 'English' },
      { code: 'pt', language: 'pt-BR', name: 'Português' }
    ]
  }
})
