<script setup>
import { ref } from 'vue'
import { useRevealAnimation } from '../../composables/useRevealAnimation'

const sectionRef = ref(null)
useRevealAnimation(sectionRef)
</script>

<template>
  <section ref="sectionRef" class="bg-neutral-950 py-24">
    <div class="mx-auto max-w-7xl px-6">
      <div class="max-w-2xl reveal-item">
        <p class="mb-4 text-sm uppercase tracking-[0.3em] text-lime-400">
          Perché scegliere SportCity
        </p>

        <h2 class="text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
          Un centro pensato per lo sport e la condivisione
        </h2>
      </div>

      <div class="mt-14 grid gap-6 md:grid-cols-3">
        <article
          class="reveal-item group rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-lime-400/40 hover:bg-white/[0.07]"
        >
          <div
            class="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400 transition duration-300 group-hover:scale-110 group-hover:bg-lime-400/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 10l9-7 9 7M5 10v10h14V10"
              />
            </svg>
          </div>

          <h3 class="text-xl font-semibold text-white">Strutture moderne</h3>

          <p class="mt-4 leading-7 text-neutral-300">
            Campi indoor e outdoor progettati per garantire comfort e qualità in ogni stagione.
          </p>
        </article>

        <article
          class="reveal-item group rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-lime-400/40 hover:bg-white/[0.07]"
        >
          <div
            class="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400 transition duration-300 group-hover:scale-110 group-hover:bg-lime-400/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h8M8 12h8m-8 5h5" />
            </svg>
          </div>

          <h3 class="text-xl font-semibold text-white">Facile da raggiungere</h3>

          <p class="mt-4 leading-7 text-neutral-300">
            Una posizione comoda con parcheggio dedicato per permetterti di arrivare senza stress.
          </p>
        </article>

        <article
          class="reveal-item group rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-lime-400/40 hover:bg-white/[0.07]"
        >
          <div
            class="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400 transition duration-300 group-hover:scale-110 group-hover:bg-lime-400/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 20h5V4H2v16h5m10 0v-4a3 3 0 00-6 0v4m6 0H7"
              />
            </svg>
          </div>

          <h3 class="text-xl font-semibold text-white">Esperienza completa</h3>

          <p class="mt-4 leading-7 text-neutral-300">
            Non solo sport, ma un ambiente dinamico dove incontrare persone e vivere momenti di
            qualità.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
