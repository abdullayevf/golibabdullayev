import { inject } from '@vercel/analytics'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  
  // Initialize Vercel Analytics
  inject()
  
  // Initialize Google Analytics 4
  if (config.public.googleAnalyticsId && process.client) {
    // Load gtag script
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${config.public.googleAnalyticsId}`
    document.head.appendChild(script)
    
    // Initialize gtag
    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer.push(arguments)
    }
    
    gtag('js', new Date())
    gtag('config', config.public.googleAnalyticsId, {
      // Privacy-friendly settings
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      page_title: document.title,
      page_location: window.location.href
    })
    
    // Make gtag globally available
    window.gtag = gtag
  }
}) 