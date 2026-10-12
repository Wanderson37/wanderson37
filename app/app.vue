<script setup lang="ts">
import { links } from '~/data/links'

const t = useSiteContent()
const localePath = useLocalePath()

// lang, canonical, hreflang alternates (x-default -> English) and og:locale.
const i18nHead = useLocaleHead({ dir: false, seo: true })

const person = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Wanderson Oliveira',
  jobTitle: t.value.meta.jobTitle,
  url: links.site + (localePath('/') === '/' ? '' : localePath('/')),
  email: `mailto:${links.email}`,
  address: { '@type': 'PostalAddress', addressLocality: 'Manaus', addressCountry: 'BR' },
  knowsAbout: ['Vue.js', 'Quasar', 'Nuxt'],
  knowsLanguage: ['pt-BR', 'en'],
  sameAs: [links.linkedin, links.github, links.upwork]
}))

const route = useRoute()
const locked = computed(() => route.meta.themeLock === true)
const { picked } = useTheme()

useHead(() => ({
  htmlAttrs: { lang: i18nHead.value.htmlAttrs.lang, 'data-theme-lock': locked.value ? 'light' : undefined },
  link: i18nHead.value.link,
  meta: [...i18nHead.value.meta, ...themeColorMeta(locked.value ? 'light' : picked.value)],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(person.value) }]
}))
</script>

<template>
  <a href="#main" class="skip-link">{{ t.ui.skipLink }}</a>
  <SiteHeader />
  <NuxtPage />
  <SiteFooter />
</template>
