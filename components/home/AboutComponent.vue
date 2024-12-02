<template>
  <section class="bg-white py-20">
    <div class="container mx-auto px-6 lg:px-12">
      <!-- About Us Section -->
      <div class="text-center mb-12">
        <!-- Title -->
        <h2 class="text-4xl font-extrabold text-gray-800 mb-4">
          Tentang Kami
        </h2>
        <!-- Description -->
        <p class="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
          Mitra Gali Kabel adalah perusahaan yang bergerak di bidang penggalian kabel untuk berbagai kebutuhan seperti PJU, PLN, CCTV jalan, lampu taman, dan lainnya. Kami berkomitmen untuk memberikan solusi yang aman, efisien, dan berkualitas tinggi dengan tenaga ahli berpengalaman.
        </p>

        <!-- Image Section -->
        <div class="flex justify-center mb-8">
          <img
            src="/images/about-us-image.webp"
            alt="Pekerjaan Penggalian Kabel"
            class="w-full h-auto max-w-xl rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        <!-- Link to About Page -->
        <router-link
          to="/about"
          class="inline-block bg-yellow-500 text-white px-8 py-4 rounded-lg text-xl font-semibold shadow-md transform hover:bg-yellow-600 hover:scale-105 transition-all duration-300"
        >
          Baca Selengkapnya
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
// Tidak ada logika khusus di dalam section ini
</script>

<style scoped>
/* Custom Styling */
.bg-white {
  background-color: #ffffff;
}
</style>
