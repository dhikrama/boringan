<template>
    <div class="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <!-- Konten Utama -->
      <div class="lg:col-span-3">
        <!-- Indikator Loading -->
        <div v-if="loading" class="flex justify-center items-center h-96 text-center">
          <div class="animate-spin rounded-full border-t-4 border-blue-500 w-16 h-16 border-solid"></div>
          <p class="mt-4 text-lg text-gray-600">Memuat data postingan...</p>
        </div>
  
        <!-- Post Detail -->
        <div v-else-if="post">
          <h1 class="text-4xl font-bold text-gray-800 mb-4">{{ post.title }}</h1>
          <p class="text-gray-600 text-sm mb-6">
            Published on {{ new Date(post.published).toLocaleDateString() }}
          </p>
          <!-- Render HTML Content -->
          <div v-html="post.content" class="prose lg:prose-xl mb-6"></div>
        </div>
        <div v-else>
          <p>Post not found</p>
        </div>
      </div>
  
      <!-- Sidebar -->
      <div class="lg:col-span-1">
        <div class="bg-white shadow-md rounded-md p-4">
          <h2 class="text-xl font-semibold text-gray-800 mb-4">Recent Posts</h2>
          <ul>
            <li v-for="recentPost in recentPosts" :key="recentPost.id" class="mb-4">
              <NuxtLink 
                :to="`/blog/post/${recentPost.slug}`" 
                class="text-blue-500 hover:underline text-sm"
              >
                {{ recentPost.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { fetchBloggerPosts } from '~/utils/blogger'; // Mengimpor fungsi untuk mengambil data
  import type { BlogPost } from '~/utils/blogger'; // Mengimpor tipe
  
  const route = useRoute();
  const post = ref<BlogPost | null>(null);
  const recentPosts = ref<BlogPost[]>([]);
  const loading = ref(true); // Menambahkan variabel loading
  
  const apiKey = useRuntimeConfig().public.BLOGGER_API_KEY;
  const blogId = useRuntimeConfig().public.BLOGGER_BLOG_ID;
  
  // Ambil data postingan berdasarkan slug dan post terbaru
  onMounted(async () => {
    const slug = route.params.slug as string;
    try {
      const posts = await fetchBloggerPosts(apiKey, blogId);
      
      // Menemukan post berdasarkan slug
      post.value = posts.find(p => p.slug === slug) || null;
  
      // Menampilkan 5 post terbaru di sidebar
      recentPosts.value = posts.slice(0, 5); // Mengambil 5 post pertama
  
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      loading.value = false; // Menandakan bahwa pengambilan data sudah selesai
    }
  });
  </script>
  
  <style scoped>
  .prose {
    line-height: 1.6;
  }
  
  .prose img {
    max-width: 100%;
    height: auto;
  }
  
  /* Styling untuk loading spinner */
  .animate-spin {
    border-top-color: transparent;
    border-right-color: transparent;
  }
  
  .border-solid {
    border-style: solid;
  }
  </style>
  