export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

/**
 * The <meta name="theme-color"> pair: Paper of each theme, since meta tags can't
 * read CSS variables. `fixed` overrides the system (a pick, or a locked page).
 * No `key`: unhead then matches these to the prerendered tags on hydration
 * instead of adding a second pair.
 */
export function themeColorMeta(fixed: Theme | null) {
  const light = '#f5f6f7'
  const dark = '#14181d'
  return [
    { name: 'theme-color', media: '(prefers-color-scheme: light)', content: fixed === 'dark' ? dark : light },
    { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: fixed === 'light' ? light : dark }
  ]
}

/**
 * Light/dark theme. `picked` is the visitor's choice from the header button;
 * null means "follow the system". The server can't know either, so the state
 * is read on the client in `init()`, after the inline script in nuxt.config
 * has already applied a saved choice to <html data-theme>.
 */
export function useTheme() {
  const picked = useState<Theme | null>('theme-picked', () => null)
  const systemDark = useState('theme-system-dark', () => false)
  const ready = useState('theme-ready', () => false)

  const isDark = computed(() => (picked.value ?? (systemDark.value ? 'dark' : 'light')) === 'dark')

  function init() {
    if (ready.value) return
    const attr = document.documentElement.getAttribute('data-theme')
    picked.value = attr === 'light' || attr === 'dark' ? attr : null
    const query = matchMedia('(prefers-color-scheme: dark)')
    systemDark.value = query.matches
    query.addEventListener('change', (event) => (systemDark.value = event.matches))
    ready.value = true
  }

  function toggle() {
    const next: Theme = isDark.value ? 'light' : 'dark'
    // Picking what the system already shows goes back to following the system.
    picked.value = next === (systemDark.value ? 'dark' : 'light') ? null : next

    const root = document.documentElement
    if (picked.value) root.setAttribute('data-theme', picked.value)
    else root.removeAttribute('data-theme')
    try {
      if (picked.value) localStorage.setItem(STORAGE_KEY, picked.value)
      else localStorage.removeItem(STORAGE_KEY)
    } catch {
      // Storage blocked (private mode, site data off): the choice lasts for this page only.
    }
  }

  return { picked, isDark, ready, init, toggle }
}
