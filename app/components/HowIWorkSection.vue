<script setup lang="ts">
import snippets from '#snippets'

const t = useSiteContent()
const h = computed(() => t.value.howIWork)
</script>

<template>
  <section id="how-i-work" class="section" aria-labelledby="how-title">
    <div class="container">
      <h2 id="how-title" class="section-title">{{ h.title }}</h2>
      <p class="intro prose">{{ h.intro }}</p>

      <article class="pattern pattern--offline" aria-labelledby="offline-title">
        <div class="pattern__text">
          <h3 id="offline-title">{{ h.offline.title }}</h3>
          <p>{{ h.offline.text }}</p>
        </div>
        <div class="pattern__demo">
          <CheckinDemo />
          <p class="pattern__note">{{ h.offline.demoCaption }}</p>
        </div>
        <CodeBlock
          class="pattern__code"
          :html="snippets.offlineSync"
          file="offline-sync.ts"
          :caption="h.offline.codeCaption"
        />
      </article>

      <article class="pattern pattern--pdf" aria-labelledby="pdf-title">
        <div class="pattern__text">
          <h3 id="pdf-title">{{ h.pdf.title }}</h3>
          <p>{{ h.pdf.text }}</p>
          <CvDownloadButton />
        </div>
        <CodeBlock class="pattern__code" :html="snippets.pdfCv" file="pdf-cv.ts" :caption="h.pdf.codeCaption" />
      </article>

      <article class="pattern pattern--components" aria-labelledby="components-title">
        <div class="pattern__text">
          <h3 id="components-title">{{ h.components.title }}</h3>
          <p>{{ h.components.text }}</p>
        </div>
        <CodeBlock :html="snippets.statusBadge" :file="h.components.componentCaption" />
        <CodeBlock :html="snippets.statusBadgeUsage" file="<template>" :caption="h.components.usageCaption" />
      </article>
    </div>
  </section>
</template>

<style scoped>
.intro {
  margin-top: -12px;
  font-size: var(--step-1);
}

.pattern {
  display: grid;
  gap: 28px clamp(28px, 5vw, 64px);
  align-items: start;
  margin-top: clamp(48px, 7vw, 80px);
  padding-top: clamp(28px, 4vw, 40px);
  border-top: 2px solid var(--ink);
}

.pattern h3 {
  font-size: var(--step-2);
  margin-bottom: 12px;
}

.pattern__text {
  display: grid;
  gap: 0;
  justify-items: start;
  max-width: 52ch;
}

.pattern__text .btn {
  margin-top: 20px;
}

.pattern__note {
  margin-top: 10px;
  font-size: var(--step--1);
  color: var(--graphite);
}

/* Offline: text and demo side by side, the code underneath at full width. */
.pattern--offline {
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
}

.pattern--offline .pattern__code {
  grid-column: 1 / -1;
}

/* PDF: short text, wider code. */
.pattern--pdf {
  grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
}

/* Components: text on top, the component and its usage next to each other. */
.pattern--components {
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
}

.pattern--components .pattern__text {
  grid-column: 1 / -1;
}

@media (max-width: 900px) {
  .pattern--offline,
  .pattern--pdf,
  .pattern--components {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
