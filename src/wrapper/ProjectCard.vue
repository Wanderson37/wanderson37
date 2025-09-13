<template>
  <q-card flat bordered class="project-card">
    <q-img v-if="thumbnail" :src="thumbnail" loading="lazy" class="thumb" style="height: 300px" />

    <div class="q-pa-md">
      <!-- Título + Subtítulo -->
      <div class="q-mb-sm">
        <h6 class=" text-weight-medium " >
          <a v-if="liveUrl" :href="liveUrl">{{ title }}</a>
          <span v-else>{{ title }}</span>
        </h6>
        <div v-if="subtitle" class="text-caption text-grey-7">{{ subtitle }}</div>
      </div>

      <!-- Descrição -->
      <p class="text-body2 description">
        {{ description }}
      </p>

      <p class="text-caption text-bold">
        Status:
        <span>{{ status }}</span>
      </p>

      <!-- Tech (esquerda)  |  Ações (direita) -->
      <div class="row items-center justify-between q-mt-sm">
        <div class="row items-center q-gutter-xs">
          <q-avatar v-for="(t, i) in techs" :key="i" size="24px" class="bg-transparent" :title="t.label">
            <img :src="t.icon" :alt="t.label" loading="lazy" ><BaseTooltip>{{ t.label }}</BaseTooltip></img>
          </q-avatar>
        </div>

        <div class="row items-center">
          <q-btn
            v-if="repoUrl"
            round
            dense
            :href="repoUrl"
            target="_blank"
            rel="noopener"
            aria-label="Open GitHub"
            class="q-ml-xs action-btn"
          >
            <q-img :src="github" />
          </q-btn>
          <q-btn
            v-if="liveUrl"
            round
            dense
            :href="liveUrl"
            target="_blank"
            rel="noopener"
            aria-label="Open live site"
            class="q-ml-xs action-btn"
          >
            <q-img :src="external" />
          </q-btn>
        </div>
      </div>
    </div>
  </q-card>
</template>

<script setup lang="ts">
import github from '/icons/github.svg'
import external from '/icons/external.svg'
import BaseTooltip from './BaseTooltip.vue';
type Tech = { label: string; icon: string }

defineProps<{
  title: string
  subtitle?: string
  description: string
  techs: Tech[]
  repoUrl?: string
  liveUrl?: string
  thumbnail?: string
  status?: string
}>()
</script>

<style scoped>
.project-card {
  border-radius: 16px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.thumb {
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}
.description {
  max-width: 60ch;
  line-height: 1.6;
  /* opcional: clamp se quiser limitar linhas
  display: -webkit-box; -webkit-line-clamp: 5; -webkit-box-orient: vertical; overflow: hidden; */
}

.action-btn {
  transition: transform 0.14s ease, box-shadow 0.14s ease;
}
.action-btn:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
}
.action-btn img,
.action-btn .q-img__img {
  transition: transform 0.14s ease, filter 0.14s ease, opacity 0.14s ease;
}
.action-btn:hover img,
.action-btn:hover .q-img__img {
  transform: scale(1.12);
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.12));
  opacity: 0.98;
}
</style>
