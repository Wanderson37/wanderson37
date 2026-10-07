import type { CvContent } from './types'
import { links } from './links'

// Faithful translation of cv-en.ts (there is no Portuguese version of the CV in
// Google Docs). Wanderson reviews every string here.
const cv: CvContent = {
  meta: {
    title: 'Currículo — Wanderson Oliveira',
    description:
      'Currículo de Wanderson Oliveira, desenvolvedor front-end que constrói e mantém apps em Vue.js, Quasar e Nuxt: experiência, competências, formação e idiomas.'
  },
  name: 'Wanderson Oliveira',
  headline: 'Desenvolvedor Front-End · Vue.js, Quasar e Nuxt',
  fileName: 'Wanderson Oliveira - Curriculo.pdf',
  contact: [
    { label: 'Local', value: 'Manaus, AM — Brasil' },
    { label: 'E-mail', value: links.email, href: `mailto:${links.email}` },
    { label: 'LinkedIn', value: 'linkedin.com/in/wanderson-oliveira-06a1b1196', href: links.linkedin },
    { label: 'GitHub', value: 'github.com/Wanderson37', href: links.github },
    { label: 'Portfólio', value: 'wanderson37.dev', href: links.site }
  ],
  headings: {
    summary: 'Resumo',
    experience: 'Experiência profissional',
    military: 'Serviço militar',
    skills: 'Competências técnicas',
    education: 'Formação',
    certifications: 'Certificações e cursos',
    languages: 'Idiomas'
  },
  summary:
    'Desenvolvedor front-end que constrói e mantém apps em Vue.js, Quasar e Nuxt. Entrei no MyAbseil, um SaaS de gestão de equipes para empresas de acesso por corda, como freelancer no meio da migração de Vue 2 → Vue 3, conduzi a migração até o fim e me tornei o único desenvolvedor front-end depois que a equipe foi reduzida. Sou responsável por todo o front-end desde o início de 2025, incluindo o modo offline para equipes sem conexão, a troca de Tailwind por Quasar e a biblioteca de componentes reutilizáveis do produto. Fui oficial do Exército Brasileiro por 8 anos, liderando equipes sob pressão.',
  experience: [
    {
      role: 'Desenvolvedor Front-End',
      org: 'MyAbseil',
      place: 'Vancouver, Canadá',
      period: 'fev 2025 – atual',
      points: [
        'Único desenvolvedor front-end de um SaaS de gestão de equipes para empresas de acesso por corda, usado por clientes no Canadá, Reino Unido, EUA, Arábia Saudita, Austrália e África do Sul, em 8 idiomas.',
        'Entrei como freelancer no meio da migração de Vue 2 → Vue 3 e de Tailwind CSS → Quasar iniciada por uma equipe de três desenvolvedores; conduzi a migração até o fim e fui mantido como o único desenvolvedor front-end.',
        'Criei do zero um modo offline-first para líderes de equipe com IndexedDB (Dexie.js) e sincronização automática, permitindo check-in e check-out em campo, envio de formulários e captura de assinaturas com conexão ruim ou sem conexão.',
        'Levei a geração de PDFs do servidor para o navegador com pdfmake, reduzindo a carga no servidor e as falhas na geração de relatórios.',
        'Reestruturei e ampliei o módulo de relatórios e criei links públicos compartilháveis para as respostas de formulários, para que os clientes compartilhem resultados sem baixar PDFs e enviá-los por e-mail.',
        'Mantenho três interfaces por perfil (Admin, Team Lead, Driver), incluindo gestão de inventário e registros de inspeção; redesenhei a UX dos formulários, dos relatórios e do Job Schedule.',
        'Implementei testes end-to-end com Cypress; transformei o Figma do designer em uma biblioteca de componentes Quasar reutilizáveis, centralizando a lógica de API em stores Pinia e utilitários compartilhados.',
        'Ponto de contato para prospects no Brasil, conduzindo demonstrações do produto e conversas de pré-venda.',
        'Criei a landing page com Nuxt.js e Tailwind: myabseil.com.'
      ]
    },
    {
      role: 'Desenvolvedor Front-End (Contrato)',
      org: 'PathDMS',
      place: 'Ontário, Canadá',
      period: 'jan 2025 – abr 2025',
      points: [
        'Codesenvolvi a versão 2 do PathDMS, uma plataforma em nuvem usada por organizações sem fins lucrativos e comunidades das Primeiras Nações em todo o Canadá para gerenciar programas, registros de participantes e relatórios para financiadores.',
        'Reconstruí o front-end do zero em Vue e Quasar a partir de designs no Figma, como um de dois desenvolvedores front-end, substituindo a interface legada em PHP.'
      ]
    },
    {
      role: 'Desenvolvedor Front-End (Freelancer)',
      org: 'CW Gravatas',
      place: 'Manaus, AM',
      period: 'mar 2025 – atual',
      points: [
        'Projetei e construí uma loja virtual completa para uma empresa de gravatas, com Vue, Pinia e Quasar no front-end e back-end em Laravel.',
        'Integrei o Mercado Pago para pagamentos, o Melhor Envio para cotação de frete e o Brevo para e-mails transacionais.'
      ]
    },
    {
      role: 'Desenvolvedor WordPress (Voluntário)',
      org: 'PIB Búzios',
      place: 'Búzios, RJ',
      period: 'ago 2025 – dez 2025',
      points: [
        'Desenvolvi e personalizei uma landing page responsiva em WordPress para a PIB Búzios.',
        'Cuidei da integração de conteúdo, da configuração do tema e da instalação de plugins para atender aos requisitos do cliente.',
        'Garanti a compatibilidade entre navegadores e otimizei o tempo de carregamento da página para uma melhor experiência do usuário.'
      ]
    },
    {
      role: 'Sócio-fundador e Designer Gráfico',
      org: 'CW Convites',
      place: 'Manaus, AM',
      period: 'set 2017 – jun 2024',
      points: [
        'Fui sócio de uma empresa de convites de casamento personalizados, criando convites a partir de referências dos clientes e entregando dentro de datas fixas de eventos.',
        'Cuidei do atendimento, gerenciei a equipe e fiz a manutenção dos equipamentos de impressão e corte a laser.'
      ]
    }
  ],
  military: [
    {
      role: 'Primeiro-Tenente (Infantaria)',
      org: 'Exército Brasileiro',
      period: '8 anos',
      points: [
        'Comandante da unidade de embarcações, 5º Batalhão de Infantaria de Selva (4 anos).',
        'Chefe da seção de gestão, 4º Batalhão de Infantaria de Selva (3 anos).',
        'Liderei e gerenciei equipes, planejei e executei missões com prazos curtos e mantive o desempenho em situações de alta pressão.'
      ]
    }
  ],
  skills: [
    { label: 'Linguagens', value: 'JavaScript (ES6+), TypeScript, HTML5, CSS3' },
    {
      label: 'Frameworks e bibliotecas',
      value: 'Vue.js 3, Nuxt, Quasar, Pinia, Vite, Tailwind CSS, Laravel (básico)'
    },
    {
      label: 'Ferramentas',
      value: 'Git, GitHub, Figma, Postman, Cypress (testes E2E), Dexie.js (IndexedDB), pdfmake'
    },
    { label: 'Metodologias', value: 'Scrum, Kanban' },
    {
      label: 'Competências',
      value:
        'Apps web offline-first, migração de Vue 2 → 3, Figma para código, internacionalização (i18n), integração com APIs REST, design responsivo, acessibilidade web, SEO básico'
    }
  ],
  education: [
    {
      school: 'Gran Faculdade (GRAN)',
      degree: 'Bacharelado em Engenharia de Software',
      period: 'Previsão de conclusão: 2028'
    }
  ],
  certifications: [
    'CS50: Introduction to Computer Science — HarvardX (2024)',
    'Responsive Web Design — freeCodeCamp (2023)'
  ],
  languages: ['Português: nativo', 'Inglês: fluente']
}

export default cv
