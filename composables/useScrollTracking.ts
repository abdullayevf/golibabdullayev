export const useScrollTracking = (pageType: string = 'page') => {
  const { trackScrollDepth, trackTimeOnPage } = useAnalytics()
  
  let startTime = 0
  let scrollDepthThresholds = [25, 50, 75, 90, 100]
  let trackedThresholds = new Set<number>()
  
  const trackScrollPosition = () => {
    if (!process.client) return
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollPercentage = Math.round((scrollTop / documentHeight) * 100)
    
    // Track scroll depth milestones
    for (const threshold of scrollDepthThresholds) {
      if (scrollPercentage >= threshold && !trackedThresholds.has(threshold)) {
        trackedThresholds.add(threshold)
        trackScrollDepth({
          percentage: threshold,
          page_type: pageType
        })
      }
    }
  }
  
  const startTimeTracking = () => {
    if (!process.client) return
    startTime = Date.now()
  }
  
  const stopTimeTracking = () => {
    if (!process.client || startTime === 0) return
    
    const duration = Math.round((Date.now() - startTime) / 1000) // in seconds
    
    // Only track if user spent at least 10 seconds on page
    if (duration >= 10) {
      trackTimeOnPage({
        duration,
        page_type: pageType
      })
    }
  }
  
  const initializeTracking = () => {
    if (!process.client) return
    
    startTimeTracking()
    
    // Add scroll event listener with throttling
    let scrollTimeout: NodeJS.Timeout
    const throttledScrollHandler = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(trackScrollPosition, 100)
    }
    
    window.addEventListener('scroll', throttledScrollHandler, { passive: true })
    
    // Track time on page when user leaves
    window.addEventListener('beforeunload', stopTimeTracking)
    window.addEventListener('pagehide', stopTimeTracking)
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler)
      window.removeEventListener('beforeunload', stopTimeTracking)
      window.removeEventListener('pagehide', stopTimeTracking)
      stopTimeTracking()
    }
  }
  
  // Reset tracking for new page
  const resetTracking = () => {
    trackedThresholds.clear()
    startTimeTracking()
  }
  
  return {
    initializeTracking,
    resetTracking,
    stopTimeTracking
  }
} 