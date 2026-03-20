<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import TiltCard from '../components/ui/TiltCard.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'

const router = useRouter()

function goToBooking() {
  router.push('/prenota')
}

const balls = ref([])

onMounted(() => {
  const totalBalls = 20

  balls.value = Array.from({ length: totalBalls }).map(() => {
    const isFootball = Math.random() > 0.5

    return {
      type: isFootball ? 'football' : 'tennis',
      depth: Math.random() * 30 + 10,
      style: {
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        width: Math.random() * 60 + 60 + 'px',
        opacity: Math.random() * 0.4 + 0.3,
      },
    }
  })

  const handleMove = (e) => {
    const x = e.clientX / window.innerWidth - 0.5
    const y = e.clientY / window.innerHeight - 0.5

    document.querySelectorAll('.ball').forEach((ballEl, i) => {
      const depth = balls.value[i].depth
      const moveX = x * depth
      const moveY = y * depth

      ballEl.style.transform = `translate(${moveX}px, ${moveY}px)`
    })
  }

  window.addEventListener('mousemove', handleMove)
})

const sports = [
  {
    name: 'Padel',
    image: '/images/padel.jpg',
    description: 'Lo sport più amato del momento, veloce e divertente.',
  },
  {
    name: 'Beach Tennis',
    image: '/images/beach-tennis.jpg',
    description: 'Ritmo e coordinazione in un ambiente dinamico.',
  },
  {
    name: 'Beach Volley',
    image: '/images/beach-volley.jpg',
    description: 'Energia, squadra e competizione.',
  },
  {
    name: 'Pickleball',
    image: '/images/pickleball.jpg',
    description: 'Accessibile, coinvolgente e in continua crescita.',
  },
  {
    name: 'Padbol',
    image: '/images/padbol.jpg',
    description: 'Un mix tra calcio e padel, tecnico e spettacolare.',
  },
]
</script>

<template>
  <div class="bg-neutral-950 text-white min-h-screen pt-18">
    <!-- HERO (PULITA) -->
    <section class="relative pt-32 pb-20 text-center overflow-hidden">
      <!-- GLOW LUCE -->
      <div
        class="pointer-events-none absolute top-0 left-0 h-72 w-72 bg-lime-400/10 blur-3xl"
      ></div>

      <div
        class="pointer-events-none absolute bottom-0 right-0 h-80 w-80 bg-white/5 blur-3xl"
      ></div>
      <!-- SCRITTA GIGANTE -->
      <div
        class="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none overflow-hidden"
      >
        <div class="bg-word">SPORTS</div>
      </div>

      <!-- CONTENUTO -->
      <div class="relative z-10 mx-auto max-w-7xl px-6">
        <p class="mb-4 text-sm uppercase tracking-[0.35em] text-lime-400">Attività</p>

        <h1 class="text-5xl md:text-7xl font-semibold leading-tight">
          Tutti gli sport in un unico spazio
        </h1>

        <p class="mt-6 text-lg text-neutral-300 max-w-2xl mx-auto">
          Scegli la tua attività e vivi lo sport in un ambiente moderno, dinamico e pensato per ogni
          livello.
        </p>
      </div>
    </section>

    <!-- SEZIONE CARD + PALLONI -->
    <section class="relative pb-24 overflow-hidden">
      <!-- PALLONI -->
      <div class="balls-container">
        <img
          v-for="(ball, i) in balls"
          :key="i"
          :src="
            ball.type === 'football' ? '/images/balls/football.png' : '/images/balls/tennis.png'
          "
          class="ball"
          :style="ball.style"
        />
      </div>

      <!-- OVERLAY (leggibilità) -->
      <div class="absolute inset-0 bg-black/40"></div>

      <!-- CARD -->
      <div class="relative z-10 mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-2">
        <!-- PRIME 4 CARD -->
        <TiltCard v-for="sport in sports.slice(0, 4)" :key="sport.name">
          <div
            @click="goToBooking"
            class="sport-card cursor-pointer transition duration-300 hover:-translate-y-2 hover:border-lime-400/30 active:scale-[0.98]"
          >
            <div class="sport-bg" :style="{ backgroundImage: `url(${sport.image})` }"></div>

            <div class="sport-overlay"></div>

            <div class="sport-content">
              <h2>{{ sport.name }}</h2>
              <p>{{ sport.description }}</p>
            </div>
          </div>
        </TiltCard>
      </div>

      <!-- PADBOL CENTRATO -->
      <div class="relative z-10 mx-auto max-w-3xl px-6 mt-10">
        <TiltCard>
          <div
            @click="goToBooking"
            class="sport-card cursor-pointer transition duration-300 hover:-translate-y-2 hover:border-lime-400/30 active:scale-[0.98]"
          >
            <div class="sport-bg" :style="{ backgroundImage: `url(${sports[4].image})` }"></div>

            <div class="sport-overlay"></div>

            <div class="sport-content">
              <h2>{{ sports[4].name }}</h2>
              <p>{{ sports[4].description }}</p>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
    <section class="pb-24">
      <div class="mx-auto max-w-7xl px-6 text-center pt-10">
        <p class="mb-4 text-sm uppercase tracking-[0.35em] text-lime-400">Affiliazioni</p>

        <h2 class="text-4xl md:text-5xl font-semibold">Enti sportivi riconosciuti</h2>

        <p class="mt-4 text-neutral-300 max-w-2xl mx-auto">
          Il centro è affiliato a importanti enti sportivi, garanzia di qualità, professionalità e
          rispetto degli standard ufficiali.
        </p>

        <!-- CARD ENTI -->
        <div class="mt-16 grid gap-8 md:grid-cols-3">
          <!-- FITP -->
          <a href="https://www.fitp.it" target="_blank" rel="noreferrer" class="ente-card">
            <img src="/images/enti/fitp.png" alt="FITP" class="h-16 w-auto object-contain" />
            <h3>FITP</h3>
            <p>Federazione Italiana Tennis e Padel</p>
          </a>

          <!-- AICS -->
          <a href="https://www.aics.it" target="_blank" rel="noreferrer" class="ente-card">
            <img src="/images/enti/aics.png" alt="AICS" class="h-16 w-auto object-contain" />
            <h3>AICS</h3>
            <p>Associazione Italiana Cultura Sport</p>
          </a>

          <!-- CSI -->
          <a href="https://www.csi-net.it" target="_blank" rel="noreferrer" class="ente-card">
            <img src="/images/enti/csi.png" alt="CSI" class="h-16 w-auto object-contain" />
            <h3>CSI</h3>
            <p>Centro Sportivo Italiano</p>
          </a>
        </div>
      </div>
    </section>
    <SiteFooter />
  </div>
</template>

<style scoped>
/* CONTAINER PALLONI */
.balls-container {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

/* PALLONI */
.ball {
  position: absolute;
  will-change: transform;
  transition: transform 0.2s ease-out;
  animation: floatBall 6s ease-in-out infinite;
}

/* FLOATING */
@keyframes floatBall {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-12px);
  }
  100% {
    transform: translateY(0px);
  }
}

/* CARD */
.sport-card {
  position: relative;
  height: 420px;
  border-radius: 2rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: #0a0a0a;
}

.sport-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transition: transform 0.6s ease;
}

.sport-card:hover .sport-bg {
  transform: scale(1.1);
}

.sport-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, black, transparent 60%);
}

.sport-content {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  right: 2rem;
}

.sport-content h2 {
  font-size: 2rem;
  font-weight: 600;
}

.sport-content p {
  margin-top: 0.5rem;
  color: #d4d4d4;
}

.ente-card {
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  backdrop-filter: blur(10px);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  transition: all 0.3s ease;
}

.ente-card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
}

.ente-card h3 {
  font-size: 1.4rem;
  font-weight: 600;
}

.ente-card p {
  color: #a3a3a3;
  text-align: center;
}
</style>
