<script setup lang="ts">
import type { Shot } from '~/data/types'

defineProps<{ shot: Shot }>()
</script>

<template>
  <figure class="shot">
    <NuxtPicture
      class="shot__picture"
      :src="shot.src"
      :alt="shot.alt"
      :width="shot.width"
      :height="shot.height"
      format="avif,webp"
      sizes="sm:100vw md:100vw lg:1024px"
      loading="lazy"
    />
    <figcaption class="shot__caption">{{ shot.caption }}</figcaption>
  </figure>
</template>

<style scoped>
.shot__picture :deep(img) {
  width: 100%;
  height: auto;
  border: 1px solid var(--rule);
  border-radius: var(--radius);
}

.shot__caption {
  margin-top: 10px;
  font-size: var(--step--1);
  color: var(--graphite);
}

/*
  Revealed as it scrolls into view, then a light parallax: the whole figure
  drifts against the scroll while it crosses the screen, so the print moves a
  little slower than the text around it. Browsers without scroll-driven
  animations, print and reduced motion get the print as is.
*/
.shot {
  --drift: 48px;
}

@media (max-width: 760px) {
  .shot {
    --drift: 20px;
  }
}

@media screen and (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: view()) {
    .shot {
      animation: shot-drift linear both;
      animation-timeline: view();
      animation-range: cover;
    }

    .shot__picture :deep(img) {
      animation: shot-reveal linear both;
      animation-timeline: view();
      animation-range: entry 0% entry 60%;
    }
  }
}

@keyframes shot-drift {
  from {
    transform: translateY(var(--drift));
  }

  to {
    transform: translateY(calc(var(--drift) * -1));
  }
}

@keyframes shot-reveal {
  from {
    opacity: 0;
    transform: translateY(32px) scale(0.98);
  }
}
</style>
