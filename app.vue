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

    {
      src: 'https://www.googletagmanager.com/gtag/js?id=AW-16813484049',
      async: true
    },
    {
      type: 'text/javascript',
      children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-16813484049');
      `
    }
  ]
});
</script>