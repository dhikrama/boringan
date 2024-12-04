<template>
    <div v-if="post" class="container mx-auto px-4 py-6">
      <!-- Pastikan post ada sebelum mengakses title dan content -->
      <h1 class="text-2xl font-bold">{{ post.title }}</h1>
      <div v-html="post.content" class="prose mt-4"></div>
    </div>
  
    <!-- Tampilkan pesan loading jika data belum dimuat -->
    <div v-else class="text-center">Loading...</div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const post = ref(null);
  
  onMounted(async () => {
    const postId = route.params.id;  // Ambil ID dari URL
    const posts = await $fetch('/api/blog');  // Ambil semua postingan
  
    // Temukan postingan dengan ID yang sesuai
    post.value = posts.find((p) => p.id === postId);
  
    // Log untuk memeriksa data
    console.log(post.value);
  });
  </script>
  