<template>
  <q-header class="bg-primary q-pa-lg">
    <q-toolbar class="row items-center justify-between no-padding text-grey-2" :class="{ 'column justify-end': $q.screen.lt.sm }">
      <div class="q-ml-xl row items-center" :class="{ 'q-mx-auto': $q.screen.lt.sm }">
        <img src="Wanderson.svg" alt="Logo Wanderson Oliveira" width="180" v-if="$q.screen.gt.sm" />
        <div class="q-ml-md" :class="{ 'text-center': $q.screen.lt.sm }">
          <h1 :class="{ fs40: $q.screen.lt.sm }">Wanderson Oliveira</h1>
          <p class="fs24">Front-End Developer</p>
          <span class="fs18 q-mb-none">I transform ideas into functional interfaces.</span>
          <div style="max-width: 600px">
            <p class="fs16">Vue.js, UX/UI & SEO — delivering fast, maintainable, and user-friendly interfaces.</p>
          </div>
        </div>
      </div>

      <div class="q-mr-xl q-gutter-x-md" v-if="$q.screen.gt.sm">
        <q-btn flat dense to="/" aria-label="Go to Home">
          <img src="/icons/home.svg" alt="Home icon" width="40" />
          <BaseTooltip class="text-h6">Home</BaseTooltip>
        </q-btn>
        <q-btn flat dense to="/cv" aria-label="Go to Projects section">
          <img src="/icons/cv.svg" alt="Curriculum icon" width="40" />
          <BaseTooltip class="text-h6">Curriculum</BaseTooltip>
        </q-btn>
        <q-btn flat dense href="mailto:wanderson_c.o@hotmail.com" aria-label="Email Wanderson Oliveira">
          <img src="../assets/email.svg" alt="Email icon" width="40" />
          <BaseTooltip>Email</BaseTooltip>
        </q-btn>
        <q-btn
          flat
          dense
          href="https://wa.me/5592992216758"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Wanderson Oliveira"
        >
          <img src="../assets/whatsapp.svg" alt="WhatsApp icon" width="40" />
          <BaseTooltip>WhatsApp</BaseTooltip>
        </q-btn>
        <q-btn
          flat
          dense
          href="https://www.linkedin.com/in/wanderson-oliveira-06a1b1196/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Wanderson Oliveira"
        >
          <img src="../assets/linkedin.svg" alt="LinkedIn icon" width="40" />
          <BaseTooltip>LinkedIn</BaseTooltip>
        </q-btn>
        <q-btn
          flat
          dense
          round
          href="https://github.com/Wanderson37"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Wanderson Oliveira"
        >
          <img class="colored-svg" src="../assets/github.svg" alt="GitHub icon" width="40" />
          <BaseTooltip>GitHub</BaseTooltip>
        </q-btn>
      </div>
    </q-toolbar>
    <div class="row q-mt-md justify-end" v-if="$q.screen.lt.sm">
      <div class="q-gutter-x-md">
        <a href="mailto:wanderson_c.o@hotmail.com" aria-label="Email Wanderson Oliveira">
          <img src="../assets/email.svg" alt="Email icon" width="30" />
        </a>
        <a href="https://wa.me/5592992216758" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Wanderson Oliveira">
          <img src="../assets/whatsapp.svg" alt="WhatsApp icon" width="30" />
        </a>
        <a
          href="https://www.linkedin.com/in/wanderson-oliveira-06a1b1196/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Wanderson Oliveira"
        >
          <img src="../assets/linkedin.svg" alt="LinkedIn icon" width="30" />
        </a>
        <a href="https://github.com/Wanderson37" target="_blank" rel="noopener noreferrer" aria-label="GitHub Wanderson Oliveira">
          <img class="colored-svg" src="../assets/github.svg" alt="GitHub icon" width="30" />
        </a>
      </div>
    </div>
  </q-header>
</template>

<script setup>
import BaseTooltip from '@/wrapper/BaseTooltip.vue'
</script>

<style scoped>
.colored-svg {
  filter: invert(100%);
}
</style>
