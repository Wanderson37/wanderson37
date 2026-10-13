import type { SiteContent } from './types'
import { links } from './links'
import cv from './cv-pt'

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
      workingWithMe: 'Trabalhar comigo',
      services: 'Serviços',
      about: 'Sobre',
      contact: 'Contato'
    },
    languageLabel: 'Idioma',
    darkTheme: 'Tema escuro',
    emailMe: 'Enviar e-mail',
    upwork: 'Upwork',
    downloadCv: 'Baixar currículo',
    downloadPdf: 'Baixar PDF',
    preparingPdf: 'Gerando PDF…',
    pdfFailed: 'Não foi possível gerar o PDF. Tente de novo.',
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
      shots: [
        {
          src: '/images/myabseil-schedule.png',
          alt: 'Job Schedule do MyAbseil na visão semanal: a equipe à esquerda, os dias da semana no centro e os serviços a agendar à direita',
          width: 1576,
          height: 944,
          caption: 'O Job Schedule, uma das telas cuja UX redesenhei.'
        },
        {
          src: '/images/myabseil-landing.png',
          alt: 'Site de marketing do MyAbseil: o título “One app for rope access operations & compliance” acima de cards de alocação de serviços, formulários digitais, assinatura e equipamentos',
          width: 1584,
          height: 938,
          caption: 'O site de marketing, feito com Nuxt.js e Tailwind.'
        }
      ],
      tryDemo: {
        title: 'Teste o check-in offline',
        text: 'Líderes de equipe em campo não podem esperar o sinal voltar para registrar um check-in. Cada ação é salva primeiro no aparelho, entra na fila e sincroniza quando a conexão volta.',
        caption: 'Uma simulação: nada sai do seu navegador e nada fica salvo.'
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
        href: links.cwgravatas,
        shot: {
          src: '/images/cw-gravatas-admin.png',
          alt: 'Painel administrativo da CW Gravatas: métricas de produtos, pedidos e vendas, ações rápidas e alertas de estoque baixo',
          width: 1577,
          height: 939,
          caption: 'O painel administrativo da loja. Os números de vendas e estoque estão borrados.'
        }
      },
      {
        name: 'PIB Búzios',
        period: '2025',
        summary: 'Landing page em WordPress para uma igreja em Búzios, como voluntário.'
      }
    ]
  },

  workingWithMe: {
    title: 'Como é trabalhar comigo',
    items: [
      {
        lead: 'Do Figma à produção.',
        text: 'Transformo o Figma do designer em componentes reutilizáveis e levo até a produção, como no MyAbseil e no PathDMS.'
      },
      {
        lead: 'No ritmo do seu time.',
        text: 'Entrego conforme a demanda: fico no chat quando o time trabalha assim, ou mando uma atualização quando há algo para mostrar. Hoje trabalho pelo Slack e respondo rápido às mensagens.'
      },
      {
        lead: 'Testado antes de entregar.',
        text: 'Escrevo testes end-to-end com Cypress, para que as mudanças sejam verificadas antes de chegar aos usuários.'
      },
      {
        lead: 'Código feito para ser mantido.',
        text: 'Componentes reutilizáveis e a lógica de API centralizada em stores Pinia deixam o código fácil de mudar e de passar adiante.'
      }
    ]
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
    emailLabel: 'E-mail',
    cvLabel: 'Currículo',
    cvPage: 'Currículo em página web'
  },

  footer: {
    rights: 'Wanderson Oliveira',
    privacy: 'Privacidade'
  },

  consent: {
    label: 'Consentimento de cookies',
    text: 'Posso usar cookies do Google Analytics para ver como os visitantes usam este site? Nada é medido se você não aceitar.',
    accept: 'Aceitar',
    decline: 'Recusar',
    settings: 'Preferências de cookies',
    privacy: 'Política de privacidade'
  },

  privacy: {
    meta: {
      title: 'Privacidade — Wanderson Oliveira',
      description:
        'O que este site coleta: Google Analytics só se você aceitar, sem anúncios e sem contas. Cookies, quem trata os dados e seus direitos.'
    },
    title: 'Privacidade',
    updated: 'Atualizado em 13 de outubro de 2026',
    intro: 'Este site é um portfólio. Não tem contas, formulários nem anúncios, e coleta o mínimo possível.',
    sections: [
      {
        title: 'Analytics, só se você aceitar',
        paragraphs: [
          'Se você aceitar na barra de cookies, o site carrega o Google Analytics para me mostrar quais páginas são visitadas e como as pessoas chegam até elas. Se você recusar ou não responder, ele não é carregado e nada é medido. Quando ativo, ele registra:'
        ],
        items: [
          'As páginas vistas e o site que trouxe você até aqui.',
          'Dispositivo, navegador e localização aproximada (país e cidade), que o Google deduz do seu endereço IP sem armazená-lo.',
          'Duas ações: baixar o currículo e clicar no link de e-mail.'
        ]
      },
      {
        title: 'Cookies',
        paragraphs: [
          'O Google Analytics grava dois cookies, _ga e um que começa com _ga_, para distinguir uma visita da outra. Eles só são gravados depois que você aceita e duram até 2 anos.',
          'O site também guarda no seu navegador as suas escolhas de tema e de cookies. Elas nunca saem do seu dispositivo.'
        ]
      },
      {
        title: 'Quem trata os dados',
        paragraphs: [
          'O Google trata os dados de analytics, possivelmente fora do Brasil e da União Europeia. Os recursos de publicidade e os Google signals estão desligados, então os dados não são usados para anúncios. Os dados de cada visita ficam guardados por 2 meses; depois disso, restam só os totais.',
          'O site é hospedado na Vercel, que recebe todas as requisições e pode manter registros técnicos, como endereço IP e navegador, para operar e proteger o serviço. Fontes e imagens vêm do próprio site; outros sites só são acessados quando você segue um link para eles.'
        ]
      }
    ],
    rights: {
      title: 'Suas escolhas e direitos',
      paragraphs: [
        'Você pode mudar sua resposta a qualquer momento em “Preferências de cookies”, no fim de cada página. Recusar apaga os cookies de analytics.',
        'Pela LGPD e pelo GDPR, você pode perguntar quais dados seus existem, pedir correção ou exclusão e retirar seu consentimento. Se você me mandar um e-mail, uso seu endereço e sua mensagem só para responder.'
      ],
      changeChoice: 'Mudar escolha de cookies',
      controllerLabel: 'Controlador',
      controller: 'Wanderson Oliveira, Manaus, Brasil'
    }
  },

  notFound: {
    title: 'Página não encontrada',
    errorTitle: 'Algo deu errado',
    text: 'Esta página não existe ou mudou de endereço.',
    home: 'Ir para a página inicial'
  },

  cv
}

export default pt
