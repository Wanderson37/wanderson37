<script setup lang="ts">
const t = useSiteContent()
const { isDark, ready, init, toggle } = useTheme()
onMounted(init)
</script>

<template>
  <!-- Needs JavaScript to work, so it is hidden when scripting is off. -->
  <button
    type="button"
    class="theme-toggle needs-js"
    :aria-pressed="ready ? isDark : undefined"
    :title="t.ui.darkTheme"
    :disabled="!ready"
    @click="toggle"
  >
    <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
      <circle cx="10" cy="10" r="7.25" fill="none" stroke="currentColor" stroke-width="1.5" />
      <path d="M10 2.75a7.25 7.25 0 0 1 0 14.5z" fill="currentColor" />
    </svg>
    <span class="visually-hidden">{{ t.ui.darkTheme }}</span>
  </button>
</template>

<style scoped>
.theme-toggle {
  display: inline-grid;
  place-items: center;
  width: 34px;
  height: 34px;
  padding: 0;
  border: 1.5px solid var(--ink);
  border-radius: var(--radius);
  background: transparent;
  color: var(--ink);
  cursor: pointer;
}

.theme-toggle[aria-pressed='true'] {
  background: var(--ink);
  color: var(--paper);
}

.theme-toggle:disabled {
  cursor: default;
}
</style>
