import { Environment, globalSettings } from './environment/settings';

const getEnv = (process.env.NUXT_SITE_ENV || Environment.LOCAL) as Environment;
const getSettings = globalSettings[getEnv];

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icon', '@nuxt/image', '@nuxtjs/seo'],
  runtimeConfig: {
    public: {
      env: process.env.NUXT_SITE_ENV,
      gtmId: getSettings.gtmId,
      gtmEnabled: getSettings.gtmEnabled,
      gtmDebug: getSettings.gtmDebug,
    },
  },
  site: {
    url: 'https://www.jessez.dev',
    name: 'jessez.dev',
    description: 'Front-end developer based in Vermont.',
    defaultLocale: 'en',
    trailingSlash: false,
  },
  robots: {
    sitemap: ['/sitemap.xml'],
  },
  app: {
    head: {
      titleTemplate: '%s %separator %siteName',
    },
  },
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
