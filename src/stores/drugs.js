import { defineStore } from 'pinia'
import { ref } from 'vue'
import { drugs } from '../data/drugs'

export const useDrugsStore = defineStore('drugs', () => {
  const results = ref([])
  const query = ref('')

  function search(searchQuery) {
    query.value = searchQuery
    results.value = drugs.filter(d =>
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  return { results, query, search }
})