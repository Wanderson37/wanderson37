<script setup lang="ts">
const t = useSiteContent()
const { locale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const home = computed(() => localePath('/'))

const sections = computed(() => [
  { id: 'work', label: t.value.ui.nav.work },
  { id: 'how-i-work', label: t.value.ui.nav.howIWork },
  { id: 'services', label: t.value.ui.nav.services },
  { id: 'about', label: t.value.ui.nav.about },
  { id: 'contact', label: t.value.ui.nav.contact }
])

const languages = [
  { code: 'en', short: 'EN', name: 'English', lang: 'en' },
  { code: 'pt', short: 'PT', name: 'Português', lang: 'pt-BR' }
] as const
</script>

<template>
  <header class="site-header">
    <div class="container site-header__inner">
      <NuxtLink :to="home" class="brand">Wanderson Oliveira</NuxtLink>

      <nav :aria-label="t.ui.navLabel" class="site-nav">
        <ul>
          <li v-for="section in sections" :key="section.id">
            <NuxtLink :to="{ path: home, hash: `#${section.id}` }">{{ section.label }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <nav :aria-label="t.ui.languageLabel" class="lang">
        <ul>
          <li v-for="language in languages" :key="language.code">
            <NuxtLink
              :to="switchLocalePath(language.code)"
              :lang="language.lang"
              :hreflang="language.lang"
              :aria-current="language.code === locale ? 'true' : undefined"
            >
              {{ language.short }}<span class="visually-hidden">, {{ language.name }}</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  border-bottom: 1px solid var(--rule);
}

.site-header__inner {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  grid-template-areas: 'brand nav lang';
  align-items: center;
  gap: 8px 32px;
  padding-block: 16px;
}

.brand {
  grid-area: brand;
  font-weight: 700;
  font-stretch: var(--wide);
  text-decoration: none;
}

ul {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
}

.site-nav {
  grid-area: nav;
  justify-self: end;
}

.site-nav ul {
  gap: 0 22px;
}

.site-nav a {
  display: inline-block;
  padding-block: 6px;
  font-size: 0.9375rem;
  text-decoration: none;
}

.site-nav a:hover {
  text-decoration: underline;
}

.lang {
  grid-area: lang;
}

.lang ul {
  border: 1.5px solid var(--ink);
  border-radius: var(--radius);
}

.lang a {
  display: block;
  padding: 5px 10px;
  font-family: 'IBM Plex Mono', ui-monospace, Menlo, Consolas, monospace;
  font-size: 0.8125rem;
  font-weight: 500;
  text-decoration: none;
}

.lang a[aria-current='true'] {
  background: var(--ink);
  color: var(--paper);
}

@media (max-width: 760px) {
  .site-header__inner {
    grid-template-columns: minmax(0, 1fr) auto;
    grid-template-areas:
      'brand lang'
      'nav nav';
  }

  .site-nav {
    justify-self: start;
  }
}
</style>
