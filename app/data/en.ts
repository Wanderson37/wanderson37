import type { SiteContent } from './types'
import { links } from './links'
import cv from './cv-en'

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
      workingWithMe: 'Working with me',
      services: 'Services',
      about: 'About',
      contact: 'Contact'
    },
    languageLabel: 'Language',
    darkTheme: 'Dark theme',
    emailMe: 'Email me',
    upwork: 'Upwork',
    downloadCv: 'Download CV',
    downloadPdf: 'Download PDF',
    preparingPdf: 'Preparing PDF…',
    pdfFailed: 'The PDF could not be generated. Please try again.',
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
      shots: [
        {
          src: '/images/myabseil-schedule.png',
          alt: 'MyAbseil Job Schedule in week view: operatives on the left, the days of the week in the middle and jobs waiting to be scheduled on the right',
          width: 1576,
          height: 944,
          caption: 'The Job Schedule, one of the screens whose UX I redesigned.'
        },
        {
          src: '/images/myabseil-landing.png',
          alt: 'MyAbseil marketing site: the headline “One app for rope access operations & compliance” above cards for job allocation, digital forms, signatures and equipment',
          width: 1584,
          height: 938,
          caption: 'The marketing site, built with Nuxt.js and Tailwind.'
        }
      ],
      tryDemo: {
        title: 'Try the offline check-in',
        text: 'Team leads in the field can’t wait for a signal to log a check-in. Each action is saved on the device first, queued, and synced when the connection comes back.',
        caption: 'A simulation: nothing leaves your browser and nothing is stored.'
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
        href: links.cwgravatas,
        shot: {
          src: '/images/cw-gravatas-admin.png',
          alt: 'CW Gravatas admin dashboard: product, order and sales metrics, quick actions and low-stock alerts',
          width: 1577,
          height: 939,
          caption: 'The store’s admin dashboard. Sales and stock figures are blurred.'
        }
      },
      {
        name: 'PIB Búzios',
        period: '2025',
        summary: 'WordPress landing page for a church in Búzios, Brazil, as a volunteer.'
      }
    ]
  },

  workingWithMe: {
    title: 'Working with me',
    items: [
      {
        lead: 'From Figma to production.',
        text: 'I turn the designer’s Figma into reusable components and take them all the way to production, as on MyAbseil and PathDMS.'
      },
      {
        lead: 'In step with your team.',
        text: 'I deliver as the work demands: staying in the chat when the team works that way, or sending an update when there is something to show. I work in Slack today and reply to messages quickly.'
      },
      {
        lead: 'Tested before delivery.',
        text: 'I write end-to-end tests with Cypress, so changes are checked before they reach users.'
      },
      {
        lead: 'Code built to be maintained.',
        text: 'Reusable components and API logic centralized in Pinia stores keep the codebase easy to change and to hand over.'
      }
    ]
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
    emailLabel: 'Email',
    cvLabel: 'CV',
    cvPage: 'CV as a web page'
  },

  footer: {
    rights: 'Wanderson Oliveira',
    privacy: 'Privacy'
  },

  consent: {
    label: 'Cookie consent',
    text: 'May I use Google Analytics cookies to see how visitors use this site? Nothing is measured unless you accept.',
    accept: 'Accept',
    decline: 'Decline',
    settings: 'Cookie settings',
    privacy: 'Privacy policy'
  },

  privacy: {
    meta: {
      title: 'Privacy — Wanderson Oliveira',
      description:
        'What this site collects: Google Analytics only if you accept, no ads and no accounts. Cookies, who processes the data and your rights.'
    },
    title: 'Privacy',
    updated: 'Last updated: 13 October 2026',
    intro: 'This site is a portfolio. It has no accounts, forms or ads, and it collects as little as it can.',
    sections: [
      {
        title: 'Analytics, only if you accept',
        paragraphs: [
          'If you accept in the cookie bar, the site loads Google Analytics to show me which pages are visited and how people find them. If you decline or never answer, it is not loaded and nothing is measured. When it runs, it records:'
        ],
        items: [
          'Pages viewed and the site that sent you here.',
          'Device, browser and approximate location (country and city), which Google works out from your IP address without storing it.',
          'Two actions: downloading the CV and clicking the email link.'
        ]
      },
      {
        title: 'Cookies',
        paragraphs: [
          'Google Analytics sets two cookies, _ga and one starting with _ga_, to tell one visit from another. They are set only after you accept and last up to 2 years.',
          'The site also keeps your theme and cookie choices in your browser. They never leave your device.'
        ]
      },
      {
        title: 'Who processes the data',
        paragraphs: [
          'Google processes the analytics data, possibly outside Brazil and the European Union. Advertising features and Google signals are off, so the data is not used for ads. Visit-level data is kept for 2 months; after that only totals remain.',
          'The site is hosted on Vercel, which handles every request and may keep technical logs, such as IP address and browser, to run and protect the service. Fonts and images are served by this site itself; other sites are only reached when you follow a link to them.'
        ]
      }
    ],
    rights: {
      title: 'Your choices and rights',
      paragraphs: [
        'You can change your answer at any time with “Cookie settings” at the bottom of every page. Declining removes the analytics cookies.',
        'Under the LGPD and the GDPR you can ask what data about you exists, have it corrected or deleted, and withdraw your consent. If you email me, I use your address and message only to reply.'
      ],
      changeChoice: 'Change cookie choice',
      controllerLabel: 'Data controller',
      controller: 'Wanderson Oliveira, Manaus, Brazil'
    }
  },

  notFound: {
    title: 'Page not found',
    errorTitle: 'Something went wrong',
    text: 'This page does not exist or has moved.',
    home: 'Go to the home page'
  },

  cv
}

export default en
