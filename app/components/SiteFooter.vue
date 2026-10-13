<script setup lang="ts">
const t = useSiteContent()
const year = new Date().getFullYear()
const localePath = useLocalePath()
const { enabled, asking } = useAnalytics()
</script>

<template>
  <footer class="site-footer band">
    <div class="container site-footer__inner">
      <p>© {{ year }} {{ t.footer.rights }}</p>
      <div class="site-footer__links">
        <NuxtLink :to="localePath('/privacy')">{{ t.footer.privacy }}</NuxtLink>
        <!-- Reopens the consent bar. Needs JavaScript, like the analytics itself. -->
        <button v-if="enabled" type="button" class="site-footer__consent needs-js" @click="asking = true">
          {{ t.consent.settings }}
        </button>
      </div>
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

.site-footer__inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 8px 24px;
}

.site-footer__links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 20px;
}

/* A link in looks, a button in behavior: it opens the bar, it goes nowhere. */
.site-footer__consent {
  min-height: 24px;
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 3px;
  cursor: pointer;
}

.site-footer__consent:hover {
  text-decoration-thickness: 2.5px;
}
</style>
