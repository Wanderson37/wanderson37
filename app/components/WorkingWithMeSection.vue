<script setup lang="ts">
const t = useSiteContent()
</script>

<template>
  <section id="working-with-me" class="section band" aria-labelledby="working-title">
    <div class="container split">
      <h2 id="working-title" class="section-title in-left">{{ t.workingWithMe.title }}</h2>
      <ul class="working">
        <li v-for="item in t.workingWithMe.items" :key="item.lead" class="in-right">
          <strong>{{ item.lead }}</strong> {{ item.text }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.working {
  padding: 0;
  list-style: none;
  border-top: 2px solid var(--ink);
}

.working li {
  max-width: var(--measure);
  padding-block: 16px;
  border-bottom: 1px solid var(--rule);
}

.working strong {
  font-weight: 700;
  font-stretch: var(--wide);
}
</style>
