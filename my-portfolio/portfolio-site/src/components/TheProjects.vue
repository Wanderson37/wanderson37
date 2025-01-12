<template>
  <section id="projects">
    <h2>Projects</h2>
    <div class="cards">
      <div class="card-body" v-for="project in projects" :key="project.id">
        <span class="card-img">
          <img class="img-card" :src="project.img" alt="project.name" />
        </span>
        <div class="card-text">
          <a :href="project.link" target="_blank">{{ project.name }}</a>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1, name: 'ToDo List', img: './public/ToDo.jpg', link: 'https://todo-list37.vercel.app/', description: ' ToDo List application using Vue.js 3, allowing users to add tasks, mark them as completed, and delete them. The interface is simple and functional, providing an intuitive experience for managing daily tasks.'

        },
        {
          id: 2, name: 'ToDo List', img: './public/ToDo.jpg', link: 'https://todo-list37.vercel.app/', description: ' ToDo List application using Vue.js 3, allowing users to add tasks, mark them as completed, and delete them. The interface is simple and functional, providing an intuitive experience for managing daily tasks.'

        },
        {
          id: 3, name: 'ToDo List', img: './public/ToDo.jpg', link: 'https://todo-list37.vercel.app/', description: ' ToDo List application using Vue.js 3, allowing users to add tasks, mark them as completed, and delete them. The interface is simple and functional, providing an intuitive experience for managing daily tasks.'

        },
        {
          id: 4, name: 'ToDo List', img: './public/ToDo.jpg', link: 'https://todo-list37.vercel.app/', description: ' ToDo List application using Vue.js 3, allowing users to add tasks, mark them as completed, and delete them. The interface is simple and functional, providing an intuitive experience for managing daily tasks.'

        },
        {
          id: 5, name: 'ToDo List', img: './public/ToDo.jpg', link: 'https://todo-list37.vercel.app/', description: ' ToDo List application using Vue.js 3, allowing users to add tasks, mark them as completed, and delete them. The interface is simple and functional, providing an intuitive experience for managing daily tasks.'

        },
        {
          id: 6, name: 'ToDo List', img: './public/ToDo.jpg', link: 'https://todo-list37.vercel.app/', description: ' ToDo List application using Vue.js 3, allowing users to add tasks, mark them as completed, and delete them. The interface is simple and functional, providing an intuitive experience for managing daily tasks.'

        },
        {
          id: 7, name: 'ToDo List', img: './public/ToDo.jpg', link: 'https://todo-list37.vercel.app/', description: ' ToDo List application using Vue.js 3, allowing users to add tasks, mark them as completed, and delete them. The interface is simple and functional, providing an intuitive experience for managing daily tasks.'

        },
        {
          id: 8, name: 'ToDo List', img: './public/ToDo.jpg', link: 'https://todo-list37.vercel.app/', description: ' ToDo List application using Vue.js 3, allowing users to add tasks, mark them as completed, and delete them. The interface is simple and functional, providing an intuitive experience for managing daily tasks.'

        },
        {
          id: 9, name: 'ToDo List', img: './public/ToDo.jpg', link: 'https://todo-list37.vercel.app/', description: ' ToDo List application using Vue.js 3, allowing users to add tasks, mark them as completed, and delete them. The interface is simple and functional, providing an intuitive experience for managing daily tasks.'

        },]

    };
  },
};
</script>

<style>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: calc(2vw + 10px);
  max-width: 900px;
  margin: auto; 
 

}

.card-body {
  background-color: #8fbc8f;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  transition: all .3s;
  width: 21rem
}

.card-img {
  box-sizing: border-box;
  display: block;
  width: initial;
  height: initial;
  background: none;
  opacity: 1;
  border: 0;
  margin: 0;
  padding: 0;
  max-width: 100%
}

.img-card {
  display: block;
  max-width: 100%;
  width: initial;
  height: initial;
  background: none;
  opacity: 1;
  border: 0;
  margin: 0;
  padding: 0
}

.card-text {
  padding: 20px;
  background-color: black;
  border-radius: 0 0 10px 10px;
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
