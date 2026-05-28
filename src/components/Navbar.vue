<template>
  <nav class="bg-black shadow-bottom sticky top-0 py-3.5">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-around">

      <!-- Logo -->
      <RouterLink to="/" class="text-2xl font-bold text-white">
        PITMAX
      </RouterLink>

      <!-- Menu -->
      <div class="hidden md:flex items-center gap-6">
          <RouterLink to="/" class="text-gray-600 hover:underline decoration-red-500 underline-offset-8" active-class="text-red-500 font-semibold">
            Bosh sahifa
          </RouterLink>
          <RouterLink to="/map" class="text-gray-600 hover:underline decoration-red-500 underline-offset-8" active-class="text-red-500 font-semibold">
            Ustalar
          </RouterLink>
          <RouterLink to="/" class="text-gray-600 hover:underline decoration-red-500 underline-offset-8" active-class="text-red-500 font-semibold">
            Xizmatlar
          </RouterLink>
          <RouterLink to="/" class="text-gray-600 hover:underline decoration-red-500 underline-offset-8" active-class="text-red-500 font-semibold">
            Narxlar
          </RouterLink>
          <RouterLink to="/" class="text-gray-600 hover:underline decoration-red-500 underline-offset-8" active-class="text-red-500 font-semibold">
            Aloqa
          </RouterLink>
      </div>

      <!-- O'ng tomon -->
      <div>
          <button class="bg-red-500 py-2 px-2 rounded text-white text-sm hover:bg-red-600 transition">
            Usta bo'lish
          </button>
      </div>

    </div>
  </nav>
</template>


        <!-- <template v-else>
          <RouterLink to="/seller" class="text-gray-600 hover:text-blue-600 transition" active-class="text-blue-600 font-semibold">
            Dashboard
          </RouterLink>
          <RouterLink to="/seller/drugs" class="text-gray-600 hover:text-blue-600 transition" active-class="text-blue-600 font-semibold">
            Dorilar
          </RouterLink>
          <RouterLink to="/seller/orders" class="text-gray-600 hover:text-blue-600 transition" active-class="text-blue-600 font-semibold">
            Buyurtmalar
          </RouterLink>
        </template> -->