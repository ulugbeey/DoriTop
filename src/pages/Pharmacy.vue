<template>
  <div class="max-w-4xl mx-auto px-4 py-8" v-if="pharmacy">

    <!-- Orqaga -->
    <button
      @click="router.back()"
      class="flex items-center gap-2 text-gray-500 hover:text-green-600 mb-6 transition"
    >
      ← Orqaga
    </button>

    <!-- Apteka haqida -->
    <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
      <div class="flex items-center justify-between mb-4">
        <h1 class="text-3xl font-bold text-gray-800">{{ pharmacy.name }}</h1>
        <div class="flex items-center gap-1">
          <span class="text-yellow-400 text-xl">⭐</span>
          <span class="font-bold text-lg">{{ pharmacy.rating }}</span>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-600">
        <div class="flex items-center gap-2">
          <span>📍</span>
          <span>{{ pharmacy.address }}</span>
        </div>
        <div class="flex items-center gap-2">
          <span>📞</span>
          <span>{{ pharmacy.phone }}</span>
        </div>
        <div class="flex items-center gap-2">
          <span>🕐</span>
          <span>{{ pharmacy.hours }}</span>
        </div>
      </div>
    </div>

    <!-- Mavjud dorilar -->
    <h2 class="text-xl font-bold text-gray-800 mb-4">Mavjud dorilar</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="drug in availableDrugs"
        :key="drug.id"
        class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center justify-between"
      >
        <div class="flex items-center gap-3">
          <span class="text-3xl">{{ drug.image }}</span>
          <div>
            <h3 class="font-bold text-gray-800">{{ drug.name }}</h3>
            <p class="text-gray-500 text-sm">{{ drug.category }}</p>
          </div>
        </div>
        <span class="text-green-600 font-bold">
          {{ drug.price.toLocaleString() }} so'm
        </span>
      </div>
    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { pharmacies } from '../data/pharmacies'
import { drugs } from '../data/drugs'

const route = useRoute()
const router = useRouter()

const pharmacy = computed(() =>
  pharmacies.find(p => p.id === Number(route.params.id))
)

const availableDrugs = computed(() => {
  const result = []
  drugs.forEach(drug => {
    const found = drug.pharmacies.find(
      p => p.id === pharmacy.value.id && p.inStock
    )
    if (found) {
      result.push({ ...drug, price: found.price })
    }
  })
  return result
})
</script>