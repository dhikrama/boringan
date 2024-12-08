<template>
    <section class="py-16 bg-gray-100">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <!-- Judul -->
        <h1 class="text-4xl font-bold text-gray-800 mb-6">Layanan Penggalian Kabel PLN</h1>
        <p class="text-lg text-gray-600 mb-12">Kami menyediakan solusi penggalian kabel yang aman, cepat, dan efisien untuk kebutuhan listrik, telekomunikasi, dan berbagai proyek lainnya.</p>
  
        <!-- Deskripsi Layanan -->
        <div class="mb-16">
          <h2 class="text-3xl font-semibold text-gray-800 mb-4">Layanan Penggalian Kabel Terpercaya</h2>
          <p class="text-gray-600 text-lg mb-4">
            Mitra Tenaga Galian memiliki pengalaman luas dalam melakukan penggalian kabel untuk proyek-proyek berskala besar maupun kecil. Dengan teknologi terkini dan tenaga ahli berpengalaman, kami memastikan setiap proyek penggalian kabel dilakukan dengan rapi dan aman, sesuai dengan regulasi yang berlaku.
          </p>
          <p class="text-gray-600 text-lg mb-4">
            Kami juga menyediakan solusi penggalian untuk pengembangan infrastruktur jaringan listrik dan telekomunikasi, dengan fokus pada efisiensi waktu dan pengurangan gangguan di area proyek.
          </p>
        </div>
  
        <!-- Keunggulan Layanan -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <!-- Keunggulan 1 -->
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Keamanan Terjamin</h3>
            <p class="text-gray-600">
              Keamanan adalah prioritas utama kami. Semua penggalian dilakukan dengan prosedur keselamatan yang ketat, memastikan proyek berjalan lancar tanpa risiko kecelakaan.
            </p>
          </div>
          <!-- Keunggulan 2 -->
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Efisiensi Waktu</h3>
            <p class="text-gray-600">
              Kami memastikan bahwa setiap penggalian dilakukan tepat waktu dan sesuai dengan jadwal proyek, meminimalkan gangguan di lapangan dan memastikan kelancaran proyek secara keseluruhan.
            </p>
          </div>
          <!-- Keunggulan 3 -->
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">Profesionalisme</h3>
            <p class="text-gray-600">
              Tim kami terdiri dari tenaga ahli yang berpengalaman dalam berbagai jenis penggalian kabel. Kami bekerja dengan profesionalisme tinggi, menjamin kualitas hasil pekerjaan.
            </p>
          </div>
        </div>
  
        <!-- Proses Penggalian Kabel -->
        <div class="mb-16">
          <h2 class="text-3xl font-semibold text-gray-800 mb-6">Proses Penggalian Kabel</h2>
          <p class="text-gray-600 mb-4">
            Proses penggalian kabel kami terdiri dari beberapa langkah yang dirancang untuk memastikan kualitas dan keamanan. Berikut adalah proses standar yang kami ikuti:
          </p>
          <ol class="text-left text-gray-600 space-y-4 list-decimal list-inside">
            <li>Pemeriksaan lokasi dan persiapan area penggalian.</li>
            <li>Penggalian kabel dengan menggunakan alat berat yang tepat dan aman.</li>
            <li>Pemasangan kabel sesuai dengan standar yang berlaku.</li>
            <li>Pengembalian area ke kondisi semula, memastikan minimalisasi gangguan.</li>
            <li>Pemeriksaan akhir untuk memastikan keamanan dan kualitas penggalian.</li>
          </ol>
        </div>
  
        <!-- Call to Action -->
        <div class="bg-blue-600 text-white py-8 px-6 rounded-lg">
          <h3 class="text-2xl font-semibold mb-4">Siap Memulai Proyek Penggalian Kabel Anda?</h3>
          <p class="mb-6">Hubungi kami hari ini untuk mendapatkan layanan penggalian kabel yang cepat, aman, dan profesional.</p>
          <NuxtLink to="/contact" class="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition">Hubungi Kami</NuxtLink>
        </div>
      </div>
    </section>
  </template>

  <script setup>
  useHead({
  title: 'MItra Gali - Layanan Penggalian Kabel PLN',
  meta: [
    {
      name: 'description',
      content: 'Kami menyediakan solusi penggalian kabel yang aman, cepat, dan efisien untuk kebutuhan listrik, telekomunikasi, dan berbagai proyek lainnya',
    },
  ],
});

</script>
  
  <style scoped>
  /* Styling khusus halaman layanan penggalian kabel */
  </style>
  