<template>
    <div v-if="post">
      <div class="max-w-4xl mx-auto p-6">
        <h1 class="text-3xl font-bold text-gray-800 mb-6">{{ post.title }}</h1>
        <p class="text-sm text-gray-500 mb-4">Published on: {{ new Date(post.published).toLocaleDateString() }}</p>
        <div v-html="post.content" class="prose lg:prose-xl text-gray-700"></div>
      </div>
    </div>
  
    <div v-else>
      <p>Loading...</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  
  const post = ref(null)
  const route = useRoute()
  
  onMounted(async () => {
    const postId = route.params.id
  
    // Fetch semua postingan
    const response = await fetch('https://www.googleapis.com/blogger/v3/blogs/3462907902652169422/posts?key=AIzaSyA2-Ljqejll0cpOEH0xF3eLd2FrYmmoBLg')
    const posts = await response.json()
  
    // Temukan postingan yang sesuai berdasarkan id
    post.value = posts.items?.find(p => p.id === postId)
  
    // Jika post tidak ditemukan
    if (!post.value) {
      console.error('Post not found')
    }
  })
  </script>
  