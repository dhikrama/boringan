<template>
  <div class="min-h-screen bg-white">
    <!-- Header dengan Latar Belakang Biru -->
    <div class="bg-blue-600 text-white py-12 text-center">
      <h1 class="text-4xl font-bold mb-4">Get In Touch</h1>
      <p class="text-lg">
        Drop us a line or visit us for a cup of coffee! We're glad to see our friends!
      </p>
    </div>

    <!-- Konten Utama -->
    <div class="max-w-4xl mx-5 bg-white rounded-lg shadow-lg mt-[-50px] overflow-hidden md:flex">
      <!-- Bagian Informasi Kontak -->
      <div class="bg-green-100 text-gray-800 p-12 md:w-1/2 flex flex-col justify-center">
        <ul class="space-y-4 text-lg">
          <li>
            <span class="font-semibold">Alamat:</span> Jl. Dukuh Nanggerang desa Cikuya banjarharjo
          </li>
          <li>
            <span class="font-semibold">Telepon:</span> +62 831-1344-4750
          </li>
          <li>
            <span class="font-semibold">Email:</span> rajaboringan@gmail.com
          </li>
        </ul>
      </div>

      <!-- Formulir Kontak -->
      <div class="p-12 md:w-1/2 bg-white">
        <form @submit.prevent="submitForm" class="space-y-6">
          <!-- Nama -->
          <div>
            <label for="name" class="block text-gray-700 font-medium mb-2">Nama</label>
            <input
              id="name"
              v-model="formData.name"
              type="text"
              placeholder="Masukkan nama Anda"
              class="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              placeholder="Masukkan email Anda"
              class="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <!-- Pesan -->
          <div>
            <label for="message" class="block text-gray-700 font-medium mb-2">Pesan</label>
            <textarea
              id="message"
              v-model="formData.message"
              rows="5"
              placeholder="Tuliskan pesan Anda"
              class="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            ></textarea>
          </div>

          <!-- Tombol Submit -->
          <div>
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full py-3 rounded-lg text-white font-medium transition focus:outline-none"
              :class="isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'"
            >
              {{ isSubmitting ? 'Mengirim...' : 'Kirim Pesan' }}
            </button>
          </div>
        </form>

        <!-- Notifikasi -->
        <div v-if="successMessage" class="mt-6 text-center text-green-600 font-medium">
          {{ successMessage }}
        </div>
        <div v-if="errorMessage" class="mt-6 text-center text-red-600 font-medium">
          {{ errorMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useNuxtApp } from '#app';

const { $mail } = useNuxtApp();

const formData = ref({
  name: '',
  email: '',
  message: '',
});

const isSubmitting = ref(false); // Status tombol
const successMessage = ref('');
const errorMessage = ref('');

const submitForm = async () => {
  isSubmitting.value = true; // Tombol dinonaktifkan saat proses
  successMessage.value = '';
  errorMessage.value = '';

  try {
    await $mail.send({
      from: 'info@boringan.com',
      to: 'info@boringan.com',
      replyTo: formData.value.email,
      subject: `Pesan dari ${formData.value.name}`,
      text: `
        Nama: ${formData.value.name}
        Email: ${formData.value.email}
        Pesan:
        ${formData.value.message}
      `,
    });
    successMessage.value = 'Pesan berhasil dikirim!';
    formData.value = { name: '', email: '', message: '' }; // Reset form
  } catch (error) {
    errorMessage.value = 'Terjadi kesalahan saat mengirim pesan.';
    console.error(error); // Debugging
  } finally {
    isSubmitting.value = false; // Tombol diaktifkan kembali
  }
};
</script>

<style scoped>
/* Tambahkan gaya tambahan jika diperlukan */
</style>
