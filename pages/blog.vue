<template>
  <div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="post in posts" :key="post.id" class="bg-white shadow-md rounded-lg overflow-hidden">
        <!-- <img :src="post.thumbnail" alt="Post Image" class="w-full h-48 object-cover" /> -->
        <div class="p-4">
          <h2 class="text-xl font-bold text-gray-800">{{ post.title }}</h2>
          <p class="text-sm text-gray-500">{{ post.excerpt }}</p>
          <!-- Menggunakan NuxtLink dengan slug yang benar -->
          <NuxtLink :to="`/blog/${generateSlug(post.title)}`">Read More</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'

// State untuk menampung data postingan
const posts = ref([])

// Fungsi untuk menghasilkan slug dari judul
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')  // Menghapus karakter khusus
    .replace(/\s+/g, '-')          // Mengganti spasi dengan tanda hubung
    .replace(/-+/g, '-')           // Menghapus tanda hubung ganda
}

// Fetch data blog
onMounted(async () => {
  try {
    const response = await fetch('https://www.googleapis.com/blogger/v3/blogs/3462907902652169422/posts?key=AIzaSyA2-Ljqejll0cpOEH0xF3eLd2FrYmmoBLg')
    const data = await response.json()

    // Memformat data untuk menambahkan `excerpt` dan `thumbnail` (optional)
    posts.value = data.items.map(post => ({
      ...post,
      excerpt: post.content.substring(0, 100), // Ambil 100 karakter pertama untuk excerpt
      thumbnail: post.images ? post.images[0].url : '/default-thumbnail.jpg', // Ganti dengan URL gambar default jika tidak ada
    }))
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
})
</script>
