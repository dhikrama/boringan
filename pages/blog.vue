<template>
  <div class="max-w-6xl mx-auto py-10 px-4">
    <h1 class="text-4xl font-bold text-gray-800 mb-8">Blog Posts</h1>
    
    <div v-if="currentPosts && currentPosts.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="post in currentPosts" 
        :key="post.id" 
        class="bg-white shadow-md rounded-md overflow-hidden">
        <img 
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
            :to="`/blog/${post.id}`" 
            class="inline-block mt-4 text-blue-500 hover:underline"
          >
            Read More
          </NuxtLink>
        </div>
      </div>
    </div>
    
    <div v-else>
      <p>Loading blog posts...</p>
    </div>

    <!-- Paginasi -->
    <div v-if="posts.length > perPage" class="flex justify-center mt-6">
      <button 
        v-for="page in totalPages" 
        :key="page" 
        @click="currentPage = page" 
        :class="['px-4 py-2 mx-1 rounded', currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700']"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const posts = ref([])
const currentPage = ref(1)
const perPage = 6

// Data postingan saat ini berdasarkan halaman
const currentPosts = computed(() => {
  const start = (currentPage.value - 1) * perPage
  const end = start + perPage
  return posts.value.slice(start, end)
})

// Total halaman
const totalPages = computed(() => Math.ceil(posts.value.length / perPage))

// Fungsi untuk menghapus tag HTML dari konten
function stripHtml(html) {
  const div = document.createElement('div')
  div.innerHTML = html
  return div.textContent || div.innerText || ''
}

// Fungsi untuk mendapatkan gambar pertama dari konten HTML
function getFirstImage(html) {
  const div = document.createElement('div')
  div.innerHTML = html
  const img = div.querySelector('img')
  return img ? img.src : null
}

onMounted(async () => {
  try {
    const response = await $fetch('/api/blog')
    if (response.success) {
      posts.value = response.posts
    } else {
      console.error(response.message)
    }
  } catch (error) {
    console.error('Failed to fetch posts:', error)
  }
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
