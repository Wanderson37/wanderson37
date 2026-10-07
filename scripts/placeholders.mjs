// Writes placeholder images that show their own final file name, so it is obvious
// which print goes where. Replace each file with the real screenshot (same name,
// same aspect ratio) and delete it from this list.
//   node scripts/placeholders.mjs

import { mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import sharp from 'sharp'

const root = new URL('..', import.meta.url).pathname

const placeholders = [{ file: 'images/myabseil-reports.png', width: 1600, height: 1000 }]

for (const { file, width, height } of placeholders) {
  const label = `/${file}`
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    <defs>
      <pattern id="h" width="28" height="28" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <rect width="28" height="28" fill="#f5f6f7"/><rect width="2" height="28" fill="#d3d8de"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#h)"/>
    <rect x="1" y="1" width="${width - 2}" height="${height - 2}" fill="none" stroke="#d3d8de" stroke-width="2"/>
    <rect x="${width / 2 - 420}" y="${height / 2 - 70}" width="840" height="140" fill="#f5f6f7"/>
    <text x="50%" y="${height / 2 - 6}" text-anchor="middle" font-family="Menlo, monospace" font-size="40" fill="#14181d">${label}</text>
    <text x="50%" y="${height / 2 + 44}" text-anchor="middle" font-family="Menlo, monospace" font-size="26" fill="#545d68">placeholder ${width}×${height}</text>
  </svg>`
  const out = join(root, 'public', file)
  mkdirSync(dirname(out), { recursive: true })
  await sharp(Buffer.from(svg)).png().toFile(out)
  console.log('wrote', out)
}
