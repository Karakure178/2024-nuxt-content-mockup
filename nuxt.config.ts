// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500..700&display=swap",
          crossorigin: "",
        },
      ],
    },
  },
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
  },
  typescript: {
    typeCheck: true
  }
})