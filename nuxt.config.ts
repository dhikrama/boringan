// nuxt.config.ts

import { fetchBloggerPosts } from './utils/blogger';
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

    mail: {
      message: {
        to: 'info@boringan.com',
      },
      smtp: {
        service: 'gmail',
        auth: {
          user: 'dhikrama.creator@gmail.com',
          pass: process.env.PASS_GOOGLE_MAIL,
        },
      },
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

  modules: ['@nuxt/image', '@nuxtjs/sitemap', 'nuxt-delay-hydration', '@nuxt/ui', '@nuxtjs/robots', 'nuxt-mail'],
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


  sitemap: {
    excludeAppSources: ['nuxt:pages'], // Menonaktifkan sumber aplikasi otomatis

    // Mendapatkan URL dari API Blogger
    urls: async () => {
      const apiKey = 'AIzaSyA2-Ljqejll0cpOEH0xF3eLd2FrYmmoBLg'; // Gunakan API Key langsung
      const blogId = '3462907902652169422'; // Gunakan Blog ID langsung

      try {
        // Memanggil fungsi fetchBloggerPosts untuk mengambil data dari API Blogger
        const posts = await fetchBloggerPosts(apiKey, blogId);

        // Memastikan data ada dan valid
        if (posts && Array.isArray(posts)) {
          // Membuat URL untuk setiap post
          const postUrls = posts.map((post: { slug: string }) => `/blog/post/${post.slug}`);

          // Menambahkan URL statis lainnya
          const staticUrls = [
            '/about',
            '/contact',
            '/services/pln',
            '/services/fiber-optic',
            '/services/cctv',
          ];

          // Menggabungkan URL dari post dan URL statis
          return [...postUrls, ...staticUrls];
        } else {
          console.error('API response does not contain valid posts');
          return [];
        }
      } catch (error) {
        console.error('Error fetching data from Blogger API:', error);
        return [];
      }
    },
  },


// tag berakhitr

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