// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: '2024-11-01',
//   devtools: { enabled: true },
//   ssr: true, // other configurations 
// })

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

  // nitro:{
  //   preset: 'static'
  // },

  // other configurations 
  ssr: true,

  css: ['@/assets/css/tailwind.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

    // plugins: ['~/plugins/canonical.js'],

    modules: ['@nuxt/image'],
    image: {
      domains: ['cdn.jsdelivr.net'], // Daftarkan domain gambar yang diizinkan
      provider: 'ipx', // Gunakan provider bawaan
    },
  
})