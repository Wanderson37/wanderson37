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
</style>
