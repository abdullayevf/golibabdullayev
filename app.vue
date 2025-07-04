<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
    
    <!-- Page content -->
    <NuxtPage />
    
    <!-- Analytics test banner for development -->
    <div v-if="isDev" class="fixed bottom-4 right-4 bg-surface p-4 rounded-lg border border-primary z-50">
      <p class="text-sm text-primary font-mono">📊 Analytics Active</p>
      <p class="text-xs text-text-secondary">Check console for events</p>
    </div>
  </div>
</template>

<script setup>
// Page metadata
useHead({
  title: 'Golib Abdullayev - Frontend Developer',
  meta: [
    { name: 'description', content: 'Frontend Developer with 3+ years of experience in Vue.js, Nuxt.js, and modern web technologies.' }
  ]
})

// Development check
const isDev = process.dev

// Initialize scroll tracking
let cleanupScrollTracking = null

onMounted(() => {
  if (process.client) {
    const { initializeTracking } = useScrollTracking('home')
    cleanupScrollTracking = initializeTracking()
  }
})

onUnmounted(() => {
  if (cleanupScrollTracking) {
    cleanupScrollTracking()
  }
})
</script>
