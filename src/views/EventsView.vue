<script setup>
import { ref } from 'vue'
import TiltCard from '../components/ui/TiltCard.vue'
import SiteFooter from '../components/layout/SiteFooter.vue'
import { useRevealAnimation } from '../composables/useRevealAnimation'

const selectedEvent = ref(null)

const heroRef = ref(null)
const newsRef = ref(null)
const eventsRef = ref(null)
const mapRef = ref(null)
const socialRef = ref(null)

useRevealAnimation(heroRef)
useRevealAnimation(newsRef)
useRevealAnimation(eventsRef)
useRevealAnimation(mapRef)
useRevealAnimation(socialRef)

function openEventModal(event) {
  selectedEvent.value = event
}

function closeEventModal() {
  selectedEvent.value = null
}

const newsItems = [
  {
    type: 'NEWS',
    date: 'Gennaio 2026',
    title: 'Tesseramento Sportivo 2026',
    description: 'Aperte le iscrizioni per il tesseramento 2026.',
    image: '/images/events/tesseramento-2026.jpg',
    link: 'https://www.mantovasportcity.it/docs/Modulo%20Richiesta%20Tesseramento%202026.pdf',
  },
]

const events = [
  {
    key: 'carnevale',
    type: 'EVENTO',
    date: '6 Febbraio 2026',
    title: 'Torneo Carnevale Giallo Maschile',
    shortDescription: 'Torneo maschile di padel in clima carnevalesco con premi e buffet finale.',
    image: '/images/events/torneo-carnevale.jpg',
    details: {
      subtitle: 'Un evento speciale dedicato al padel maschile',
      paragraphs: [
        'Il torneo viene presentato come un appuntamento di padel maschile in clima carnevalesco, pensato per unire gioco, atmosfera e coinvolgimento.',
        'Tra gli elementi messi in evidenza ci sono premi finali e buffet, che trasformano il torneo in un momento di sport ma anche di ritrovo e community.',
        'In questa versione il contenuto non resta nascosto dentro una semplice card, ma si apre in una finestra dedicata che rende l’evento molto più valorizzato.',
      ],
      tags: ['Padel maschile', 'Clima carnevalesco', 'Premi', 'Buffet finale'],
      ctaText: 'Contatta la segreteria',
      ctaType: 'contact',
    },
  },
  {
    key: 'sociali',
    type: 'EVENTO',
    date: 'Febbraio 2026',
    title: 'Tornei Sociali Padel – Febbraio',
    shortDescription: 'Il programma dei tornei di padel di febbraio a SportCity Mantova.',
    image: '/images/events/tornei-sociali-febbraio.jpg',
    details: {
      subtitle: 'Il mese dedicato ai tornei sociali',
      paragraphs: [
        'Il sito presenta questa iniziativa come il programma dei tornei di padel del mese di febbraio a SportCity Mantova.',
        'L’idea è raccontare il calendario sportivo del centro in modo più vivo, ordinato e interessante da consultare anche da smartphone.',
        'Questa struttura può poi essere ampliata con date singole, orari, categorie e aggiornamenti, rendendo la pagina eventi davvero utile.',
      ],
      tags: ['Padel', 'Programma di febbraio', 'Tornei sociali', 'Community'],
      ctaText: 'Scopri gli sport',
      ctaType: 'sports',
    },
  },
]
</script>

<template>
  <div class="min-h-screen bg-neutral-950 text-white">
    <main>
      <!-- GLOBAL BACKGROUND GLOW -->
      <div class="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <!-- glow sinistra -->
        <div class="glow glow-left"></div>

        <!-- glow destra -->
        <div class="glow glow-right"></div>

        <!-- glow centro -->
        <div class="glow glow-center"></div>
      </div>
      <!-- HERO -->
      <section ref="heroRef" class="relative overflow-hidden pt-48 pb-24 md:pt-56 text-center">
        <div
          class="pointer-events-none absolute -left-24 -top-20 h-[420px] w-[420px] rounded-full bg-lime-400/15 blur-[120px]"
        ></div>
        <div
          class="pointer-events-none absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-white/5 blur-[100px]"
        ></div>

        <div
          class="pointer-events-none absolute inset-x-0 top-[60%] -translate-y-1/2 select-none overflow-hidden"
        >
          <div class="bg-word">EVENTS</div>
        </div>

        <div class="relative z-10">
          <p class="reveal-item text-sm uppercase tracking-[0.35em] text-lime-400">Eventi & News</p>

          <h1 class="reveal-item mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
            Il lato più vivo di SportCity
          </h1>

          <p class="reveal-item mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            Tornei, novità, community e momenti da vivere dentro e fuori dal campo, raccontati con
            uno stile più forte e contemporaneo.
          </p>
        </div>
      </section>

      <!-- NEWS -->
      <section ref="newsRef" class="pb-24">
        <div class="mx-auto max-w-7xl px-6">
          <div class="mb-10">
            <p class="reveal-item mb-4 text-sm uppercase tracking-[0.3em] text-lime-400">
              News in evidenza
            </p>

            <h2 class="reveal-item text-4xl font-semibold tracking-tight md:text-5xl">
              Aggiornamenti del centro
            </h2>
          </div>

          <div class="grid gap-8 md:grid-cols-2">
            <div
              v-for="item in newsItems"
              :key="item.title"
              class="reveal-item overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div
                class="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent opacity-80"
              ></div>

              <div class="relative z-10">
                <p class="text-xs uppercase tracking-[0.25em] text-lime-400">
                  {{ item.type }} · {{ item.date }}
                </p>

                <h2 class="mt-4 text-2xl font-semibold tracking-tight">
                  {{ item.title }}
                </h2>

                <p class="mt-4 leading-7 text-neutral-300">
                  {{ item.description }}
                </p>

                <a
                  :href="item.link"
                  target="_blank"
                  rel="noreferrer"
                  class="mt-8 inline-flex rounded-full border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/5"
                >
                  Apri il documento
                </a>
              </div>
            </div>

            <div
              class="overflow-hidden rounded-[2rem] border border-white/10 bg-[url('/images/events/app-sportcity.jpg')] bg-cover bg-center"
            >
              <div
                class="h-full min-h-[260px] bg-gradient-to-t from-black/75 via-black/35 to-transparent p-8"
              >
                <div class="flex h-full flex-col justify-end">
                  <p class="text-xs uppercase tracking-[0.25em] text-lime-400">APP UFFICIALE</p>

                  <h2 class="mt-4 text-2xl font-semibold tracking-tight">
                    Prenota i tuoi campi con l’app SportCity
                  </h2>

                  <p class="mt-4 leading-7 text-neutral-300">
                    Scarica l’app ufficiale per gestire prenotazioni e disponibilità.
                  </p>

                  <div class="mt-8 flex flex-wrap gap-4">
                    <a
                      href="https://apps.apple.com/it/app/sport-city-mantova/id6642675287"
                      target="_blank"
                      rel="noreferrer"
                      class="rounded-full bg-lime-400 px-5 py-3 font-medium text-black transition hover:scale-[1.03]"
                    >
                      iOS
                    </a>

                    <a
                      href="https://play.google.com/store/apps/details?id=it.anytimes.sportcitymantova.app"
                      target="_blank"
                      rel="noreferrer"
                      class="rounded-full border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/5"
                    >
                      Android
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- EVENTI 3D -->
      <section ref="eventsRef" class="pb-24">
        <div class="mx-auto max-w-7xl px-6">
          <div class="mb-10">
            <p class="mb-4 text-sm uppercase tracking-[0.3em] text-lime-400">Tornei in evidenza</p>

            <h2 class="text-4xl font-semibold tracking-tight md:text-5xl">
              Eventi sportivi del centro
            </h2>

            <p class="mt-4 max-w-2xl text-lg leading-8 text-neutral-300">
              Una versione più scenografica dei tornei messi in evidenza nel sito.
            </p>
          </div>

          <div class="grid gap-8 md:grid-cols-2">
            <TiltCard v-for="event in events" :key="event.key" class="reveal-item">
              <div
                class="group relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-lime-400/20 hover:shadow-[0_28px_80px_rgba(0,0,0,0.4)]"
                style="transform-style: preserve-3d"
              >
                <div
                  class="h-80 bg-cover bg-center transition duration-700 group-hover:scale-110"
                  :style="{ backgroundImage: `url(${event.image})` }"
                ></div>

                <div
                  class="absolute inset-x-0 top-0 h-80 bg-gradient-to-t from-black/80 via-black/25 to-transparent"
                ></div>

                <div
                  class="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/[0.08] to-transparent"
                ></div>

                <div class="relative p-8" style="transform: translateZ(24px)">
                  <p class="text-xs uppercase tracking-[0.25em] text-lime-400">
                    {{ event.type }} · {{ event.date }}
                  </p>

                  <h2 class="mt-4 text-2xl font-semibold tracking-tight">
                    {{ event.title }}
                  </h2>

                  <p class="mt-4 leading-7 text-neutral-300">
                    {{ event.shortDescription }}
                  </p>

                  <button
                    @click="openEventModal(event)"
                    class="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-medium text-white transition duration-300 hover:bg-white/5"
                  >
                    Scopri di più
                  </button>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      <!-- BAR TERZO TEMPO -->
      <section ref="mapRef" class="pb-24">
        <div class="mx-auto max-w-7xl px-6">
          <div class="grid gap-8 md:grid-cols-2 md:items-center">
            <div
              class="relative reveal-item overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-900 shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
            >
              <div
                class="min-h-[460px] bg-[url('/images/events/bar-terzo-tempo.jpg')] bg-cover bg-center"
              ></div>
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
              ></div>

              <div
                class="absolute bottom-6 left-6 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-sm text-white backdrop-blur-md"
              >
                Bar “Terzo Tempo”
              </div>
            </div>

            <div class="relative">
              <div
                class="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-lime-400/10 blur-3xl"
              ></div>

              <div class="relative z-10">
                <p class="mb-4 text-sm uppercase tracking-[0.3em] text-lime-400">Terzo Tempo</p>

                <h2 class="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                  Il momento perfetto dopo partita e allenamento
                </h2>

                <p class="mt-6 text-lg leading-8 text-neutral-300">
                  Il Bar Terzo Tempo completa l’esperienza del centro: un luogo dove ritrovarsi,
                  bere qualcosa e vivere l’atmosfera sportiva anche dopo il gioco.
                </p>

                <div class="mt-8 flex flex-wrap gap-3 text-sm text-neutral-300">
                  <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    Colazioni
                  </span>
                  <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    Aperitivi
                  </span>
                  <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    Musica
                  </span>
                  <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    Atmosfera sportiva
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SOCIAL CTA -->
      <section ref="socialRef" class="pb-24">
        <div class="mx-auto max-w-7xl px-6">
          <div
            class="reveal-item overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl md:p-14"
          >
            <div class="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <p class="mb-4 text-sm uppercase tracking-[0.3em] text-lime-400">
                  Rimani aggiornato
                </p>

                <h2 class="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                  Segui novità, tornei ed eventi
                </h2>
              </div>

              <div>
                <p class="text-lg leading-8 text-neutral-300">
                  Segui il centro sui social per restare aggiornato su tornei, eventi, novità e
                  momenti della community.
                </p>

                <div class="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://www.instagram.com/sportcity.mantova/"
                    target="_blank"
                    rel="noreferrer"
                    class="rounded-full bg-lime-400 px-6 py-3 font-medium text-black transition hover:scale-[1.03]"
                  >
                    Instagram
                  </a>

                  <a
                    href="https://www.facebook.com/Mantovasportcity/"
                    target="_blank"
                    rel="noreferrer"
                    class="rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- MODAL EVENTO -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="selectedEvent"
        class="fixed inset-0 z-[2000] flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm"
        @click.self="closeEventModal"
      >
        <div
          class="relative w-full max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-900 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.45)] md:p-10"
        >
          <div
            class="pointer-events-none absolute -left-12 top-0 h-60 w-60 rounded-full bg-lime-400/10 blur-3xl"
          ></div>
          <div
            class="pointer-events-none absolute bottom-0 right-0 h-60 w-60 rounded-full bg-white/5 blur-3xl"
          ></div>

          <div class="relative z-10">
            <div class="flex items-start justify-between gap-4">
              <div>
                <p class="text-sm uppercase tracking-[0.3em] text-lime-400">
                  {{ selectedEvent.type }} · {{ selectedEvent.date }}
                </p>

                <h3 class="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  {{ selectedEvent.title }}
                </h3>

                <p class="mt-4 max-w-2xl text-neutral-300">
                  {{ selectedEvent.details.subtitle }}
                </p>
              </div>

              <button
                @click="closeEventModal"
                class="rounded-full border border-white/10 px-3 py-2 text-sm text-white transition hover:bg-white/5"
              >
                ✕
              </button>
            </div>

            <div class="mt-10 grid gap-8 md:grid-cols-[1.05fr_0.95fr]">
              <div
                class="overflow-hidden rounded-[2rem] border border-white/10 bg-cover bg-center min-h-[320px]"
                :style="{ backgroundImage: `url(${selectedEvent.image})` }"
              >
                <div
                  class="h-full min-h-[320px] bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                ></div>
              </div>

              <div class="flex flex-col justify-center">
                <div class="space-y-4 leading-7 text-neutral-300">
                  <p v-for="paragraph in selectedEvent.details.paragraphs" :key="paragraph">
                    {{ paragraph }}
                  </p>
                </div>

                <div class="mt-6 flex flex-wrap gap-3 text-sm text-neutral-300">
                  <span
                    v-for="tag in selectedEvent.details.tags"
                    :key="tag"
                    class="rounded-full border border-white/10 bg-white/5 px-4 py-2"
                  >
                    {{ tag }}
                  </span>
                </div>

                <div class="mt-8">
                  <RouterLink
                    v-if="selectedEvent.details.ctaType === 'contact'"
                    to="/contatti"
                    class="inline-flex rounded-full bg-lime-400 px-5 py-3 font-medium text-black transition hover:scale-[1.03]"
                  >
                    {{ selectedEvent.details.ctaText }}
                  </RouterLink>

                  <RouterLink
                    v-else
                    to="/sport"
                    class="inline-flex rounded-full bg-lime-400 px-5 py-3 font-medium text-black transition hover:scale-[1.03]"
                  >
                    {{ selectedEvent.details.ctaText }}
                  </RouterLink>
                </div>
              </div>
            </div>

            <p class="mt-8 text-sm text-neutral-500">
              Questa finestra può essere aggiornata in futuro con programma completo, iscrizioni,
              orari, tabelloni e dettagli ufficiali.
            </p>
          </div>
        </div>
      </div>
    </transition>

    <SiteFooter />
  </div>
</template>

<style scoped>
/* spazio per ritocchi locali */
.event-glow {
  position: relative;
}

.event-glow::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 2rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), transparent 40%);
  pointer-events: none;
}

.glow {
  position: absolute;
  border-radius: 999px;
  filter: blur(120px);
  opacity: 0.35;
  pointer-events: none;
}

/* sinistra */
.glow-left {
  width: 400px;
  height: 400px;
  background: rgba(163, 230, 53, 0.35);
  top: 10%;
  left: -120px;
  animation: floatGlow 10s ease-in-out infinite;
}

/* destra */
.glow-right {
  width: 350px;
  height: 350px;
  background: rgba(255, 255, 255, 0.12);
  bottom: 10%;
  right: -100px;
  animation: floatGlow 12s ease-in-out infinite;
}

/* centro */
.glow-center {
  width: 500px;
  height: 500px;
  background: rgba(163, 230, 53, 0.15);
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  animation: floatGlowSlow 16s ease-in-out infinite;
}

/* animazioni */
@keyframes floatGlow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
}

@keyframes floatGlowSlow {
  0%,
  100% {
    transform: translate(-50%, 0);
  }
  50% {
    transform: translate(-50%, -40px);
  }
}
</style>
