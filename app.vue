<script></script>
<template>
  <div
    class="pop overflow-hidden gradient select-none relative bg-gradient-to-tr from-[#313138] to-[#010011] font-serif text-white flex items-center justify-center w-full min-h-screen"
  >
    <div class="flex md:flex-row space-x-6 flex-col items-center space-y-6">
      <div
        class="w-60 hover:scale-[1.01] hover:border-orange-400 transition-all rounded-full overflow-hidden border-slate-400 border-2 cursor-pointer"
      >
        <img
          src="./assets/images/001.jpg"
          class="w-full h-full"
          alt="G'olib Abdullayev"
        />
      </div>
      <div class="flex flex-col items-center space-y-2">
        <h1 class="text-3xl font-medium">
          G'olib Abdullayev<span class="text-blue-400">.</span>
        </h1>
        <div>
          <p class="text-lg font-light tracking-normal">
            - Frontend dasturchi -
          </p>
        </div>
      </div>
    </div>

    <div class="absolute font-normal bottom-20">
      <ul class="flex flex-wrap items-center justify-center">
        <li>
          <a
            class="transition-all hover:text-pink-300 hover:border-pink-300 border border-transparent px-2 py-1 tracking-wide"
            target="_blank"
            href="https://www.instagram.com/abdullayevf_golib/"
            >instagram</a
          ><span class="text-blue-400">/</span>
        </li>
        <li>
          <a
            class="transition-all hover:text-blue-400 hover:border-blue-400 border border-transparent px-2 py-1 tracking-wide"
            target="_blank"
            href="https://t.me/golibabdullayev"
            >telegram</a
          ><span class="text-blue-400">/</span>
        </li>
        <li>
          <a
            class="transition-all hover:text-blue-500 hover:border-blue-500 border border-transparent px-2 py-1 tracking-wide"
            target="_blank"
            href="https://www.linkedin.com/in/abdulllayevv/"
            >linkedin</a
          ><span class="text-blue-400">/</span>
        </li>
        <li>
          <a
            class="transition-all hover:text-violet-600 hover:border-violet-600 border border-transparent px-2 py-1 tracking-wide"
            target="_blank"
            href="https://github.com/abdullayevf"
            >github</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

.pop {
  font-family: "Poppins", sans-serif;
}

.gradient {
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
