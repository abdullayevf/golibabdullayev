<script setup>
import { ref, onMounted } from 'vue'

const isTyping = ref(false)
const currentText = ref('')
const fullText = "G'olib Abdullayev"
const typingSpeed = 100
const cursorVisible = ref(true)

const socialLinks = [
  { name: 'github', url: 'https://github.com/abdullayevf', icon: '🐙' },
  { name: 'linkedin', url: 'https://www.linkedin.com/in/abdulllayevv/', icon: '💼' },
  { name: 'telegram', url: 'https://t.me/golibabdullayev', icon: '📱' },
  { name: 'instagram', url: 'https://www.instagram.com/abdullayevf_golib/', icon: '📸' }
]

onMounted(() => {
  // Start typing animation
  let i = 0
  const typeWriter = () => {
    if (i < fullText.length) {
      currentText.value += fullText.charAt(i)
      i++
      setTimeout(typeWriter, typingSpeed)
    } else {
      isTyping.value = false
    }
  }
  
  setTimeout(typeWriter, 1000)
  
  // Cursor blink animation
  setInterval(() => {
    cursorVisible.value = !cursorVisible.value
  }, 500)
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-green-400 font-mono overflow-hidden relative">
    <!-- Subtle background pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0); background-size: 40px 40px;"></div>
    </div>
    
    <!-- Subtle floating elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div v-for="i in 20" :key="i" 
           class="absolute w-0.5 h-0.5 bg-green-400/20 rounded-full"
           :style="{
             left: Math.random() * 100 + '%',
             top: Math.random() * 100 + '%',
             animationDelay: Math.random() * 4 + 's',
             animationDuration: (Math.random() * 3 + 2) + 's'
           }">
      </div>
    </div>

    <!-- Main content -->
    <div class="relative z-10 container mx-auto px-6 py-12">
      <!-- Subtle terminal indicator -->
      <div class="flex items-center space-x-2 mb-12 opacity-60">
        <div class="w-2 h-2 bg-red-500 rounded-full"></div>
        <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
        <div class="w-2 h-2 bg-green-500 rounded-full"></div>
        <span class="ml-3 text-xs text-gray-500">golib@terminal:~$</span>
      </div>

      <!-- Main content area -->
      <div class="grid lg:grid-cols-2 gap-16 items-center min-h-[75vh]">
        <!-- Left side - Profile -->
        <div class="space-y-10">
          <!-- Typing animation -->
          <div class="text-5xl lg:text-7xl font-bold leading-tight">
            <span class="text-green-400">{{ currentText }}</span>
            <span v-if="isTyping || cursorVisible" class="text-green-400 animate-pulse">|</span>
          </div>
          
          <!-- Subtitle -->
          <div class="space-y-2">
            <p class="text-xl lg:text-2xl text-gray-300 font-light">
              <span class="text-green-400">Software Engineer</span>
              <span class="text-gray-500 mx-3">/</span>
              <span class="text-blue-400">Survivor</span>
              <span class="text-gray-500 mx-3">/</span>
              <span class="text-purple-400">Nice guy?</span>
            </p>
          </div>

          <!-- Bio -->
          <div class="space-y-4 text-gray-400 leading-relaxed max-w-lg">
            <p class="text-lg">
              Building digital experiences that matter. 
              <span class="text-green-400 font-medium">Code</span> by day, 
              <span class="text-blue-400 font-medium">dream</span> by night.
            </p>
            <p class="text-base">
              Currently crafting solutions that bridge the gap between 
              <span class="text-purple-400 font-medium">imagination</span> and 
              <span class="text-green-400 font-medium">reality</span>.
            </p>
          </div>

          <!-- CTA Button -->
          <div class="pt-6">
            <button class="group relative px-8 py-4 border border-green-400/50 text-green-400 hover:border-green-400 hover:bg-green-400/10 transition-all duration-300 overflow-hidden rounded-sm">
              <span class="relative z-10 font-medium">Explore My Work</span>
              <div class="absolute inset-0 bg-green-400/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
          </div>
        </div>

        <!-- Right side - Profile Image with effects -->
        <div class="relative flex justify-center lg:justify-end">
          <div class="relative group max-w-sm">
            <!-- Subtle glow effect -->
            <div class="absolute inset-0 bg-green-400/10 rounded-lg blur-xl group-hover:bg-green-400/20 transition-all duration-500"></div>
            
            <!-- Main image container -->
            <div class="relative bg-black border border-green-400/30 p-3 rounded-lg group-hover:border-green-400/50 transition-all duration-300">
              <img
                src="../assets/images/001.png"
                class="w-full h-auto object-cover rounded grayscale group-hover:grayscale-0 transition-all duration-700"
                alt="G'olib Abdullayev"
              />
              
              <!-- Subtle scan line effect -->
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Social links -->
      <div class="mt-20 border-t border-green-400/20 pt-12">
        <div class="flex items-center space-x-2 mb-8">
          <span class="text-green-400 text-sm">$</span>
          <span class="text-gray-500 text-sm">connect --social-links</span>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <a
            v-for="link in socialLinks"
            :key="link.name"
            :href="link.url"
            target="_blank"
            class="group relative p-6 border border-green-400/20 hover:border-green-400/40 transition-all duration-300 overflow-hidden rounded-lg bg-black/20 hover:bg-black/40"
          >
            <div class="absolute inset-0 bg-green-400/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            <div class="relative z-10 text-center space-y-2">
              <div class="text-2xl">{{ link.icon }}</div>
              <span class="text-sm uppercase tracking-wider text-gray-400 group-hover:text-green-400 transition-colors duration-300">
                {{ link.name }}
              </span>
            </div>
            <div class="absolute bottom-0 left-0 w-full h-0.5 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </a>
        </div>
      </div>

      <!-- Footer -->
      <div class="mt-20 text-center text-xs text-gray-600 border-t border-green-400/10 pt-8">
        <div class="flex items-center justify-center space-x-2 mb-2">
          <span class="text-green-400">[</span>
          <span>Built with Vue.js & Tailwind CSS</span>
          <span class="text-green-400">]</span>
        </div>
        <div>
          <span class="text-green-400">©</span> 2024 G'olib Abdullayev. All rights reserved.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap');

.font-mono {
  font-family: 'JetBrains Mono', monospace;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #000;
}

::-webkit-scrollbar-thumb {
  background: #10b981;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #059669;
}

/* Smooth animations */
* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
</style> 