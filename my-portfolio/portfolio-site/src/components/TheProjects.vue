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
          { id: 1, name: 'ToDo List', link: 'https://todo-list37.vercel.app/', description: ' I developed a ToDo List application using Vue.js 3, allowing users to add tasks, mark them as completed, and delete them. The interface is simple and functional, providing an intuitive experience for managing daily tasks.' 
            
          },
          
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
