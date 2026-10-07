<script setup lang="ts">
// `html` comes from #snippets, highlighted by Shiki at build time.
defineProps<{ html: string; file: string; caption?: string }>()
</script>

<template>
  <figure class="code">
    <figcaption class="code__caption">
      <span class="code__file">{{ file }}</span>
      <span v-if="caption">{{ caption }}</span>
    </figcaption>
    <div class="code__body" v-html="html" />
  </figure>
</template>

<style scoped>
.code {
  min-width: 0;
}

.code__caption {
  display: flex;
  flex-wrap: wrap;
  gap: 2px 14px;
  align-items: baseline;
  margin-bottom: 8px;
  font-size: var(--step--1);
  color: var(--graphite);
}

.code__file {
  font-family: 'IBM Plex Mono', ui-monospace, Menlo, Consolas, monospace;
  font-weight: 500;
  color: var(--ink);
}

/* Token colors map Shiki's CSS variables onto the palette (Signal stays out). */
.code__body {
  --code-foreground: var(--ink);
  --code-background: transparent;
  --code-token-keyword: var(--ink);
  --code-token-constant: var(--ink);
  --code-token-function: var(--ink);
  --code-token-parameter: var(--ink);
  --code-token-link: var(--ink);
  --code-token-string: var(--synced);
  --code-token-string-expression: var(--synced);
  --code-token-comment: var(--graphite);
  --code-token-punctuation: var(--graphite);
}

.code__body :deep(pre) {
  margin: 0;
  padding: 16px 18px;
  overflow-x: auto;
  border: 1px solid var(--rule);
  border-radius: var(--radius);
  font-size: 0.8125rem;
  line-height: 1.65;
  tab-size: 2;
}

.code__body :deep(span[style*='token-keyword']) {
  font-weight: 500;
}

@media (max-width: 480px) {
  .code__body :deep(pre) {
    padding: 14px;
    font-size: 0.75rem;
  }
}
</style>
