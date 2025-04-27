<template>
  <q-layout view="lHh lpR lFf" style="background-color: rgb(255, 255, 255)">
    <q-page-container>
      <q-page>
        <TheHeader />
        <TheAbout />
        <TheProjects />
        <TheFooter />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import TheHeader from '../components/TheHeader.vue'
import TheAbout from '../components/TheAbout.vue'
import TheProjects from '../components/TheProjects.vue'
import TheFooter from '../components/TheFooter.vue'
</script>
