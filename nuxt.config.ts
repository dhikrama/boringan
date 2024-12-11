// nuxt.config.ts

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  routeRules: {
    '/': { prerender: true },
    '/blog': { isr: 3600 },
    '/blog/**': { isr: true },
  },

  vite: {
    build: {
      terserOptions: {
        compress: true,
        mangle: true
      }
    }
  },

  app: {
    baseURL: "/",
    head: {
      htmlAttrs: {
        lang: 'id', // Mengatur atribut lang ke Indonesia
      },
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  runtimeConfig: {
    public: {
      BLOGGER_API_KEY: process.env.BLOGGER_API_KEY,
      BLOGGER_BLOG_ID: process.env.BLOGGER_BLOG_ID,
    },
  },

  ssr: true,

  css: ['@/assets/css/tailwind.css'],
  build: {
    transpile: ['@headlessui/vue'],
  },

  tailwindcss: {
    viewer: true, // Untuk melihat hasil konfigurasi Tailwind di browser
  },

  modules: ['@nuxt/image', '@nuxtjs/sitemap', 'nuxt-delay-hydration', '@nuxt/ui', '@nuxtjs/robots'],
  image: {
    domains: ['cdn.jsdelivr.net'],
  },

  robots:{
    allow:'/'
  },
  // gtag:{
  //   id:"AW-16813484049"
  // },

  // debug:true,

  // delayHydration: {
  //   mode: 'mount',
  //   // enables nuxt-delay-hydration in dev mode for testing
  //   // NOTE: you should disable this once you've finished testing, it will break HMR
  //   // debug: process.env.NODE_ENV === 'development'
  // },

  icon: {
    serverBundle: {
      collections: ['uil'],
    }
  },

  site: {
    url: 'http://www.boringan.com/',
    name: 'Raja Boringan sitemap',
  },
});