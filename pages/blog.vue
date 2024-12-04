<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- News Update Section -->
    <div class="bg-white shadow-md py-4 mb-8">
      <div class="container mx-auto px-6">
        <div class="flex justify-between items-center">
          <h3 class="text-lg font-bold">News Update</h3>
          <span class="text-sm text-gray-500">Updated every hour</span>
        </div>
        <div class="flex flex-wrap mt-4 space-x-6">
          <!-- News Card -->
          <div
            v-for="(news, index) in newsUpdate"
            :key="index"
            class="w-full sm:w-1/2 md:w-1/3 p-2"
          >
            <div class="bg-gray-100 rounded-lg p-4">
              <h4 class="text-md font-semibold">{{ news.title }}</h4>
              <p class="text-sm text-gray-500">{{ formatDate(news.publishedAt) }}</p>
              <p class="text-base mt-3">
                {{ getSnippet(news.textContent) }}
                <NuxtLink
                  :to="`/post/${news.id}`"
                  class="text-blue-500"
                  >Read More</NuxtLink
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Latest News Section -->
    <div class="container mx-auto px-6 mb-8">
      <h3 class="text-2xl font-bold mb-4">Latest News</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Latest Article Card -->
        <div
          v-for="post in latestPosts"
          :key="post.id"
          class="bg-white shadow-md rounded-lg p-4"
        >
          <h4 class="text-lg font-semibold">{{ post.title }}</h4>
          <p class="text-sm text-gray-500">{{ formatDate(post.publishedAt) }}</p>
          <p class="text-base mt-3">
            {{ getSnippet(post.content) }}
          </p>
          <NuxtLink
            :to="`/post/${post.id}`"
            class="text-blue-500 mt-2 block"
            >Read More</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Variabel untuk menyimpan data
const newsUpdate = ref([]);
const latestPosts = ref([]);

// Fungsi untuk mengambil cuplikan konten (150 karakter pertama) tanpa HTML
const getSnippet = (content) => {
  if (process.client) {
    const div = document.createElement('div');
    div.innerHTML = content;
    return div.innerText?.substring(0, 150) + '...';
  }
  return content?.substring(0, 150) + '...';
};

// Fungsi untuk memformat tanggal
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Mengambil data blog setelah komponen di-mount
onMounted(async () => {
  try {
    const { data: blogData } = await useFetch('/api/blog');
    if (blogData.value) {
      // Mengisi latestPosts dan newsUpdate dengan data yang diterima
      latestPosts.value = blogData.value.slice(0, 6).map((post) => ({
        id: post.id,
        title: post.title,
        content: post.content,
        publishedAt: post.published,
      }));

      newsUpdate.value = blogData.value.slice(0, 6).map((post) => ({
        id: post.id,
        title: post.title,
        publishedAt: post.published,
        textContent: post.content,
      }));
    } else {
      console.error('Blog data is empty or undefined');
    }
  } catch (err) {
    console.error('Error fetching blog data:', err);
  }
});
</script>

<style scoped>
/* Gaya khusus untuk kartu berita */
.bg-gray-100 {
  background-color: #f7fafc;
}

.bg-white {
  background-color: #ffffff;
}

img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
