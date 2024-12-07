<template>
  <div class="bg-gray-50 py-16 min-h-screen">
    <div class="max-w-6xl mx-auto px-4">
      <!-- Judul Halaman -->
      <h1 class="text-3xl font-bold text-gray-800 text-center mb-6">Kontak Kami</h1>
      <p class="text-gray-600 text-center mb-12">
        Hubungi kami melalui informasi di bawah ini atau isi formulir, dan kami akan segera menghubungi Anda!
      </p>

      <!-- Informasi Kontak -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 text-center">
        <!-- Nomor Telepon -->
        <div>
          <div class="flex justify-center items-center text-purple-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10l1.4-1.4c.4-.4.9-.6 1.4-.6h12.4c.5 0 1 .2 1.4.6L21 10v10c0 1-.8 2-2 2H5c-1.1 0-2-.9-2-2V10z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-800">Telepon</h3>
          <p class="text-gray-600">+62 831-1344-4750</p>
        </div>
        <!-- Email -->
        <div>
          <div class="flex justify-center items-center text-purple-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v4l-4 2.5L8 9V5h8z" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-800">Email</h3>
          <p class="text-gray-600">rajaboringan@gmail.com</p>
        </div>
        <!-- Alamat -->
        <div>
          <div class="flex justify-center items-center text-purple-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2a6 6 0 016 6c0 5.25-6 10.92-6 10.92S6 13.25 6 8a6 6 0 016-6z" />
              <circle cx="12" cy="8" r="2" stroke="none" />
            </svg>
          </div>
          <h3 class="text-lg font-semibold text-gray-800">Alamat</h3>
          <p class="text-gray-600">Jl. Konstruksi No. 123, Jakarta, Indonesia</p>
        </div>
      </div>

      <!-- Formulir Kontak -->
      <form @submit.prevent="submitForm" class="bg-white shadow-lg rounded-lg p-8">
        <!-- Nama -->
        <div class="mb-6">
          <label for="name" class="block text-gray-700 font-medium mb-2">Nama</label>
          <input
            id="name"
            v-model="formData.name"
            type="text"
            placeholder="Masukkan nama Anda"
            class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
            required
          />
        </div>
        <!-- Email -->
        <div class="mb-6">
          <label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            placeholder="Masukkan email Anda"
            class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
            required
          />
        </div>
        <!-- Pesan -->
        <div class="mb-6">
          <label for="message" class="block text-gray-700 font-medium mb-2">Pesan</label>
          <textarea
            id="message"
            v-model="formData.message"
            rows="5"
            placeholder="Tuliskan pesan Anda"
            class="w-full border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
            required
          ></textarea>
        </div>
        <!-- Tombol Submit -->
        <div class="text-center">
          <button
            type="submit"
            class="bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition"
          >
            Kirim Pesan
          </button>
        </div>
      </form>

      <!-- Notifikasi -->
      <div v-if="successMessage" class="mt-6 text-center text-green-600 font-medium">
        {{ successMessage }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      successMessage: "",
    };
  },
  methods: {
    submitForm() {
      // Simulasi pengiriman data
      console.log("Form Data:", this.formData);

      // Reset form dan tampilkan pesan sukses
      this.successMessage =
        "Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda!";
      this.formData = { name: "", email: "", message: "" };

      // Pesan hilang setelah beberapa detik
      setTimeout(() => {
        this.successMessage = "";
      }, 5000);
    },
  },
};
</script>

<style scoped>
/* Tambahkan gaya jika diperlukan */
</style>
