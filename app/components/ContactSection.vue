<script setup lang="ts">
import { links } from '~/data/links'

const t = useSiteContent()
const localePath = useLocalePath()

const bare = (href: string) => href.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
</script>

<template>
  <section id="contact" class="section contact" aria-labelledby="contact-title">
    <div class="container">
      <h2 id="contact-title" class="contact__title">{{ t.contact.title }}</h2>
      <p class="contact__text">{{ t.contact.text }}</p>
      <ContactButtons />

      <dl class="fields contact__fields">
        <div>
          <dt>{{ t.contact.emailLabel }}</dt>
          <dd><a :href="`mailto:${links.email}`">{{ links.email }}</a></dd>
        </div>
        <div>
          <dt>LinkedIn</dt>
          <dd>
            <a :href="links.linkedin" target="_blank" rel="noopener">
              {{ bare(links.linkedin) }}<span class="visually-hidden">{{ ` ${t.ui.newTab}` }}</span>
            </a>
          </dd>
        </div>
        <div>
          <dt>GitHub</dt>
          <dd>
            <a :href="links.github" target="_blank" rel="noopener">
              {{ bare(links.github) }}<span class="visually-hidden">{{ ` ${t.ui.newTab}` }}</span>
            </a>
          </dd>
        </div>
        <div>
          <dt>{{ t.contact.cvLabel }}</dt>
          <dd><NuxtLink :to="localePath('/cv')">{{ t.contact.cvPage }}</NuxtLink></dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.contact {
  border-top: 2px solid var(--ink);
}

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
