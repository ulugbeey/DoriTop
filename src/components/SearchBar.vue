<template>
  <div class="relative w-full max-w-2xl">
    <input
      v-model="query"
      @keyup.enter="search"
      type="text"
      placeholder="Dori nomini kiriting... (masalan: Paracetamol)"
      class="w-full px-6 py-4 rounded-full border-2 border-green-400 outline-none focus:border-green-600 text-lg shadow-md"
    />
    <button
      @click="search"
      class="absolute right-2 top-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition"
    >
      Qidirish
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const query = ref('')
const router = useRouter()

function search() {
  if (query.value.trim()) {
    router.push({ path: '/search', query: { q: query.value } })
  }
}
</script>