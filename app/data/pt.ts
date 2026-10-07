import type { SiteContent } from './types'
import { links } from './links'

// Faithful translation of en.ts: no new facts. Wanderson reviews every string here.
const pt: SiteContent = {
  meta: {
    title: 'Wanderson Oliveira — Desenvolvedor Front-End (Vue.js, Quasar e Nuxt)',
    description:
      'Desenvolvedor front-end que constrói e mantém apps em Vue.js, Quasar e Nuxt. Único dev front-end do MyAbseil, SaaS usado em 6 países e 8 idiomas.',
    ogImage: '/og-pt.png',
    ogImageAlt: 'Wanderson Oliveira, desenvolvedor front-end: Vue.js, Quasar e Nuxt',
    jobTitle: 'Desenvolvedor Front-End'
  },

  ui: {
    skipLink: 'Pular para o conteúdo',
    navLabel: 'Principal',
    nav: {
      work: 'Trabalhos',
      howIWork: 'Como trabalho',
      services: 'Serviços',
      about: 'Sobre',
      contact: 'Contato'
    },
    languageLabel: 'Idioma',
    emailMe: 'Enviar e-mail',
    upwork: 'Upwork',
    downloadCv: 'Baixar currículo',
    preparingPdf: 'Gerando PDF…',
    pdfFailed: 'Não foi possível gerar o PDF. Abra a página do currículo.',
    newTab: '(abre em nova aba)'
  },

  hero: {
    title: 'Construo e mantenho front-ends em Vue.js, Quasar e Nuxt.',
    proof:
      'Único desenvolvedor front-end de um SaaS de gestão de equipes usado em 6 países e 8 idiomas.',
    fields: [
      { label: 'Base', value: 'Manaus, Brasil (UTC−4)' },
      { label: 'Horário', value: 'Boa sobreposição com os fusos dos EUA' },
      { label: 'Inglês', value: 'Fluente' }
    ]
  },

  work: {
    title: 'Trabalhos selecionados',
    featured: {
      name: 'MyAbseil',
      period: 'fev 2025 – atual',
      summary: 'SaaS de gestão de equipes para empresas de acesso por corda.',
      fields: [
        { label: 'Função', value: 'Único desenvolvedor front-end' },
        {
          label: 'Usado em',
          value: 'Canadá, Reino Unido, EUA, Arábia Saudita, Austrália e África do Sul, em 8 idiomas'
        },
        {
          label: 'Stack',
          value: 'Vue 3, Quasar, Pinia, Dexie.js, pdfmake, Cypress. Nuxt e Tailwind no site de marketing'
        },
        { label: 'No ar', value: 'myabseil.com', href: links.myabseil }
      ],
      highlightsTitle: 'O que fiz',
      highlights: [
        {
          lead: 'Concluí a migração para o Vue 3.',
          text: 'Entrei como freelancer no meio de uma migração de Vue 2 → Vue 3 e de Tailwind CSS → Quasar iniciada por uma equipe de três desenvolvedores, conduzi até o fim e fui mantido como o único desenvolvedor front-end.'
        },
        {
          lead: 'Modo offline-first.',
          text: 'Construído do zero para os líderes de equipe, com IndexedDB (Dexie.js) e sincronização automática: check-in e check-out em campo, formulários e captura de assinatura com conexão ruim ou sem conexão.'
        },
        {
          lead: 'PDFs no navegador.',
          text: 'Levei a geração de PDFs do servidor para o navegador com pdfmake, reduzindo a carga no servidor e as falhas na geração de relatórios.'
        },
        {
          lead: 'Relatórios e links compartilháveis.',
          text: 'Reestruturei e ampliei o módulo de relatórios e criei links públicos para as respostas de formulários, para que os clientes não precisem mais baixar PDFs e enviá-los por e-mail.'
        },
        {
          lead: 'Três interfaces por perfil.',
          text: 'Admin, Team Lead e Driver, incluindo gestão de inventário e registros de inspeção. Redesenhei a UX dos formulários, dos relatórios e do Job Schedule.'
        },
        {
          lead: 'Testes e estrutura.',
          text: 'Testes end-to-end com Cypress, uma biblioteca de componentes Quasar reutilizáveis feita a partir do Figma do designer e a lógica de API centralizada em stores Pinia.'
        },
        {
          lead: 'Site de marketing.',
          text: 'Criei a landing page com Nuxt.js e Tailwind.'
        },
        {
          lead: 'Clientes no Brasil.',
          text: 'Ponto de contato para demonstrações do produto e pré-venda.'
        }
      ],
      image: {
        src: '/images/myabseil-reports.png',
        alt: 'Módulo de relatórios do MyAbseil',
        width: 1600,
        height: 1000
      }
    },
    others: [
      {
        name: 'PathDMS',
        period: 'jan – abr 2025',
        summary:
          'Versão 2 de uma plataforma em nuvem usada por organizações sem fins lucrativos e comunidades das Primeiras Nações em todo o Canadá para gerenciar programas, registros de participantes e relatórios para financiadores. Reconstruí o front-end do zero em Vue e Quasar a partir de designs no Figma, como um de dois desenvolvedores front-end, substituindo a interface legada em PHP.',
        href: links.pathdms
      },
      {
        name: 'CW Gravatas',
        period: 'mar 2025 – atual',
        summary:
          'Loja virtual completa para uma empresa de gravatas. Front-end em Vue, Pinia e Quasar sobre um back-end Laravel, com pagamentos pelo Mercado Pago, cotação de frete pelo Melhor Envio e e-mails transacionais pelo Brevo.',
        href: links.cwgravatas
      },
      {
        name: 'PIB Búzios',
        period: '2025',
        summary: 'Landing page em WordPress para uma igreja em Búzios, como voluntário.'
      }
    ]
  },

  howIWork: {
    title: 'Como trabalho',
    intro: 'Três padrões que uso em produção, mostrados com exemplos pequenos escritos para este site.',
    offline: {
      title: 'Offline-first',
      text: 'Líderes de equipe em campo não podem esperar o sinal voltar para registrar um check-in. Salvo cada ação primeiro no aparelho, coloco na fila e sincronizo quando a conexão volta.',
      demoCaption: 'Uma simulação: nada sai do seu navegador e nada fica salvo.',
      codeCaption: 'O padrão com Dexie: grava localmente, marca como pendente e sincroniza quando há conexão.'
    },
    pdf: {
      title: 'PDFs no navegador',
      text: 'Gerar PDFs no cliente tira esse trabalho do servidor: menos carga lá e menos relatórios com falha. O botão Baixar currículo deste site funciona assim.',
      codeCaption: 'Uma versão resumida do código desse botão.'
    },
    components: {
      title: 'Do Figma a componentes reutilizáveis',
      text: 'Transformo o Figma do designer em componentes pequenos com props claras, para que todas as telas usem as mesmas peças. O selo de status da demo acima é um deles.',
      componentCaption: 'StatusBadge.vue',
      usageCaption: 'Como usar'
    },
    demo: {
      title: 'Check-in em campo',
      tag: 'Demo',
      connection: 'Conexão',
      online: 'Online',
      offline: 'Offline',
      statusOnline: 'Online. As alterações sincronizam na hora.',
      statusOffline: 'Offline. As alterações esperam neste aparelho.',
      checkIn: 'Fazer check-in',
      checkOut: 'Fazer check-out',
      activity: 'Atividade',
      kinds: { in: 'Check-in', out: 'Check-out' },
      states: { synced: 'Sincronizado', queued: 'Salvo no aparelho', syncing: 'Sincronizando…' },
      hintOnline: 'Fique offline e faça um check-in ou check-out. O registro espera neste aparelho.',
      hintOffline: 'Volte a ficar online para sincronizar o que está esperando.',
      noJs: 'Ative o JavaScript para testar a demo.',
      announceSaved: 'Salvo neste aparelho. Sincroniza quando você voltar a ficar online.',
      announceSynced: 'Sincronizado.'
    }
  },

  services: {
    title: 'Como posso ajudar',
    items: [
      'Construir apps novos em Vue.js, Quasar e Nuxt',
      'Manter e evoluir codebases existentes',
      'Migrar de Vue 2 para Vue 3',
      'PWAs que funcionam offline',
      'Transformar designs em interfaces responsivas'
    ]
  },

  about: {
    title: 'Sobre',
    paragraphs: [
      'Antes do software, passei 8 anos no Exército Brasileiro como Primeiro-Tenente de Infantaria. Comandei a unidade de embarcações do 5º Batalhão de Infantaria de Selva e chefiei a seção de gestão do 4º Batalhão de Infantaria de Selva.',
      'Depois, fui sócio de uma empresa de convites de casamento personalizados por quase sete anos, cuidando do design, do atendimento e de uma equipe pequena. Migrei para o desenvolvimento de software em 2024.'
    ]
  },

  contact: {
    title: 'Contato',
    text: 'Escreva por e-mail ou me encontre no Upwork e no LinkedIn.',
    cvPage: 'Currículo em página web'
  },

  footer: {
    rights: 'Wanderson Oliveira'
  }
}

export default pt
