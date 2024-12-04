<template>
    <div class="trending-news">
      <h3>Trending</h3>
      <div v-for="post in posts" :key="post.id">
        <h4>{{ post.title }}</h4>
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
  .trending-news {
    /* Gaya untuk trending berita */
  }
  </style>
  