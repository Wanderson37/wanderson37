export type Consent = 'granted' | 'denied'

const STORAGE_KEY = 'analytics-consent'

declare global {
  interface Window {
    dataLayer?: unknown[]
  }
}

function gtag(..._args: unknown[]) {
  // gtag.js reads the Arguments object itself, not an array: keep `arguments`.
  window.dataLayer!.push(arguments)
}

/**
 * Google Analytics 4 behind consent. Nothing loads before the visitor accepts:
 * no gtag.js, no cookies, no request to Google. Ads storage and Google signals
 * stay off even then, so only analytics is measured. The choice is read on the
 * client in `init()`, like the theme, since the prerendered HTML can't know it.
 */
export function useAnalytics() {
  const id = useRuntimeConfig().public.gaId
  const consent = useState<Consent | null>('analytics-consent', () => null)
  const ready = useState('analytics-ready', () => false)
  // The footer button reopens the bar to change an earlier answer.
  const asking = useState('analytics-asking', () => false)
  const loaded = useState('analytics-loaded', () => false)

  const enabled = !!id

  function load() {
    if (loaded.value) return
    loaded.value = true
    window.dataLayer = window.dataLayer || []
    gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'granted'
    })
    gtag('js', new Date())
    // Sends the page_view for the page the visitor is on.
    gtag('config', id, { allow_google_signals: false })
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`
    document.head.append(script)
  }

  function init() {
    if (!enabled || ready.value) return
    let saved: string | null = null
    try {
      saved = localStorage.getItem(STORAGE_KEY)
    } catch {
      // Storage blocked: ask again on every page load.
    }
    consent.value = saved === 'granted' || saved === 'denied' ? saved : null
    ready.value = true
    // After hydration and on idle, so the tag never competes with the page itself.
    if (consent.value === 'granted') onNuxtReady(load)
  }

  function choose(value: Consent) {
    consent.value = value
    asking.value = false
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      // Storage blocked: the choice lasts for this page only.
    }
    // Google's documented opt-out flag; lets an earlier "accept" be taken back
    // without reloading the page.
    ;(window as unknown as Record<string, unknown>)[`ga-disable-${id}`] = value === 'denied'
    if (value === 'granted') load()
    else clearCookies()
  }

  /** A GA4 event, sent only when the visitor accepted. */
  function track(name: string, params?: Record<string, unknown>) {
    if (loaded.value && consent.value === 'granted') gtag('event', name, params)
  }

  return { enabled, consent, ready, asking, loaded, init, choose, track }
}

/** Removes the _ga and _ga_<container> cookies gtag.js set on the site's domain. */
function clearCookies() {
  const domain = location.hostname.replace(/^www\./, '')
  for (const entry of document.cookie.split('; ')) {
    const name = entry.split('=')[0] ?? ''
    if (name !== '_ga' && !name.startsWith('_ga_')) continue
    document.cookie = `${name}=; max-age=0; path=/`
    document.cookie = `${name}=; max-age=0; path=/; domain=.${domain}`
  }
}
