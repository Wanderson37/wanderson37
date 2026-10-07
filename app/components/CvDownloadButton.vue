<script setup lang="ts">
// "link": a real link to /cv, so it still works without JavaScript; with
// JavaScript it builds the PDF instead. "button": for the CV page itself.
const props = withDefaults(defineProps<{ variant?: 'link' | 'button'; primary?: boolean }>(), {
  variant: 'link',
  primary: false
})

const t = useSiteContent()
const localePath = useLocalePath()

const ready = ref(false)
const busy = ref(false)
const failed = ref(false)

onMounted(() => (ready.value = true))

const label = computed(() => {
  if (busy.value) return t.value.ui.preparingPdf
  return props.variant === 'link' ? t.value.ui.downloadCv : t.value.ui.downloadPdf
})

async function download(event?: MouseEvent) {
  // Let modified clicks (new tab, new window) open the CV page as usual.
  if (event && (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0)) return
  event?.preventDefault()
  if (busy.value) return

  busy.value = true
  failed.value = false
  try {
    const { downloadCvPdf } = await import('~/utils/cv-pdf')
    await downloadCvPdf(t.value.cv)
  } catch (error) {
    console.error(error)
    failed.value = true
  } finally {
    busy.value = false
  }
}
</script>

<template>
  <a
    v-if="variant === 'link'"
    class="btn"
    :class="{ 'btn--primary': primary }"
    :href="localePath('/cv')"
    :aria-busy="busy"
    @click="download"
  >
    {{ label }}
  </a>
  <button
    v-else
    type="button"
    class="btn"
    :class="{ 'btn--primary': primary }"
    :disabled="!ready"
    :aria-busy="busy"
    @click="download()"
  >
    {{ label }}
  </button>
  <p v-if="failed" class="cv-error" role="alert">{{ t.ui.pdfFailed }}</p>
</template>

<style scoped>
.cv-error {
  flex-basis: 100%;
  font-size: var(--step--1);
  color: var(--ink);
}
</style>
