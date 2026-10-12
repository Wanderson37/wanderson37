// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-10-07',
  devtools: { enabled: false },

  experimental: {
    // Render 404.html with real content instead of an empty SPA shell.
    prerenderErrorPages: true,
    // Cross-fade on page changes (the language switch, Home ↔ CV). Nuxt skips it
    // under prefers-reduced-motion and for in-page anchors.
    viewTransition: true
  },

  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxtjs/i18n'],

  css: ['~/assets/css/main.css', '~/assets/css/status-badge.css'],

  app: {
    head: {
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
        { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
      ],
      script: [
        {
          // Applies the theme the visitor picked before the first paint, so there is
          // no flash of the wrong one, prerendered HTML included. Without a pick, the
          // CSS follows the system. Locked pages (the CV) are left alone.
          innerHTML:
            "(function(){var d=document.documentElement,t;if(d.hasAttribute('data-theme-lock'))return;try{t=localStorage.getItem('theme')}catch(e){}if(t==='light'||t==='dark')d.setAttribute('data-theme',t)})()",
          tagPriority: 'critical'
        }
      ]
    }
  },

  fonts: {
    defaults: { subsets: ['latin'], styles: ['normal'] },
    families: [
      {
        name: 'Archivo',
        provider: 'google',
        weights: ['400 700'],
        // One variable file for all text; preloading it keeps headings from
        // re-wrapping late when it replaces the fallback.
        preload: true,
        // Only the widths the design uses: 100% for text, 112% for headings.
        providerOptions: { google: { experimental: { variableAxis: { wdth: [['100', '112']] } } } }
      },
      { name: 'IBM Plex Mono', provider: 'google', weights: [400, 500] }
    ]
  },

  image: {
    format: ['avif', 'webp']
  },

  vite: {
    plugins: [
      {
        // Nuxt 4.6.0 feeds module files to Vite's dependency scan, and the scan
        // aborts on `#components` in @nuxtjs/i18n (nuxt/nuxt#36473), so dev runs
        // without pre-bundling. Same approach as the fix in 4.6.1 (#36477): leave
        // `#` imports the scan can't resolve out of it. Remove when upgrading Nuxt.
        name: 'scan-skip-virtual-imports',
        enforce: 'pre',
        resolveId: {
          filter: { id: /^#/ },
          async handler (id, importer, options) {
            // `scan` is not in Vite's public hook type; the scanner passes it at runtime.
            if (!(options as { scan?: boolean }).scan) return
            try {
              return await this.resolve(id, importer, { ...options, skipSelf: true })
            } catch {
              return { id, external: true }
            }
          }
        }
      }
    ]
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
