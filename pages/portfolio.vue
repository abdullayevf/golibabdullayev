<template>
  <div class="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-green-400 font-mono overflow-hidden relative">
    <!-- Subtle background pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0); background-size: 40px 40px;"></div>
    </div>
    
    <!-- Floating particles -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div v-for="i in 15" :key="i" 
           class="absolute w-0.5 h-0.5 bg-green-400/20 rounded-full animate-pulse"
           :style="{
             left: Math.random() * 100 + '%',
             top: Math.random() * 100 + '%',
             animationDelay: Math.random() * 3 + 's',
             animationDuration: (Math.random() * 2 + 1) + 's'
           }">
      </div>
    </div>

    <NavBar />
    
    <div class="container mx-auto px-6 py-16 relative z-10">
      <!-- Terminal window simulation -->
      <div class="max-w-4xl mx-auto">
        <div class="bg-black/80 border border-green-400/30 rounded-lg overflow-hidden">
          <!-- Terminal header -->
          <div class="flex items-center justify-between px-4 py-3 bg-gray-900/50 border-b border-green-400/20">
            <div class="flex items-center space-x-2">
              <div class="w-3 h-3 bg-red-500 rounded-full"></div>
              <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div class="text-gray-400 text-sm">portfolio.exe</div>
          </div>
          
          <!-- Terminal content -->
          <div class="p-8 space-y-6">
            <div class="text-green-400">
              <span class="text-gray-500">golib@portfolio:~$</span> ls -la projects/
            </div>
            
            <div class="text-gray-300 space-y-2">
              <div>drwxr-xr-x  2 golib golib 4096 Dec 2024 .</div>
              <div>drwxr-xr-x  3 golib golib 4096 Dec 2024 ..</div>
              <div class="text-green-400">-rw-r--r--  1 golib golib    0 Dec 2024 amazing_project_1.md</div>
              <div class="text-green-400">-rw-r--r--  1 golib golib    0 Dec 2024 revolutionary_app.md</div>
              <div class="text-green-400">-rw-r--r--  1 golib golib    0 Dec 2024 secret_sauce.md</div>
            </div>
            
            <div class="text-green-400">
              <span class="text-gray-500">golib@portfolio:~$</span> cat coming_soon.txt
            </div>
            
            <div class="bg-gray-900/50 p-6 rounded border border-green-400/20">
              <div class="text-center space-y-4">
                <div class="text-4xl lg:text-6xl font-bold text-green-400 mb-4">
                  PORTFOLIO
                </div>
                <div class="text-2xl text-blue-400 mb-6">
                  [UNDER CONSTRUCTION]
                </div>
                <div class="text-gray-300 space-y-2">
                  <p>🚀 Building something extraordinary...</p>
                  <p>⚡ Compiling dreams into reality</p>
                  <p>🔮 ETA: Soon™</p>
                </div>
                <div class="mt-8">
                  <div class="inline-block px-4 py-2 border border-green-400/50 rounded text-green-400 text-sm">
                    Status: In Development
                  </div>
                </div>
              </div>
            </div>
            
            <div class="text-green-400">
              <span class="text-gray-500">golib@portfolio:~$</span> 
              <span class="animate-pulse">|</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap');

.font-mono {
  font-family: 'JetBrains Mono', monospace;
}
</style> 