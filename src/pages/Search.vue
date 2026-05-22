<template>
  <div class="max-w-6xl mx-auto px-4 py-8">

    <!-- Qidiruv -->
    <div class="flex justify-center mb-8">
      <SearchBar />
    </div>

    <!-- Natijalar -->
    <div v-if="store.results.length > 0">
      <h2 class="text-xl font-semibold text-gray-700 mb-4">
        "{{ store.query }}" — {{ store.results.length }} ta natija
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DrugCard
          v-for="drug in store.results"
          :key="drug.id"
          :drug="drug"
        />
      </div>
    </div>

    <!-- Natija yo'q -->
    <div v-else-if="store.query" class="text-center py-20 text-gray-400">
      <div class="text-6xl mb-4">🔍</div>
      <p class="text-xl">"{{ store.query }}" topilmadi</p>
    </div>

  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useDrugsStore } from '../stores/drugs'
import SearchBar from '../components/SearchBar.vue'
import DrugCard from '../components/DrugCard.vue'

const route = useRoute()
const store = useDrugsStore()

onMounted(() => {
  if (route.query.q) {
    store.search(route.query.q)
  }
})
</script>