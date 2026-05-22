<template>
  <div class="max-w-4xl mx-auto px-4 py-8" v-if="drug">
    
    <!-- Orqaga -->
    <button 
      @click="router.back()" 
      class="flex items-center gap-2 text-gray-500 hover:text-green-600 mb-6 transition"
    >
      ← Orqaga
    </button>

    <!-- Dori haqida -->
    <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
      <div class="flex items-center gap-6">
        <div class="text-7xl">{{ drug.image }}</div>
        <div>
          <h1 class="text-3xl font-bold text-gray-800">{{ drug.name }}</h1>
          <p class="text-gray-500 mt-2">{{ drug.description }}</p>
          <span class="mt-3 inline-block text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
            {{ drug.category }}
          </span>
        </div>
      </div>
    </div>

    <!-- Aptekalar -->
    <h2 class="text-xl font-bold text-gray-800 mb-4">Aptekalardagi narxlar</h2>
    <div class="flex flex-col gap-4">
      <div
        v-for="pharmacy in sortedPharmacies"
        :key="pharmacy.id"
        class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center justify-between"
      >
        <div>
          <h3 class="font-bold text-gray-800">{{ pharmacy.name }}</h3>
          <p class="text-gray-500 text-sm">📍 {{ pharmacy.address }}</p>
          <span 
            :class="pharmacy.inStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-500'"
            class="text-xs px-3 py-1 rounded-full mt-1 inline-block"
          >
            {{ pharmacy.inStock ? 'Mavjud' : 'Mavjud emas' }}
          </span>
        </div>
        <div class="text-right">
          <div class="text-2xl font-bold text-green-600">
            {{ pharmacy.price.toLocaleString() }} so'm
          </div>
          <button
            v-if="pharmacy.inStock"
            @click="addToCart(pharmacy)"
            class="mt-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm transition"
          >
            Savatga qo'sh
          </button>
        </div>
      </div>
    </div>

  </div>

  <!-- Topilmadi -->
  <div v-else class="text-center py-20 text-gray-400">
    <div class="text-6xl mb-4">😕</div>
    <p class="text-xl">Dori topilmadi</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { drugs } from '../data/drugs'
import { useCartStore } from '../stores/cart'

const route = useRoute()
const router = useRouter()
const cartStore = useCartStore()

const drug = computed(() => drugs.find(d => d.id === Number(route.params.id)))

const sortedPharmacies = computed(() => {
  return [...drug.value.pharmacies].sort((a, b) => a.price - b.price)
})

function addToCart(pharmacy) {
  console.log('bosildi!')
  cartStore.add({
    drugId: drug.value.id,
    drugName: drug.value.name,
    pharmacyName: pharmacy.name,
    price: pharmacy.price,
    image: drug.value.image,
  })
}
</script>