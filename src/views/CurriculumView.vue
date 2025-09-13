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
              <a href="https://wa.me/5592992216758">(92) 91234-5678</a>
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
      <h2 class="section-title">Resumo</h2>
      <p class="section-text">
        Desenvolvedor Frontend com foco em Vue.js, experiência na criação de componentes reutilizáveis, integração com APIs REST e uso de
        Quasar. Busco sempre aprimorar minha capacidade de entregar soluções bem estruturadas e de fácil manutenção.
      </p>
    </section>

    <div class="row q-col-gutter-xl">
      <!-- Coluna Esquerda -->
      <div class="col-12 col-md-7">
        <!-- Experiência -->
        <section class="q-mb-xl">
          <h2 class="section-title">Experiência Profissional</h2>

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

        <!-- Projetos -->
        <section class="q-mb-xl">
          <h2 class="section-title">Projetos Pessoais e Estudos</h2>
          <q-card flat bordered class="q-pa-md q-mb-md">
            <div class="row items-start justify-between">
              <div class="col">
                <div class="project-name">Impetus Fit — Calculadora de Desenvolvimento Corporal</div>
                <div class="muted">Mar/2025 – Jun/2025</div>
              </div>
            </div>
            <ul class="q-mt-sm">
              <li>Aplicação em Vue 3 + Pinia com cálculo de IMC, gordura corporal e score de metas.</li>
              <li>
                Persistência em
                <code>localStorage</code>
                e uso de Chart.js para visualização de progresso.
              </li>
            </ul>
          </q-card>
        </section>
      </div>

      <!-- Coluna Direita -->
      <div class="col-12 col-md-5">
        <!-- Tecnologias -->
        <section class="q-mb-xl">
          <h2 class="section-title">Tecnologias</h2>
          <div class="tech-group">
            <div class="tech-title">Linguagens</div>
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
            <div class="tech-title">Ferramentas</div>
            <div class="chips">
              <q-chip v-for="t in tech.tools" :key="t" dense>{{ t }}</q-chip>
            </div>
          </div>
          <div class="tech-group q-mt-sm">
            <div class="tech-title">Metodologias</div>
            <div class="chips">
              <q-chip v-for="t in tech.methods" :key="t" dense>{{ t }}</q-chip>
            </div>
          </div>
          <div class="tech-group q-mt-sm">
            <div class="tech-title">Outros</div>
            <div class="chips">
              <q-chip v-for="t in tech.others" :key="t" dense>{{ t }}</q-chip>
            </div>
          </div>
        </section>

        <section class="q-mb-xl">
          <h2 class="section-title">Formação Acadêmica</h2>
          <div class="edu">
            <div class="edu-course">Engenharia de Software</div>
            <div class="edu-school">Gran Faculdade (GRAN)</div>
            <div class="muted">Início: 2024 | Conclusão prevista: 2028</div>
          </div>
        </section>

        <section class="q-mb-xl">
          <h2 class="section-title">Certificações e Cursos</h2>
          <ul class="list">
            <li>CS50: Introduction to Computer Science — HarvardX (2024)</li>
            <li>Responsive Web Design — FreeCodeCamp (2023)</li>
          </ul>
        </section>

        <section class="q-mb-xl">
          <h2 class="section-title">Idiomas</h2>
          <ul class="list">
            <li>Português — Nativo</li>
            <li>Inglês — Conversacional</li>
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

const experience: Job[] = [
  {
    title: 'Frontend Developer',
    company: 'Mass 5',
    location: 'Vancouver, CA',
    start: 'fev/2025',
    end: 'Atual',
    bullets: [
      'Criação e manutenção de interfaces em Vue.js.',
      'Componentes reutilizáveis com Quasar e Composition API.',
      'Integração com APIs REST (tabelas, formulários e páginas de detalhes).',
      'Transição de Tailwind para Quasar e migração de Vue 2 → Vue 3.',
      'Apoio em decisões técnicas e melhoria de performance.'
    ]
  },
  {
    title: 'Frontend Developer (Freelancer)',
    company: 'CW Convites',
    location: 'Manaus, AM',
    start: 'mar/2025',
    end: 'Atual',
    bullets: [
      'Criação e manutenção de interfaces de portfólio em Vue.js.',
      'Desenvolvimento de componentes reutilizáveis com Quasar e Composition API.'
    ]
  },
  {
    title: 'Frontend Developer (Freelancer)',
    company: 'RSantos',
    location: 'Manaus, AM',
    start: 'jun/2025',
    end: 'Atual',
    bullets: [
      'Criação e manutenção de interfaces de portfólio em Vue.js.',
      'Desenvolvimento de componentes reutilizáveis com Quasar e Composition API.'
    ]
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
