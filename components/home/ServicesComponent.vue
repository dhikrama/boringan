<template>
  <section class="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white">
    <div class="container mx-auto px-6 lg:px-12 text-center">
    <DelayHydration>
      <h2 class="text-3xl font-bold mb-4">Layanan Kami</h2>
      <p class="text-lg mb-12">
        Kami menyediakan berbagai layanan penggalian kabel untuk kebutuhan Anda, meliputi PLN, PJU, CCTV, Kabel Fiber Optik, dan lainnya, dengan hasil profesional dan terpercaya.
      </p>

      <!-- Grid Card -->
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <!-- Service 1 -->
        <div class="bg-gray-800 bg-opacity-80 rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform hover:scale-105">
          <Icon name="uil:bolt" class="w-14 h-14 text-blue-400 mb-4" />
          <h3 class="text-lg font-semibold mb-2">Gali Kabel PLN</h3>
          <p class="text-sm mb-4 text-center">
            Layanan penggalian kabel untuk jaringan listrik PLN dengan standar keamanan tinggi dan hasil optimal.
          </p>
          <NuxtLink
            to="/services/pln"
            class="mt-auto px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition duration-300"
          >
            Selengkapnya
          </NuxtLink>
        </div>

        <!-- Service 2 -->
        <div class="bg-gray-800 bg-opacity-80 rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform hover:scale-105">
          <Icon name="uil:lightbulb" class="w-14 h-14 text-yellow-400 mb-4" />
          <h3 class="text-lg font-semibold mb-2">Gali Kabel PJU</h3>
          <p class="text-sm mb-4 text-center">
            Pengerjaan penggalian kabel untuk Penerangan Jalan Umum (PJU) dengan waktu pengerjaan yang tepat.
          </p>
          <NuxtLink
            to="/services/pju"
            class="mt-auto px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition duration-300"
          >
            Selengkapnya
          </NuxtLink>
        </div>

        <!-- Service 3 -->
        <div class="bg-gray-800 bg-opacity-80 rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform hover:scale-105">
          <Icon name="uil:video" class="w-14 h-14 text-green-400 mb-4" />
          <h3 class="text-lg font-semibold mb-2">Gali Kabel CCTV</h3>
          <p class="text-sm mb-4 text-center">
            Solusi penggalian kabel untuk jaringan CCTV jalan raya dengan efisiensi tinggi.
          </p>
          <NuxtLink
            to="/services/cctv"
            class="mt-auto px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition duration-300"
          >
            Selengkapnya
          </NuxtLink>
        </div>

        <!-- Service 4 -->
        <div class="bg-gray-800 bg-opacity-80 rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform hover:scale-105">
          <Icon name="uil:server-network" class="w-14 h-14 text-purple-400 mb-4" />
          <h3 class="text-lg font-semibold mb-2">Gali Kabel Fiber Optik</h3>
          <p class="text-sm mb-4 text-center">
            Penggalian kabel fiber optik untuk jaringan komunikasi berkecepatan tinggi dengan kualitas terbaik.
          </p>
          <NuxtLink
            to="/services/fiber-optic"
            class="mt-auto px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition duration-300"
          >
            Selengkapnya
          </NuxtLink>
        </div>
      </div>
    </DelayHydration>
    </div>
  </section>
</template>

<script setup>
// Anda tidak perlu melakukan import ikon karena Nuxt 3 sudah menangani Nuxt Icon secara otomatis
</script>

<style scoped>
/* Tambahkan gaya jika diperlukan */
</style>
