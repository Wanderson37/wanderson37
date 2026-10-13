/**
 * Reads the analytics choice once the page is idle, and sends a page_view for
 * each client-side page change (Home ↔ CV, the language switch). The first
 * page_view comes from `config` in useAnalytics.
 *
 * GA's own history tracking fires on pushState, before Nuxt writes the new
 * <title>, so it records the previous page's title. That is why "Page changes
 * based on browser history events" is off in the GA data stream and these are
 * sent here instead, once the new head is in the DOM.
 */
export default defineNuxtPlugin((nuxtApp) => {
  const { enabled, init, track } = useAnalytics()
  if (!enabled) return

  onNuxtReady(init)

  const router = useRouter()
  const head = injectHead()
  let lastPath = router.currentRoute.value.path
  let pending: (() => void) | undefined

  nuxtApp.hook('page:finish', () => {
    const path = router.currentRoute.value.path
    // In-page anchors (/#contact) keep the page; only a new path counts.
    if (path === lastPath) return
    const referrer = location.origin + lastPath
    lastPath = path

    // Nuxt syncs the head on page:finish, but @unhead/vue writes it to the DOM
    // on the next tick: the new <title> is only there on dom:rendered.
    pending?.()
    pending = head.hooks?.hook('dom:rendered', () => {
      pending?.()
      pending = undefined
      track('page_view', { page_location: location.origin + path, page_title: document.title, page_referrer: referrer })
    })
  })
})
