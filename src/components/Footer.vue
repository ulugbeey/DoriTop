<template>
  <footer class="bg-green-800 text-white mt-16 py-10 px-4">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

      <!-- Logo -->
      <div>
        <h2 class="text-2xl font-bold mb-3">💊 Apteka.uz</h2>
        <p class="text-green-200 text-sm">
          O'zbekistondagi barcha aptekalar bir joyda. Dori narxlarini solishtiring, yaqin aptekani toping.
        </p>
      </div>

      <!-- Havolalar -->
      <div>
        <h3 class="font-semibold mb-3">Sahifalar</h3>
        <ul class="flex flex-col gap-2 text-green-200 text-sm">
          <li><RouterLink to="/" class="hover:text-white transition">Bosh sahifa</RouterLink></li>
          <li><RouterLink to="/map" class="hover:text-white transition">Xarita</RouterLink></li>
          <li><RouterLink to="/cart" class="hover:text-white transition">Savat</RouterLink></li>
        </ul>
      </div>

      <!-- Kontakt -->
      <div>
        <h3 class="font-semibold mb-3">Aloqa</h3>
        <ul class="flex flex-col gap-2 text-green-200 text-sm">
          <li>📞 +998 71 000 00 00</li>
          <li>📧 info@apteka.uz</li>
          <li>📍 Toshkent, O'zbekiston</li>
        </ul>
      </div>

    </div>

    <div class="max-w-6xl mx-auto border-t border-green-700 mt-8 pt-6 text-center text-green-300 text-sm">
      © 2025 Apteka.uz — Barcha huquqlar himoyalangan
    </div>
  </footer>
</template>