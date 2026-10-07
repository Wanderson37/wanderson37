import en from '~/data/en'
import pt from '~/data/pt'
import type { SiteContent } from '~/data/types'

const content: Record<string, SiteContent> = { en, pt }

/** All copy for the active locale. */
export function useSiteContent() {
  const { locale } = useI18n()
  return computed(() => content[locale.value] ?? en)
}
