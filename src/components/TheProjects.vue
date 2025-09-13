<template>
  <div class="q-pa-md">
    <h2 class="fs32 text-weight-medium text-center">Projects</h2>
    <p class="q-mb-lg text-center">A selection of my personal projects.</p>
    <div class="row q-col-gutter-lg">
      <div class="col-12 col-md-6 col-lg-4" v-for="project in projects" :key="project.title">
        <ProjectCard v-bind="project" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProjectCard from '@/wrapper/ProjectCard.vue'

const projects = [
  {
    title: 'Ponto-pro - Time Tracking System',
    subtitle: 'React + Tailwind + Supabase',
    description:
      'Full-stack project. Time tracking system with user authentication, project management, and time logging features. Built with React for the front-end, Tailwind CSS for styling, and Supabase for the back-end and database.',
    techs: [
      { label: 'React.js 3', icon: '/icons/React.svg' },
      { label: 'Tailwind', icon: '/icons/Tailwind.svg' },
      { label: 'Supabase', icon: '/icons/Supabase.svg' }
    ],
    liveUrl: 'https://ponto-digital-flex.vercel.app/login',
    repoUrl: 'https://github.com/Wanderson37/ponto-digital-flex',
    status: 'Completed',
    thumbnail: '/images/ponto-pro.png'
  },
  {
    title: 'ToDo List',
    subtitle: 'Vue.js 3 + Vite + Bootstrap',
    description:
      'Front-end dev. ToDo List application using Vue.js 3, allowing users to add tasks, mark them as completed, and delete them. The interface is simple and functional, providing an intuitive experience for managing daily tasks.',
    techs: [
      { label: 'Vue.js 3', icon: '/icons/Vue.svg' },
      { label: 'Vite', icon: '/icons/Vite.svg' },
      { label: 'Tailwind', icon: '/icons/Tailwind.svg' }
    ],
    liveUrl: 'https://todo-list37.vercel.app/',
    repoUrl: 'https://github.com/Wanderson37/ToDo-List',
    status: 'Completed',
    thumbnail: '/images/todolist.jpg'
  },

  // {
  //   title: 'Save the Date',
  //   subtitle: 'HTML + CSS + JavaScript + Bootstrap',
  //   description:
  //     'A single page to inform the date of the wedding, with a countdown to the event. The interface is simple and functional, providing an intuitive experience for the user.',
  //   techs: [
  //     { label: 'Vue.js 3', icon: '/icons/Vue.svg' },
  //     { label: 'Vite', icon: '/icons/Vite.svg' },
  //     { label: 'Quasar', icon: '/icons/Quasar.svg' }
  //   ],
  //   liveUrl: 'https://savethedate-olive.vercel.app/',
  //   repoUrl: 'https://github.com/Wanderson37/savethedate',
  //   status: 'Completed',
  //   thumbnail: '/images/savethedate.jpg'
  // },
  {
    title: 'Cats Homepage',
    subtitle: 'HTML + CSS + JavaScript + Bootstrap',
    description:
      'A project made for a class in CS50 course using bootstrap to make modern and responsive design, with information about my cats, and a gallery with images of cats.',
    techs: [
      { label: 'HTML', icon: '/icons/html.svg' },
      { label: 'CSS', icon: '/icons/CSS.svg' },
      { label: 'JavaScript', icon: '/icons/JavaScript.svg' },
      { label: 'Bootstrap', icon: '/icons/Bootstrap.svg' }
    ],
    liveUrl: 'https://catspage.vercel.app/',
    repoUrl: 'https://github.com/Wanderson37/catspage',
    status: 'Completed',
    thumbnail: '/images/cats.jpg'
  },
  {
    title: 'My personal portfolio',
    subtitle: 'Vue.js 3 + Vite + Quasar',
    description: 'My personal portfolio, with information about me, my skills, and projects. ',
    techs: [
      { label: 'Vue.js 3', icon: '/icons/Vue.svg' },
      { label: 'Vite', icon: '/icons/Vite.svg' },
      { label: 'Quasar', icon: '/icons/Quasar.svg' }
    ],
    liveUrl: 'https://www.wanderson37.dev',
    repoUrl: 'https://github.com/Wanderson37/wanderson37',
    status: 'Ongoing',
    thumbnail: '/images/portfolio.png'
  }
]
// export default {
//   data() {
//     return {
//       projects: [
//
//         {
//           id: 2,
//           name: 'Save the Date',
//           img: 'ssavethedate.jpg',
//           link: 'https://savethedate-olive.vercel.app/',
//           description:
//             ' A single page to inform the date of the wedding, with a countdown to the event. The interface is simple and functional, providing an intuitive experience for the user.'
//         },
//         {
//           id: 3,
//           name: 'Cats Homepage',
//           img: 'cats.jpg',
//           link: 'https://catspage.vercel.app/',
//           description:
//             ' A project using bootstrap to make modern and responsive design, with information about my cats, and a gallery with images of cats.'
//         },
//         {
//           id: 4,
//           name: 'My personal portfolio',
//           img: 'portfolio.jpg',
//           link: 'https://www.wanderson37.dev',
//           description: ' My personal portfolio, with information about me, my skills, and projects. '
//         }
//       ]
//     }
//   }
// }
</script>

<style></style>
