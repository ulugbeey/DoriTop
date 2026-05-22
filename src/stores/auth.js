import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)

  const isLoggedIn = computed(() => !!user.value)
  const isSeller = computed(() => user.value?.role === 'seller')
  const isBuyer = computed(() => user.value?.role === 'buyer')

  function loginAsSeller(data) {
    user.value = {
      role: 'seller',
      name: data.name,
      pharmacyId: data.pharmacyId,
    }
  }

  function loginAsBuyer(data) {
    user.value = {
      role: 'buyer',
      name: data.name,
    }
  }

  function logout() {
    user.value = null
  }

  return { user, isLoggedIn, isSeller, isBuyer, loginAsSeller, loginAsBuyer, logout }
})