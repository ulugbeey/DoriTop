<template>
  <nav class="bg-white shadow-md sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

      <!-- Logo -->
      <RouterLink to="/" class="text-2xl font-bold text-green-600">
        💊 Apteka.uz
      </RouterLink>

      <!-- Menu -->
      <div class="hidden md:flex items-center gap-6">
        <template v-if="!auth.isSeller">
          <RouterLink to="/" class="text-gray-600 hover:text-green-600 transition" active-class="text-green-600 font-semibold">
            Bosh sahifa
          </RouterLink>
          <RouterLink to="/map" class="text-gray-600 hover:text-green-600 transition" active-class="text-green-600 font-semibold">
            Xarita
          </RouterLink>
        </template>
        <template v-else>
          <RouterLink to="/seller" class="text-gray-600 hover:text-blue-600 transition" active-class="text-blue-600 font-semibold">
            Dashboard
          </RouterLink>
          <RouterLink to="/seller/drugs" class="text-gray-600 hover:text-blue-600 transition" active-class="text-blue-600 font-semibold">
            Dorilar
          </RouterLink>
          <RouterLink to="/seller/orders" class="text-gray-600 hover:text-blue-600 transition" active-class="text-blue-600 font-semibold">
            Buyurtmalar
          </RouterLink>
        </template>
      </div>

      <!-- O'ng tomon -->
      <div class="flex items-center gap-4">
        <!-- Kirmagan -->
        <template v-if="!auth.isLoggedIn">
          <RouterLink to="/login/buyer" class="text-gray-600 hover:text-green-600 transition text-sm">
            Kirish
          </RouterLink>
          <RouterLink to="/login/seller" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm transition">
            Sotuvchi
          </RouterLink>
        </template>

        <!-- Kirgan -->
        <template v-else>
          <span class="text-gray-600 text-sm">👤 {{ auth.user.name }}</span>
          <button
            @click="logout"
            class="text-red-400 hover:text-red-600 text-sm transition"
          >
            Chiqish
          </button>
        </template>

        <!-- Savat (faqat xaridor) -->
        <RouterLink v-if="!auth.isSeller" to="/cart" class="relative">
          <span class="text-2xl">🛒</span>
          <span class="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {{ cartStore.count }}
          </span>
        </RouterLink>
      </div>

    </div>
  </nav>
</template>

<script setup>
import { useAuthStore } from '../stores/auth'
import { useCartStore } from '../stores/cart'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const cartStore = useCartStore()
const router = useRouter()

function logout() {
  auth.logout()
  router.push('/')
}
</script>