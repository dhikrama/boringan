<template>
    <div class="featured-post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
      <a :href="post.url">Read more</a>
    </div>
  </template>
  
  <script setup>
  defineProps({
    post: Object
  });
  </script>
  
  <style>
  .featured-post {
    /* Gaya untuk featured post */
  }
  </style>
  