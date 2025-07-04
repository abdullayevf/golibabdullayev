interface AnalyticsEvent {
  event_name: string
  [key: string]: any
}

interface BlogEvent {
  post_title: string
  reading_time?: number
  completion_rate?: number
}

interface ProjectEvent {
  project_name: string
  source_page: string
}

interface ContactEvent {
  form_type: string
  submission_source: string
}

interface SearchEvent {
  search_term: string
  results_count: number
}

interface HashtagEvent {
  tag_name: string
  page_source: string
}

interface ScrollEvent {
  percentage: number
  page_type: string
}

interface TimeEvent {
  duration: number
  page_type: string
}

export const useAnalytics = () => {
  const config = useRuntimeConfig()
  
  const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
    if (process.client) {
      // Google Analytics 4 tracking
      if (window.gtag && config.public.googleAnalyticsId) {
        window.gtag('event', eventName, {
          ...parameters,
          timestamp: Date.now()
        })
      }
      
      // Console log for development
      if (process.dev) {
        console.log(`📊 Analytics Event: ${eventName}`, parameters)
      }
    }
  }

  // Page view tracking
  const trackPageView = (page_title: string, page_location?: string) => {
    trackEvent('page_view', {
      page_title,
      page_location: page_location || (process.client ? window.location.href : ''),
      page_referrer: process.client ? document.referrer : ''
    })
  }

  // Blog post events
  const trackBlogPostRead = (data: BlogEvent) => {
    trackEvent('blog_post_read', {
      post_title: data.post_title,
      reading_time: data.reading_time,
      completion_rate: data.completion_rate
    })
  }

  const trackBlogSearch = (data: SearchEvent) => {
    trackEvent('blog_search', {
      search_term: data.search_term,
      results_count: data.results_count
    })
  }

  const trackHashtagClick = (data: HashtagEvent) => {
    trackEvent('hashtag_click', {
      tag_name: data.tag_name,
      page_source: data.page_source
    })
  }

  const trackLikePost = (post_title: string, user_session?: string) => {
    trackEvent('like_post', {
      post_title,
      user_session: user_session || 'anonymous'
    })
  }

  // Project/Portfolio events
  const trackProjectView = (data: ProjectEvent) => {
    trackEvent('project_view', {
      project_name: data.project_name,
      source_page: data.source_page
    })
  }

  const trackExternalLinkClick = (link_url: string, link_text: string, source_page: string) => {
    trackEvent('external_link_click', {
      link_url,
      link_text,
      source_page
    })
  }

  // Contact form events
  const trackContactFormSubmit = (data: ContactEvent) => {
    trackEvent('contact_form_submit', {
      form_type: data.form_type,
      submission_source: data.submission_source
    })
  }

  const trackContactFormAbandon = (form_type: string, fields_filled: number) => {
    trackEvent('contact_form_abandon', {
      form_type,
      fields_filled
    })
  }

  // Engagement tracking
  const trackScrollDepth = (data: ScrollEvent) => {
    trackEvent('scroll_depth', {
      percentage: data.percentage,
      page_type: data.page_type
    })
  }

  const trackTimeOnPage = (data: TimeEvent) => {
    trackEvent('time_on_page', {
      duration: data.duration,
      page_type: data.page_type
    })
  }

  // Hero CTA clicks
  const trackHeroCTAClick = (cta_text: string, destination: string) => {
    trackEvent('hero_cta_click', {
      cta_text,
      destination
    })
  }

  // Skills interaction
  const trackSkillsInteraction = (skill_name: string, interaction_type: string) => {
    trackEvent('skills_interaction', {
      skill_name,
      interaction_type
    })
  }

  // Timeline interaction
  const trackTimelineInteraction = (company: string, interaction_type: string) => {
    trackEvent('timeline_interaction', {
      company,
      interaction_type
    })
  }

  // Share events
  const trackShareClick = (content_type: string, content_title: string, platform: string) => {
    trackEvent('share_click', {
      content_type,
      content_title,
      platform
    })
  }

  // Reading progress for blog posts
  const trackReadingProgress = (post_title: string, progress_percentage: number) => {
    trackEvent('reading_progress', {
      post_title,
      progress_percentage
    })
  }

  // Error tracking
  const trackError = (error_type: string, error_message: string, page_location: string) => {
    trackEvent('error_occurred', {
      error_type,
      error_message,
      page_location
    })
  }

  // Custom conversion events
  const trackConversion = (conversion_type: string, value?: number, currency?: string) => {
    trackEvent('conversion', {
      conversion_type,
      value,
      currency: currency || 'USD'
    })
  }

  return {
    // Core tracking
    trackEvent,
    trackPageView,
    
    // Blog events
    trackBlogPostRead,
    trackBlogSearch,
    trackHashtagClick,
    trackLikePost,
    trackReadingProgress,
    trackShareClick,
    
    // Project events
    trackProjectView,
    trackExternalLinkClick,
    
    // Contact events
    trackContactFormSubmit,
    trackContactFormAbandon,
    
    // Engagement events
    trackScrollDepth,
    trackTimeOnPage,
    trackHeroCTAClick,
    trackSkillsInteraction,
    trackTimelineInteraction,
    
    // Utility events
    trackError,
    trackConversion
  }
} 