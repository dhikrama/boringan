<template>
  <section class="bg-white py-20">
    <div class="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
      <!-- Gambar dan Komunitas -->
      <div class="relative">
        <nuxt-img
          src="/images/about-us-example.webp"
          alt="Happy Community"
          class="rounded-xl shadow-lg w-full"
        />
        <!-- Card Komunitas -->
        <div
          class="absolute bottom-6 left-6 bg-white rounded-lg shadow-md p-4 flex items-center gap-4"
        >
          <!-- Avatar Group -->
          <div class="flex -space-x-2">
            <img
              src="https://i.pravatar.cc/40?img=1"
              alt="Member 1"
              class="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src="https://i.pravatar.cc/40?img=2"
              alt="Member 2"
              class="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src="https://i.pravatar.cc/40?img=3"
              alt="Member 3"
              class="w-10 h-10 rounded-full border-2 border-white"
            />
          </div>
          <!-- Komunitas Info -->
          <div>
            <p class="font-semibold text-gray-800">150+</p>
            <p class="text-gray-500 text-sm">Join our active community</p>
          </div>
        </div>
      </div>

      <!-- Teks dan Tombol -->
      <div>
        <h2 class="text-4xl font-extrabold text-gray-800 mb-4">
          Di Mana Solusi Kabel Anda Dimulai
        </h2>
        <p class="text-lg text-gray-600 leading-relaxed mb-6">
          Mitra Gali Kabel adalah solusi untuk semua kebutuhan penggalian kabel Anda. Dengan pengalaman bertahun-tahun, kami menyediakan layanan berkualitas tinggi untuk penggalian kabel PJU, PLN, CCTV jalan, lampu taman, dan lainnya.
        </p>
        <!-- Tombol -->
        <router-link
          to="/about"
          class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-blue-700 transition-all duration-300"
        >
          Selengkapnya
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
// Tidak ada logika khusus untuk section ini
</script>

<style scoped>
/* Custom styling */
</style>
