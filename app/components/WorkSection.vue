<script setup lang="ts">
const t = useSiteContent()
const featured = computed(() => t.value.work.featured)

const domain = (href: string) => new URL(href).hostname.replace(/^www\./, '')
</script>

<template>
  <section id="work" class="section" aria-labelledby="work-title">
    <div class="container">
      <h2 id="work-title" class="section-title in-left">{{ t.work.title }}</h2>

      <article class="featured" aria-labelledby="featured-title">
        <header class="featured__head in-left">
          <h3 id="featured-title" class="featured__name">{{ featured.name }}</h3>
          <p class="period">{{ featured.period }}</p>
        </header>
        <p class="featured__summary in-left">{{ featured.summary }}</p>

        <WorkShot :shot="featured.shots[0]" />

        <dl class="fields featured__fields">
          <div v-for="field in featured.fields" :key="field.label" class="in-row">
            <dt>{{ field.label }}</dt>
            <dd>
              <a v-if="field.href" :href="field.href" target="_blank" rel="noopener">
                {{ field.value }}<span class="visually-hidden">{{ ` ${t.ui.newTab}` }}</span>
              </a>
              <template v-else>{{ field.value }}</template>
            </dd>
          </div>
        </dl>

        <h4 class="featured__subhead in-left">{{ featured.highlightsTitle }}</h4>
        <ul class="highlights">
          <!-- Two columns: each side comes in from its own edge. -->
          <li v-for="(item, i) in featured.highlights" :key="item.lead" :class="i % 2 ? 'in-right' : 'in-left'">
            <strong>{{ item.lead }}</strong> {{ item.text }}
          </li>
        </ul>

        <WorkShot v-for="shot in featured.shots.slice(1)" :key="shot.src" :shot="shot" class="featured__more" />

        <div class="try">
          <div class="try__text in-left">
            <h4 class="featured__subhead">{{ featured.tryDemo.title }}</h4>
            <p>{{ featured.tryDemo.text }}</p>
          </div>
          <div class="in-right">
            <CheckinDemo />
            <p class="try__note">{{ featured.tryDemo.caption }}</p>
          </div>
        </div>
      </article>

      <ul class="log">
        <li v-for="row in t.work.others" :key="row.name" class="log__row in-left">
          <h3 class="log__name">{{ row.name }}</h3>
          <p class="period">{{ row.period }}</p>
          <p class="log__summary">{{ row.summary }}</p>
          <a v-if="row.href" class="log__link" :href="row.href" target="_blank" rel="noopener">
            {{ domain(row.href) }}<span class="visually-hidden">{{ ` ${t.ui.newTab}` }}</span>
          </a>
          <WorkShot v-if="row.shot" :shot="row.shot" class="log__shot" />
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

/* Role, Used in, Stack and Live in two columns under the first print. */
.featured__fields {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: clamp(24px, 4vw, 48px);
  margin-top: clamp(24px, 3vw, 32px);
}

.featured__fields > div:nth-last-child(-n + 2) {
  border-bottom: 1px solid var(--rule);
}

.featured__more {
  margin-top: clamp(36px, 5vw, 56px);
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

.log__shot {
  grid-column: 1 / -1;
  margin-top: 12px;
}

@media (max-width: 960px) {
  /* One column: every highlight comes in from the left. */
  .highlights .in-right {
    --in-x: calc(var(--in) * -1);
  }

  .featured__fields,
  .highlights,
  .try {
    grid-template-columns: minmax(0, 1fr);
  }

  .featured__fields > div:nth-last-child(2) {
    border-bottom: 0;
  }

  .log__row {
    grid-template-columns: minmax(0, 1fr) auto;
  }

  .log__summary {
    grid-column: 1 / -1;
  }
}
</style>
