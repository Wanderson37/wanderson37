import { links } from '~/data/links'

/** Title, description, Open Graph and Twitter card for the current page. */
export function usePageSeo(page: () => { title: string; description: string }) {
  const t = useSiteContent()
  const route = useRoute()

  const url = computed(() => links.site + (route.path === '/' ? '' : route.path.replace(/\/$/, '')))
  const image = computed(() => links.site + t.value.meta.ogImage)

  useSeoMeta({
    title: () => page().title,
    description: () => page().description,
    ogType: 'website',
    ogSiteName: 'Wanderson Oliveira',
    ogUrl: () => url.value,
    ogTitle: () => page().title,
    ogDescription: () => page().description,
    ogImage: () => image.value,
    ogImageType: 'image/png',
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: () => t.value.meta.ogImageAlt,
    twitterCard: 'summary_large_image',
    twitterTitle: () => page().title,
    twitterDescription: () => page().description,
    twitterImage: () => image.value,
    twitterImageAlt: () => t.value.meta.ogImageAlt
  })
}
