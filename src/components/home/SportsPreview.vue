<script setup>
import { ref } from 'vue'
import { useRevealAnimation } from '../../composables/useRevealAnimation'
import TiltCard from '../ui/TiltCard.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function goToSports() {
  router.push('/sport')
}

const sectionRef = ref(null)
useRevealAnimation(sectionRef)
</script>

<template>
  <section ref="sectionRef" class="relative bg-neutral-950 py-24">
    <div class="pointer-events-none absolute inset-x-0 top-20 z-0 select-none text-center">
      <span class="bg-word"> SPORTS </span>
    </div>

    <div class="relative z-10 mx-auto max-w-7xl px-6">
      <div class="reveal-item flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div class="max-w-2xl">
          <p class="mb-4 text-sm uppercase tracking-[0.3em] text-lime-400">Attività</p>

          <h2 class="text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            Le nostre attività
          </h2>
        </div>

        <RouterLink
          to="/sport"
          class="inline-flex w-fit items-center gap-2 text-sm font-medium text-white transition hover:text-lime-400"
        >
          Scopri tutti gli sport
          <span aria-hidden="true">→</span>
        </RouterLink>
      </div>

      <div class="mt-14 grid gap-6 md:grid-cols-2">
        <TiltCard class="reveal-item">
          <article
            @click="goToSports"
            class="sport-card sport-float sport-float-1 group relative min-h-[280px] cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900 shadow-[0_16px_50px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-2 hover:border-lime-400/30 active:scale-[0.98] sm:min-h-[320px]"
          >
            <div
              class="absolute inset-0 bg-[url('/images/padel.jpg')] bg-cover bg-center transition duration-700 group-hover:scale-105"
            ></div>

            <div
              class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"
            ></div>

            <div
              class="relative flex h-full flex-col justify-end p-6 sm:p-8"
              style="transform: translateZ(24px)"
            >
              <p class="text-sm uppercase tracking-[0.25em] text-lime-400">01</p>

              <h3 class="mt-3 text-2xl font-semibold text-white sm:text-3xl">PADEL</h3>

              <p class="mt-4 max-w-md leading-7 text-neutral-200">
                Campi moderni per uno degli sport più amati, perfetto per ogni livello di gioco.
              </p>
            </div>
          </article>
        </TiltCard>

        <TiltCard class="reveal-item">
          <article
            @click="goToSports"
            class="sport-card sport-float sport-float-2 group relative min-h-[280px] cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900 shadow-[0_16px_50px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-2 hover:border-lime-400/30 active:scale-[0.98] sm:min-h-[320px]"
          >
            <div
              class="absolute inset-0 bg-[url('/images/beach-tennis.jpg')] bg-cover bg-center transition duration-700 group-hover:scale-105"
            ></div>
            <div
              class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"
            ></div>

            <div
              class="relative flex h-full flex-col justify-end p-6 sm:p-8"
              style="transform: translateZ(24px)"
            >
              <p class="text-sm uppercase tracking-[0.25em] text-lime-400">02</p>
              <h3 class="mt-3 text-2xl font-semibold text-white sm:text-3xl">BEACH TENNIS</h3>

              <p class="mt-4 max-w-md leading-7 text-neutral-200">
                Divertimento e movimento in un’attività dinamica e coinvolgente.
              </p>
            </div>
          </article>
        </TiltCard>

        <TiltCard class="reveal-item">
          <article
            @click="goToSports"
            class="sport-card sport-float sport-float-3 group relative min-h-[280px] cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900 shadow-[0_16px_50px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-2 hover:border-lime-400/30 active:scale-[0.98] sm:min-h-[320px]"
          >
            <div
              class="absolute inset-0 bg-[url('/images/beach-volley.jpg')] bg-cover bg-center transition duration-700 group-hover:scale-105"
            ></div>
            <div
              class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"
            ></div>

            <div
              class="relative flex h-full flex-col justify-end p-6 sm:p-8"
              style="transform: translateZ(24px)"
            >
              <p class="text-sm uppercase tracking-[0.25em] text-lime-400">03</p>
              <h3 class="mt-3 text-2xl font-semibold text-white sm:text-3xl">BEACH VOLLEY</h3>

              <p class="mt-4 max-w-md leading-7 text-neutral-200">
                Spirito di squadra e energia per un’esperienza sportiva completa.
              </p>
            </div>
          </article>
        </TiltCard>

        <TiltCard class="reveal-item">
          <article
            @click="goToSports"
            class="sport-card sport-float sport-float-4 group relative min-h-[280px] cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900 shadow-[0_16px_50px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-2 hover:border-lime-400/30 active:scale-[0.98] sm:min-h-[320px]"
          >
            <div
              class="absolute inset-0 bg-[url('/images/pickleball.jpg')] bg-cover bg-center transition duration-700 group-hover:scale-105"
            ></div>
            <div
              class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"
            ></div>

            <div
              class="relative flex h-full flex-col justify-end p-6 sm:p-8"
              style="transform: translateZ(24px)"
            >
              <p class="text-sm uppercase tracking-[0.25em] text-lime-400">04</p>
              <h3 class="mt-3 text-2xl font-semibold text-white sm:text-3xl">PICKLEBALL</h3>

              <p class="mt-4 max-w-md leading-7 text-neutral-200">
                Uno sport accessibile e in crescita, ideale per tutte le età.
              </p>
            </div>
          </article>
        </TiltCard>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sport-card {
  transform-style: preserve-3d;
  will-change: transform;
}

.sport-float {
  animation: sportFloat 5.6s ease-in-out infinite;
}

.sport-float-1 {
  animation-delay: 0s;
}

.sport-float-2 {
  animation-delay: 0.6s;
}

.sport-float-3 {
  animation-delay: 1.2s;
}

.sport-float-4 {
  animation-delay: 1.8s;
}

@keyframes sportFloat {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

@media (max-width: 768px) {
  .sport-float {
    animation: sportFloatMobile 4.8s ease-in-out infinite;
  }

  @keyframes sportFloatMobile {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-6px);
    }
    100% {
      transform: translateY(0px);
    }
  }
}
</style>
