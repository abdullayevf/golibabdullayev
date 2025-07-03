<template>
  <div class="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-green-400 font-mono overflow-hidden relative">
    <!-- Subtle background pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0); background-size: 40px 40px;"></div>
    </div>
    
    <!-- Matrix-style falling code -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div v-for="i in 10" :key="i" 
           class="absolute text-green-400/20 text-xs animate-pulse font-mono"
           :style="{
             left: Math.random() * 100 + '%',
             top: Math.random() * 100 + '%',
             animationDelay: Math.random() * 5 + 's',
             animationDuration: (Math.random() * 3 + 2) + 's'
           }">
        {{ ['console.log()', 'function()', 'const blog =', 'return ideas', 'async/await'][Math.floor(Math.random() * 5)] }}
      </div>
    </div>

    <NavBar />
    
    <div class="container mx-auto px-6 py-16 relative z-10">
      <div class="max-w-4xl mx-auto">
        <!-- Code editor simulation -->
        <div class="bg-black/80 border border-green-400/30 rounded-lg overflow-hidden">
          <!-- Editor header -->
          <div class="flex items-center justify-between px-4 py-3 bg-gray-900/50 border-b border-green-400/20">
            <div class="flex items-center space-x-4">
              <div class="flex space-x-2">
                <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div class="text-gray-400 text-sm">articles.js</div>
            </div>
            <div class="text-gray-500 text-xs">UTF-8 • JavaScript</div>
          </div>
          
          <!-- Line numbers and code -->
          <div class="flex">
            <div class="bg-gray-900/30 px-4 py-6 text-gray-600 text-sm select-none">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>10</div>
              <div>11</div>
              <div>12</div>
              <div>13</div>
              <div>14</div>
              <div>15</div>
            </div>
            
            <div class="flex-1 p-6 space-y-1 text-sm">
              <div><span class="text-purple-400">const</span> <span class="text-blue-400">articles</span> <span class="text-white">=</span> <span class="text-yellow-400">{</span></div>
              <div class="ml-4"><span class="text-green-300">status</span><span class="text-white">:</span> <span class="text-red-400">"coming_soon"</span><span class="text-white">,</span></div>
              <div class="ml-4"><span class="text-green-300">author</span><span class="text-white">:</span> <span class="text-red-400">"G'olib Abdullayev"</span><span class="text-white">,</span></div>
              <div class="ml-4"><span class="text-green-300">topics</span><span class="text-white">:</span> <span class="text-yellow-400">[</span></div>
              <div class="ml-8"><span class="text-red-400">"Web Development"</span><span class="text-white">,</span></div>
              <div class="ml-8"><span class="text-red-400">"JavaScript Magic"</span><span class="text-white">,</span></div>
              <div class="ml-8"><span class="text-red-400">"Life as a Developer"</span><span class="text-white">,</span></div>
              <div class="ml-8"><span class="text-red-400">"Tech Philosophy"</span></div>
              <div class="ml-4"><span class="text-yellow-400">]</span><span class="text-white">,</span></div>
              <div class="ml-4"><span class="text-green-300">message</span><span class="text-white">:</span> <span class="text-red-400">"Currently brewing some amazing content..."</span><span class="text-white">,</span></div>
              <div class="ml-4"><span class="text-green-300">eta</span><span class="text-white">:</span> <span class="text-red-400">"Soon™"</span></div>
              <div><span class="text-yellow-400">}</span></div>
              <div></div>
              <div><span class="text-gray-500">// TODO: Write mind-blowing articles</span></div>
              <div><span class="text-purple-400">console</span><span class="text-white">.</span><span class="text-blue-400">log</span><span class="text-white">(</span><span class="text-red-400">"Stay tuned! 🚀"</span><span class="text-white">)</span></div>
            </div>
          </div>
          
          <!-- Status bar -->
          <div class="bg-gray-900/50 px-4 py-2 border-t border-green-400/20 flex justify-between text-xs text-gray-400">
            <div>📝 Writing mode: ON</div>
            <div>Ideas: ∞ | Words: Loading...</div>
          </div>
        </div>
        
        <!-- Coming soon message -->
        <div class="mt-8 text-center">
          <div class="text-6xl mb-4">📚</div>
          <div class="text-2xl text-green-400 mb-2">Articles & Insights</div>
          <div class="text-gray-400">Where code meets creativity</div>
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