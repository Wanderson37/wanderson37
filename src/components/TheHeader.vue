<template>
  <q-header class="bg-primary shadow-17 q-pa-lg">
    <q-toolbar class="row items-center justify-between no-padding" :class="{ 'column justify-end': $q.screen.lt.sm }">
      <div class="q-ml-xl row items-center" :class="{ 'q-mx-auto': $q.screen.lt.sm }">
        <img src="Wanderson.svg" alt="Logo Wanderson Oliveira" width="150" v-if="$q.screen.gt.sm" />
        <q-toolbar-title>
          <h1 class="fs48" :class="{ fs36: $q.screen.lt.sm }">
            <strong>Wanderson</strong>
            Oliveira
          </h1>
          <p class="fs20">Front-End Developer</p>
        </q-toolbar-title>
      </div>

      <div class="q-mr-xl q-gutter-x-md" v-if="$q.screen.gt.sm">
        <a href="mailto:wanderson_c.o@hotmail.com" aria-label="Email Wanderson Oliveira">
          <img src="../assets/email.svg" alt="Email ícone" width="30" />
        </a>
        <a href="https://wa.me/5592992216758" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Wanderson Oliveira">
          <img src="../assets/whatsapp.svg" alt="WhatsApp ícone" width="30" />
        </a>
        <a
          href="https://www.linkedin.com/in/wanderson-oliveira-06a1b1196/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Wanderson Oliveira"
        >
          <img src="../assets/linkedin.svg" alt="LinkedIn ícone" width="30" />
        </a>
        <a href="https://github.com/Wanderson37" target="_blank" rel="noopener noreferrer" aria-label="GitHub Wanderson Oliveira">
          <img class="colored-svg" src="../assets/github.svg" alt="GitHub ícone" width="30" />
        </a>
      </div>
    </q-toolbar>
    <div class="row q-mt-md justify-end" v-if="$q.screen.lt.sm">
      <div class="q-gutter-x-md">
        <a href="mailto:wanderson_c.o@hotmail.com" aria-label="Email Wanderson Oliveira">
          <img src="../assets/email.svg" alt="Email ícone" width="30" />
        </a>
        <a href="https://wa.me/5592992216758" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Wanderson Oliveira">
          <img src="../assets/whatsapp.svg" alt="WhatsApp ícone" width="30" />
        </a>
        <a
          href="https://www.linkedin.com/in/wanderson-oliveira-06a1b1196/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Wanderson Oliveira"
        >
          <img src="../assets/linkedin.svg" alt="LinkedIn ícone" width="30" />
        </a>
        <a href="https://github.com/Wanderson37" target="_blank" rel="noopener noreferrer" aria-label="GitHub Wanderson Oliveira">
          <img class="colored-svg" src="../assets/github.svg" alt="GitHub ícone" width="30" />
        </a>
      </div>
    </div>
  </q-header>
</template>

<script></script>

<style scoped>
.colored-svg {
  filter: invert(100%);
}

.name {
  text-align: left;
  font-size: 40px;
  margin: 0;
  height: 80px;
}

.text {
  text-align: left;
  font-size: 20px;
}
.header-contacts {
  display: flex;
  margin-left: auto;
  justify-content: space-between;
  width: 180px;
}

nav a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}

@media screen and (max-width: 600px) {
  .header {
    flex-direction: column;
    align-items: center;
  }
  .header-contacts {
    margin-left: 0;
  }
  .name {
    text-align: right;
    font-size: 25px;
  }
  .text {
    text-align: right;
    padding: 0;
    font-size: 15px;
  }
  .name-text {
    margin-left: -20px;
    width: auto;
    padding: 0px;
  }
  .q-header {
    max-width: 570px;
    position: relative;
  }
}
@media screen and (max-width: 800px) {
  .header {
    flex-direction: column;
    align-items: center;
    width: auto;
  }
  .header-contacts {
    margin-left: 0;
  }
  .q-header {
    width: auto;
  }
}
</style>
