<template>
  <section class="bg-gradient-to-r from-blue-50 to-blue-100 py-12">
    <div class="container mx-auto px-6 lg:px-12">
      <!-- Header -->
      <div class="text-center mb-10">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">
          Tentang Kami
        </h1>
        <p class="text-lg text-gray-600">
          {{ introText }}
        </p>
      </div>

      <!-- Content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <!-- Left: Text Content -->
        <div>
          <div class="space-y-6">
            <p class="text-gray-700 text-lg leading-relaxed">
              {{ introText }}
            </p>
            <ul class="space-y-4">
              <li
                v-for="(job, index) in jobs"
                :key="index"
                class="flex items-center space-x-3 text-gray-800 text-lg"
              >
                <component
                  :is="icons[index] || 'default-icon'"
                  class="w-6 h-6 text-blue-600 flex-shrink-0"
                />
                <span>{{ job }}</span>
              </li>
            </ul>
            <p class="text-gray-700 text-lg leading-relaxed">
              {{ outroText }}
            </p>
          </div>
          <a
            href="/contact"
            class="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Hubungi Kami
          </a>
        </div>

        <!-- Right: Illustration -->
        <div class="flex justify-center flex-col space-y-2 text-sm text-gray-700">
          <div class="italic"><p>Salah satu contoh pekerjaan kami dengan PT Kapitareka Yasamatra</p></div>
          <NuxtImg
            src="/images/about-us-image.webp"
            alt="Pekerjaan penggalian kabel"
            class="rounded-lg shadow-md object-cover w-full lg:w-3/4"
            width="1024"
            height="768"
            quality="75"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { AcademicCapIcon, BoltIcon, LightBulbIcon, VideoCameraIcon, CogIcon } from '@heroicons/vue/24/outline'

// Konten langsung didefinisikan di sini
const introText = ref(
  "Selamat datang di Mitra Gali Kabel. Kami adalah perusahaan yang bergerak di bidang jasa tenaga penggalian kabel, melayani kebutuhan penggalian kabel untuk berbagai proyek seperti:"
)

const jobs = ref([
  "Penggalian kabel Penerangan Jalan Umum (PJU)",
  "Penggalian kabel PLN",
  "Penggalian kabel Lampu Taman",
  "Penggalian kabel CCTV Jalan",
  "Dan kebutuhan penggalian kabel lainnya"
])

const outroText = ref(
  "Dengan pengalaman dan tenaga ahli yang profesional, kami berkomitmen untuk memberikan layanan terbaik, tepat waktu, dan sesuai dengan kebutuhan proyek Anda. Keamanan, efisiensi, dan kepuasan pelanggan adalah prioritas utama kami."
)

// Hero Icons untuk setiap pekerjaan
const icons = [
  AcademicCapIcon, // PJU
  BoltIcon, // PLN
  LightBulbIcon, // Lampu Taman
  VideoCameraIcon, // CCTV Jalan
  CogIcon, // Kebutuhan lainnya
]
</script>

<style scoped>
/* Style untuk komponen hanya jika diperlukan */
.bg-gradient-to-r {
  background: linear-gradient(to right, #e0f7fa, #80deea);
}

.container {
  max-width: 1200px;
}
</style>
