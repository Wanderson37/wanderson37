<script setup lang="ts">
import type { Consent } from '~/composables/useAnalytics'

const t = useSiteContent()
const { enabled, consent, ready, asking, choose } = useAnalytics()

// Client only by nature: the choice is read after hydration, so the prerendered
// HTML never has the bar and pages without JavaScript never measure anything.
const visible = computed(() => enabled && ready.value && (consent.value === null || asking.value))

const bar = ref<HTMLElement>()

// The bar is fixed to the bottom. Its height goes to --consent-h, which main.css
// turns into page and scroll padding, so the footer and focused elements can
// still come into view above it.
let observer: ResizeObserver | undefined
watch(bar, (el) => {
  observer?.disconnect()
  const root = document.documentElement
  if (!el) return root.style.removeProperty('--consent-h')
  observer = new ResizeObserver(() => root.style.setProperty('--consent-h', `${el.offsetHeight}px`))
  observer.observe(el)
})
onBeforeUnmount(() => observer?.disconnect())

// Reopened from the footer: focus goes to the bar, and back to the footer
// button after the answer. On a first visit the bar never takes focus.
let returnTo: HTMLElement | null = null
watch(asking, async (open) => {
  if (!open) return
  returnTo = document.activeElement as HTMLElement | null
  await nextTick()
  bar.value?.querySelector('button')?.focus()
})

function answer(value: Consent) {
  choose(value)
  returnTo?.focus()
  returnTo = null
}
</script>

<template>
  <section v-if="visible" ref="bar" class="consent band" :aria-label="t.consent.label">
    <div class="container consent__inner">
      <p class="consent__text">{{ t.consent.text }}</p>
      <!-- Same weight for both answers: declining is as easy as accepting. -->
      <div class="btn-row">
        <button type="button" class="btn consent__btn" @click="answer('granted')">{{ t.consent.accept }}</button>
        <button type="button" class="btn consent__btn" @click="answer('denied')">{{ t.consent.decline }}</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.consent {
  position: fixed;
  inset: auto 0 0;
  z-index: 5;
  padding-block: 14px;
  border-top: 1px solid var(--rule);
}

.consent__inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 12px 32px;
}

.consent__text {
  max-width: 62ch;
  font-size: var(--step--1);
}

.consent__btn {
  min-height: 40px;
  padding: 8px 18px;
  font-size: var(--step--1);
}

@media (prefers-reduced-motion: no-preference) {
  .consent {
    animation: consent-in 240ms var(--ease);
  }
}

@keyframes consent-in {
  from {
    transform: translateY(100%);
  }
}

@media print {
  .consent {
    display: none;
  }
}
</style>
