export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  

  app: {
    baseURL:"/",
    head: {
      htmlAttrs: {
        lang: 'id', // Mengatur atribut lang ke Indonesia
      },
    },
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

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },

    // plugins: ['~/plugins/canonical.js'],

    modules: ['@nuxt/image', '@nuxtjs/tailwindcss', '@nuxt/icon'],
    image: {
      domains: ['cdn.jsdelivr.net'], // Daftarkan domain gambar yang diizinkan
      provider: 'ipx', // Gunakan provider bawaan
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