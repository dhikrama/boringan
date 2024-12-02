<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const baseUrl = 'https://www.boringan.com';

useHead({
  link: [
    {
      rel: 'canonical',
      href: `${baseUrl}${route.path}`, // URL dinamis berdasarkan path
    },
  ],
});


</script>

