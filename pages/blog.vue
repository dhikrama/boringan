<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Loading Indicator -->
    <div v-if="isLoading" class="flex justify-center items-center h-screen">
      <div class="text-center">
        <svg
          class="animate-spin h-8 w-8 text-gray-600 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
        <p class="text-gray-600 mt-2">Mengambil data, Harap menunggu...</p>
      </div>
    </div>

    <!-- Content -->
    <div v-else>
      <!-- News Update Section -->
      <div class="bg-white shadow-md py-4 mb-8">
        <div class="container mx-auto px-6">
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-bold">News Update</h3>
            <span class="text-sm text-gray-500">Updated every hour</span>
          </div>
          <div class="flex flex-wrap mt-4 space-x-6">
            <!-- News Card -->
            <div
              v-for="(news, index) in newsUpdate"
              :key="index"
              class="w-full sm:w-1/2 md:w-1/3 p-2"
            >
              <div class="bg-gray-100 rounded-lg p-4">
                <h4 class="text-md font-semibold">{{ news.title }}</h4>
                <p class="text-sm text-gray-500">{{ news.publishedAt }}</p>
                <p class="text-base mt-3">
                  {{ getSnippet(news.content) }}
                  <a :href="news.url" target="_blank" class="text-blue-500"
                    >Read More</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isLoading = ref(true); // State untuk loading
const newsUpdate = ref([]);

// Fungsi mengambil cuplikan teks
const getSnippet = (content) => {
  if (!content) return "";
  const div = document.createElement("div");
  div.innerHTML = content;
  return div.innerText?.substring(0, 150) + "...";
};

// Ambil data saat komponen dimuat
onMounted(async () => {
  try {
    const { data: blogData } = await useFetch("/api/blog");

    if (blogData.value) {
      newsUpdate.value = blogData.value.map((post) => ({
        id: post.id,
        title: post.title,
        publishedAt: post.published,
        content: post.content,
        url: post.url, // URL untuk read more ke Blogger
      }));
    } else {
      console.error("Blog data is empty or undefined");
    }
  } catch (error) {
    console.error("Error fetching blog data:", error);
  } finally {
    isLoading.value = false; // Selesai loading
  }
});
</script>

<style scoped>
/* Gaya untuk loading spinner */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
