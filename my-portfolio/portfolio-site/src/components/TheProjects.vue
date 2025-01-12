<template>
  <section id="projects">
    <h2>Projects</h2>
    <div class="cards">
      <div class="card-body" v-for="project in projects" :key="project.id">
        <div class="card-img">
          <img :src="project.img" alt="project.name" /> 
        </div>
        <div class="card-text">
          <a :href="project.link" target="_blank">{{ project.name }}</a>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>


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
        {
          id: 1, name: 'ToDo List',  img: '@/assets/ToDo.jpg', link: 'https://todo-list37.vercel.app/', description: ' ToDo List application using Vue.js 3, allowing users to add tasks, mark them as completed, and delete them. The interface is simple and functional, providing an intuitive experience for managing daily tasks.'

        },
        {
          id: 2, name: 'ToDo List', img: '../assets/ToDo.jpg',  link: 'https://todo-list37.vercel.app/', description: ' ToDo List application using Vue.js 3, allowing users to add tasks, mark them as completed, and delete them. The interface is simple and functional, providing an intuitive experience for managing daily tasks.'

        },
        {
          id: 3, name: 'ToDo List', img: '../assets/ToDo.jpg', link: 'https://todo-list37.vercel.app/', description: ' ToDo List application using Vue.js 3, allowing users to add tasks, mark them as completed, and delete them. The interface is simple and functional, providing an intuitive experience for managing daily tasks.'

        },
        {
          id: 4, name: 'ToDo List', img: '../assets/ToDo.jpg', link: 'https://todo-list37.vercel.app/', description: ' ToDo List application using Vue.js 3, allowing users to add tasks, mark them as completed, and delete them. The interface is simple and functional, providing an intuitive experience for managing daily tasks.'

        },
      ],
    };
  },
};
</script>

<style>
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.card-body {
  width: 100%;
  height: auto;
  justify-content: space-between;
  background-color: aliceblue;
  border-radius: 10px;
  }

.card-img {
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.card-text {
  padding: 20px;
  background-color: black;
  border-radius: 0 0 10px 10px
}
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
