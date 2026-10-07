import type { SiteContent } from './types'
import { links } from './links'

// Facts come only from the brief (section 6). Reword freely, but do not add facts.
const en: SiteContent = {
  meta: {
    title: 'Wanderson Oliveira — Front-End Developer (Vue.js, Quasar & Nuxt)',
    description:
      'Front-end developer building and maintaining Vue.js, Quasar and Nuxt apps. Sole front-end dev of MyAbseil, a SaaS used in 6 countries and 8 languages.',
    ogImage: '/og-en.png',
    ogImageAlt: 'Wanderson Oliveira, front-end developer: Vue.js, Quasar and Nuxt',
    jobTitle: 'Front-End Developer'
  },

  ui: {
    skipLink: 'Skip to content',
    navLabel: 'Main',
    nav: {
      work: 'Work',
      howIWork: 'How I work',
      services: 'Services',
      about: 'About',
      contact: 'Contact'
    },
    languageLabel: 'Language',
    emailMe: 'Email me',
    upwork: 'Upwork',
    downloadCv: 'Download CV',
    preparingPdf: 'Preparing PDF…',
    pdfFailed: 'The PDF could not be generated. Open the CV page instead.',
    newTab: '(opens in a new tab)'
  },

  hero: {
    title: 'I build and maintain front-ends in Vue.js, Quasar and Nuxt.',
    proof:
      'Sole front-end developer of a workforce management SaaS used in 6 countries and 8 languages.',
    fields: [
      { label: 'Based in', value: 'Manaus, Brazil (UTC−4)' },
      { label: 'Hours', value: 'Good overlap with US time zones' },
      { label: 'English', value: 'Fluent' }
    ]
  },

  work: {
    title: 'Selected work',
    featured: {
      name: 'MyAbseil',
      period: 'Feb 2025 – present',
      summary: 'Workforce management SaaS for rope access companies.',
      fields: [
        { label: 'Role', value: 'Sole front-end developer' },
        {
          label: 'Used in',
          value: 'Canada, the UK, the US, Saudi Arabia, Australia and South Africa, in 8 languages'
        },
        {
          label: 'Stack',
          value: 'Vue 3, Quasar, Pinia, Dexie.js, pdfmake, Cypress. Nuxt and Tailwind for the marketing site'
        },
        { label: 'Live', value: 'myabseil.com', href: links.myabseil }
      ],
      highlightsTitle: 'What I did',
      highlights: [
        {
          lead: 'Finished the Vue 3 migration.',
          text: 'Joined as a freelancer midway through a Vue 2 → Vue 3 and Tailwind CSS → Quasar migration started by a three-developer team, led it to completion and was kept as the only front-end developer.'
        },
        {
          lead: 'Offline-first mode.',
          text: 'Built from scratch for team leads, with IndexedDB (Dexie.js) and automatic sync: on-site check-in and check-out, forms and signature capture with poor or no connectivity.'
        },
        {
          lead: 'PDFs in the browser.',
          text: 'Moved PDF generation from the server to the browser with pdfmake, reducing server load and report generation failures.'
        },
        {
          lead: 'Reports and shareable links.',
          text: 'Restructured and expanded the reports module, and built public links for form responses, so clients no longer download and email PDFs.'
        },
        {
          lead: 'Three role-based interfaces.',
          text: 'Admin, Team Lead and Driver, including inventory management and inspection records. Redesigned the UX of forms, reports and the Job Schedule.'
        },
        {
          lead: 'Tests and structure.',
          text: 'End-to-end tests with Cypress, a library of reusable Quasar components built from the designer’s Figma, and API logic centralized in Pinia stores.'
        },
        {
          lead: 'Marketing site.',
          text: 'Built the landing page with Nuxt.js and Tailwind.'
        },
        {
          lead: 'Clients in Brazil.',
          text: 'Point of contact for product demos and pre-sales.'
        }
      ],
      image: {
        src: '/images/myabseil-reports.png',
        alt: 'MyAbseil reports module',
        width: 1600,
        height: 1000
      }
    },
    others: [
      {
        name: 'PathDMS',
        period: 'Jan – Apr 2025',
        summary:
          'Version 2 of a cloud platform used by non-profits and First Nations communities across Canada to manage programs, participant records and funder reporting. Rebuilt the front-end from scratch in Vue and Quasar from Figma designs, as one of two front-end developers, replacing the legacy PHP interface.',
        href: links.pathdms
      },
      {
        name: 'CW Gravatas',
        period: 'Mar 2025 – present',
        summary:
          'Complete online store for a necktie business. Front-end in Vue, Pinia and Quasar on a Laravel back-end, with Mercado Pago payments, Melhor Envio shipping quotes and Brevo transactional emails.',
        href: links.cwgravatas
      },
      {
        name: 'PIB Búzios',
        period: '2025',
        summary: 'WordPress landing page for a church in Búzios, Brazil, as a volunteer.'
      }
    ]
  },

  howIWork: {
    title: 'How I work',
    intro: 'Three patterns I use in production, shown with small examples written for this site.',
    offline: {
      title: 'Offline-first',
      text: 'Team leads in the field can’t wait for a signal to log a check-in. I save each action on the device first, queue it, and sync when the connection comes back.',
      demoCaption: 'A simulation: nothing leaves your browser and nothing is stored.',
      codeCaption: 'The pattern with Dexie: write locally, mark as pending, sync when online.'
    },
    pdf: {
      title: 'PDFs in the browser',
      text: 'Building PDFs on the client takes that work off the server: less load there and fewer failed reports. The Download CV button on this site works this way.',
      codeCaption: 'A trimmed version of the code behind that button.'
    },
    components: {
      title: 'From Figma to reusable components',
      text: 'I turn a designer’s Figma into small components with clear props, so every screen uses the same pieces. The status badge in the demo above is one of them.',
      componentCaption: 'StatusBadge.vue',
      usageCaption: 'Using it'
    },
    demo: {
      title: 'Site check-in',
      tag: 'Demo',
      connection: 'Connection',
      online: 'Online',
      offline: 'Offline',
      statusOnline: 'Online. Changes sync right away.',
      statusOffline: 'Offline. Changes wait on this device.',
      checkIn: 'Check in',
      checkOut: 'Check out',
      activity: 'Activity',
      kinds: { in: 'Check-in', out: 'Check-out' },
      states: { synced: 'Synced', queued: 'Saved on device', syncing: 'Syncing…' },
      hintOnline: 'Go offline, then check in or out. The entry waits on this device.',
      hintOffline: 'Go back online to sync what is waiting.',
      noJs: 'Turn on JavaScript to try the demo.',
      announceSaved: 'Saved on this device. It syncs when you are back online.',
      announceSynced: 'Synced.'
    }
  },

  services: {
    title: 'What I can help with',
    items: [
      'Building new apps in Vue.js, Quasar and Nuxt',
      'Maintaining and evolving existing codebases',
      'Migrating from Vue 2 to Vue 3',
      'PWAs that work offline',
      'Turning designs into responsive interfaces'
    ]
  },

  about: {
    title: 'About',
    paragraphs: [
      'Before software, I spent 8 years in the Brazilian Army as a First Lieutenant (Infantry). I commanded the boat unit of the 5th Jungle Infantry Battalion and headed the management section of the 4th Jungle Infantry Battalion.',
      'After that, I co-ran a custom wedding invitation business for nearly seven years, handling design, customer service and a small team. I moved into software development in 2024.'
    ]
  },

  contact: {
    title: 'Contact',
    text: 'Write to me by email, or find me on Upwork and LinkedIn.',
    cvPage: 'CV as a web page'
  },

  footer: {
    rights: 'Wanderson Oliveira'
  }
}

export default en
