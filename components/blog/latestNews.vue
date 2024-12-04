<template>
    <div class="latest-news">
      <h3>Latest News</h3>
      <div v-for="post in posts" :key="post.id">
        <h4>{{ post.title }}</h4>
        <p>{{ post.content.substring(0, 100) }}...</p>
        <a :href="post.url">Read more</a>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    posts: Array
  });
  </script>
  
  <style>
  .latest-news {
    /* Gaya untuk daftar berita terbaru */
  }
  </style>
  