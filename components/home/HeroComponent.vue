<template>
  <section class="relative bg-gradient-to-r from-blue-500 to-blue-700 py-20">
    <div class="container mx-auto px-6 lg:px-12">
      <!-- Hero Content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <!-- Left: Text Content -->
        <div class="text-white">
          <h1 class="text-5xl font-extrabold leading-tight mb-4">
            Mitra Gali Kabel <span class="text-yellow-400">Profesional</span>
          </h1>
          <p class="text-lg mb-6">
            Kami menyediakan layanan penggalian kabel untuk berbagai kebutuhan
            proyek, seperti PJU, PLN, CCTV jalan, dan lampu taman. Dikerjakan oleh tenaga ahli yang berpengalaman.
          </p>
          <a
            href="#contact"
            class="inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300"
          >
            Hubungi Kami
          </a>
        </div>

        <!-- Right: Image or Illustration -->
        <div class="flex justify-center lg:justify-end">
          <NuxtImg
            src="/images/about-us-image.webp"
            alt="Pekerjaan penggalian kabel"
            class="rounded-lg shadow-lg object-cover max-w-full h-auto"
            width="600"
            height="400"
          />
        </div>
      </div>
    </div>

    <!-- Optional: Decorative background or effects -->
    <div class="absolute inset-0 bg-black opacity-25"></div>
  </section>
</template>

<script setup>
// Tambahkan konten atau logika tambahan di sini jika diperlukan
</script>

<style scoped>
/* Bisa menambahkan custom styling jika diperlukan */
</style>
