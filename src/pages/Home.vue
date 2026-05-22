<template>
  <div class="home" ref="homeRef">

    <!-- Custom cursor -->
    <div class="cursor" ref="cursorRef"></div>
    <div class="cursor-follower" ref="followerRef"></div>

    <!-- Hero -->
    <section class="hero">
<div class="hero-bg">
  <div class="blob blob-1"></div>
  <div class="blob blob-2"></div>
  <div class="blob blob-3"></div>
  <img src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80" class="bg-img img-1" alt="" />
  <img src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800&q=80" class="bg-img img-2" alt="" />
  <img src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80" class="bg-img img-3" alt="" />
  <img src="https://images.unsplash.com/photo-1550572017-edd951b55104?w=800&q=80" class="bg-img img-4" alt="" />
<img src="https://images.unsplash.com/photo-1563213126-a4273aed2016?w=800&q=80" class="bg-img img-5" alt="" />
<img src="https://images.unsplash.com/photo-1576602976047-174e57a47881?w=800&q=80" class="bg-img img-6" alt="" />
</div>

      <div class="hero-content">
        <div class="badge">🇺🇿 O'zbekiston №1 apteka platfomasi</div>
        <h1 class="hero-title">
          Dori toping,<br/>
          <span class="gradient-text">narx solishtiring</span>
        </h1>
        <p class="hero-sub">
          Toshkentdagi 500+ aptekadan eng qulay narxni toping
        </p>

        <!-- Search -->
        <div class="search-wrap">
          <SearchBar />
        </div>

        <!-- Kirish tugmalari -->
        <div class="auth-buttons">
          <RouterLink to="/login/buyer" class="btn-buyer">
            <img src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png" alt="buyer" />
            Xaridor sifatida
          </RouterLink>
          <RouterLink to="/login/seller" class="btn-seller">
            <img src="https://cdn-icons-png.flaticon.com/512/3081/3081648.png" alt="seller" />
            Sotuvchi sifatida
          </RouterLink>
        </div>
      </div>

      <!-- Hero rasm -->
      <div class="hero-image">
        <div class="image-card float-1">
          <img src="https://cdn-icons-png.flaticon.com/512/2734/2734953.png" alt="medicine" />
        </div>
        <div class="image-card float-2">
          <img src="https://cdn-icons-png.flaticon.com/512/2965/2965567.png" alt="pharmacy" />
        </div>
        <div class="image-card float-3">
          <img src="https://cdn-icons-png.flaticon.com/512/3774/3774278.png" alt="health" />
        </div>
      </div>
    </section>

    <!-- Statistika -->
    <section class="stats">
      <div class="stat-item" v-for="stat in stats" :key="stat.label">
        <div class="stat-number">{{ stat.value }}</div>
        <div class="stat-label">{{ stat.label }}</div>
      </div>
    </section>

    <!-- Kategoriyalar -->
    <section class="categories">
      <h2 class="section-title">Kategoriyalar</h2>
      <div class="cat-grid">
        <div
          v-for="cat in categories"
          :key="cat.name"
          class="cat-card"
          @mouseenter="catHover"
        >
          <img :src="cat.img" :alt="cat.name" />
          <span>{{ cat.name }}</span>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SearchBar from '../components/SearchBar.vue'

const cursorRef = ref(null)
const followerRef = ref(null)

let mouseX = 0, mouseY = 0
let followerX = 0, followerY = 0
let animId = null

function onMouseMove(e) {
  mouseX = e.clientX
  mouseY = e.clientY
  cursorRef.value.style.transform = `translate(${mouseX}px, ${mouseY}px)`
}

function animateFollower() {
  followerX += (mouseX - followerX) * 0.1
  followerY += (mouseY - followerY) * 0.1
  if (followerRef.value) {
    followerRef.value.style.transform = `translate(${followerX}px, ${followerY}px)`
  }
  animId = requestAnimationFrame(animateFollower)
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
  animateFollower()
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  cancelAnimationFrame(animId)
})

const stats = [
  { value: '500+', label: 'Apteka' },
  { value: '10,000+', label: 'Dori turi' },
  { value: '50,000+', label: 'Foydalanuvchi' },
  { value: '24/7', label: 'Xizmat' },
]

const categories = [
  { name: 'Shamollash', img: 'https://cdn-icons-png.flaticon.com/512/2965/2965567.png' },
  { name: 'Vitaminlar', img: 'https://cdn-icons-png.flaticon.com/512/2734/2734953.png' },
  { name: 'Yurak', img: 'https://cdn-icons-png.flaticon.com/512/3774/3774278.png' },
  { name: 'Sport', img: 'https://cdn-icons-png.flaticon.com/512/1998/1998087.png' },
  { name: 'Bolalar', img: 'https://cdn-icons-png.flaticon.com/512/3081/3081559.png' },
  { name: 'Kosmetika', img: 'https://cdn-icons-png.flaticon.com/512/3081/3081648.png' },
  { name: 'Surunkali', img: 'https://cdn-icons-png.flaticon.com/512/2966/2966334.png' },
  { name: 'Fitoterapiya', img: 'https://cdn-icons-png.flaticon.com/512/628/628283.png' },
]
</script>

<style scoped>
* { cursor: none; }
.bg-img {
  position: absolute;
  border-radius: 24px;
  object-fit: cover;
  opacity: 0.35;
  pointer-events: none;
}

.img-1 {
  width: 600px;
  height: 400px;
  top: 40px;
  right: 3%;
  transform: rotate(2deg);
  animation: imgFloat1 7s ease-in-out infinite;
}

.img-2 {
  width: 420px;
  height: 300px;
  bottom: 40px;
  right: 22%;
  transform: rotate(-3deg);
  animation: imgFloat2 9s ease-in-out infinite;
}

.img-3 {
  width: 360px;
  height: 360px;
  top: 35%;
  left: 1%;
  transform: rotate(2deg);
  animation: imgFloat3 8s ease-in-out infinite;
}

.img-4 {
  width: 500px;
  height: 340px;
  top: 10px;
  left: 30%;
  transform: rotate(-2deg);
  opacity: 0.25;
  animation: imgFloat1 10s ease-in-out infinite reverse;
}

.img-5 {
  width: 380px;
  height: 280px;
  bottom: 20px;
  left: 5%;
  transform: rotate(3deg);
  opacity: 0.3;
  animation: imgFloat2 8s ease-in-out infinite;
}

.img-6 {
  width: 440px;
  height: 320px;
  top: 50%;
  right: 1%;
  transform: rotate(-1deg);
  opacity: 0.28;
  animation: imgFloat3 11s ease-in-out infinite reverse;
}

.cursor {
  width: 8px;
  height: 8px;
  background: #16a34a;
  border-radius: 50%;
  position: fixed;
  top: -4px;
  left: -4px;
  pointer-events: none;
  z-index: 9999;
  transition: background 0.2s;
}

.cursor-follower {
  width: 32px;
  height: 32px;
  border: 2px solid #16a34a;
  border-radius: 50%;
  position: fixed;
  top: -16px;
  left: -16px;
  pointer-events: none;
  z-index: 9998;
  opacity: 0.5;
}

.home {
  background: #f8faf8;
  min-height: 100vh;
  overflow-x: hidden;
}

/* Hero */
.hero {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 8vw;
  position: relative;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.25;
}

.blob-1 {
  width: 500px; height: 500px;
  background: #bbf7d0;
  top: -100px; left: -100px;
  animation: blobMove 8s ease-in-out infinite;
}

.blob-2 {
  width: 400px; height: 400px;
  background: #a7f3d0;
  bottom: -100px; right: 200px;
  animation: blobMove 10s ease-in-out infinite reverse;
}

.blob-3 {
  width: 300px; height: 300px;
  background: #d1fae5;
  top: 50%; right: -50px;
  animation: blobMove 12s ease-in-out infinite;
}

@keyframes blobMove {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -30px) scale(1.05); }
  66% { transform: translate(-20px, 20px) scale(0.95); }
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 560px;
}

.badge {
  display: inline-block;
  background: #dcfce7;
  color: #15803d;
  font-size: 13px;
  font-weight: 600;
  padding: 6px 16px;
  border-radius: 100px;
  margin-bottom: 24px;
  letter-spacing: 0.3px;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  color: #111;
  line-height: 1.15;
  margin-bottom: 16px;
  letter-spacing: -1px;
}

.gradient-text {
  background: linear-gradient(135deg, #16a34a, #059669);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-sub {
  color: #6b7280;
  font-size: 1.1rem;
  margin-bottom: 32px;
  line-height: 1.6;
}

.search-wrap {
  margin-bottom: 28px;
}

.auth-buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn-buyer, .btn-seller {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 24px;
  border-radius: 16px;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  transition: all 0.25s;
}

.btn-buyer img, .btn-seller img {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.btn-buyer {
  background: #16a34a;
  color: white;
  box-shadow: 0 4px 20px rgba(22,163,74,0.3);
}

.btn-buyer:hover {
  background: #15803d;
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(22,163,74,0.35);
}

.btn-seller {
  background: white;
  color: #1d4ed8;
  border: 2px solid #bfdbfe;
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
}

.btn-seller:hover {
  background: #eff6ff;
  transform: translateY(-2px);
  border-color: #93c5fd;
}

/* Hero rasmlar */
.hero-image {
  position: relative;
  width: 380px;
  height: 380px;
  flex-shrink: 0;
  z-index: 1;
}

.image-card {
  position: absolute;
  background: white;
  border-radius: 24px;
  padding: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-card img {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

.float-1 {
  top: 0; left: 50%;
  transform: translateX(-50%);
  animation: float1 4s ease-in-out infinite;
}

.float-2 {
  bottom: 20px; left: 0;
  animation: float2 5s ease-in-out infinite;
}

.float-3 {
  bottom: 20px; right: 0;
  animation: float3 4.5s ease-in-out infinite;
}

@keyframes float1 {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-16px); }
}

@keyframes float2 {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

@keyframes float3 {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

/* Statistika */
.stats {
  display: flex;
  justify-content: center;
  gap: 0;
  background: white;
  border-top: 1px solid #f0fdf4;
  border-bottom: 1px solid #f0fdf4;
  padding: 40px 8vw;
}

.stat-item {
  flex: 1;
  text-align: center;
  padding: 0 20px;
  border-right: 1px solid #e5e7eb;
}

.stat-item:last-child { border-right: none; }

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  color: #16a34a;
  letter-spacing: -1px;
}

.stat-label {
  font-size: 0.875rem;
  color: #9ca3af;
  margin-top: 4px;
}

/* Kategoriyalar */
.categories {
  padding: 80px 8vw;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 800;
  color: #111;
  margin-bottom: 32px;
  letter-spacing: -0.5px;
}

.cat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 16px;
}

.cat-card {
  background: white;
  border-radius: 20px;
  padding: 24px 16px;
  text-align: center;
  border: 1px solid #f3f4f6;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  transition: all 0.25s;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.cat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(0,0,0,0.08);
  border-color: #bbf7d0;
}

.cat-card img {
  width: 52px;
  height: 52px;
  object-fit: contain;
}

.cat-card span {
  font-size: 13px;
  font-weight: 600;
  color: #374151;
}

/* Tablet — 768px */
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    padding: 60px 6vw 40px;
    text-align: center;
    min-height: auto;
  }

  .hero-title {
    font-size: 2.2rem;
  }

  .hero-sub {
    font-size: 1rem;
  }

  .auth-buttons {
    justify-content: center;
  }

  .hero-image {
    width: 280px;
    height: 280px;
    margin-top: 40px;
  }

  .image-card img {
    width: 60px;
    height: 60px;
  }

  .bg-img {
    opacity: 0.12;
  }

  .img-1 { width: 280px; height: 200px; right: -30px; top: 20px; }
  .img-2 { width: 200px; height: 150px; bottom: 20px; right: 10%; }
  .img-3 { display: none; }
  .img-4 { display: none; }
  .img-5 { display: none; }
  .img-6 { display: none; }

  .stats {
    flex-wrap: wrap;
    gap: 0;
    padding: 30px 6vw;
  }

  .stat-item {
    flex: 1 1 50%;
    border-right: none;
    border-bottom: 1px solid #e5e7eb;
    padding: 16px;
  }

  .stat-item:nth-child(1),
  .stat-item:nth-child(2) {
    border-bottom: 1px solid #e5e7eb;
  }

  .stat-item:last-child {
    border-bottom: none;
  }

  .categories {
    padding: 50px 6vw;
  }

  .cat-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 12px;
  }
}

/* Mobile — 480px */
@media (max-width: 480px) {
  .hero {
    padding: 40px 5vw 30px;
  }

  .hero-title {
    font-size: 1.8rem;
  }

  .badge {
    font-size: 11px;
    padding: 5px 12px;
  }

  .btn-buyer, .btn-seller {
    padding: 12px 18px;
    font-size: 14px;
    width: 100%;
    justify-content: center;
  }

  .auth-buttons {
    flex-direction: column;
    width: 100%;
  }

  .hero-image {
    width: 220px;
    height: 220px;
  }

  .image-card {
    padding: 14px;
  }

  .image-card img {
    width: 48px;
    height: 48px;
  }

  .stats {
    padding: 24px 5vw;
  }

  .stat-number {
    font-size: 1.5rem;
  }

  .stat-label {
    font-size: 0.75rem;
  }

  .section-title {
    font-size: 1.4rem;
  }

  .cat-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 10px;
  }

  .cat-card {
    padding: 18px 10px;
  }

  .cat-card img {
    width: 40px;
    height: 40px;
  }

  .cat-card span {
    font-size: 12px;
  }

  .bg-img {
    opacity: 0.08;
  }

  .img-1 { width: 180px; height: 130px; }
  .img-2 { display: none; }
}

/* Kichik mobile — 360px */
@media (max-width: 360px) {
  .hero-title {
    font-size: 1.5rem;
  }

  .cat-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>