// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/supabase',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@nuxtjs/device'
  ],
  
  // Google Fonts configuration
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
      'JetBrains Mono': [400, 500]
    },
    display: 'swap'
  },

  // Tailwind CSS configuration
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js'
  },

  // Supabase configuration
  supabase: {
    redirectOptions: {
      login: '/',
      callback: '/',
      exclude: ['/*']
    }
  },

  // Runtime configuration
  runtimeConfig: {
    // Private keys (only available on server-side)
    notionApiKey: process.env.NOTION_API_KEY,
    notionBlogDbId: process.env.NOTION_BLOG_DB_ID,
    notionContactDbId: process.env.NOTION_CONTACT_DB_ID,
    
    // Public keys (exposed to client-side)
    public: {
      googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
      vercelAnalyticsId: process.env.VERCEL_ANALYTICS_ID,
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
      siteUrl: process.env.SITE_URL || 'http://localhost:3000'
    }
  },

  // CSS configuration
  css: ['~/assets/css/main.css'],

  // App configuration
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Golib Abdullayev - Frontend Developer',
      meta: [
        { name: 'description', content: 'Frontend Developer with 3+ years of experience in Vue.js, Nuxt.js, and modern web technologies.' },
        { name: 'keywords', content: 'Frontend Developer, Vue.js, Nuxt.js, JavaScript, Web Development, Uzbekistan' },
        { name: 'author', content: 'Golib Abdullayev' },
        { property: 'og:title', content: 'Golib Abdullayev - Frontend Developer' },
        { property: 'og:description', content: 'Frontend Developer with 3+ years of experience in Vue.js, Nuxt.js, and modern web technologies.' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@golibabdullayev' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  // Nitro configuration for deployment
  nitro: {
    preset: 'vercel-edge'
  }
})
