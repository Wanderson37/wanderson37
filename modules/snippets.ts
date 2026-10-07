import { readFile } from 'node:fs/promises'
import { addTemplate, addTypeTemplate, defineNuxtModule, updateTemplates } from '@nuxt/kit'
import { createHighlighter } from 'shiki'
import { createCssVariablesTheme } from 'shiki/core'

// Highlights the code samples of "How I work" during the build. The browser gets
// plain HTML with CSS variables for the colors, never a highlighting library.
const snippets = {
  offlineSync: { file: 'snippets/offline-sync.ts', lang: 'ts' },
  pdfCv: { file: 'snippets/pdf-cv.ts', lang: 'ts' },
  statusBadge: { file: 'app/components/StatusBadge.vue', lang: 'vue' },
  statusBadgeUsage: { file: 'snippets/status-badge-usage.html', lang: 'vue-html' }
} as const

export default defineNuxtModule({
  meta: { name: 'snippets' },
  async setup(_options, nuxt) {
    const theme = createCssVariablesTheme({ name: 'site', variablePrefix: '--code-', fontStyle: false })
    const highlighter = await createHighlighter({ themes: [theme], langs: ['ts', 'vue', 'vue-html'] })
    const files = Object.values(snippets).map((s) => `${nuxt.options.rootDir}/${s.file}`)

    const template = addTemplate({
      filename: 'snippets.mjs',
      write: true,
      async getContents() {
        const html: Record<string, string> = {}
        for (const [key, { file, lang }] of Object.entries(snippets)) {
          const code = await readFile(`${nuxt.options.rootDir}/${file}`, 'utf8')
          html[key] = highlighter.codeToHtml(code.trimEnd(), { lang, theme: 'site' })
        }
        return `export default ${JSON.stringify(html)}`
      }
    })

    nuxt.options.alias['#snippets'] = template.dst

    addTypeTemplate({
      filename: 'types/snippets.d.ts',
      getContents: () =>
        `declare module '#snippets' {\n  const html: Record<${Object.keys(snippets)
          .map((k) => `'${k}'`)
          .join(' | ')}, string>\n  export default html\n}\n`
    })

    // Re-highlight in `nuxt dev` when a sample changes.
    nuxt.hook('builder:watch', async (_event, path) => {
      if (files.some((file) => file.endsWith(path))) {
        await updateTemplates({ filter: (t) => t.filename === 'snippets.mjs' })
      }
    })
  }
})
