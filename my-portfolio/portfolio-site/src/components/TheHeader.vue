<template>
  <header>
    <img src="../assets/wanderson.svg" alt="Wanderson Oliveira" width="150" />
    <div>
      <h1 class="header-text">Wanderson Oliveira</h1>
      <h3 class="header-text">Front-End Developer</h3>
    </div>
    <div class="header-contacts">
      <a href="mailto:wanderson_c.o@hotmail.com">
        <img src="../assets/email.svg" alt="Wanderson Oliveira" width="50" />
      </a>
      <a href="https://wa.me/5592992216758">
        <img src="../assets/whatsapp.svg" alt="Wanderson Oliveira" width="50" />
      </a>
      <a href="https://www.linkedin.com/in/wanderson-oliveira-06a1b1196/">
        <img src="../assets/linkedin.svg" alt="Wanderson Oliveira" width="50" /></a>
      <a href="https://github.com/Wanderson37">
        <img src="../assets/github.svg" alt="Wanderson Oliveira" width="50" />
      </a>
    </div>
  </header>
</template>

<script>
// import wandersonUrl from '../assets/wanderson.svg';
// export default {
//   data() {
//     return {
//       wandersonUrl,
//     };
//   },
// };
</script>

<style>
header {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: #282c34;
  color: white;
}

.header-text {
  text-align: left;
  margin: 5px;
}

.header-contacts {
  display: flex;
  margin-left: auto;
  justify-content: space-between;
  width: 250px;
 
  
}

nav a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}
</style>