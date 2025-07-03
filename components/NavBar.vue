<template>
  <nav class="w-full flex items-center justify-center py-6 mb-8">
    <div class="flex space-x-8 bg-black/60 px-8 py-3 rounded-full border border-green-400/20 shadow-lg">
      <NuxtLink to="/" class="text-green-400 hover:text-green-300 font-mono text-lg transition-colors">Home</NuxtLink>
      <NuxtLink to="/portfolio" class="text-green-400 hover:text-green-300 font-mono text-lg transition-colors">Portfolio</NuxtLink>
      <NuxtLink to="/articles" class="text-green-400 hover:text-green-300 font-mono text-lg transition-colors">Articles</NuxtLink>
      <NuxtLink to="/resume" class="text-green-400 hover:text-green-300 font-mono text-lg transition-colors">Resume</NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
.font-mono {
  font-family: 'JetBrains Mono', monospace;
}
</style> 