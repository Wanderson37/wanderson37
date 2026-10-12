<script setup lang="ts">
const t = useSiteContent()
</script>

<template>
  <section id="about" class="section" aria-labelledby="about-title">
    <div class="container split">
      <h2 id="about-title" class="section-title in-left">{{ t.about.title }}</h2>
      <div class="about prose">
        <p v-for="paragraph in t.about.paragraphs" :key="paragraph" class="in-right">{{ paragraph }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  display: grid;
  gap: 1em;
  font-size: var(--step-1);
  line-height: 1.6;
}
</style>
