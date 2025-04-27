<template>
  <br />
  <footer class="bg-primary shadow-17">
    <p>&copy; 2024 My Portfolio. All Rights Reserved.</p>
    <a href="https://www.wanderson37.dev" target="_blank">
      <img class="logosvg" src="logow37.svg" />
    </a>
    <div>
      <a href="https://github.com/Wanderson37" target="_blank">GitHub</a>
      |
      <a href="https://www.linkedin.com/in/wanderson-oliveira-06a1b1196/" target="_blank">LinkedIn</a>
    </div>
  </footer>
</template>
<script setup></script>

<style scoped>
footer {
  display: block;
  text-align: center;
  padding: 20px;
  color: white;
}
footer a {
  color: #b9bee6;
  text-decoration: none;
}
footer a:hover {
  text-decoration: underline;
}
.logosvg {
  width: 50px;
  height: 50px;
  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3));
}

.logosvg:hover {
  transform: scale(1.05);
  filter: drop-shadow(2px 4px 6px rgba(255, 255, 255, 0.1));
}
</style>
