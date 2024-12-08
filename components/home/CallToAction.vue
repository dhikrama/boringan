<template>
  <DelayHydration>
  <section class="bg-blue-600 text-white py-12 px-6">
    <div class="container mx-auto text-center space-y-6">
      <!-- Judul CTA -->
      <h2 class="text-3xl font-bold">Hubungi Kami Sekarang!</h2>
      <p class="text-lg">
        Kami siap membantu Anda dengan solusi terbaik untuk kebutuhan Anda. Klik tombol di bawah untuk segera menghubungi kami!
      </p>

      <!-- Tombol CTA -->
      <div class="flex justify-center gap-4">
        <!-- Tombol WhatsApp -->
        <a
          href="https://wa.me/6283113444750" 
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 bg-green-700 hover:bg-green-700 text-white px-6 py-3 rounded-md shadow-md transition-all"
        >
          <Icon name="mdi:whatsapp" class="w-5 h-5" />
          WhatsApp
        </a>

        <!-- Tombol Halaman Kontak -->
        <NuxtLink
          to="/contact" 
          class="flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-200 px-6 py-3 rounded-md shadow-md transition-all"
        >
          <Icon name="mdi:email-outline" class="w-5 h-5" />
         Kontak
        </NuxtLink>
      </div>
    </div>
  </section>
</DelayHydration>
</template>

<script setup>
// Tidak diperlukan import tambahan jika menggunakan Nuxt Link dan Nuxt Icon
</script>

<style scoped>
/* Anda bisa menambahkan styling tambahan jika diperlukan */
</style>
