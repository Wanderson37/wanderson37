<script setup lang="ts">
import { links } from '~/data/links'

const t = useSiteContent()
const localePath = useLocalePath()

const bare = (href: string) => href.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
</script>

<template>
  <section id="contact" class="section band contact" aria-labelledby="contact-title">
    <div class="container">
      <h2 id="contact-title" class="contact__title in-left">{{ t.contact.title }}</h2>
      <p class="contact__text in-left">{{ t.contact.text }}</p>
      <ContactButtons class="in-left" />

      <dl class="fields contact__fields">
        <div class="in-row">
          <dt>{{ t.contact.emailLabel }}</dt>
          <dd><a :href="`mailto:${links.email}`">{{ links.email }}</a></dd>
        </div>
        <div class="in-row">
          <dt>LinkedIn</dt>
          <dd>
            <a :href="links.linkedin" target="_blank" rel="noopener">
              {{ bare(links.linkedin) }}<span class="visually-hidden">{{ ` ${t.ui.newTab}` }}</span>
            </a>
          </dd>
        </div>
        <div class="in-row">
          <dt>GitHub</dt>
          <dd>
            <a :href="links.github" target="_blank" rel="noopener">
              {{ bare(links.github) }}<span class="visually-hidden">{{ ` ${t.ui.newTab}` }}</span>
            </a>
          </dd>
        </div>
        <div class="in-row">
          <dt>{{ t.contact.cvLabel }}</dt>
          <dd><NuxtLink :to="localePath('/cv')">{{ t.contact.cvPage }}</NuxtLink></dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.contact__title {
  font-size: var(--step-4);
}

.contact__text {
  max-width: 44ch;
  margin-block: 16px 28px;
  font-size: var(--step-1);
}

.contact__fields {
  max-width: 640px;
  margin-top: clamp(40px, 6vw, 56px);
}

.contact__fields > div:last-child {
  border-bottom: 1px solid var(--rule);
}

.contact__fields dd {
  overflow-wrap: anywhere;
}
</style>
