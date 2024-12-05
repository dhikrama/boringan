<template>
  <div v-if="post">
    <div class="max-w-4xl mx-auto p-6">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">{{ post.title }}</h1>
      <p class="text-sm text-gray-500 mb-4">Published on: {{ formatDate(post.published) }}</p>
      <div v-html="post.content" class="prose lg:prose-xl text-gray-700"></div>
    </div>
  </div>

  <div v-else>
    <p class="text-center text-gray-500">Loading post...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

// State
const post = ref(null);
const route = useRoute();

// API Key
const apiKey = 'AIzaSyA2-Ljqejll0cpOEH0xF3eLd2FrYmmoBLg';

// Fungsi untuk mengambil detail postingan
const fetchPost = async () => {
  try {
    const slug = route.params.slug; // Mendapatkan slug dari URL
    const response = await $fetch(
      `https://www.googleapis.com/blogger/v3/blogs/3462907902652169422/posts?key=${apiKey}`
    );
    const posts = response.items;

    // Temukan post yang sesuai dengan slug
    post.value = posts.find(p => generateSlug(p.title) === slug);

    // Jika post tidak ditemukan
    if (!post.value) {
      console.error('Post not found');
    }
  } catch (error) {
    console.error('Error fetching post:', error);
  }
};

// Fungsi untuk memformat tanggal
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString();
};

// Ambil data saat komponen di-mount
onMounted(() => {
  fetchPost();
});

// Fungsi untuk menghasilkan slug dari judul
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')  // Menghapus karakter khusus
    .replace(/\s+/g, '-')          // Mengganti spasi dengan tanda hubung
    .replace(/-+/g, '-');          // Menghapus tanda hubung ganda
}
</script>
