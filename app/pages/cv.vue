<script setup lang="ts">
// A document to read and print: always in the light theme.
definePageMeta({ themeLock: true })

const t = useSiteContent()
const cv = computed(() => t.value.cv)

usePageSeo(() => ({ title: cv.value.meta.title, description: cv.value.meta.description }))
</script>

<template>
  <main id="main" class="container cv">
    <header class="cv__head">
      <div>
        <h1 class="cv__name">{{ cv.name }}</h1>
        <p class="cv__headline">{{ cv.headline }}</p>
      </div>
      <div class="btn-row cv__actions">
        <CvDownloadButton variant="button" primary />
      </div>
    </header>

    <dl class="fields cv__contact">
      <div v-for="field in cv.contact" :key="field.label">
        <dt>{{ field.label }}</dt>
        <dd>
          <a v-if="field.href" :href="field.href">{{ field.value }}</a>
          <template v-else>{{ field.value }}</template>
        </dd>
      </div>
    </dl>

    <section class="cv__section" aria-labelledby="cv-summary">
      <h2 id="cv-summary">{{ cv.headings.summary }}</h2>
      <p class="prose">{{ cv.summary }}</p>
    </section>

    <section class="cv__section" aria-labelledby="cv-experience">
      <h2 id="cv-experience">{{ cv.headings.experience }}</h2>
      <div class="cv__jobs">
        <article v-for="job in cv.experience" :key="job.org" class="cv__job">
          <header class="cv__job-head">
            <h3>
              {{ job.role }}
              <span class="cv__org">· {{ job.org }}<template v-if="job.place">, {{ job.place }}</template></span>
            </h3>
            <p class="cv__period">{{ job.period }}</p>
          </header>
          <ul class="cv__points">
            <li v-for="point in job.points" :key="point">{{ point }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="cv__section" aria-labelledby="cv-military">
      <h2 id="cv-military">{{ cv.headings.military }}</h2>
      <div class="cv__jobs">
        <article v-for="job in cv.military" :key="job.org" class="cv__job">
          <header class="cv__job-head">
            <h3>
              {{ job.role }} <span class="cv__org">· {{ job.org }}</span>
            </h3>
            <p class="cv__period">{{ job.period }}</p>
          </header>
          <ul class="cv__points">
            <li v-for="point in job.points" :key="point">{{ point }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="cv__section" aria-labelledby="cv-skills">
      <h2 id="cv-skills">{{ cv.headings.skills }}</h2>
      <dl class="fields cv__skills">
        <div v-for="skill in cv.skills" :key="skill.label">
          <dt>{{ skill.label }}</dt>
          <dd>{{ skill.value }}</dd>
        </div>
      </dl>
    </section>

    <section class="cv__section" aria-labelledby="cv-education">
      <h2 id="cv-education">{{ cv.headings.education }}</h2>
      <div>
        <div v-for="item in cv.education" :key="item.school" class="cv__job-head">
          <p>
            <strong>{{ item.degree }}</strong> <span class="cv__org">· {{ item.school }}</span>
          </p>
          <p class="cv__period">{{ item.period }}</p>
        </div>
      </div>
    </section>

    <section class="cv__section" aria-labelledby="cv-certifications">
      <h2 id="cv-certifications">{{ cv.headings.certifications }}</h2>
      <ul class="cv__points">
        <li v-for="item in cv.certifications" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section class="cv__section" aria-labelledby="cv-languages">
      <h2 id="cv-languages">{{ cv.headings.languages }}</h2>
      <ul class="cv__points">
        <li v-for="item in cv.languages" :key="item">{{ item }}</li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
.cv {
  padding-block: clamp(40px, 7vw, 80px);
}

.cv__head {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: end;
  gap: 20px 32px;
}

.cv__name {
  font-size: var(--step-4);
}

.cv__headline {
  margin-top: 8px;
  font-size: var(--step-1);
  color: var(--graphite);
}

.cv__contact {
  margin-top: 28px;
}

.cv__contact > div:last-child,
.cv__skills > div:last-child {
  border-bottom: 1px solid var(--rule);
}

.cv__contact dd {
  overflow-wrap: anywhere;
}

/* Section title in a narrow left column, content on the right. */
.cv__section {
  display: grid;
  grid-template-columns: 13rem minmax(0, 1fr);
  gap: 12px clamp(24px, 4vw, 48px);
  margin-top: clamp(40px, 6vw, 56px);
  padding-top: 18px;
  border-top: 2px solid var(--ink);
}

.cv__section h2 {
  font-size: var(--step-1);
}

.cv__jobs {
  display: grid;
  gap: 28px;
}

.cv__job-head {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 2px 24px;
}

.cv__job-head h3 {
  font-size: var(--step-0);
  font-stretch: 100%;
  line-height: 1.4;
}

.cv__org {
  font-weight: 400;
  color: var(--graphite);
}

.cv__period {
  font-family: 'IBM Plex Mono', ui-monospace, Menlo, Consolas, monospace;
  font-size: var(--step--1);
  color: var(--graphite);
  white-space: nowrap;
}

.cv__points {
  max-width: var(--measure);
  margin-top: 8px;
  padding-left: 1.1em;
}

.cv__points li + li {
  margin-top: 6px;
}

.cv__skills dt {
  min-width: 0;
}

@media (max-width: 760px) {
  .cv__section {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media print {
  .cv {
    padding: 0;
  }

  .cv__actions {
    display: none;
  }

  .cv__section {
    break-inside: avoid-page;
  }

  .cv__job {
    break-inside: avoid;
  }
}
</style>
