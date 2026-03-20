<script setup>
const { isOpen } = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['close'])

const bookingItems = [
  {
    name: 'Padel',
    description: 'Campi coperti e scoperti di ultima generazione.',
    price: 'A partire da €40',
    address: 'Via Palmiro Azzi 5, Mantova',
    image: '/images/padel.jpg',
    cta: 'Prenota ora',
    link: 'https://www.mantovasportcity.it/',
    external: true,
  },
  {
    name: 'Beach Tennis',
    description: 'Sabbia fine e campi regolamentari, perfetti per divertirsi tutto l’anno.',
    price: 'Disponibile in app',
    address: 'Via Palmiro Azzi 5, Mantova',
    image: '/images/beach-tennis.jpg',
    cta: 'Apri l’app',
    link: 'https://apps.apple.com/it/app/sport-city-mantova/id6642675287',
    external: true,
  },
  {
    name: 'Beach Volley',
    description: 'Campi professionali per allenamenti e partite di gruppo.',
    price: 'Disponibile in app',
    address: 'Via Palmiro Azzi 5, Mantova',
    image: '/images/beach-volley.jpg',
    cta: 'Apri l’app',
    link: 'https://play.google.com/store/apps/details?id=it.anytimes.sportcitymantova.app',
    external: true,
  },
  {
    name: 'Pickleball',
    description: 'Sport veloce e divertente, adatto a tutte le età.',
    price: 'Contatta la segreteria',
    address: 'Via Palmiro Azzi 5, Mantova',
    image: '/images/pickleball.jpg',
    cta: 'Chiama la segreteria',
    link: 'tel:+393515188191',
    external: true,
  },
  {
    name: 'Padbol',
    description: 'La combinazione perfetta tra calcio e padel.',
    price: 'Contatta la segreteria',
    address: 'Via Palmiro Azzi 5, Mantova',
    image: '/images/padbol.jpg',
    cta: 'Chiama la segreteria',
    link: 'tel:+393515188191',
    external: true,
  },
]
</script>

<template>
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[3000] flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm"
      @click.self="emit('close')"
    >
      <div
        class="relative w-full max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-950 p-8 shadow-[0_30px_100px_rgba(0,0,0,0.5)] md:p-10"
      >
        <div
          class="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full bg-lime-400/10 blur-3xl"
        ></div>
        <div
          class="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/5 blur-3xl"
        ></div>

        <div class="relative z-10">
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="text-sm uppercase tracking-[0.3em] text-lime-400">Prenota un campo</p>

              <h2 class="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Scegli lo sport che vuoi prenotare
              </h2>

              <p class="mt-4 max-w-2xl text-neutral-300">
                Una selezione più chiara e moderna delle attività del centro, con prezzo a partire
                da e accesso rapido alla prenotazione.
              </p>
            </div>

            <button
              @click="emit('close')"
              class="rounded-full border border-white/10 px-3 py-2 text-sm text-white transition hover:bg-white/5"
            >
              ✕
            </button>
          </div>

          <div class="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div
              v-for="item in bookingItems"
              :key="item.name"
              class="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-lime-400/20"
            >
              <div
                class="h-52 bg-cover bg-center transition duration-700 group-hover:scale-105"
                :style="{ backgroundImage: `url(${item.image})` }"
              ></div>

              <div
                class="absolute inset-x-0 top-0 h-52 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
              ></div>
              <div
                class="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/[0.08] to-transparent"
              ></div>

              <div class="relative p-6">
                <p class="text-sm uppercase tracking-[0.22em] text-lime-400">
                  {{ item.name }}
                </p>

                <h3 class="mt-3 text-2xl font-semibold tracking-tight text-white">
                  {{ item.price }}
                </h3>

                <p class="mt-4 leading-7 text-neutral-300">
                  {{ item.description }}
                </p>

                <div class="mt-5 rounded-[1.25rem] border border-white/10 bg-black/20 p-4">
                  <p class="text-xs uppercase tracking-[0.2em] text-neutral-400">Indirizzo</p>
                  <p class="mt-2 text-white">
                    {{ item.address }}
                  </p>
                </div>

                <a
                  :href="item.link"
                  :target="item.external ? '_blank' : null"
                  :rel="item.external ? 'noreferrer' : null"
                  class="mt-6 inline-flex rounded-full bg-lime-400 px-5 py-3 font-medium text-black transition hover:scale-[1.03]"
                >
                  {{ item.cta }}
                </a>
              </div>
            </div>
          </div>

          <p class="mt-8 text-sm text-neutral-500">
            Per il padel il sito mostra prezzi chiari; per gli altri sport questa versione guida
            l’utente verso app o segreteria in modo più ordinato.
          </p>
        </div>
      </div>
    </div>
  </transition>
</template>
