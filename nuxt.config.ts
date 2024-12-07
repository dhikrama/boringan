export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
routeRules:{
  '/': {prerender:true},
  '/blog': { isr: 3600 },
    // Blog post page generated on demand once until next deployment, cached on CDN
    '/blog/**': { isr: true },
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

  // nitro:{
  //   preset: 'static'
  // },

  // other configurations 
  ssr: true,

  css: ['@/assets/css/tailwind.css'],
  build: {
    transpile: ['@headlessui/vue'],
  },
  tailwindcss: {
    // Konfigurasi opsional
    viewer: true, // Untuk melihat hasil konfigurasi Tailwind di browser
  },

  // plugins: ['~/plugins/canonical.js'],

  modules: ['@nuxt/image', '@nuxtjs/tailwindcss', '@nuxt/icon'],
  image: {
    domains: ['cdn.jsdelivr.net'], // Daftarkan domain gambar yang diizinkan
    provider: 'ipx', // Gunakan provider bawaan
  },

  icon: {
    serverBundle: {
      collections: ['uil'] // <!--- this
    }
  },

  experimental: {
    payloadExtraction: false
  },
  router: {
    options: {
      strict: false
    }
  },
  

})