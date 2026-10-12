<script setup lang="ts">
const t = useSiteContent()
const featured = computed(() => t.value.work.featured)

const domain = (href: string) => new URL(href).hostname.replace(/^www\./, '')
</script>

<template>
  <section id="work" class="section" aria-labelledby="work-title">
    <div class="container">
      <h2 id="work-title" class="section-title">{{ t.work.title }}</h2>

      <article class="featured" aria-labelledby="featured-title">
        <header class="featured__head">
          <h3 id="featured-title" class="featured__name">{{ featured.name }}</h3>
          <p class="period">{{ featured.period }}</p>
        </header>
        <p class="featured__summary">{{ featured.summary }}</p>

        <div class="featured__body">
          <NuxtPicture
            class="featured__shot"
            :src="featured.image.src"
            :alt="featured.image.alt"
            :width="featured.image.width"
            :height="featured.image.height"
            format="avif,webp"
            sizes="sm:100vw md:100vw lg:620px"
            loading="lazy"
          />

          <dl class="fields">
            <div v-for="field in featured.fields" :key="field.label">
              <dt>{{ field.label }}</dt>
              <dd>
                <a v-if="field.href" :href="field.href" target="_blank" rel="noopener">
                  {{ field.value }}<span class="visually-hidden">{{ ` ${t.ui.newTab}` }}</span>
                </a>
                <template v-else>{{ field.value }}</template>
              </dd>
            </div>
          </dl>
        </div>

        <h4 class="featured__subhead">{{ featured.highlightsTitle }}</h4>
        <ul class="highlights">
          <li v-for="item in featured.highlights" :key="item.lead">
            <strong>{{ item.lead }}</strong> {{ item.text }}
          </li>
        </ul>

        <div class="try">
          <div class="try__text">
            <h4 class="featured__subhead">{{ featured.tryDemo.title }}</h4>
            <p>{{ featured.tryDemo.text }}</p>
          </div>
          <div>
            <CheckinDemo />
            <p class="try__note">{{ featured.tryDemo.caption }}</p>
          </div>
        </div>
      </article>

      <ul class="log">
        <li v-for="row in t.work.others" :key="row.name" class="log__row">
          <h3 class="log__name">{{ row.name }}</h3>
          <p class="period">{{ row.period }}</p>
          <p class="log__summary">{{ row.summary }}</p>
          <a v-if="row.href" class="log__link" :href="row.href" target="_blank" rel="noopener">
            {{ domain(row.href) }}<span class="visually-hidden">{{ ` ${t.ui.newTab}` }}</span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.period,
.log__link {
  font-family: 'IBM Plex Mono', ui-monospace, Menlo, Consolas, monospace;
  font-size: var(--step--1);
  color: var(--graphite);
  white-space: nowrap;
}

.log__link {
  color: var(--ink);
}

/* ---------- MyAbseil ---------- */

.featured__head {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 4px 24px;
}

.featured__name {
  font-size: var(--step-2);
}

.featured__summary {
  max-width: var(--measure);
  margin-block: 8px 28px;
  font-size: var(--step-1);
}

.featured__body {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
  gap: 32px clamp(24px, 4vw, 48px);
  align-items: start;
}

.featured__shot :deep(img) {
  width: 100%;
  height: auto;
  border: 1px solid var(--rule);
  border-radius: var(--radius);
}

.featured .fields > div:last-child {
  border-bottom: 1px solid var(--rule);
}

.featured__subhead {
  margin-block: clamp(36px, 5vw, 56px) 4px;
  font-size: var(--step-1);
  font-stretch: var(--wide);
}

.highlights {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 clamp(24px, 4vw, 48px);
  padding: 0;
  list-style: none;
}

.highlights li {
  padding-block: 14px;
  border-bottom: 1px solid var(--rule);
  max-width: 62ch;
}

.highlights strong {
  font-weight: 700;
  font-stretch: var(--wide);
}

/* The demo next to a short explanation of the pattern. */
.try {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 24px clamp(28px, 5vw, 64px);
  align-items: start;
  margin-top: clamp(36px, 5vw, 56px);
}

.try__text {
  max-width: 52ch;
}

.try__text .featured__subhead {
  margin-block: 0 12px;
}

.try__note {
  margin-top: 10px;
  font-size: var(--step--1);
  color: var(--graphite);
}

/* ---------- Other work, as log rows ---------- */

.log {
  margin-top: clamp(56px, 8vw, 88px);
  padding: 0;
  list-style: none;
  border-top: 2px solid var(--ink);
}

.log__row {
  display: grid;
  grid-template-columns: 11rem 10rem minmax(0, 1fr) auto;
  gap: 6px 24px;
  align-items: baseline;
  padding-block: 18px;
  border-bottom: 1px solid var(--rule);
}

.log__name {
  font-size: var(--step-1);
}

.log__summary {
  max-width: var(--measure);
}

@media (max-width: 960px) {
  .featured__body,
  .highlights,
  .try {
    grid-template-columns: minmax(0, 1fr);
  }

  .log__row {
    grid-template-columns: minmax(0, 1fr) auto;
  }

  .log__summary {
    grid-column: 1 / -1;
  }
}
</style>
