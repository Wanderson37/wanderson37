<script setup lang="ts">
const t = useSiteContent()

// lang, dir, canonical, hreflang alternates (x-default -> English) and og:locale.
const i18nHead = useLocaleHead({ dir: false, seo: true })
useHead(() => ({
  htmlAttrs: { lang: i18nHead.value.htmlAttrs.lang },
  link: i18nHead.value.link,
  meta: i18nHead.value.meta
}))
</script>

<template>
  <a href="#main" class="skip-link">{{ t.ui.skipLink }}</a>
  <SiteHeader />
  <NuxtPage />
</template>
