<script setup lang="ts">
const t = useSiteContent()

usePageSeo(() => ({ title: t.value.meta.title, description: t.value.meta.description }))
</script>

<template>
  <main id="main" class="container">
    <h1>{{ t.hero.title }}</h1>
  </main>
</template>
