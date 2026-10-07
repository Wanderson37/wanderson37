import type { Content, TDocumentDefinitions, TFontDictionary } from 'pdfmake/interfaces'
import type { CvContent, CvJob } from '~/data/types'

const INK = '#14181d'
const GRAPHITE = '#545d68'
const RULE = '#d3d8de'

const rule = (): Content => ({
  canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 0.75, lineColor: RULE }],
  margin: [0, 4, 0, 8]
})

const heading = (text: string): Content[] => [
  { text, font: 'ArchivoWide', fontSize: 11, bold: true, marginTop: 14 },
  rule()
]

const job = (j: CvJob): Content[] => [
  {
    columns: [
      {
        width: '*',
        text: [
          { text: j.role, bold: true },
          { text: ` · ${j.org}${j.place ? `, ${j.place}` : ''}`, color: GRAPHITE }
        ]
      },
      { width: 'auto', text: j.period, font: 'PlexMono', fontSize: 8, color: GRAPHITE }
    ],
    columnGap: 12,
    marginTop: 6
  },
  { ul: j.points, marginTop: 4, marginBottom: 4 }
]

/** Font files for pdfmake, as URLs in the browser or paths in Node. */
export function cvFonts(base: string): TFontDictionary {
  return {
    Archivo: { normal: `${base}Archivo-Regular.ttf`, bold: `${base}Archivo-Bold.ttf` },
    ArchivoWide: {
      normal: `${base}Archivo-SemiExpandedBold.ttf`,
      bold: `${base}Archivo-SemiExpandedBold.ttf`
    },
    PlexMono: { normal: `${base}IBMPlexMono-Regular.ttf` }
  }
}

/** The CV as a pdfmake document, from the same content as the /cv page. */
export function buildCvDoc(cv: CvContent): TDocumentDefinitions {
  const contact: Content = {
    text: cv.contact.flatMap((field, i) => [
      ...(i ? [{ text: '   ·   ', color: RULE }] : []),
      field.href ? { text: field.value, link: field.href } : { text: field.value }
    ]),
    font: 'PlexMono',
    fontSize: 8,
    color: GRAPHITE,
    marginTop: 8
  }

  return {
    pageSize: 'A4',
    pageMargins: [40, 44, 40, 48],
    info: { title: cv.meta.title, author: cv.name },
    defaultStyle: { font: 'Archivo', fontSize: 9.5, lineHeight: 1.3, color: INK },
    footer: (page, pages) => ({
      text: `${cv.name}  ·  wanderson37.dev  ·  ${page}/${pages}`,
      font: 'PlexMono',
      fontSize: 7,
      color: GRAPHITE,
      margin: [40, 16, 40, 0]
    }),
    content: [
      { text: cv.name, font: 'ArchivoWide', fontSize: 22, bold: true },
      { text: cv.headline, fontSize: 11, color: GRAPHITE, marginTop: 2 },
      contact,

      ...heading(cv.headings.summary),
      { text: cv.summary },

      ...heading(cv.headings.experience),
      ...cv.experience.flatMap(job),

      ...heading(cv.headings.military),
      ...cv.military.flatMap(job),

      ...heading(cv.headings.skills),
      ...cv.skills.map((s): Content => ({
        text: [{ text: `${s.label}: `, bold: true }, s.value],
        marginBottom: 3
      })),

      ...heading(cv.headings.education),
      ...cv.education.map((e): Content => ({
        columns: [
          { width: '*', text: [{ text: e.degree, bold: true }, { text: ` · ${e.school}`, color: GRAPHITE }] },
          { width: 'auto', text: e.period, font: 'PlexMono', fontSize: 8, color: GRAPHITE }
        ],
        columnGap: 12
      })),

      ...heading(cv.headings.certifications),
      { ul: cv.certifications },

      ...heading(cv.headings.languages),
      { text: cv.languages.join('   ·   ') }
    ]
  }
}

/** Builds the CV as a PDF in the browser and downloads it. */
export async function downloadCvPdf(cv: CvContent) {
  // pdfmake is ~350 KB gzipped: load it only when the PDF is requested.
  const { default: pdfMake } = await import('pdfmake/build/pdfmake.min.js')
  pdfMake.addFonts(cvFonts(`${window.location.origin}/fonts/pdf/`))
  await pdfMake.createPdf(buildCvDoc(cv)).download(cv.fileName)
}
