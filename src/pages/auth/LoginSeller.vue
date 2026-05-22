<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4">
    <div class="bg-white rounded-2xl shadow-md p-8 w-full max-w-md">

      <!-- Logo -->
      <div class="text-center mb-8">
        <div class="text-5xl mb-3">🏪</div>
        <h1 class="text-2xl font-bold text-blue-700">Apteka.uz</h1>
        <p class="text-gray-500 mt-1">Sotuvchi sifatida kiring</p>
      </div>

      <!-- Form -->
      <div class="flex flex-col gap-4">
        <div>
          <label class="text-sm text-gray-600 mb-1 block">Apteka nomi</label>
          <input
            v-model="form.name"
            type="text"
            placeholder="Apteka nomingiz"
            class="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500 transition"
          />
        </div>
        <div>
          <label class="text-sm text-gray-600 mb-1 block">Telefon</label>
          <input
            v-model="form.phone"
            type="text"
            placeholder="+998 71 123 45 67"
            class="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500 transition"
          />
        </div>
        <div>
          <label class="text-sm text-gray-600 mb-1 block">Parol</label>
          <input
            v-model="form.password"
            type="password"
            placeholder="••••••••"
            class="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-blue-500 transition"
          />
        </div>

        <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>

        <button
          @click="login"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
        >
          Kirish
        </button>

        <div class="text-center text-sm text-gray-500">
          Xaridormisiz?
          <RouterLink to="/login/buyer" class="text-blue-600 font-semibold hover:underline">
            Xaridor sifatida kiring
          </RouterLink>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/auth'

const router = useRouter()
const auth = useAuthStore()

const form = ref({ name: '', phone: '', password: '' })
const error = ref('')

function login() {
  if (!form.value.name || !form.value.phone || !form.value.password) {
    error.value = 'Barcha maydonlarni to\'ldiring!'
    return
  }
  auth.loginAsSeller({ name: form.value.name, pharmacyId: 1 })
  router.push('/seller')
}
</script>