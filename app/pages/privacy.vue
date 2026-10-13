<script setup lang="ts">
import { links } from '~/data/links'

const t = useSiteContent()
const privacy = computed(() => t.value.privacy)
const { enabled, asking, track } = useAnalytics()

usePageSeo(() => ({ title: privacy.value.meta.title, description: privacy.value.meta.description }))
</script>

<template>
  <main id="main" class="container privacy">
    <h1 class="privacy__title">{{ privacy.title }}</h1>
    <p class="privacy__updated">{{ privacy.updated }}</p>
    <p class="privacy__intro">{{ privacy.intro }}</p>

    <section
      v-for="(section, index) in privacy.sections"
      :key="section.title"
      class="privacy__section"
      :aria-labelledby="`privacy-${index}`"
    >
      <h2 :id="`privacy-${index}`">{{ section.title }}</h2>
      <div class="privacy__body">
        <p v-for="paragraph in section.paragraphs" :key="paragraph">{{ paragraph }}</p>
        <ul v-if="section.items" class="privacy__points">
          <li v-for="item in section.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>

    <section class="privacy__section" aria-labelledby="privacy-rights">
      <h2 id="privacy-rights">{{ privacy.rights.title }}</h2>
      <div class="privacy__body">
        <p v-for="paragraph in privacy.rights.paragraphs" :key="paragraph">{{ paragraph }}</p>
        <!-- Reopens the consent bar, like the footer button. -->
        <button v-if="enabled" type="button" class="btn needs-js" @click="asking = true">
          {{ privacy.rights.changeChoice }}
        </button>
        <dl class="fields privacy__contact">
          <div>
            <dt>{{ privacy.rights.controllerLabel }}</dt>
            <dd>{{ privacy.rights.controller }}</dd>
          </div>
          <div>
            <dt>{{ t.contact.emailLabel }}</dt>
            <dd>
              <a :href="`mailto:${links.email}`" @click="track('email_click')">{{ links.email }}</a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  </main>
</template>

<style scoped>
.privacy {
  padding-block: clamp(40px, 7vw, 80px);
}

.privacy__title {
  font-size: var(--step-4);
}

.privacy__updated {
  margin-top: 8px;
  font-family: 'IBM Plex Mono', ui-monospace, Menlo, Consolas, monospace;
  font-size: var(--step--1);
  color: var(--graphite);
}

.privacy__intro {
  max-width: var(--measure);
  margin-top: 20px;
  font-size: var(--step-1);
}

/* Same layout as the CV: section title on the left, text on the right. */
.privacy__section {
  display: grid;
  grid-template-columns: 13rem minmax(0, 1fr);
  gap: 12px clamp(24px, 4vw, 48px);
  margin-top: clamp(40px, 6vw, 56px);
  padding-top: 18px;
  border-top: 2px solid var(--ink);
}

.privacy__section h2 {
  font-size: var(--step-1);
}

.privacy__body {
  display: grid;
  justify-items: start;
  gap: 14px;
  max-width: var(--measure);
}

.privacy__points {
  padding-left: 1.1em;
}

.privacy__points li + li {
  margin-top: 6px;
}

.privacy__contact {
  justify-self: stretch;
  margin-top: 6px;
}

.privacy__contact > div:last-child {
  border-bottom: 1px solid var(--rule);
}

.privacy__contact dd {
  overflow-wrap: anywhere;
}

@media (max-width: 760px) {
  .privacy__section {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
