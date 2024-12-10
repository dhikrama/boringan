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
  },

  ssr: true,

  css: ['@/assets/css/tailwind.css'],
  build: {
    transpile: ['@headlessui/vue'],
  },

  tailwindcss: {
    viewer: true, // Untuk melihat hasil konfigurasi Tailwind di browser
  },

  modules: ['@nuxt/image', '@nuxtjs/sitemap', 'nuxt-delay-hydration', '@nuxt/ui',],
  image: {
    domains: ['cdn.jsdelivr.net'],
  },

  // gtag:{
  //   id:"AW-16813484049"
  // },

  debug:true,

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

  // Mendapatkan URL dari API Blogger
  sitemap: {
    excludeAppSources: ['nuxt:pages'], // Menonaktifkan sumber aplikasi otomatis

    // Mendapatkan URL dari API Blogger
    urls: async () => {
      const apiKey = 'AIzaSyBBZgX-E9yG-jCFmWoU8c8rz4iFTsHWS74'; // Gunakan API Key langsung
      const blogId = '9014814389136398054'; // Gunakan Blog ID langsung

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
});