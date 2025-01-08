<template>
  <header>
    <img src="../assets/wanderson.svg" alt="Wanderson Oliveira" width="150" />
    <div >
      <h1 class="header-text">Wanderson Oliveira</h1>
      <h3 class="header-text">Front-End Developer</h3>
    </div>
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
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
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #282c34;
  color: white;
}
.header-text {
  text-align: left;
  margin: 5px;
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