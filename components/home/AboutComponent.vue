<template>
  <DelayHydration>
  <section class="bg-white py-20">
    <div class="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
      <!-- Gambar dan Komunitas -->
      <div class="relative">
        <nuxt-img
          src="/images/team-mitra-gali.webp"
          alt="Happy Community"
          class="rounded-xl shadow-lg w-full"
        />
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
</DelayHydration>
</template>

<script setup>
// Tidak ada logika khusus untuk section ini
</script>

<style scoped>
/* Custom styling */
</style>
