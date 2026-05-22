<template>
  <div class="max-w-6xl mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold text-gray-800 mb-6">🗺️ Aptekalar xaritasi</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

      <!-- Aptekalar ro'yxati -->
      <div class="flex flex-col gap-4">
        <div
          v-for="pharmacy in pharmacies"
          :key="pharmacy.id"
          @click="selectPharmacy(pharmacy)"
          :class="selected?.id === pharmacy.id ? 'border-green-500 bg-green-50' : 'border-gray-100'"
          class="bg-white rounded-2xl p-4 shadow-sm border-2 cursor-pointer hover:border-green-400 transition"
        >
          <h3 class="font-bold text-gray-800">{{ pharmacy.name }}</h3>
          <p class="text-gray-500 text-sm">📍 {{ pharmacy.address }}</p>
          <p class="text-gray-500 text-sm">📞 {{ pharmacy.phone }}</p>
          <p class="text-gray-500 text-sm">🕐 {{ pharmacy.hours }}</p>
          <div class="flex items-center gap-1 mt-2">
            <span class="text-yellow-400">⭐</span>
            <span class="text-sm font-semibold">{{ pharmacy.rating }}</span>
          </div>
        </div>
      </div>

      <!-- Xarita -->
      <div class="md:col-span-2">
        <div id="map" class="w-full h-[500px] rounded-2xl shadow-sm z-0"></div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { pharmacies } from '../data/pharmacies'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const selected = ref(null)
let map = null
let markers = []

onMounted(() => {
  // Xarita yaratish — Toshkent markazi
  map = L.map('map').setView([41.3111, 69.2797], 12)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(map)

  // Markerlar qo'shish
  pharmacies.forEach(pharmacy => {
    const marker = L.marker([pharmacy.lat, pharmacy.lng])
      .addTo(map)
      .bindPopup(`
        <b>${pharmacy.name}</b><br>
        ${pharmacy.address}<br>
        ${pharmacy.hours}
      `)
    markers.push({ id: pharmacy.id, marker })
  })
})

function selectPharmacy(pharmacy) {
  selected.value = pharmacy
  map.setView([pharmacy.lat, pharmacy.lng], 15)
  const found = markers.find(m => m.id === pharmacy.id)
  if (found) found.marker.openPopup()
}
</script>