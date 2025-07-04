export default defineNuxtPlugin(() => {
  const { trackPageView } = useAnalytics()
  const router = useRouter()
  
  // Track initial page view
  if (process.client) {
    nextTick(() => {
      trackPageView(document.title, window.location.href)
    })
  }
  
  // Track page views on route changes
  router.afterEach((to) => {
    if (process.client) {
      nextTick(() => {
        const pageTitle = to.meta.title as string || document.title || `Page: ${String(to.name || 'unknown')}`
        const pageLocation = window.location.href
        
        trackPageView(pageTitle, pageLocation)
      })
    }
  })
}) 