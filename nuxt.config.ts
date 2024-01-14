// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icon', '@nuxt/image'],
  css: ['~/assets/style/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // Nuxt Image: https://image.nuxt.com/get-started/configuration
  image: {
    format: ['webp'],
  },
});