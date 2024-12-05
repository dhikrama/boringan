<template>
    <div class="container mx-auto p-6">
      <h1 class="text-4xl font-bold mb-4">{{ post.title }}</h1>
      <p class="text-gray-500 text-sm mb-6">Published on {{ formatDate(post.publishedAt) }}</p>
      <div class="prose prose-lg max-w-none" v-html="post.content"></div>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import { ref, onMounted } from 'vue';
  
  const route = useRoute();
  const post = ref(null);
  
  onMounted(async () => {
    const slug = route.params.slug;
    try {
      const response = await fetch(`/api/post?slug=${slug}`);
      if (!response.ok) {
        throw new Error('Failed to fetch post');
      }
      post.value = await response.json();
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  });
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
  }
  </style>
  