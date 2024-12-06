<template>
  <div class="max-w-6xl mx-auto py-10 px-4 flex space-x-6">
    <!-- Konten Postingan -->
    <div class="w-3/4 pr-6">
      <div v-if="loading" class="flex justify-center items-center h-96 text-center">
        <div class="animate-spin rounded-full border-t-4 border-blue-500 w-16 h-16 border-solid"></div>
        <p class="mt-4 text-lg text-gray-600">Memuat data postingan...</p>
      </div>

      <div v-else-if="post">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">{{ post.title }}</h1>
        <p class="text-gray-600 text-sm mb-6">
          Published on {{ new Date(post.published).toLocaleDateString() }}
        </p>

        <!-- Merender HTML dengan gambar dibungkus NuxtImg -->
        <div v-html="formattedContent" class="prose lg:prose-xl mb-6"></div>
      </div>

      <div v-else>
        <p>Post not found</p>
      </div>
    </div>

    <!-- Sidebar -->
    <div class="w-1/4">
      <div class="bg-white shadow-md p-4 rounded-md">
        <h3 class="text-xl font-semibold text-gray-800 mb-4">Post Terbaru</h3>
        <div v-if="recentPosts.length" class="space-y-4">
          <div v-for="post in recentPosts" :key="post.id">
            <NuxtLink 
              :to="`/blog/posts/${post.slug}`" 
              class="text-blue-500 hover:underline text-sm"
            >
              {{ post.title }}
            </NuxtLink>
          </div>
        </div>
        <div v-else>
          <p class="text-gray-600 text-sm">Tidak ada postingan terbaru.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { fetchWordPressPosts } from '~/utils/wordpress';
import type { BlogPost } from '~/utils/wordpress';
import { wrapImagesWithNuxtImg } from '~/utils/wordpress'; // Fungsi untuk mengganti <img> dengan <NuxtImg>

const route = useRoute();
const post = ref<BlogPost | null>(null);
const recentPosts = ref<BlogPost[]>([]); // Menyimpan daftar postingan terbaru
const loading = ref(true);

const site = useRuntimeConfig().public.WORDPRESS_SITE;

// Ambil data postingan berdasarkan slug
onMounted(async () => {
  const slug = route.params.slug as string;
  try {
    const posts = await fetchWordPressPosts('rajaboringan.wordpress.com');
    post.value = posts.find(p => p.slug === slug) || null;
    recentPosts.value = posts.slice(0, 5); // Ambil 5 postingan terbaru untuk sidebar
  } catch (error) {
    console.error('Error fetching post:', error);
  } finally {
    loading.value = false;
  }
});

// Format konten HTML dengan mengganti <img> menjadi <NuxtImg>
const formattedContent = computed(() => {
  if (post.value) {
    return wrapImagesWithNuxtImg(post.value.content);
  }
  return '';
});
</script>

<style scoped>
.prose {
  line-height: 1.6;
}

.prose img {
  max-width: 100%;
  height: auto;
}

/* Styling untuk loading spinner */
.animate-spin {
  border-top-color: transparent;
  border-right-color: transparent;
}

.border-solid {
  border-style: solid;
}

.flex {
  display: flex;
}

.pr-6 {
  padding-right: 1.5rem;
}
</style>
