import type { CvContent } from './types'
import { links } from './links'

// Source: Wanderson's CV in Google Docs ("CV - Wanderson da Conceição de Oliveira - en").
// Changes agreed on 2026-10-07: the site email, no phone number, the summary opens
// with the site's positioning, and the full LinkedIn address.
const cv: CvContent = {
  meta: {
    title: 'CV — Wanderson Oliveira',
    description:
      'CV of Wanderson Oliveira, front-end developer building and maintaining Vue.js, Quasar and Nuxt apps: experience, skills, education and languages.'
  },
  name: 'Wanderson Oliveira',
  headline: 'Front-End Developer · Vue.js, Quasar and Nuxt',
  fileName: 'Wanderson Oliveira - CV.pdf',
  contact: [
    { label: 'Location', value: 'Manaus, AM — Brazil' },
    { label: 'Email', value: links.email, href: `mailto:${links.email}` },
    { label: 'LinkedIn', value: 'linkedin.com/in/wanderson-oliveira-06a1b1196', href: links.linkedin },
    { label: 'GitHub', value: 'github.com/Wanderson37', href: links.github },
    { label: 'Portfolio', value: 'wanderson37.dev', href: links.site }
  ],
  headings: {
    summary: 'Summary',
    experience: 'Professional Experience',
    military: 'Military Service',
    skills: 'Technical Skills',
    education: 'Education',
    certifications: 'Certifications and Courses',
    languages: 'Languages'
  },
  summary:
    'Front-end developer building and maintaining apps in Vue.js, Quasar and Nuxt. Joined MyAbseil, a workforce management SaaS for rope access teams, as a freelancer midway through its Vue 2 → Vue 3 migration, led it to completion and became the sole front-end developer after the team was consolidated. Has owned the entire front-end since early 2025, including offline mode for crews without connectivity, the move from Tailwind to Quasar, and the product’s reusable component library. Former Brazilian Army officer with 8 years of experience leading teams under pressure.',
  experience: [
    {
      role: 'Front-End Developer',
      org: 'MyAbseil',
      place: 'Vancouver, CA',
      period: 'Feb 2025 – Present',
      points: [
        'Sole front-end developer of a workforce management SaaS for rope access companies, used by clients in Canada, the UK, the US, Saudi Arabia, Australia and South Africa, in 8 languages.',
        'Joined as a freelancer midway through the Vue 2 → Vue 3 and Tailwind CSS → Quasar migration started by a three-developer team; led it to completion and was retained as the only front-end developer.',
        'Built from scratch an offline-first mode for team leads using IndexedDB (Dexie.js) with automatic sync, allowing on-site check-in/check-out, form submissions and signature capture with poor or no connectivity.',
        'Moved PDF generation from the server to the browser with pdfmake, reducing server load and report generation failures.',
        'Restructured and expanded the reports module and built public shareable links for form responses, so clients can share results without downloading and emailing PDFs.',
        'Maintain three role-based interfaces (Admin, Team Lead, Driver), including inventory management and inspection records; redesigned the UX of forms, reports and the Job Schedule.',
        'Implemented end-to-end testing with Cypress; turned the designer’s Figma into a library of reusable Quasar components, centralizing API logic in Pinia stores and shared utilities.',
        'Point of contact for prospects in Brazil, running product demos and pre-sales conversations.',
        'Created the landing page using Nuxt.js with Tailwind: myabseil.com.'
      ]
    },
    {
      role: 'Front-End Developer (Contract)',
      org: 'PathDMS',
      place: 'Ontario, CA',
      period: 'Jan 2025 – Apr 2025',
      points: [
        'Co-developed version 2 of PathDMS, a cloud platform used by non-profits and First Nations communities across Canada to manage programs, participant records and funder reporting.',
        'Rebuilt the front-end from scratch in Vue and Quasar from Figma designs as one of two front-end developers, replacing the legacy PHP interface.'
      ]
    },
    {
      role: 'Front-End Developer (Freelancer)',
      org: 'CW Gravatas',
      place: 'Manaus, AM',
      period: 'Mar 2025 – Present',
      points: [
        'Designed and built a complete e-commerce store for a necktie business, with Vue, Pinia and Quasar on the front-end and a Laravel back-end.',
        'Integrated Mercado Pago for payments, Melhor Envio for shipping quotes and Brevo for transactional emails.'
      ]
    },
    {
      role: 'WordPress Developer (Volunteer)',
      org: 'PIB Búzios',
      place: 'Búzios, RJ',
      period: 'Aug 2025 – Dec 2025',
      points: [
        'Developed and customized a responsive landing page using WordPress for PIB Búzios.',
        'Managed content integration, theme configuration, and plugin setup to meet client requirements.',
        'Ensured cross-browser compatibility and optimized page load speed for a better user experience.'
      ]
    },
    {
      role: 'Co-founder & Graphic Designer',
      org: 'CW Convites',
      place: 'Manaus, AM',
      period: 'Sep 2017 – Jun 2024',
      points: [
        'Co-ran a custom wedding invitation business, designing invitations from client references and delivering them against fixed event dates.',
        'Handled customer service, managed staff and maintained the printing and laser-cutting equipment.'
      ]
    }
  ],
  military: [
    {
      role: 'First Lieutenant (Infantry)',
      org: 'Brazilian Army',
      period: '8 years',
      points: [
        'Boat Unit Commander, 5th Jungle Infantry Battalion (4 years).',
        'Head of the Management Section, 4th Jungle Infantry Battalion (3 years).',
        'Led and managed teams, planned and executed missions on tight deadlines, and stayed effective in high-pressure situations.'
      ]
    }
  ],
  skills: [
    { label: 'Languages', value: 'JavaScript (ES6+), TypeScript, HTML5, CSS3' },
    {
      label: 'Frameworks & Libraries',
      value: 'Vue.js 3, Nuxt, Quasar, Pinia, Vite, Tailwind CSS, Laravel (basic)'
    },
    {
      label: 'Tools',
      value: 'Git, GitHub, Figma, Postman, Cypress (E2E testing), Dexie.js (IndexedDB), pdfmake'
    },
    { label: 'Methodologies', value: 'Scrum, Kanban' },
    {
      label: 'Core Competencies',
      value:
        'Offline-First Web Apps, Vue 2 → 3 Migration, Figma to Code, Internationalization (i18n), REST API Integration, Responsive Design, Web Accessibility, Basic SEO'
    }
  ],
  education: [
    {
      school: 'Gran Faculdade (GRAN)',
      degree: 'Bachelor of Science in Software Engineering',
      period: 'Expected 2028'
    }
  ],
  certifications: [
    'CS50: Introduction to Computer Science — HarvardX (2024)',
    'Responsive Web Design — freeCodeCamp (2023)'
  ],
  languages: ['Portuguese: Native', 'English: Fluent']
}

export default cv
