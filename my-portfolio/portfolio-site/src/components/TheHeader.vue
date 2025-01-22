<template>
  <header>
    <q-header elevated class="q-header bg-primary header">
      <q-toolbar class="toolbar-header">
        <img
          style="margin: 10px 0px"
          src="../assets/wanderson.svg"
          alt="Logo Wanderson Oliveira"
          width="150"
        />
        <q-toolbar-title class="name-text">
          <h1 class="name"><strong>Wanderson</strong> Oliveira</h1>
          <p class="text">Front-End Developer</p>
        </q-toolbar-title>
      </q-toolbar>

      <q-toolbar class="toolbar-contacts">
        <div class="header-contacts">
          <a
            href="mailto:wanderson_c.o@hotmail.com"
            aria-label="Email Wanderson Oliveira"
          >
            <img src="../assets/email.svg" alt="Email ícone" width="30" />
          </a>
          <a
            href="https://wa.me/5592992216758"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Wanderson Oliveira"
          >
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
          <a
            href="https://github.com/Wanderson37"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Wanderson Oliveira"
          >
            <img
              class="colored-svg"
              src="../assets/github.svg"
              alt="GitHub ícone"
              width="30"
            />
          </a>
        </div>
      </q-toolbar>
    </q-header>
  </header>
</template>

<script></script>

<style scoped>
.q-header header .toolbar-header .toolbar-contacts {
  width: auto;
  max-width: 900px;
  padding: 0px;
}
.header {
  position: relative;
  border-radius: 1rem;
  display: flex;
}
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
  .q-header .toolbar-header {
    width: auto;
  }
}
</style>
