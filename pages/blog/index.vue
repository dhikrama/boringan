<template>
  <div class="max-w-6xl mx-auto py-10 px-4">
    
    <h1 class="text-4xl font-bold text-gray-800 mb-8">Blog Posts</h1>

    <div v-if="posts && posts.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="post in paginatedPosts" 
        :key="post.id" 
        class="bg-white shadow-md rounded-md overflow-hidden">
        <NuxtImg 
          v-if="getFirstImage(post.content)" 
          :src="getFirstImage(post.content)" 
          alt="Blog image" 
          class="w-full h-40 object-cover"
        />
        <div class="p-4">
          <h2 class="text-xl font-semibold text-gray-800 mb-2">{{ post.title }}</h2>
          <p class="text-gray-600 text-sm mb-4">
            {{ new Date(post.published).toLocaleDateString() }}
          </p>
          <p class="text-gray-700 text-sm line-clamp-3">
            {{ stripHtml(post.content).slice(0, 100) }}...
          </p>
          <NuxtLink 
            :to="`/blog/post/${post.slug}`" 
            class="inline-block mt-4 text-blue-500 hover:underline"
          >
            Read More
          </NuxtLink>
        </div>
      </div>
    </div>

    <div v-else>
      <p>Mengambil Data...</p>
      <UProgress animation="carousel" />
    </div>

    <!-- Paginasi -->
    <div v-if="totalPages > 1" class="flex justify-center mt-6">
      <button 
        v-for="page in totalPages" 
        :key="page" 
        @click="changePage(page)" 
        :class="['px-4 py-2 mx-1 rounded', currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700']"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">

useHead({
  title: 'Mitra Gali - Halaman blog dan pembaruan aktifitas penggalian',
  meta: [
    {
      name: 'description',
      content: 'Pelajari lebih lanjut tentang Mitra Gali, Penyedia jasa tenaga gali yang berdedikasi memberikan layanan berkualitas tinggi dengan hasil memuaskan.',
    },
  ],
});

import { ref, onMounted, computed } from 'vue';
import { fetchBloggerPosts } from "~/utils/blogger";
import { getFirstImage } from '~/utils/blogger';
import type { BlogPost } from '~/utils/blogger'; // Mengimpor tipe secara eksplisit

const posts = ref<BlogPost[]>([]);
const currentPage = ref(1);
const perPage = 6; // Jumlah postingan per halaman

// Ambil nama situs WordPress dari runtime config
const site = useRuntimeConfig().public.WORDPRESS_SITE;

onMounted(async () => {
 const apiKey = useRuntimeConfig().public.BLOGGER_API_KEY
 const blogID = useRuntimeConfig().public.BLOGGER_BLOG_ID
  try {
    posts.value = await fetchBloggerPosts(apiKey, blogID);
  } catch (error) {
    console.error('Gagal memuat daftar postingan:', error);
  }
});

// Fungsi untuk menghapus HTML tags dari konten
function stripHtml(html: string): string {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
}

// Paginasi: Mengambil postingan yang sesuai dengan halaman yang aktif
const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return posts.value.slice(start, end);
});

// Menghitung total halaman berdasarkan jumlah postingan
const totalPages = computed(() => {
  return Math.ceil(posts.value.length / perPage);
});

// Mengubah halaman saat tombol pagination diklik
function changePage(page: number) {
  currentPage.value = page;
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
