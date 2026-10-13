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

export interface Shot {
  src: string
  alt: string
  width: number
  height: number
  caption: string
}

export interface WorkRow {
  name: string
  period: string
  summary: string
  href?: string
  shot?: Shot
}

export type CheckinStatus = 'synced' | 'queued' | 'syncing'

export interface DemoCopy {
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

export interface CvJob {
  role: string
  org: string
  place?: string
  period: string
  points: string[]
}

export interface CvContent {
  meta: { title: string; description: string }
  name: string
  headline: string
  fileName: string
  contact: Field[]
  headings: {
    summary: string
    experience: string
    military: string
    skills: string
    education: string
    certifications: string
    languages: string
  }
  summary: string
  experience: CvJob[]
  military: CvJob[]
  skills: Field[]
  education: { school: string; degree: string; period: string }[]
  certifications: string[]
  languages: string[]
}

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
    nav: { work: string; workingWithMe: string; services: string; about: string; contact: string }
    languageLabel: string
    darkTheme: string
    emailMe: string
    upwork: string
    downloadCv: string
    downloadPdf: string
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
      /** The first one opens the block; the rest follow the highlights. */
      shots: [Shot, ...Shot[]]
      tryDemo: { title: string; text: string; caption: string }
      demo: DemoCopy
    }
    others: WorkRow[]
  }
  workingWithMe: {
    title: string
    items: Highlight[]
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
    emailLabel: string
    cvLabel: string
    cvPage: string
  }
  footer: {
    rights: string
  }
  consent: {
    label: string
    text: string
    accept: string
    decline: string
    /** Footer button that reopens the bar. */
    settings: string
  }
  notFound: {
    title: string
    errorTitle: string
    text: string
    home: string
  }
  cv: CvContent
}
