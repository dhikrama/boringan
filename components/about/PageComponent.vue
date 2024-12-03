<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-blue-900 text-white py-6">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl font-bold">Tentang Kami</h1>
      </div>
    </header>
    <main class="container mx-auto px-6 py-10">
      <section class="bg-white p-6 rounded-lg shadow-md mb-10">
        <h2 class="text-3xl font-semibold mb-4">Mitra Gali Kabel</h2>
        <p class="text-gray-700 mb-6">
          Kami adalah perusahaan yang bergerak di bidang penggalian kabel PJU, PLN, lampu taman, CCTV jalan, dan lain-lain. Mitra Gali Kabel berkomitmen untuk memberikan layanan terbaik dengan standar tinggi dalam setiap proyek yang kami kerjakan.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <InboxArrowDownIcon class="text-blue-500 w-12 h-12 mb-4 mx-auto" />
            <h3 class="text-xl font-semibold mb-2">Penggalian Kabel PJU</h3>
            <p class="text-gray-600">Layanan penggalian kabel untuk lampu jalan umum (PJU) dengan teknik dan peralatan terbaik.</p>
          </div>
          <div class="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <BoltIcon class="text-green-500 w-12 h-12 mb-4 mx-auto" />
            <h3 class="text-xl font-semibold mb-2">Penggalian Kabel PLN</h3>
            <p class="text-gray-600">Kami menangani penggalian kabel PLN dengan standar keselamatan yang ketat dan profesionalisme tinggi.</p>
          </div>
          <div class="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <LightBulbIcon class="text-yellow-500 w-12 h-12 mb-4 mx-auto" />
            <h3 class="text-xl font-semibold mb-2">Lampu Taman</h3>
            <p class="text-gray-600">Penggalian kabel untuk pemasangan lampu taman, memastikan keindahan dan keamanan taman Anda.</p>
          </div>
          <div class="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <ShieldCheckIcon class="text-red-500 w-12 h-12 mb-4 mx-auto" />
            <h3 class="text-xl font-semibold mb-2">CCTV Jalan</h3>
            <p class="text-gray-600">Layanan penggalian kabel untuk pemasangan CCTV jalan, memberikan keamanan ekstra untuk lingkungan Anda.</p>
          </div>
          <div class="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <UsersIcon class="text-purple-500 w-12 h-12 mb-4 mx-auto" />
            <h3 class="text-xl font-semibold mb-2">Tim Profesional</h3>
            <p class="text-gray-600">Tim kami terdiri dari tenaga ahli yang berpengalaman dan profesional dalam bidang penggalian kabel.</p>
          </div>
          <div class="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <CogIcon class="text-teal-500 w-12 h-12 mb-4 mx-auto" />
            <h3 class="text-xl font-semibold mb-2">Peralatan Modern</h3>
            <p class="text-gray-600">Kami menggunakan peralatan penggalian modern untuk memastikan kecepatan dan efisiensi pekerjaan kami.</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
// Import Heroicons v2
import { InboxArrowDownIcon, BoltIcon, LightBulbIcon, ShieldCheckIcon, UsersIcon, CogIcon } from '@heroicons/vue/24/solid'
</script>

<style scoped>
/* Tambahkan gaya khusus jika diperlukan */
</style>
