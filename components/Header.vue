<template>
  <nav class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4">
    <div class="container mx-auto flex items-center justify-between px-6">
      <!-- Logo -->
      <div class="text-2xl font-bold">
        <NuxtLink to="/" class="flex items-center space-x-2">
          <img src="/images/logo.png" alt="Mitra Gali Kabel" class="w-8 h-8" />
          <span>Mitra Gali Kabel</span>
        </NuxtLink>
      </div>

      <!-- Menu Items (Desktop) -->
      <div class="hidden md:flex items-center space-x-8 relative">
        <NuxtLink to="/" class="hover:underline">Beranda</NuxtLink>
        <NuxtLink to="/about" class="hover:underline">Tentang Kami</NuxtLink>

        <!-- Dropdown for Services -->
        <div 
          class="relative"
          @mouseenter="openDropdown" 
          @mouseleave="closeDropdown"
        >
          <button class="flex items-center space-x-2 focus:outline-none">
            <span>Layanan</span>
            <!-- Chevron Down Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <!-- Dropdown Content -->
          <div
            v-if="isDropdownOpen"
            class="absolute left-1/2 transform -translate-x-1/2 bg-white text-black shadow-lg rounded-md mt-2 grid grid-cols-2 gap-4 w-64 p-4 z-50"
            @mouseenter="openDropdown"
            @mouseleave="closeDropdown"
          >
            <NuxtLink
              to="/services/pln"
              class="flex items-center space-x-2 hover:bg-blue-100 px-4 py-2 rounded-md"
              @click="closeDropdown"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11.93a1 1 0 01-2 0V10a1 1 0 012 0v3.93zM9 7a1 1 0 112 0v1a1 1 0 01-2 0V7z" />
              </svg>
              <span>Gali Kabel PLN</span>
            </NuxtLink>
            <NuxtLink
              to="/services/pju"
              class="flex items-center space-x-2 hover:bg-blue-100 px-4 py-2 rounded-md"
              @click="closeDropdown"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 2a7 7 0 100 14 7 7 0 000-14zm3 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Gali Kabel PJU</span>
            </NuxtLink>
            <NuxtLink
              to="/services/cctv"
              class="flex items-center space-x-2 hover:bg-blue-100 px-4 py-2 rounded-md"
              @click="closeDropdown"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2H4zm10 2v8h2V6h-2zm2-2a2 2 0 012 2v8a2 2 0 01-2 2h-2v-2h2V6h-2V4h2z" />
              </svg>
              <span>Gali Kabel CCTV</span>
            </NuxtLink>
            <NuxtLink
              to="/services/fiber-optic"
              class="flex items-center space-x-2 hover:bg-blue-100 px-4 py-2 rounded-md"
              @click="closeDropdown"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 4a4 4 0 00-8 0v8a4 4 0 008 0V4zm3 0a1 1 0 10-2 0v8a1 1 0 002 0V4z" />
              </svg>
              <span>Gali Kabel Fiber Optic</span>
            </NuxtLink>
          </div>
        </div>

        <NuxtLink to="/contact" class="hover:underline">Hubungi Kami</NuxtLink>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <button @click="toggleMobileMenu" class="focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div v-if="isMobileMenuOpen" class="md:hidden bg-white text-black shadow-lg p-4 space-y-4">
      <NuxtLink to="/" class="block hover:underline" @click="closeMobileMenu">Beranda</NuxtLink>
      <NuxtLink to="/about" class="block hover:underline" @click="closeMobileMenu">Tentang Kami</NuxtLink>
      <NuxtLink to="/services/pln" class="block hover:underline" @click="closeMobileMenu">Gali Kabel PLN</NuxtLink>
      <NuxtLink to="/services/pju" class="block hover:underline" @click="closeMobileMenu">Gali Kabel PJU</NuxtLink>
      <NuxtLink to="/services/cctv" class="block hover:underline" @click="closeMobileMenu">Gali Kabel CCTV</NuxtLink>
      <NuxtLink to="/services/fiber-optic" class="block hover:underline" @click="closeMobileMenu">Gali Kabel Fiber Optic</NuxtLink>
      <NuxtLink to="/contact" class="block hover:underline" @click="closeMobileMenu">Hubungi Kami</NuxtLink>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)
const isDropdownOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const openDropdown = () => {
  isDropdownOpen.value = true
}

const closeDropdown = () => {
  isDropdownOpen.value = false
}
</script>

<style scoped>
.group:hover .group-hover\\:grid {
  display: grid !important;
}

@media (min-width: 768px) {
  /* Dropdown stays below the menu */
  .absolute {
    top: 100%;
  }
}
</style>
