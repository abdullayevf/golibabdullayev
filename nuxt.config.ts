// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  nitro: {
    preset: 'vercel'
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'http://localhost:3000'
    }
  }
});
