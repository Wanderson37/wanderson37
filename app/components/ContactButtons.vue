<script setup lang="ts">
import { links } from '~/data/links'

const t = useSiteContent()
const { track } = useAnalytics()
</script>

<template>
  <div class="btn-row">
    <a class="btn btn--primary" :href="`mailto:${links.email}`" @click="track('email_click')">{{ t.ui.emailMe }}</a>
    <a class="btn" :href="links.upwork" target="_blank" rel="noopener">
      {{ t.ui.upwork }}<span class="visually-hidden">{{ ` ${t.ui.newTab}` }}</span>
    </a>
    <CvDownloadButton />
  </div>
</template>
