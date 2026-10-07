// Generates the favicon PNG/ICO and the two Open Graph images (1200x630).
// Run once after changing public/favicon.svg or the text below:
//   node scripts/brand-images.mjs
// The OG images are rendered by a local Chrome so the web fonts match the site.
// Set CHROME_PATH if Chrome is not in the default macOS location.

import { execFileSync } from 'node:child_process'
import { mkdtempSync, readFileSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import sharp from 'sharp'

const root = new URL('..', import.meta.url).pathname
const pub = (file) => join(root, 'public', file)
const chrome =
  process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

// ---------- Favicon ----------

const faviconSvg = readFileSync(pub('favicon.svg'))
await sharp(faviconSvg, { density: 600 }).resize(180, 180).png().toFile(pub('apple-touch-icon.png'))

// An .ico file may hold a PNG directly: 6-byte header + one 16-byte entry + the PNG.
const png32 = await sharp(faviconSvg, { density: 300 }).resize(32, 32).png().toBuffer()
const header = Buffer.alloc(22)
header.writeUInt16LE(0, 0) // reserved
header.writeUInt16LE(1, 2) // type: icon
header.writeUInt16LE(1, 4) // image count
header.writeUInt8(32, 6) // width
header.writeUInt8(32, 7) // height
header.writeUInt8(0, 8) // palette size
header.writeUInt8(0, 9) // reserved
header.writeUInt16LE(1, 10) // color planes
header.writeUInt16LE(32, 12) // bits per pixel
header.writeUInt32LE(png32.length, 14) // image size
header.writeUInt32LE(22, 18) // image offset
writeFileSync(pub('favicon.ico'), Buffer.concat([header, png32]))

// ---------- Open Graph ----------

const og = {
  en: {
    lang: 'en',
    role: 'Front-End Developer',
    stack: 'Vue.js, Quasar & Nuxt',
    rows: [
      ['Proof', 'Sole front-end developer of a SaaS used in 6 countries'],
      ['Based in', 'Manaus, Brazil (UTC−4)']
    ]
  },
  pt: {
    lang: 'pt-BR',
    role: 'Desenvolvedor Front-End',
    stack: 'Vue.js, Quasar e Nuxt',
    rows: [
      ['Prova', 'Único dev front-end de um SaaS usado em 6 países'],
      ['Base', 'Manaus, Brasil (UTC−4)']
    ]
  }
}

const mark = readFileSync(pub('favicon.svg'), 'utf8')

const page = ({ lang, role, stack, rows }) => `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@100..112,400..700&family=IBM+Plex+Mono:wght@400;500&display=block">
<style>
  * { box-sizing: border-box; margin: 0 }
  html, body { width: 1200px; height: 630px; overflow: hidden }
  body { background: #f5f6f7; color: #14181d; font-family: Archivo, sans-serif; padding: 72px 80px;
         display: flex; flex-direction: column; justify-content: space-between }
  .mark { width: 72px; height: 72px }
  h1 { font-size: 92px; font-weight: 700; font-stretch: 112%; line-height: 1; letter-spacing: -0.01em }
  .role { font-size: 40px; margin-top: 18px }
  .role span { color: #545d68 }
  dl { font-size: 24px }
  dl div { display: grid; grid-template-columns: 170px 1fr; padding: 14px 0; border-top: 2px solid #d3d8de }
  dt { font-family: 'IBM Plex Mono', monospace; color: #545d68 }
  dd { margin: 0 }
</style>
</head>
<body>
  <div class="mark">${mark}</div>
  <div>
    <h1>Wanderson Oliveira</h1>
    <p class="role">${role} <span>· ${stack}</span></p>
  </div>
  <dl>${rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
</body>
</html>`

const tmp = mkdtempSync(join(tmpdir(), 'og-'))
try {
  for (const [code, data] of Object.entries(og)) {
    const html = join(tmp, `${code}.html`)
    const shot = join(tmp, `${code}.png`)
    writeFileSync(html, page(data))
    execFileSync(chrome, [
      '--headless=new',
      '--disable-gpu',
      '--hide-scrollbars',
      '--force-device-scale-factor=1',
      '--virtual-time-budget=5000',
      '--window-size=1200,630',
      `--screenshot=${shot}`,
      `file://${html}`
    ], { stdio: 'ignore' })
    await sharp(shot).resize(1200, 630).png({ palette: true, quality: 90 }).toFile(pub(`og-${code}.png`))
  }
} finally {
  rmSync(tmp, { recursive: true, force: true })
}

console.log('Wrote apple-touch-icon.png, favicon.ico, og-en.png, og-pt.png in public/')
