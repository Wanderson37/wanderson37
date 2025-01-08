<template>
    <section id="projects">
      <h2>My Projects</h2>
      <ul>
        <li v-for="project in projects" :key="project.id">
          <a :href="project.link" target="_blank">{{ project.name }}</a>
          <p>{{ project.description }}</p>
        </li>
      </ul>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          { id: 1, name: 'Project 1', link: 'https://example1.com', description: 'Description of Project 1' },
          { id: 2, name: 'Project 2', link: 'https://example2.com', description: 'Description of Project 2' },
        ],
      };
    },
  };
  </script>
  
  <style>
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 20px;
  }
  a {
    font-weight: bold;
    text-decoration: none;
    color: #42b983;
  }
  a:hover {
    text-decoration: underline;
  }
  </style>
