<template>
  <footer class="bg-gray-900 text-white py-10 pr-4 pl-4">
    <DelayHydration>
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Tentang Kami -->
        <div>
          <h4 class="text-xl font-semibold text-yellow-500 mb-4">Tentang Mitra Gali Kabel</h4>
          <p class="text-gray-300">
            Mitra Gali Kabel adalah mitra terpercaya untuk proyek infrastruktur Anda. Kami menyediakan layanan penggalian kabel berkualitas tinggi dengan tenaga kerja profesional dan berpengalaman.
          </p>
        </div>

        <!-- Layanan Kami -->
        <div>
          <h4 class="text-xl font-semibold text-yellow-500 mb-4">Layanan Kami</h4>
          <ul>
            <li>
              <NuxtLink to="/services/pln" class="text-gray-300 hover:text-yellow-500">
                Penggalian kabel PLN
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services/pju" class="text-gray-300 hover:text-yellow-500">
                Pemasangan Kabel PJU
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services/cctv" class="text-gray-300 hover:text-yellow-500">
                Pengalian Kabel CCTV 
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Hubungi Kami -->
        <div>
          <h4 class="text-xl font-semibold text-yellow-500 mb-4">Hubungi Kami</h4>
          <p class="text-gray-300">
            <strong>Alamat:</strong> Jl. Dukuh Nanggerang desa Cikuya banjarharjo<br>
            <strong>Telepon:</strong>
            <a href="tel:+628123456789" class="text-yellow-500 hover:underline">
              +62 831-1344-4750
            </a><br>
            <strong>Email:</strong>
            <a href="mailto:rajaboringan@gmail.com" class="text-yellow-500 hover:underline">
              rajaboringan@gmail.com
            </a>
          </p>
          
          <!-- Ikon Media Sosial -->
          <div class="flex mt-4 space-x-4">
            <a 
              href="https://facebook.com/mitragalikabel" 
              target="_blank" 
              aria-label="Kunjungi Facebook Mitra Gali Kabel"
              class="text-yellow-500 hover:text-white"
            >
              <Icon name="uil:facebook" class="w-6 h-6" />
            </a>
            
            <a 
              href="https://instagram.com/mitragalikabel" 
              target="_blank" 
              aria-label="Kunjungi Instagram Mitra Gali Kabel"
              class="text-yellow-500 hover:text-white"
            >
              <Icon name="uil:instagram" class="w-6 h-6" />
            </a>
            
            <a 
              href="https://linkedin.com/company/mitragalikabel" 
              target="_blank" 
              aria-label="Kunjungi LinkedIn Mitra Gali Kabel"
              class="text-yellow-500 hover:text-white"
            >
              <Icon name="uil:linkedin" class="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        &copy; 2024 Mitra Gali Kabel. Semua Hak Dilindungi.
      </div>
    </DelayHydration>
  </footer>
</template>

<script setup>
</script>
