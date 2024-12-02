<template>
  <header class="bg-white text-gray-800 shadow-md sticky top-0 z-50">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo dan Teks -->
        <div class="flex items-center space-x-4">
          <a href="/" class="flex items-center space-x-2">
            <NuxtImg
              src="/images/logo.png"
              width="50"
              height="50"
              quality="80"
              alt="Kembali ke halaman utama"
              loading="lazy"
              class="w-auto h-10"
            />
            <span class="text-gray-800 font-semibold text-lg">Mitra Gali Kabel</span>
          </a>
        </div>

        <!-- Hamburger menu for mobile -->
        <div class="block lg:hidden">
          <button @click="toggleMenu" class="text-gray-800 focus:outline-none z-50" aria-label="Open menu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <!-- Navbar items for desktop -->
        <div class="hidden lg:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <a 
              v-if="currentPage" 
              href="/" 
              :class="currentPage === 'home' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-800 hover:text-blue-600'" 
              class="px-3 py-2 rounded-md text-lg"
            >
              Home
            </a>
            <a 
              v-if="currentPage" 
              href="/about" 
              :class="currentPage === 'about' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-800 hover:text-blue-600'" 
              class="px-3 py-2 rounded-md text-lg"
            >
              About
            </a>
            <a 
              v-if="currentPage" 
              href="/services" 
              :class="currentPage === 'services' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-800 hover:text-blue-600'" 
              class="px-3 py-2 rounded-md text-lg"
            >
              Services
            </a>
            <a 
              v-if="currentPage" 
              href="/contact" 
              :class="currentPage === 'contact' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-800 hover:text-blue-600'" 
              class="px-3 py-2 rounded-md text-lg"
            >
              Contact
            </a>
            <a 
              v-if="currentPage" 
              href="https://blog.maunguli.com/" 
              :class="currentPage === 'blog' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-800 hover:text-blue-600'" 
              class="px-3 py-2 rounded-md text-lg"
            >
              Blog
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="lg:hidden absolute inset-x-0 top-16 bg-white text-gray-800 shadow-lg z-50 p-4">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a 
          v-if="currentPage" 
          href="/" 
          :class="currentPage === 'home' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-800 hover:text-blue-600'" 
          class="block px-3 py-2 rounded-md text-base"
        >
          Home
        </a>
        <a 
          v-if="currentPage" 
          href="/about" 
          :class="currentPage === 'about' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-800 hover:text-blue-600'" 
          class="block px-3 py-2 rounded-md text-base"
        >
          About
        </a>
        <a 
          v-if="currentPage" 
          href="/services" 
          :class="currentPage === 'services' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-800 hover:text-blue-600'" 
          class="block px-3 py-2 rounded-md text-base"
        >
          Services
        </a>
        <a 
          v-if="currentPage" 
          href="/contact" 
          :class="currentPage === 'contact' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-800 hover:text-blue-600'" 
          class="block px-3 py-2 rounded-md text-base"
        >
          Contact
        </a>
        <a 
          v-if="currentPage" 
          href="https://blog.maunguli.com/" 
          :class="currentPage === 'blog' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-800 hover:text-blue-600'" 
          class="block px-3 py-2 rounded-md text-base"
        >
          Blog
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const currentPage = ref(null);
const isMenuOpen = ref(false);

// Fungsi untuk toggle menu mobile
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Deteksi halaman saat ini berdasarkan URL
const detectPage = () => {
  const path = window.location.pathname;

  if (path === '/' || path === '/home') {
    currentPage.value = 'home';
  } else if (path === '/about') {
    currentPage.value = 'about';
  } else if (path === '/services') {
    currentPage.value = 'services';
  } else if (path === '/contact') {
    currentPage.value = 'contact';
  } else if (path.includes('/blog')) {
    currentPage.value = 'blog';
  }
};

// Jalankan fungsi saat komponen dimuat
onMounted(() => {
  detectPage();
});
</script>

<style scoped>
header {
  transition: all 0.3s ease-in-out;
}
</style>
