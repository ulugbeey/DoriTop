<template>
  <RouterLink :to="`/drug/${drug.id}`">
    <div class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-gray-100 cursor-pointer">
      <div class="text-5xl mb-3">{{ drug.image }}</div>
      <h3 class="text-lg font-bold text-gray-800">{{ drug.name }}</h3>
      <p class="text-gray-500 text-sm mb-3">{{ drug.description }}</p>
      <div class="flex items-center justify-between">
        <span class="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
          {{ drug.category }}
        </span>
        <span class="text-green-600 font-semibold">
          {{ minPrice(drug) }} so'm dan
        </span>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
const props = defineProps({
  drug: Object
})

function minPrice(drug) {
  const prices = drug.pharmacies.map(p => p.price)
  return Math.min(...prices).toLocaleString()
}
</script>