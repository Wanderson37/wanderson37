<template>
  <q-page class="q-pa-lg" style="max-width: 1200px; margin: auto">
    <section class="q-mb-lg">
      <div class="row items-start q-col-gutter-md">
        <div class="col-12 col-md-8">
          <h1 class="name">Wanderson da C. de Oliveira</h1>
          <p class="role">Frontend developer (Vue.js | Quasar)</p>
          <p class="role">I transform ideas into functional interfaces.</p>
        </div>
        <div class="col-12 col-md-4">
          <div class="contacts">
            <div class="contact-item">
              <q-icon name="place" size="16px" class="q-mr-sm" />
              Manaus, AM — Brasil
            </div>
            <div class="contact-item">
              <q-icon name="call" size="16px" class="q-mr-sm" />
              <a href="https://wa.me/5592992216758">(92) 99221-6758</a>
            </div>
            <div class="contact-item">
              <q-icon name="alternate_email" size="16px" class="q-mr-sm" />
              <a href="mailto:wandersonnc.o@gmail.com">wandersonnc.o@gmail.com</a>
            </div>
            <div class="contact-item">
              <q-icon name="code" size="16px" class="q-mr-sm" />
              <a :href="links.github" target="_blank" rel="noopener">GitHub</a>
            </div>
            <div class="contact-item">
              <q-icon name="work" size="16px" class="q-mr-sm" />
              <a :href="links.linkedin" target="_blank" rel="noopener">LinkedIn</a>
            </div>
            <div class="contact-item">
              <q-icon name="public" size="16px" class="q-mr-sm" />
              <a :href="links.portfolio" target="_blank" rel="noopener">Portfolio</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <q-separator spaced />

    <section class="q-mb-lg">
      <h2 class="section-title">Summary</h2>
      <p class="section-text">
        Frontend developer focused on Vue.js, experienced in building reusable components, integrating with REST APIs and using Quasar. I
        continuously strive to deliver well-structured and maintainable solutions.
      </p>
    </section>

    <div class="row q-col-gutter-xl">
      <!-- Coluna Esquerda -->
      <div class="col-12 col-md-7">
        <!-- Experiência -->
        <section class="q-mb-xl">
          <h2 class="section-title">Professional Experience</h2>

          <div v-for="(job, idx) in experience" :key="idx" class="job q-mb-lg">
            <div class="row items-start justify-between">
              <div class="col">
                <h3 class="job-title">{{ job.title }}</h3>
                <div class="job-company">
                  {{ job.company }} —
                  <span class="muted">{{ job.location }}</span>
                </div>
              </div>
              <div class="col-auto">
                <div class="job-dates">{{ job.start }} – {{ job.end }}</div>
              </div>
            </div>
            <ul class="job-list q-mt-sm">
              <li v-for="(b, i) in job.bullets" :key="i">{{ b }}</li>
            </ul>
          </div>
        </section>

        <!-- Projects -->
        <section class="q-mb-xl">
          <h2 class="section-title">Personal & Study Projects</h2>
          <div>
            <q-card v-for="(p, i) in projects" :key="i" flat bordered class="q-pa-md q-mb-md">
              <div class="row items-start justify-between">
                <div class="col">
                  <div class="project-name">{{ p.title }}</div>
                  <div class="muted">{{ p.subtitle }}</div>
                </div>
              </div>
              <ul class="q-mt-sm">
                <li>{{ p.description }}</li>
                <li v-if="p.liveUrl">
                  Live:
                  <a :href="p.liveUrl" target="_blank" rel="noopener">{{ p.liveUrl }}</a>
                </li>
              </ul>
            </q-card>
          </div>
        </section>
      </div>

      <!-- Coluna Direita -->
      <div class="col-12 col-md-5">
        <!-- Tecnologias -->
        <section class="q-mb-xl">
          <h2 class="section-title">Technologies</h2>
          <div class="tech-group">
            <div class="tech-title">Languages</div>
            <div class="chips">
              <q-chip v-for="t in tech.languages" :key="t" dense>{{ t }}</q-chip>
            </div>
          </div>
          <div class="tech-group q-mt-sm">
            <div class="tech-title">Frameworks</div>
            <div class="chips">
              <q-chip v-for="t in tech.frameworks" :key="t" dense>{{ t }}</q-chip>
            </div>
          </div>
          <div class="tech-group q-mt-sm">
            <div class="tech-title">Tools</div>
            <div class="chips">
              <q-chip v-for="t in tech.tools" :key="t" dense>{{ t }}</q-chip>
            </div>
          </div>
          <div class="tech-group q-mt-sm">
            <div class="tech-title">Methodologies</div>
            <div class="chips">
              <q-chip v-for="t in tech.methods" :key="t" dense>{{ t }}</q-chip>
            </div>
          </div>
          <div class="tech-group q-mt-sm">
            <div class="tech-title">Others</div>
            <div class="chips">
              <q-chip v-for="t in tech.others" :key="t" dense>{{ t }}</q-chip>
            </div>
          </div>
        </section>

        <section class="q-mb-xl">
          <h2 class="section-title">Education</h2>
          <div class="edu">
            <div class="edu-course">BSc in Software Engineering</div>
            <div class="edu-school">Gran Faculdade (GRAN)</div>
            <div class="muted">Start: 2024</div>
          </div>
        </section>

        <section class="q-mb-xl">
          <h2 class="section-title">Certifications & Courses</h2>
          <ul class="list">
            <li>CS50: Introduction to Computer Science — HarvardX (2024)</li>
            <li>Responsive Web Design — FreeCodeCamp (2023)</li>
          </ul>
        </section>

        <section class="q-mb-xl">
          <h2 class="section-title">Languages</h2>
          <ul class="list">
            <li>Portuguese — Native</li>
            <li>English — Conversational</li>
          </ul>
        </section>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { QPage, QIcon, QSeparator, QCard, QChip } from 'quasar'

const links = {
  github: 'https://github.com/Wanderson37',
  linkedin: 'https://www.linkedin.com/in/', // preenche aqui
  portfolio: 'https://www.wanderson37.dev'
}

const tech = {
  languages: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
  frameworks: ['Vue.js 3', 'Quasar', 'Vite', 'Pinia'],
  tools: ['VSCode', 'Git', 'GitHub', 'Figma', 'Postman', 'Trello', 'Slack'],
  methods: ['Scrum', 'Kanban'],
  others: ['SEO básico', 'Responsividade', 'Acessibilidade']
}

type Job = {
  title: string
  company: string
  location: string
  start: string
  end: string
  bullets: string[]
}

// Base experience entries
const experience: Job[] = [
  {
    title: 'PathDMS – UI Implementation & API Integration',
    company: 'PathDMS',
    location: 'Ontario/CAN',
    start: ' Jan/2025',
    end: 'Mar/2025',
    bullets: ['Second front-end dev.', ' Built reusable UI from Figma and integrated REST APIs.']
  },
  {
    title: 'PathDMS – Maintenance',
    company: 'PathDMS',
    location: 'Ontario/CAN',
    start: 'Mar/2025',
    end: 'Maintenance',
    bullets: ['Front-end dev.', ' Ongoing maintenance.']
  },
  {
    title: 'Frontend Developer',
    company: 'CW Convites',
    location: 'Manaus, AM/BRA',
    start: 'Mar/2025',
    end: 'Present',
    bullets: [
      'Design and maintenance of portfolio interfaces using Vue.js.',
      'Development of reusable components with Quasar and the Composition API.'
    ]
  },
  {
    title: 'MyAbseil – Migration',
    company: 'Mass 5',
    location: 'Vancouver/CAN',
    start: 'Mar/2025',
    end: 'Jun/2025',
    bullets: [
      'Front-end dev.',
      'Ongoing maintenance, new features and improvements for an Enterprise SaaS for rope-access (IRATA) companies.'
    ]
  },
  {
    title: 'MyAbseil – Maintenance and Improvements',
    company: 'Mass 5',
    location: 'Vancouver/CAN',
    start: 'Jun/2025',
    end: 'Maintenance and Improvements',
    bullets: ['Front-end dev.', 'Migration from Vue 2 + Tailwind to Vue 3 + Quasar. Unified design system and better maintainability.']
  },
  {
    title: 'Frontend Developer',
    company: 'RSantos',
    location: 'Manaus, AM/BRA',
    start: 'Jun/2025',
    end: 'Present',
    bullets: [
      'Design and maintenance of portfolio interfaces using Vue.js.',
      'Development of reusable components with Quasar and the Composition API.'
    ]
  },

  {
    title: 'PIB Búzios – Website',
    company: 'PIB Búzios',
    location: 'Buzios, RJ/BRA',
    start: 'Aug/2025',
    end: 'Present',
    bullets: ['Front-end dev.', 'Church website focused on schedules, ministries and content publishing.']
  },
  {
    title: 'CW Convites – Website',
    company: 'CW Convites',
    location: 'Manaus, AM/BRA',
    start: 'May/2025',
    end: 'Present',
    bullets: ['Front-end dev.', 'Portfolio website for a wedding invitation production company.']
  }
]

// Projects imported from TheProjects.vue (copied here for Curriculum page)
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
</script>

<style scoped>
.name {
  font-size: 32px;
  line-height: 1.1;
  margin: 0 0 4px 0;
  font-weight: 800;
}
.role {
  font-size: 16px;
  color: var(--q-color-grey-7);
  margin: 0;
}
.section-title {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 8px 0;
  position: relative;
}
.section-title::after {
  content: '';
  display: block;
  width: 32px;
  height: 2px;
  background: var(--q-primary);
  margin-top: 6px;
}
.section-text {
  margin: 0;
}
.job-title {
  font-size: 16px;
  font-weight: 700;
  margin: 0;
}
.job-company {
  font-size: 14px;
  margin-top: 2px;
}
.job-dates {
  font-size: 13px;
  color: var(--q-color-grey-7);
  white-space: nowrap;
}
.job-list {
  margin: 6px 0 0 0;
  padding-left: 18px;
}
.project-name {
  font-weight: 700;
}
.muted {
  color: var(--q-color-grey-7);
}
.contacts {
  display: grid;
  grid-auto-rows: min-content;
  row-gap: 4px;
}
.contact-item a {
  color: inherit;
  text-decoration: none;
}
.contact-item a:hover {
  text-decoration: underline;
}
.list {
  margin: 0;
  padding-left: 18px;
}
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
</style>
