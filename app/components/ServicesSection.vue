<script setup lang="ts">
const t = useSiteContent()
</script>

<template>
  <section id="services" class="section" aria-labelledby="services-title">
    <div class="container split">
      <h2 id="services-title" class="section-title">{{ t.services.title }}</h2>
      <ul class="services">
        <li v-for="item in t.services.items" :key="item">{{ item }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.services {
  padding: 0;
  list-style: none;
  border-top: 2px solid var(--ink);
}

.services li {
  padding-block: 16px;
  border-bottom: 1px solid var(--rule);
  font-size: var(--step-2);
  line-height: 1.3;
}
</style>
