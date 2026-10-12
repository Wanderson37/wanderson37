<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const t = useSiteContent()
const { locale } = useI18n()
const localePath = useLocalePath()

const { picked } = useTheme()

const notFound = computed(() => props.error.statusCode === 404)
const title = computed(() => (notFound.value ? t.value.notFound.title : t.value.notFound.errorTitle))

useHead(() => ({
  htmlAttrs: { lang: locale.value === 'pt' ? 'pt-BR' : 'en' },
  title: `${title.value} — Wanderson Oliveira`,
  meta: [{ name: 'robots', content: 'noindex' }, ...themeColorMeta(picked.value)]
}))
</script>

<template>
  <a href="#main" class="skip-link">{{ t.ui.skipLink }}</a>
  <SiteHeader />
  <main id="main" class="container not-found">
    <p class="not-found__code">{{ error.statusCode }}</p>
    <h1>{{ title }}</h1>
    <p class="not-found__text">{{ t.notFound.text }}</p>
    <a class="btn btn--primary" :href="localePath('/')">{{ t.notFound.home }}</a>
  </main>
  <SiteFooter />
</template>

<style scoped>
.not-found {
  padding-block: clamp(64px, 12vw, 144px);
}

.not-found__code {
  font-family: 'IBM Plex Mono', ui-monospace, Menlo, Consolas, monospace;
  color: var(--graphite);
}

.not-found h1 {
  margin-top: 8px;
  font-size: var(--step-4);
}

.not-found__text {
  margin-block: 16px 28px;
  font-size: var(--step-1);
}
</style>
