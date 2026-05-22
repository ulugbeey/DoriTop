import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const routes = [
  // Xaridor sahifalari
  { path: '/', component: () => import('../pages/Home.vue') },
  { path: '/search', component: () => import('../pages/Search.vue') },
  { path: '/drug/:id', component: () => import('../pages/DrugDetail.vue') },
  { path: '/pharmacy/:id', component: () => import('../pages/Pharmacy.vue') },
  { path: '/map', component: () => import('../pages/Map.vue') },
  { path: '/cart', component: () => import('../pages/Cart.vue') },

  // Login sahifalari
  { path: '/login/buyer', component: () => import('../pages/auth/LoginBuyer.vue') },
  { path: '/login/seller', component: () => import('../pages/auth/LoginSeller.vue') },

  // Sotuvchi sahifalari (himoyalangan)
  {
    path: '/seller',
    meta: { requiresSeller: true },
    children: [
      { path: '', component: () => import('../pages/seller/Dashboard.vue') },
      { path: 'drugs', component: () => import('../pages/seller/ManageDrugs.vue') },
      { path: 'prices', component: () => import('../pages/seller/ManagePrices.vue') },
      { path: 'orders', component: () => import('../pages/seller/Orders.vue') },
      { path: 'settings', component: () => import('../pages/seller/PharmacySettings.vue') },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Route guard — sotuvchi sahifalarini himoyalash
router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  if (to.meta.requiresSeller && !auth.isSeller) {
    next('/login/seller')
  } else {
    next()
  }
})

export default router