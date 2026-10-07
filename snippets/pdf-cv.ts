import type { Content, TDocumentDefinitions } from 'pdfmake/interfaces'

type Job = {
  role: string; company: string; period: string; points: string[]
}

// pdfmake is ~350 KB gzipped: load it only when the PDF is requested.
export async function downloadCv(name: string, jobs: Job[]) {
  const { default: pdfMake } = await import('pdfmake/build/pdfmake')
  pdfMake.addFonts({
    Archivo: {
      normal: `${location.origin}/fonts/pdf/Archivo-Regular.ttf`,
      bold: `${location.origin}/fonts/pdf/Archivo-Bold.ttf`
    }
  })

  const job = (j: Job): Content[] => [
    { text: `${j.role} · ${j.company}`, bold: true, marginTop: 12 },
    { text: j.period, color: '#545d68' },
    { ul: j.points, marginTop: 4 }
  ]

  const doc: TDocumentDefinitions = {
    pageSize: 'A4',
    defaultStyle: { font: 'Archivo', fontSize: 10, lineHeight: 1.3 },
    content: [
      { text: name, fontSize: 22, bold: true },
      ...jobs.flatMap(job)
    ]
  }

  await pdfMake.createPdf(doc).download(`${name} CV.pdf`)
}
