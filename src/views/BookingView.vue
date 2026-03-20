<script setup>
import { ref } from 'vue'
import TiltCard from '../components/ui/TiltCard.vue'
import SiteFooter from '../components/layout/SiteFooter.vue'

const selectedSport = ref(null)

function openBookingOptions(sport) {
  selectedSport.value = sport
}

function closeBookingOptions() {
  selectedSport.value = null
}

const sports = [
  {
    name: 'Padel Indoor',
    image: '/images/padel-indoor.jpg',
    description: 'Campi da padel moderni, coperti e pensati per giocare in ogni stagione.',
    price: 'A partire da €40/h',
    address: 'Via Palmiro Azzi 5, Mantova',
  },
  {
    name: 'Padel Outdoor',
    image: '/images/padel-outdoor.jpg',
    description:
      'Campi esterni premium con illuminazione serale, per godersi il gioco all’aria aperta.',
    price: 'A partire da €40/h',
    address: 'Viale Fiume 11, Mantova',
  },
  {
    name: 'Beach Tennis',
    image: '/images/beach-tennis-book.jpg',
    description: 'Un’attività dinamica e divertente, perfetta per chi ama ritmo e coordinazione.',
    price: 'A partire da €40/h',
    address: 'Via Palmiro Azzi 5, Mantova',
  },
  {
    name: 'Beach Volley',
    image: '/images/beach-volley-book.jpg',
    description: 'Campi dedicati per partite di gruppo, allenamenti e momenti di community.',
    price: 'A partire da €40/h',
    address: 'Via Palmiro Azzi 5, Mantova',
  },
  {
    name: 'Pickleball',
    image: '/images/pickleball-book.jpg',
    description: 'Uno sport veloce, accessibile e sempre più richiesto.',
    price: 'A partire da €24/h',
    address: 'Via Palmiro Azzi 5, Mantova',
  },
  {
    name: 'Padbol',
    image: '/images/padbol-book.jpg',
    description: 'Il mix perfetto tra calcio e padel, spettacolare e tecnico.',
    price: 'A partire da €24/h',
    address: 'Via Palmiro Azzi 5, Mantova',
  },
]

const whatsappUrl =
  'https://wa.me/393515188191?text=Ciao%2C%20vorrei%20prenotare%20un%20campo%20a%20SportCity%20Mantova'
const appStoreUrl = 'https://apps.apple.com/it/app/sport-city-mantova/id6642675287'
const playStoreUrl =
  'https://play.google.com/store/apps/details?id=it.anytimes.sportcitymantova.app'
</script>

<template>
  <div class="min-h-screen bg-neutral-950 text-white">
    <main>
      <!-- LIGHT BACKGROUND -->
      <div class="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <!-- glow centrale -->
        <div class="booking-glow booking-glow-main"></div>

        <!-- glow laterale -->
        <div class="booking-glow booking-glow-side"></div>
      </div>
      <!-- HERO -->
      <section class="relative overflow-hidden pt-48 pb-24 md:pt-56">
        <div
          class="pointer-events-none absolute -left-24 -top-20 h-[420px] w-[420px] rounded-full bg-lime-400/15 blur-[120px]"
        ></div>
        <div
          class="pointer-events-none absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-white/5 blur-[100px]"
        ></div>

        <div
          class="pointer-events-none absolute inset-x-0 top-[58%] -translate-y-1/2 select-none overflow-hidden"
        >
          <div class="bg-word">BOOKING</div>
        </div>

        <div class="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <p class="mb-4 text-sm uppercase tracking-[0.35em] text-lime-400">Prenotazioni</p>

          <h1 class="text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Scegli lo sport che vuoi prenotare
          </h1>

          <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            Una pagina più chiara e moderna per aiutare l’utente a scegliere il campo, vedere il
            prezzo a partire da e capire subito come prenotare.
          </p>
        </div>
      </section>

      <!-- SPORTS GRID -->
      <section class="relative overflow-hidden pb-24">
        <div
          class="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[140px]"
        ></div>

        <div class="relative z-10 mx-auto max-w-7xl px-6">
          <div class="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            <TiltCard v-for="sport in sports" :key="sport.name">
              <div
                class="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-lime-400/20"
                style="transform-style: preserve-3d"
              >
                <div
                  class="h-56 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  :style="{ backgroundImage: `url(${sport.image})` }"
                ></div>

                <div
                  class="absolute inset-x-0 top-0 h-56 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                ></div>
                <div
                  class="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/[0.08] to-transparent"
                ></div>

                <div class="relative p-6" style="transform: translateZ(24px)">
                  <p class="text-sm uppercase tracking-[0.22em] text-lime-400">
                    {{ sport.name }}
                  </p>

                  <h2 class="mt-3 text-3xl font-semibold tracking-tight text-white">
                    {{ sport.price }}
                  </h2>

                  <p class="mt-4 leading-7 text-neutral-300">
                    {{ sport.description }}
                  </p>

                  <div class="mt-5 rounded-[1.25rem] border border-white/10 bg-black/20 p-4">
                    <p class="text-xs uppercase tracking-[0.2em] text-neutral-400">Indirizzo</p>
                    <p class="mt-2 text-white">
                      {{ sport.address }}
                    </p>
                  </div>

                  <button
                    @click="openBookingOptions(sport)"
                    class="mt-6 inline-flex rounded-full bg-lime-400 px-5 py-3 font-medium text-black transition hover:scale-[1.03]"
                  >
                    Prenota il campo
                  </button>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>
    </main>

    <!-- MODAL PICCOLO -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="selectedSport"
        class="fixed inset-0 z-[3000] flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm"
        @click.self="closeBookingOptions"
      >
        <div
          class="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-950 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
        >
          <div
            class="pointer-events-none absolute -left-12 top-0 h-52 w-52 rounded-full bg-lime-400/10 blur-3xl"
          ></div>

          <div class="relative z-10">
            <div class="flex items-start justify-between gap-4">
              <div>
                <p class="text-sm uppercase tracking-[0.3em] text-lime-400">Prenotazione</p>

                <h3 class="mt-3 text-3xl font-semibold tracking-tight text-white">
                  {{ selectedSport.name }}
                </h3>

                <p class="mt-4 text-neutral-300">
                  Scegli il modo più comodo per prenotare il tuo campo.
                </p>
              </div>

              <button
                @click="closeBookingOptions"
                class="rounded-full border border-white/10 px-3 py-2 text-sm text-white transition hover:bg-white/5"
              >
                ✕
              </button>
            </div>

            <div class="mt-8 grid gap-4 md:grid-cols-2">
              <a
                :href="whatsappUrl"
                target="_blank"
                rel="noreferrer"
                class="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition hover:border-lime-400/20 hover:bg-white/8"
              >
                <p class="text-sm uppercase tracking-[0.2em] text-lime-400">WhatsApp</p>
                <p class="mt-3 text-xl font-semibold text-white">Scrivici subito</p>
                <p class="mt-2 text-neutral-300">Apri una chat rapida con la segreteria.</p>
              </a>

              <a
                href="tel:+393515188191"
                class="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition hover:border-lime-400/20 hover:bg-white/8"
              >
                <p class="text-sm uppercase tracking-[0.2em] text-lime-400">Telefono</p>
                <p class="mt-3 text-xl font-semibold text-white">+39 351 518 8191</p>
                <p class="mt-2 text-neutral-300">Chiama direttamente la segreteria.</p>
              </a>

              <a
                :href="appStoreUrl"
                target="_blank"
                rel="noreferrer"
                class="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition hover:border-lime-400/20 hover:bg-white/8"
              >
                <p class="text-sm uppercase tracking-[0.2em] text-lime-400">iOS</p>
                <p class="mt-3 text-xl font-semibold text-white">App Store</p>
                <p class="mt-2 text-neutral-300">Prenota dall’app su iPhone e iPad.</p>
              </a>

              <a
                :href="playStoreUrl"
                target="_blank"
                rel="noreferrer"
                class="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition hover:border-lime-400/20 hover:bg-white/8"
              >
                <p class="text-sm uppercase tracking-[0.2em] text-lime-400">Android</p>
                <p class="mt-3 text-xl font-semibold text-white">Google Play</p>
                <p class="mt-2 text-neutral-300">Prenota dall’app su smartphone Android.</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <SiteFooter />
  </div>
</template>

<style scoped>
.booking-glow {
  position: absolute;
  border-radius: 999px;
  filter: blur(120px);
  opacity: 0.25;
}

/* glow centrale */
.booking-glow-main {
  width: 500px;
  height: 500px;
  background: rgba(163, 230, 53, 0.25);
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  animation: glowFloat 12s ease-in-out infinite;
}

/* glow laterale */
.booking-glow-side {
  width: 350px;
  height: 350px;
  background: rgba(255, 255, 255, 0.08);
  bottom: 10%;
  right: 5%;
  animation: glowFloatSlow 16s ease-in-out infinite;
}

@keyframes glowFloat {
  0%,
  100% {
    transform: translate(-50%, 0);
  }
  50% {
    transform: translate(-50%, -30px);
  }
}

@keyframes glowFloatSlow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-40px);
  }
}
</style>
