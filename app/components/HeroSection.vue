<script setup lang="ts">
const t = useSiteContent()
</script>

<template>
  <section class="hero container" aria-labelledby="hero-title">
    <div class="hero__main">
      <h1 id="hero-title" class="hero__title">{{ t.hero.title }}</h1>
      <p class="hero__proof">{{ t.hero.proof }}</p>
      <ContactButtons />
    </div>

    <dl class="fields hero__fields">
      <div v-for="field in t.hero.fields" :key="field.label">
        <dt>{{ field.label }}</dt>
        <dd>{{ field.value }}</dd>
      </div>
    </dl>
  </section>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr);
  align-items: end;
  gap: 40px clamp(32px, 6vw, 80px);
  padding-block: clamp(48px, 9vw, 112px) clamp(48px, 8vw, 96px);
}

.hero__title {
  max-width: 20ch;
  font-size: var(--step-4);
  line-height: 1.04;
  letter-spacing: -0.012em;
}

.hero__proof {
  max-width: 44ch;
  margin-block: 20px 32px;
  font-size: var(--step-1);
  line-height: 1.5;
}

.hero__fields > div:last-child {
  border-bottom: 1px solid var(--rule);
}

@media (max-width: 860px) {
  .hero {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
