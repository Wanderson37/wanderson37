<script setup lang="ts">
defineProps<{
  /** Sets the color and the dot style. */
  status: 'synced' | 'queued' | 'syncing'
  /** Visible text, already translated by the parent. */
  label: string
}>()
</script>

<template>
  <span class="status-badge" :data-status="status">
    <span class="status-badge__dot" aria-hidden="true" />
    {{ label }}
  </span>
</template>
