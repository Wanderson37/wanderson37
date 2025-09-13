<template>
  <q-layout view="lhh lpr lFf" style="background-color: #f5f5f5">
    <TheHeader />
    <q-page-container>
      <router-view />
    </q-page-container>
    <TheFooter />
  </q-layout>
</template>

<script setup>
import TheHeader from '../components/TheHeader.vue'
import TheAbout from '../components/TheAbout.vue'
import TheProjects from '../components/TheProjects.vue'
import TheFooter from '../components/TheFooter.vue'
</script>
