<script setup lang="ts">
const t = useSiteContent()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer band">
    <div class="container">
      <p>© {{ year }} {{ t.footer.rights }}</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  padding-block: 24px 32px;
  border-top: 1px solid var(--rule);
  font-size: var(--step--1);
  color: var(--graphite);
}
</style>
