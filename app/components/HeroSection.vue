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

/*
  Entrance, CSS only, done within 500ms. The title is the LCP element, so it
  only rises and is never hidden; the proof, buttons and fields fade in after it.
*/
@media (prefers-reduced-motion: no-preference) {
  .hero__title {
    animation: hero-rise 300ms var(--ease) both;
  }

  .hero__proof,
  .hero__main :deep(.btn-row),
  .hero__fields > div {
    animation: hero-in 300ms var(--ease) both;
  }

  .hero__proof {
    animation-delay: 50ms;
  }

  .hero__main :deep(.btn-row) {
    animation-delay: 100ms;
  }

  .hero__fields > div:nth-child(1) {
    animation-delay: 130ms;
  }

  .hero__fields > div:nth-child(2) {
    animation-delay: 160ms;
  }

  .hero__fields > div:nth-child(3) {
    animation-delay: 190ms;
  }
}

@keyframes hero-rise {
  from {
    transform: translateY(12px);
  }
}

@keyframes hero-in {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
}
</style>
