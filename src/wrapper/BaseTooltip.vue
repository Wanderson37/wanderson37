<template>
  <q-tooltip class="tooltip" ref="root">
    <slot />
  </q-tooltip>
</template>

<script lang="ts">
import { QTooltip } from 'quasar'

const events: ['update:modelValue', 'show', 'before-show', 'hide', 'before-hide'] = QTooltip.emits
</script>

<script setup lang="ts">
import { computed, ref } from 'vue'

defineEmits(events)
const root = ref<QTooltip>()
defineExpose({
  show: (evt?: Event) => root.value?.show(evt),
  hide: (evt?: Event) => root.value?.hide(evt),
  toggle: (evt?: Event) => root.value?.toggle(evt),
  updatePosition: () => root.value?.updatePosition(),

  contentEl: computed(() => root.value?.contentEl)
})
</script>

<style>
.tooltip {
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #dedfe7;
  color: black;
  font-size: 0.875rem;
  max-width: 300px;
  padding: 10px;
}
</style>
