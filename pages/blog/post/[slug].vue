<template>
  <div class="max-w-6xl mx-auto py-10 px-4 flex flex-col lg:flex-row gap-8">
    <!-- Konten Utama -->
    <div class="w-full lg:w-3/4">
      <!-- Spinner Saat Memuat Data -->
      <div v-if="loading" class="flex justify-center items-center h-96">
        <div class="animate-spin rounded-full border-t-4 border-blue-500 w-16 h-16"></div>
        <p class="mt-4 text-lg text-gray-600">Memuat postingan...</p>
      </div>

      <!-- Tampilkan Postingan -->
      <div v-else-if="post">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">{{ post.title }}</h1>
        <p class="text-gray-600 text-sm mb-6">
          Published on {{ new Date(post.published).toLocaleDateString() }}
        </p>
        <div v-html="formattedContent" class="prose lg:prose-xl"></div>
      </div>

      <!-- Pesan Jika Postingan Tidak Ditemukan -->
      <div v-else>
        <p class="text-red-500 text-lg">Postingan tidak ditemukan.</p>
      </div>
    </div>

    <!-- Sidebar -->
    <div class="w-full lg:w-1/4">
      <div class="bg-white shadow-md p-4 rounded-md">
        <h3 class="text-xl font-semibold text-gray-800 mb-4">Post Terbaru</h3>
        <div v-if="recentPosts.length" class="space-y-4">
          <div v-for="recentPost in recentPosts" :key="recentPost.id">
            <NuxtLink
              :to="`/blog/post/${recentPost.slug}`"
              class="text-blue-500 hover:underline text-sm"
            >
              {{ recentPost.title }}
            </NuxtLink>
          </div>
        </div>
        <div v-else>
          <p class="text-gray-600 text-sm">Tidak ada postingan terbaru.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { fetchBloggerPosts, wrapImagesWithNuxtImg } from '~/utils/blogger';
import type { BlogPost } from '~/utils/blogger';

// State untuk menyimpan data
const route = useRoute();
const post = ref<BlogPost | null>(null);
const recentPosts = ref<BlogPost[]>([]);
const loading = ref(true);

// API key dan Blog ID dari .env
const bloggerApiKey = useRuntimeConfig().public.BLOGGER_API_KEY;
const blogId = useRuntimeConfig().public.BLOGGER_BLOG_ID;

// Ambil data postingan
onMounted(async () => {
  const slug = route.params.slug as string; // Ambil slug dari route

  try {
    // Fetch semua postingan dari Blogger API menggunakan utils
    const data = await fetchBloggerPosts(bloggerApiKey, blogId);

    // Cari postingan berdasarkan slug
    post.value = data.find((item) => item.slug === slug) || null;

    // Simpan postingan terbaru untuk sidebar
    recentPosts.value = data.slice(0, 5); // Ambil 5 postingan terbaru
  } catch (error) {
    console.error('Error fetching posts:', error);
  } finally {
    loading.value = false;
  }
});

// Format konten HTML dengan NuxtImg
// const formattedContent = computed(() => {
//   if (post.value) {
//     return wrapImagesWithNuxtImg(post.value.content);
//   }
//   return '';
// });

import DOMPurify from 'dompurify';

const formattedContent = computed(() => {
  if (post.value) {
    return DOMPurify.sanitize(post.value.content, {
      ALLOWED_TAGS: ['p', 'strong', 'em', 'ul', 'ol', 'li', 'a', 'img', 'figure', 'hr', 'h4', 'h3', 'src', 'iframe'],
      ALLOWED_ATTR: ['href', 'src', 'alt', 'title'],
    });
  }
  return '';
});
</script>

<style scoped>
/* Spinner styling */
.animate-spin {
  border-top-color: transparent;
  border-right-color: transparent;
  border-style: solid;
}

/* Typography styling */
.prose {
  line-height: 1.8;
}

.prose img {
  max-width: 100%;
  height: auto;
}

</style>
