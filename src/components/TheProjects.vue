<template>
  <section id="projects">
    <h2 class="fs32 text-weight-medium text-center">Projects</h2>
    <div class="cards">
      <q-card class="card-body shadow-17" v-for="project in projects" :key="project.id">
        <q-card-section class="card-img">
          <a class="card-img" :href="project.link" target="_blank">
            <img class="img-card" :src="project.img" alt="project.name" />
          </a>
        </q-card-section>
        <q-card-section class="card-text">
          <a :href="project.link" target="_blank">{{ project.name }}</a>
          <p style="text-align: justify">{{ project.description }}</p>
        </q-card-section>
      </q-card>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          name: 'ToDo List',
          img: 'todolist.jpg',
          link: 'https://todo-list37.vercel.app/',
          description:
            ' ToDo List application using Vue.js 3, allowing users to add tasks, mark them as completed, and delete them. The interface is simple and functional, providing an intuitive experience for managing daily tasks.'
        },
        {
          id: 2,
          name: 'Save the Date',
          img: 'ssavethedate.jpg',
          link: 'https://savethedate-olive.vercel.app/',
          description:
            ' A single page to inform the date of the wedding, with a countdown to the event. The interface is simple and functional, providing an intuitive experience for the user.'
        },
        {
          id: 3,
          name: 'Cats Homepage',
          img: 'cats.jpg',
          link: 'https://catspage.vercel.app/',
          description:
            ' A project using bootstrap to make modern and responsive design, with information about my cats, and a gallery with images of cats.'
        },
        {
          id: 4,
          name: 'My personal portfolio',
          img: 'portfolio.jpg',
          link: 'https://www.wanderson37.dev',
          description: ' My personal portfolio, with information about me, my skills, and projects. '
        }
      ]
    }
  }
}
</script>

<style>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: calc(1vw + 10px);
  max-width: 900px;
  margin: auto;
  align-items: center;
  justify-items: center;
}

.card-body {
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 30vh;
  max-width: 290px;
  height: 450px;
  align-items: center;
  background-color: #f2f2fa;
}

.card-img {
  box-sizing: border-box;
  background: none;
  max-width: 100%;
  width: 100%;
  height: 200px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px 12px 0 0;
}

.img-card {
  display: block;
  width: auto;
  height: 100%;
  object-fit: contain;
}

.card-text {
  padding: 20px;
  border-radius: 0 0 10px 10px;
  height: max-content;
}

a {
  font-weight: bold;
  text-decoration: none;
  color: #333777;
}

a:hover {
  text-decoration: underline;
}
.card-body:hover {
  transform: scale(1.05); /* Aumenta o tamanho em 5% */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Adiciona uma sombra maior */
}
@media (max-width: 800px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
    gap: calc(1vw + 10px);
  }
}

@media (max-width: 500px) {
  .cards {
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
  }
  .card-body {
    width: 100%;
    max-width: 300px;
  }
}
</style>
