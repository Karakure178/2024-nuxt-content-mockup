// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/content",
  ],
  vite:{
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/configs/index.scss" as *;`,
        },
      },
    },
  }
})