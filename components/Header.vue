<template>
  <nav class="bg-blue-600 text-white py-4 shadow-md sticky top-0 z-50">
    <div class="container mx-auto flex items-center justify-between px-6">
      <!-- Logo (Teks) -->
      <div class="text-3xl font-extrabold">
        <NuxtLink to="/" class="flex items-center space-x-2">
          <span class="text-white">Mitra</span>
          <span class="text-indigo-200">Gali Kabel</span>
        </NuxtLink>
      </div>

      <!-- Menu Items (Desktop) -->
      <div class="hidden md:flex items-center space-x-8">
        <NuxtLink to="/" class="hover:text-indigo-200 transition duration-300">Beranda</NuxtLink>
        <NuxtLink to="/about" class="hover:text-indigo-200 transition duration-300">Tentang Kami</NuxtLink>

        <!-- Dropdown for Services -->
        <div
          class="relative"
          @mouseenter="openDropdown"
          @mouseleave="closeDropdown"
        >
          <button class="flex items-center space-x-2 focus:outline-none" aria-label="Buka menu layanan">
            <span>Layanan</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <!-- Dropdown Content -->
          <div
            v-if="isDropdownOpen"
            class="absolute left-0 bg-white text-black shadow-lg rounded-md mt-2 w-64 p-4 z-50 transition-all ease-in-out duration-300"
          >
            <NuxtLink to="/services/pln" class="block px-4 py-2 hover:bg-indigo-100 rounded-md transition-all duration-300" @click="closeDropdown">Gali Kabel PLN</NuxtLink>
            <NuxtLink to="/services/pju" class="block px-4 py-2 hover:bg-indigo-100 rounded-md transition-all duration-300" @click="closeDropdown">Gali Kabel PJU</NuxtLink>
            <NuxtLink to="/services/cctv" class="block px-4 py-2 hover:bg-indigo-100 rounded-md transition-all duration-300" @click="closeDropdown">Gali Kabel CCTV</NuxtLink>
            <NuxtLink to="/services/fiber-optic" class="block px-4 py-2 hover:bg-indigo-100 rounded-md transition-all duration-300" @click="closeDropdown">Gali Kabel Fiber Optic</NuxtLink>
          </div>
        </div>

        <NuxtLink to="https://rajaboringan.blogspot.com/" class="hover:text-indigo-200 transition duration-300">Blog</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-indigo-200 transition duration-300">Hubungi Kami</NuxtLink>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <button 
          @click="toggleMobileMenu" 
          aria-label="Buka menu navigasi" 
          :aria-expanded="isMobileMenuOpen.toString()" 
          aria-controls="mobile-menu"
          class="focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div v-if="isMobileMenuOpen" id="mobile-menu" class="md:hidden bg-blue-600 text-white shadow-lg p-4 space-y-4">
      <NuxtLink to="/" class="block hover:text-indigo-200 transition duration-300" @click="closeMobileMenu">Beranda</NuxtLink>
      <NuxtLink to="/about" class="block hover:text-indigo-200 transition duration-300" @click="closeMobileMenu">Tentang Kami</NuxtLink>

      <!-- Mobile Dropdown for Services -->
      <div>
        <button 
          class="flex items-center space-x-2 focus:outline-none w-full text-left" 
          @click="toggleDropdownMobile"
          aria-label="Buka menu layanan"
        >
          <span>Layanan</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div v-if="isDropdownMobileOpen" class="bg-white text-black rounded-md mt-2 p-4">
          <NuxtLink to="/services/pln" class="block hover:bg-indigo-100 px-4 py-2 rounded-md transition-all duration-300" @click="closeMobileMenu">Gali Kabel PLN</NuxtLink>
          <NuxtLink to="/services/pju" class="block hover:bg-indigo-100 px-4 py-2 rounded-md transition-all duration-300" @click="closeMobileMenu">Gali Kabel PJU</NuxtLink>
          <NuxtLink to="/services/cctv" class="block hover:bg-indigo-100 px-4 py-2 rounded-md transition-all duration-300" @click="closeMobileMenu">Gali Kabel PJU</NuxtLink>
          <NuxtLink to="/services/fiber-optic" class="block hover:bg-indigo-100 px-4 py-2 rounded-md transition-all duration-300" @click="closeMobileMenu">Gali Kabel PJU</NuxtLink>
        </div>
      </div>

      <NuxtLink to="https://rajaboringan.blogspot.com/" class="block hover:text-indigo-200 transition duration-300" @click="closeMobileMenu">Blog</NuxtLink>
      <NuxtLink to="/contact" class="block hover:text-indigo-200 transition duration-300" @click="closeMobileMenu">Hubungi Kami</NuxtLink>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
      isMobileMenuOpen: false,
      isDropdownMobileOpen: false,
    };
  },
  methods: {
    openDropdown() {
      this.isDropdownOpen = true;
    },
    closeDropdown() {
      this.isDropdownOpen = false;
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    },
    toggleDropdownMobile() {
      this.isDropdownMobileOpen = !this.isDropdownMobileOpen;
    },
  },
};
</script>
