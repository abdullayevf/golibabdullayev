export default defineNuxtPlugin((nuxtApp) => {
  const { trackError } = useAnalytics()
  
  if (process.client) {
    // Track JavaScript errors
    window.addEventListener('error', (event) => {
      trackError(
        'javascript_error',
        event.message,
        window.location.href
      )
    })
    
    // Track unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      trackError(
        'unhandled_promise_rejection',
        event.reason?.toString() || 'Unknown promise rejection',
        window.location.href
      )
    })
    
    // Track Vue errors
    nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
      trackError(
        'vue_error',
        error?.toString() || 'Unknown Vue error',
        window.location.href
      )
      
      // Don't suppress the error, let it continue to console
      console.error('Vue Error:', error, info)
    }
  }
}) 