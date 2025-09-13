<template>
  <div class="q-pa-md">
    <h2 class="fs32 text-weight-medium text-center">Works</h2>
    <p class="q-mb-lg text-center">Ongoing and completed works.</p>
    <div class="row q-col-gutter-lg">
      <div class="col-12 col-md-6 col-lg-4" v-for="project in projects" :key="project.title">
        <ProjectCard v-bind="project" />
      </div>
    </div>
  </div class="q-pa-md">
</template>

<script setup lang="ts">
import ProjectCard from '@/wrapper/ProjectCard.vue'

const projects = [
  {
    title: 'MyAbseil – Maintenance and Improvements',
    subtitle: 'Vue 3 + Quasar + Pinia',
    description:
      'Front-end dev. Ongoing maintenance, new features and improvements for a Enterprise SaaS for rope-access (IRATA) companies.',
    techs: [
      { label: 'Vue 3', icon: '/icons/Vue.svg' },
      { label: 'Quasar', icon: '/icons/Quasar.svg' },
      { label: 'Pinia', icon: '/icons/Pinia.svg' },
      { label: 'TypeScript', icon: '/icons/Typescript.svg' }
    ],
    liveUrl: 'https://app.myabseil.com/login',
    status: 'Ongoing',
    thumbnail: '/images/MyAbseil.jpg'
  },
  {
    title: 'MyAbseil – Migration',
    subtitle: 'Vue 3 + Quasar + Pinia',
    description: 'Front-end dev. Migration from Vue 2 + Tailwind to Vue 3 + Quasar. Unified design system and better maintainability.',
    techs: [
      { label: 'Vue 3', icon: '/icons/Vue.svg' },
      { label: 'Quasar', icon: '/icons/Quasar.svg' },
      { label: 'Pinia', icon: '/icons/Pinia.svg' },
      { label: 'TypeScript', icon: '/icons/Typescript.svg' }
    ],
    liveUrl: 'https://app.myabseil.com/login',
    status: 'Completed',
    thumbnail: '/images/MyAbseil.jpg'
  },
  {
    title: 'PathDMS – Maintenance',
    subtitle: 'Vue 3 + Quasar + TypeScript + Pinia',
    description: 'Front-end dev. Ongoing maintenance ',
    techs: [
      { label: 'Vue 3', icon: '/icons/Vue.svg' },
      { label: 'Quasar', icon: '/icons/Quasar.svg' },
      { label: 'Pinia', icon: '/icons/Pinia.svg' },
      { label: 'TypeScript', icon: '/icons/Typescript.svg' }
    ],
    liveUrl: 'https://support.pathdms.ca',
    status: 'Maintenance',
    thumbnail: '/images/pathdms.jpg'
  },
  {
    title: 'PathDMS – UI Implementation & API Integration',
    subtitle: 'Vue 3 + Quasar + TypeScript + Pinia',
    description: 'Second front-end dev. Built reusable UI from Figma and integrated REST APIs.',
    techs: [
      { label: 'Vue 3', icon: '/icons/Vue.svg' },
      { label: 'Quasar', icon: '/icons/Quasar.svg' },
      { label: 'Pinia', icon: '/icons/Pinia.svg' },
      { label: 'TypeScript', icon: '/icons/Typescript.svg' }
    ],
    liveUrl: 'https://support.pathdms.ca',
    status: 'Completed',
    thumbnail: '/images/pathdms.jpg'
  },
  {
    title: 'PIB Búzios – Website',
    subtitle: 'WordPress + SEO',
    description: 'Front-end dev. Church website focused on schedules, ministries and content publishing.',
    techs: [{ label: 'WordPress', icon: '/icons/Wordpress.svg' }],
    liveUrl: 'https://pibbuzios.com.br',
    status: 'Ongoing',
    thumbnail: '/images/pibbuzios.jpg'
  },
  {
    title: 'RSantos Contabilidade – Website',
    subtitle: 'Vue 3 + Quasar',
    description: 'Front-end dev. Portfolio website for an accounting firm.',
    techs: [
      { label: 'Vue 3', icon: '/icons/Vue.svg' },
      { label: 'Quasar', icon: '/icons/Quasar.svg' }
    ],
    liveUrl: 'https://rsantos.vercel.app/',
    status: 'Ongoing',
    repoUrl: 'https://github.com/Wanderson37/rsantos',
    thumbnail: '/images/rsantos.jpg'
  },
  {
    title: 'CW Convites – Website',
    subtitle: 'Vue 3 + Quasar',
    description: 'Front-end dev. Portfolio website for an wedding invitation production company.',
    techs: [
      { label: 'Vue 3', icon: '/icons/Vue.svg' },
      { label: 'Quasar', icon: '/icons/Quasar.svg' }
    ],
    liveUrl: 'https://cw-convites-site.vercel.app/',
    status: 'Ongoing',
    repoUrl: 'https://github.com/Wanderson37/cw-convites-site',
    thumbnail: '/images/cwconvites.png'
  }
]
</script>
