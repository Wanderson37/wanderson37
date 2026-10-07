// Shape of every piece of copy on the site. en.ts and pt.ts both satisfy it,
// so `yarn typecheck` fails if a translation is missing a key.

export interface Field {
  label: string
  value: string
  href?: string
}

export interface Highlight {
  lead: string
  text: string
}

export interface WorkRow {
  name: string
  period: string
  summary: string
  href?: string
}

export type CheckinStatus = 'synced' | 'queued' | 'syncing'

export interface SiteContent {
  meta: {
    title: string
    description: string
    ogImage: string
    ogImageAlt: string
    jobTitle: string
  }
  ui: {
    skipLink: string
    navLabel: string
    nav: { work: string; howIWork: string; services: string; about: string; contact: string }
    languageLabel: string
    emailMe: string
    upwork: string
    downloadCv: string
    preparingPdf: string
    pdfFailed: string
    newTab: string
  }
  hero: {
    title: string
    proof: string
    fields: Field[]
  }
  work: {
    title: string
    featured: {
      name: string
      period: string
      summary: string
      fields: Field[]
      highlightsTitle: string
      highlights: Highlight[]
      image: { src: string; alt: string; width: number; height: number }
    }
    others: WorkRow[]
  }
  howIWork: {
    title: string
    intro: string
    offline: { title: string; text: string; demoCaption: string; codeCaption: string }
    pdf: { title: string; text: string; codeCaption: string }
    components: { title: string; text: string; componentCaption: string; usageCaption: string }
    demo: {
      title: string
      tag: string
      connection: string
      online: string
      offline: string
      statusOnline: string
      statusOffline: string
      checkIn: string
      checkOut: string
      activity: string
      kinds: { in: string; out: string }
      states: Record<CheckinStatus, string>
      hintOnline: string
      hintOffline: string
      noJs: string
      announceSaved: string
      announceSynced: string
    }
  }
  services: {
    title: string
    items: string[]
  }
  about: {
    title: string
    paragraphs: string[]
  }
  contact: {
    title: string
    text: string
    cvPage: string
  }
  footer: {
    rights: string
  }
}
