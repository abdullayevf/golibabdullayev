<template>
  <div class="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-green-400 font-mono overflow-hidden relative">
    <!-- Subtle background pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0); background-size: 40px 40px;"></div>
    </div>
    
    <!-- Floating skill badges -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div v-for="(skill, i) in skills" :key="i" 
           class="absolute text-green-400/20 text-xs px-2 py-1 border border-green-400/20 rounded animate-pulse"
           :style="{
             left: Math.random() * 100 + '%',
             top: Math.random() * 100 + '%',
             animationDelay: Math.random() * 4 + 's',
             animationDuration: (Math.random() * 3 + 2) + 's'
           }">
        {{ skill }}
      </div>
    </div>

    <NavBar />
    
    <div class="container mx-auto px-6 py-16 relative z-10">
      <div class="max-w-4xl mx-auto">
        <!-- System info display -->
        <div class="bg-black/80 border border-green-400/30 rounded-lg overflow-hidden">
          <!-- Terminal header -->
          <div class="flex items-center justify-between px-4 py-3 bg-gray-900/50 border-b border-green-400/20">
            <div class="flex items-center space-x-2">
              <div class="w-3 h-3 bg-red-500 rounded-full"></div>
              <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div class="text-gray-400 text-sm">system-info.sh</div>
          </div>
          
          <!-- System output -->
          <div class="p-8 space-y-4">
            <div class="text-green-400">
              <span class="text-gray-500">root@golib:~#</span> whoami
            </div>
            <div class="text-white ml-4">G'olib Abdullayev - Software Engineer</div>
            
            <div class="text-green-400">
              <span class="text-gray-500">root@golib:~#</span> cat /proc/skills
            </div>
            <div class="ml-4 grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
              <div class="text-blue-400">Vue.js ████████░░ 80%</div>
              <div class="text-purple-400">Nuxt.js ███████░░░ 70%</div>
              <div class="text-yellow-400">JavaScript ████████░░ 85%</div>
              <div class="text-red-400">Node.js ██████░░░░ 60%</div>
              <div class="text-green-400">CSS/Tailwind ████████░░ 80%</div>
              <div class="text-cyan-400">Git ███████░░░ 75%</div>
            </div>
            
            <div class="text-green-400">
              <span class="text-gray-500">root@golib:~#</span> systemctl status resume.service
            </div>
            <div class="ml-4 bg-gray-900/50 p-4 rounded border border-green-400/20">
              <div class="text-center space-y-4">
                <div class="text-3xl">📄</div>
                <div class="text-yellow-400 text-xl">resume.service</div>
                <div class="text-red-400">● Status: Under Development</div>
                <div class="text-gray-300 space-y-2 text-sm">
                  <div>🔄 Active: preparing (start-pending)</div>
                  <div>📅 Since: December 2024</div>
                  <div>🎯 Process: Crafting the perfect CV</div>
                  <div>⚡ Memory: Loading career highlights...</div>
                </div>
                <div class="pt-4">
                  <div class="inline-block px-4 py-2 border border-yellow-400/50 rounded text-yellow-400 text-sm">
                    Service will be available soon
                  </div>
                </div>
              </div>
            </div>
            
            <div class="text-green-400">
              <span class="text-gray-500">root@golib:~#</span> echo "Coming soon with style!"
            </div>
            <div class="text-white ml-4">Coming soon with style!</div>
            
            <div class="text-green-400">
              <span class="text-gray-500">root@golib:~#</span> 
              <span class="animate-pulse">█</span>
            </div>
          </div>
        </div>
        
        <!-- Quick contact info -->
        <div class="mt-8 text-center text-gray-400">
          <div class="text-lg mb-2">Meanwhile, feel free to connect!</div>
          <div class="text-sm">
            Professional inquiries: <span class="text-green-400">contact@golib.dev</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'

const skills = [
  'Vue.js', 'Nuxt.js', 'JavaScript', 'TypeScript', 'Node.js', 
  'CSS', 'Tailwind', 'Git', 'Docker', 'MongoDB', 'PostgreSQL'
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap');

.font-mono {
  font-family: 'JetBrains Mono', monospace;
}
</style> 