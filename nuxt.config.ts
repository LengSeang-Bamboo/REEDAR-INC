import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css'
  ],
  devServer: {
    port: 4000,
  },
  modules: [
    '@nuxt/ui'
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    optimizeDeps: {
      include: ['@nuxt/ui']
    },
    ssr: {
      noExternal: ['@nuxt/ui']
    }
  },
  build: {
    transpile: ['@nuxt/ui']
  }
});
