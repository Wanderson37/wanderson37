<script setup lang="ts">
const t = useSiteContent()
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink class="btn" :to="localePath('/cv')">{{ t.ui.downloadCv }}</NuxtLink>
</template>
