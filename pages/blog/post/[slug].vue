<template>
  <div class="max-w-6xl mx-auto py-10 px-4">
    <div class="flex flex-col lg:flex-row gap-8">
      <!-- Konten Utama -->
      <div class="flex-1">
        <div v-if="loading" class="flex justify-center items-center h-96 text-center">
          <div class="animate-spin rounded-full border-t-4 border-blue-500 w-16 h-16 border-solid"></div>
          <p class="mt-4 text-lg text-gray-600">Memuat data postingan...</p>
        </div>

        <div v-else-if="post">
          <!-- Judul dan Tanggal -->
          <h1 class="text-2xl font-bold text-gray-800 mb-4">{{ post.title }}</h1>
          <p class="text-gray-600 text-sm mb-6">
            Published on {{ new Date(post.published).toLocaleDateString() }}
          </p>

          <!-- Konten Postingan -->
          <div v-html="formattedContent" class="postingan"></div>
        </div>

        <div v-else>
          <p>Post not found</p>
        </div>
      </div>

      <!-- Sidebar -->
      <aside class="w-full lg:w-1/3">
        <div class="bg-gray-100 p-6 rounded-lg shadow-md"> 
          <h2 class="text-2xl font-bold text-gray-700 mb-4">Postingan Terbaru</h2>
          <ul class="space-y-3">
            <li v-for="(item, index) in sidebarItems" :key="index" class="text-purple-800 hover:text-blue-500">
              <a :href="item.link">{{ item.text }}</a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { fetchBloggerPosts } from '~/utils/blogger';
import { getFirstImage } from '~/utils/blogger';
import type { BlogPost } from '~/utils/blogger';

const route = useRoute();
const post = ref<BlogPost | null>(null);
const loading = ref(true);
const sidebarItems = ref<{ text: string; link: string }[]>([]);

// Mendapatkan slug dari URL
const slug = route.params.slug as string;

// Ambil postingan dari WordPress
onMounted(async () => {
  try {
    const apiKey = useRuntimeConfig().public.BLOGGER_API_KEY
    const blogId = useRuntimeConfig().public.BLOGGER_BLOG_ID
    const posts = await fetchBloggerPosts(apiKey, blogId);
    // Ambil postingan berdasarkan slug
    post.value = posts.find((p) => p.slug === slug) || null;

    // Ambil 5 postingan terbaru untuk sidebar
    sidebarItems.value = posts.slice(0, 5).map((post) => ({
      text: post.title,
      link: `/blog/post/${post.slug}`, // Sesuaikan struktur URL Anda
    }));
  } catch (error) {
    console.error('Error fetching posts:', error);
  } finally {
    loading.value = false;
    console.log(post.value);
  }
});

// Mendapatkan URL gambar pertama dari konten postingan
const firstImage = computed(() => {
  return post.value ? getFirstImage(post.value.content) : null;
});

import DOMPurify from 'dompurify';

const formattedContent = computed(() => {
  if (post.value) {
    return DOMPurify.sanitize(post.value.content, {
      ALLOWED_TAGS: ['p', 'strong', 'em', 'ul', 'ol', 'li', 'a', 'img', 'figure', 'hr', 'h4', 'h3'],
      ALLOWED_ATTR: ['href', 'src', 'alt', 'title'],
    });
  }
  return '';
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

.animate-spin {
  border-top-color: transparent;
  border-right-color: transparent;
}


:deep(.postingan) {
  font-family: 'Inter', sans-serif; /* Gunakan font modern */
  color: #333; /* Warna teks utama */
}

:deep(.postingan h1) {
  font-size: 2.5rem; /* Ukuran besar untuk headline utama */
  font-weight: 700; /* Tebal */
  color: #111; /* Warna tegas */
  margin-top: 2rem;
  margin-bottom: 1rem;
}

:deep(.postingan h2) {
  font-size: 2rem;
  font-weight: 700;
  color: #222;
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-left: 4px solid #3b82f6; /* Garis samping biru */
  padding-left: 1rem;
}

:deep(.postingan h3) {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

:deep(.postingan p) {
  font-size: 1rem; 
  line-height: 1.8; /* Buat jarak antar baris lebih luas */
  margin-bottom: 1.25rem; /* Jarak antar paragraf */
}

:deep(.postingan ul, .postingan ol) {
  margin-left: 1.25rem; /* Jarak dari tepi kiri */
  margin-bottom: 1.25rem; /* Jarak bawah */
}

:deep(.postingan li) {
  margin-bottom: 0.75rem; /* Jarak antar item dalam daftar */
  font-size: 1rem;
}

:deep(.postingan blockquote) {
  font-style: italic;
  color: #555;
  border-left: 4px solid #3b82f6; /* Garis samping biru */
  padding-left: 1rem;
  margin-left: 0;
  margin-right: 0;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

:deep(.postingan img) {
  max-width: 100%;
  border-radius: 8px; /* Membuat sudut gambar membulat */
  margin-top: 1rem;
  margin-bottom: 1rem;
}

:deep(.postingan table) {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1.5rem;
}

:deep(.postingan th, .postingan td) {
  border: 1px solid #ddd;
  padding: 0.75rem;
  text-align: left;
}

:deep(.postingan th) {
  background-color: #f4f4f4;
  font-weight: 700;
}


</style>