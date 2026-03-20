<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { useRevealAnimation } from '../../composables/useRevealAnimation'
import TiltCard from '../ui/TiltCard.vue'

const sectionRef = ref(null)
const phoneRef = ref(null)

useRevealAnimation(sectionRef)

const appStoreUrl = 'https://apps.apple.com/it/app/sport-city-mantova/id6642675287'

const playStoreUrl =
  'https://play.google.com/store/apps/details?id=it.anytimes.sportcitymantova.app'

let floatTween = null

onMounted(() => {
  if (phoneRef.value) {
    floatTween = gsap.to(phoneRef.value, {
      y: -12,
      duration: 2.6,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  }
})

onBeforeUnmount(() => {
  if (floatTween) floatTween.kill()
})
</script>

<template>
  <section ref="sectionRef" class="relative overflow-hidden bg-neutral-950 py-24">
    <div
      class="pointer-events-none absolute left-0 top-10 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl"
    ></div>
    <div
      class="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-lime-400/10 blur-3xl"
    ></div>

    <div
      class="pointer-events-none absolute inset-x-0 top-1/2 z-0 -translate-y-1/2 select-none text-center"
    >
      <span class="bg-word"> APP </span>
    </div>

    <div class="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
      <div class="reveal-item max-w-2xl">
        <p class="mb-4 text-sm uppercase tracking-[0.35em] text-lime-400">SportCity App</p>

        <h2 class="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
          Prenota direttamente dall’app
        </h2>

        <p class="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
          Gestisci le tue prenotazioni in modo semplice e veloce. Controlla la disponibilità dei
          campi e organizza le tue partite in pochi secondi.
        </p>

        <div class="mt-8 flex flex-wrap gap-3 text-sm text-neutral-300">
          <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
            Prenotazioni rapide
          </span>
          <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
            Disponibilità in tempo reale
          </span>
          <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
            Gestione semplice
          </span>
        </div>

        <div class="mt-10 flex flex-wrap gap-4">
          <a
            :href="appStoreUrl"
            target="_blank"
            rel="noreferrer"
            class="cursor-hover inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
          >
            <div>
              <p class="text-xs uppercase tracking-[0.2em] text-neutral-400">Download on</p>
              <p class="mt-1 text-base font-semibold">App Store</p>
            </div>
          </a>

          <a
            :href="playStoreUrl"
            target="_blank"
            rel="noreferrer"
            class="cursor-hover inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
          >
            <div>
              <p class="text-xs uppercase tracking-[0.2em] text-neutral-400">Get it on</p>
              <p class="mt-1 text-base font-semibold">Google Play</p>
            </div>
          </a>
        </div>
      </div>

      <div class="reveal-item relative flex items-center justify-center">
        <div
          class="pointer-events-none absolute h-[420px] w-[420px] rounded-full bg-lime-400/10 blur-3xl"
        ></div>

        <div ref="phoneRef" class="w-full max-w-[360px]">
          <TiltCard>
            <div
              class="relative rounded-[3rem] border border-white/10 bg-neutral-900 p-3 shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
              style="transform-style: preserve-3d"
            >
              <div
                class="rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-neutral-800 to-black p-3"
                style="transform: translateZ(18px)"
              >
                <div class="relative overflow-hidden rounded-[2.1rem] bg-neutral-950">
                  <div
                    class="absolute left-1/2 top-3 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-black"
                  ></div>

                  <div class="relative h-[640px] w-full overflow-hidden">
                    <img
                      src="/images/app-preview.jpg"
                      alt="SportCity App"
                      class="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </div>
  </section>
</template>
