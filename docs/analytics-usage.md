# Analytics Usage Guide

## Overview

The analytics system provides comprehensive tracking for user interactions, page views, and custom events using Google Analytics 4 and Vercel Analytics.

## Basic Usage

### Import the Analytics Composable

```vue
<script setup>
const { trackEvent, trackProjectView, trackBlogSearch } = useAnalytics()
</script>
```

### Track Custom Events

```vue
<template>
  <button @click="handleCTAClick">View Projects</button>
</template>

<script setup>
const { trackHeroCTAClick } = useAnalytics()

const handleCTAClick = () => {
  trackHeroCTAClick('View Projects', '/projects')
}
</script>
```

## Event Categories

### Blog Events
- `trackBlogPostRead()` - Track when user reads a blog post
- `trackBlogSearch()` - Track blog search queries
- `trackHashtagClick()` - Track hashtag interactions
- `trackLikePost()` - Track blog post likes
- `trackReadingProgress()` - Track reading progress percentage

### Project Events
- `trackProjectView()` - Track project page views
- `trackExternalLinkClick()` - Track external link clicks

### Contact Events
- `trackContactFormSubmit()` - Track form submissions
- `trackContactFormAbandon()` - Track form abandonment

### User Interaction Events
- `trackHeroCTAClick()` - Track hero section CTA clicks
- `trackSkillsInteraction()` - Track skills section interactions
- `trackTimelineInteraction()` - Track experience timeline interactions

## Automatic Tracking

### Page Views
- Automatically tracked on route changes
- Includes page title and URL
- Privacy-friendly (IP anonymized)

### Scroll Depth
- Automatically tracks scroll milestones: 25%, 50%, 75%, 90%, 100%
- Use `useScrollTracking('page-type')` for custom page types

### Time on Page
- Automatically measured with 10-second minimum
- Tracked when user leaves the page

### Error Tracking
- JavaScript errors automatically tracked
- Vue component errors tracked
- Unhandled promise rejections tracked

## Development Mode

In development, all events are logged to console:
```
📊 Analytics Event: blog_post_read { post_title: "My Article", reading_time: 5 }
```

## Privacy & GDPR

- IP addresses are anonymized
- Google Signals disabled
- Ad personalization disabled
- No personal data collection

## Testing Analytics

1. Open browser console
2. Navigate pages and interact with elements
3. Check console for event logs (dev mode only)
4. Verify in Google Analytics Real-Time reports

## Environment Variables

Required environment variables:
```bash
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

Vercel Analytics is automatically configured on Vercel deployment. 