<template>
  <div id="app">
    <TheHeader />
    <main>
      <TheAbout />
      <TheProjects />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheAbout from './components/TheAbout.vue';
import TheProjects from './components/TheProjects.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheAbout,
    TheProjects,
    TheFooter,
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
main {
  padding: 20px;
}
</style>
