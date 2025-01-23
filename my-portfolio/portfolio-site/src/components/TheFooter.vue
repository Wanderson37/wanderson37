<template>
  <br />
  <footer class="bg-primary shadown-17">
    <p>&copy; 2024 My Portfolio. All Rights Reserved.</p>
    <a href="https://www.wanderson37.dev" target="_blank">
      <img src="logow37.svg" />
    </a>
    <div>
      <a href="https://github.com/Wanderson37" target="_blank">GitHub</a> |
      <a
        href="https://www.linkedin.com/in/wanderson-oliveira-06a1b1196/"
        target="_blank"
        >LinkedIn</a
      >
    </div>
  </footer>
</template>
<script setup></script>

<style>
footer {
  display: flex;
  text-align: center;
  padding: 20px;
  color: white;
  border-radius: 1rem;
}
footer a {
  color: #b9bee6;
  text-decoration: none;
}
footer a:hover {
  text-decoration: underline;
}
img {
  width: 50px;
  height: 50px;
  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3));
}
</style>
