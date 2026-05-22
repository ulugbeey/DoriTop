import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  const total = computed(() =>
    items.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  )

  const count = computed(() =>
    items.value.reduce((sum, item) => sum + item.quantity, 0)
  )

  function add(item) {
    const existing = items.value.find(
      i => i.drugId === item.drugId && i.pharmacyName === item.pharmacyName
    )
    if (existing) {
      existing.quantity++
    } else {
      items.value.push({ ...item, quantity: 1 })
    }
  }

  function remove(index) {
    items.value.splice(index, 1)
  }

  function increment(index) {
    items.value[index].quantity++
  }

  function decrement(index) {
    if (items.value[index].quantity > 1) {
      items.value[index].quantity--
    } else {
      remove(index)
    }
  }

  function clear() {
    items.value = []
  }

  return { items, total, count, add, remove, clear, increment, decrement }
})