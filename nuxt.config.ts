// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/content", "@nuxt/image"],
  content: {
    highlight: {
      theme: "monokai", // GitHubライクなテーマに設定
    },
    markdown: {
      tags: {
        p: "Paragraph",
        h2: "H2Headline",
      },
    },
  },
  css: [
    'destyle.css'
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