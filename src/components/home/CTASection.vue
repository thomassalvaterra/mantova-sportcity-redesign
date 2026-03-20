<script setup>
import TiltCard from '../ui/TiltCard.vue'
</script>

<template>
  <section class="relative overflow-hidden bg-neutral-950 py-24">
    <!-- glow -->
    <div
      class="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[120px]"
    ></div>

    <div class="relative z-10 mx-auto max-w-7xl px-6">
      <TiltCard>
        <div
          class="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-white/[0.06] p-10 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:p-14"
          style="transform-style: preserve-3d"
        >
          <!-- glass highlights -->
          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.14] via-white/[0.04] to-transparent"
          ></div>
          <div
            class="pointer-events-none absolute -left-12 top-0 h-56 w-56 rounded-full bg-lime-400/10 blur-3xl"
          ></div>
          <div
            class="pointer-events-none absolute bottom-0 right-0 h-52 w-52 rounded-full bg-white/5 blur-3xl"
          ></div>

          <div class="relative z-10 text-center">
            <p class="mb-4 text-sm uppercase tracking-[0.32em] text-lime-400">Prenota ora</p>

            <h2 class="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Vivi lo sport ogni giorno
            </h2>

            <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              Scegli l’attività, scopri la disponibilità dei campi e prenota in modo semplice,
              veloce e intuitivo.
            </p>

            <!-- TAG -->
            <div class="mt-8 flex flex-wrap justify-center gap-3 text-sm text-neutral-300">
              <span
                class="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
              >
                Prenotazione rapida
              </span>
              <span
                class="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
              >
                App ufficiale
              </span>
              <span
                class="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
              >
                Centro sportivo moderno
              </span>
            </div>

            <!-- BOTTONI -->
            <div class="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <RouterLink
                to="/prenota"
                class="rounded-full bg-lime-400 px-6 py-3 font-medium text-black transition hover:scale-[1.03]"
              >
                Prenota ora
              </RouterLink>

              <RouterLink
                to="/contatti"
                class="rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-base font-medium text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08]"
              >
                Contattaci
              </RouterLink>
            </div>
          </div>
        </div>
      </TiltCard>
    </div>
  </section>
</template>
