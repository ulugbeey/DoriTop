<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold text-gray-800 mb-6">🛒 Savat</h1>

    <!-- Savat bo'sh -->
    <div v-if="cartStore.items.length === 0" class="text-center py-20 text-gray-400">
      <div class="text-6xl mb-4">🛒</div>
      <p class="text-xl">Savat bo'sh</p>
      <RouterLink to="/" class="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
        Dori qidirish
      </RouterLink>
    </div>

    <!-- Savatdagi dorilar -->
    <div v-else>
      <div class="flex flex-col gap-4 mb-8">
        <div
          v-for="(item, index) in cartStore.items"
          :key="index"
          class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center justify-between"
        >
          <div class="flex items-center gap-4">
            <span class="text-4xl">{{ item.image }}</span>
            <div>
              <h3 class="font-bold text-gray-800">{{ item.drugName }}</h3>
              <p class="text-gray-500 text-sm">{{ item.pharmacyName }}</p>
            </div>
          </div>

          <div class="flex items-center gap-6">
            <!-- Miqdor -->
            <div class="flex items-center gap-2">
              <button
                @click="cartStore.decrement(index)"
                class="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 font-bold transition"
              >
                −
              </button>
              <span class="font-semibold w-4 text-center">{{ item.quantity }}</span>
              <button
                @click="cartStore.increment(index)"
                class="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 font-bold transition"
              >
                +
              </button>
            </div>

            <!-- Narx -->
            <span class="text-green-600 font-bold text-lg w-32 text-right">
              {{ (item.price * item.quantity).toLocaleString() }} so'm
            </span>

            <!-- O'chirish -->
            <button
              @click="cartStore.remove(index)"
              class="text-red-400 hover:text-red-600 transition text-xl"
            >
              ✕
            </button>
          </div>
        </div>
      </div>

      <!-- Jami -->
      <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div class="flex justify-between items-center mb-4">
          <span class="text-gray-600">Jami:</span>
          <span class="text-2xl font-bold text-green-600">
            {{ cartStore.total.toLocaleString() }} so'm
          </span>
        </div>
        <button
          class="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-semibold transition"
        >
          Buyurtma berish
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'
const cartStore = useCartStore()
</script>