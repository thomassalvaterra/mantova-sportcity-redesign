<script setup>
import { ref } from 'vue'
import TiltCard from '../components/ui/TiltCard.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'

const showMembershipModal = ref(false)

const prices = [
  {
    label: '90 minuti · Giorno',
    price: '€40',
    perPerson: '10€ a testa',
    time: 'Lun–Ven · 9:00 – 18:00',
    note: 'Fascia ideale per allenamenti e partite libere',
    featured: false,
  },
  {
    label: '90 minuti · Serale',
    price: '€52',
    perPerson: '13€ a testa',
    time: 'Lun–Ven · 18:00 – Chiusura · Sab–Dom · Tutto il giorno',
    note: 'La fascia più richiesta per giocare',
    featured: true,
  },
  {
    label: '60 minuti',
    price: '€40',
    perPerson: '10€ a testa',
    time: 'Lun–Dom · Tutto il giorno',
    note: 'Formula rapida con prezzo unico',
    featured: false,
  },
]
</script>

<template>
  <div class="min-h-screen bg-neutral-950 text-white">
    <main>
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
          <div class="bg-word">PRICING</div>
        </div>

        <div class="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <p class="mb-4 text-sm uppercase tracking-[0.35em] text-lime-400">Tariffe</p>

          <h1 class="text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Prezzi chiari, esperienza premium
          </h1>

          <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            Una presentazione più moderna delle tariffe del centro, con una gerarchia visiva più
            forte e un accesso più semplice al tesseramento.
          </p>
        </div>
      </section>

      <!-- CARD PREZZI -->
      <section class="relative overflow-hidden pt-10 pb-24">
        <div
          class="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[140px]"
        ></div>

        <div class="relative z-10 mx-auto max-w-7xl px-6">
          <div class="grid gap-8 md:grid-cols-3">
            <TiltCard v-for="price in prices" :key="price.label">
              <div
                class="group relative rounded-[2rem] border p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:scale-[1.01]"
                :class="
                  price.featured
                    ? 'border-lime-400/40 bg-lime-400/[0.08] shadow-[0_20px_60px_rgba(163,230,53,0.12)]'
                    : 'border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.25)]'
                "
                style="transform-style: preserve-3d"
              >
                <div
                  class="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/[0.08] to-transparent opacity-80"
                ></div>

                <div
                  v-if="price.featured"
                  class="absolute right-6 top-6 rounded-full bg-lime-400 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-black"
                >
                  Più scelto
                </div>

                <div class="relative" style="transform: translateZ(26px)">
                  <p class="text-sm uppercase tracking-[0.25em] text-lime-400">
                    {{ price.label }}
                  </p>

                  <div class="mt-6 flex items-end gap-2">
                    <h2 class="text-5xl font-semibold">{{ price.price }}</h2>
                    <span class="pb-1 text-neutral-400">/ partita</span>
                  </div>

                  <p class="mt-2 text-sm text-neutral-400">
                    {{ price.perPerson }}
                  </p>

                  <p class="mt-4 leading-7 text-neutral-300">
                    {{ price.time }}
                  </p>

                  <div class="mt-8 space-y-3 text-neutral-300">
                    <p>{{ price.note }}</p>
                    <p>Campo da padel</p>
                    <p>Prenotazione semplice via app o segreteria</p>
                  </div>

                  <a
                    href="https://www.mantovasportcity.it/"
                    target="_blank"
                    rel="noreferrer"
                    class="mt-8 inline-flex rounded-full bg-lime-400 px-5 py-3 font-medium text-black transition hover:scale-[1.03]"
                  >
                    Prenota ora
                  </a>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      <!-- TESSERAMENTO -->
      <section class="pb-24">
        <div class="mx-auto max-w-6xl px-6">
          <div
            class="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-white/[0.06] p-10 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-14"
            style="transform-style: preserve-3d"
          >
            <div
              class="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full bg-lime-400/10 blur-3xl"
            ></div>
            <div
              class="pointer-events-none absolute -right-12 bottom-0 h-56 w-56 rounded-full bg-white/5 blur-3xl"
            ></div>
            <div
              class="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent"
            ></div>

            <div class="relative z-10 grid gap-10 md:grid-cols-[1.25fr_0.95fr] md:items-center">
              <div style="transform: translateZ(24px)">
                <p class="mb-4 text-sm uppercase tracking-[0.3em] text-lime-400">
                  Tesseramento annuale
                </p>

                <h2 class="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                  Entra nel centro nel modo più semplice
                </h2>

                <p class="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
                  Per accedere ai campi è richiesto il tesseramento. In questa nuova versione lo
                  rendiamo molto più chiaro: invece di una semplice nota, diventa un passaggio
                  guidato, ordinato e immediato.
                </p>

                <div class="mt-8 flex flex-wrap gap-3 text-sm text-neutral-300">
                  <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    Obbligatorio per giocare
                  </span>
                  <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    In segreteria o via modulo
                  </span>
                  <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    Certificato medico richiesto
                  </span>
                </div>
              </div>

              <div style="transform: translateZ(36px)">
                <div
                  class="rounded-[2rem] border border-lime-400/30 bg-black/25 p-8 shadow-[0_20px_60px_rgba(163,230,53,0.08)]"
                >
                  <p class="text-sm uppercase tracking-[0.22em] text-lime-400">Accesso al centro</p>

                  <div class="mt-5 flex items-end gap-2">
                    <span class="text-5xl font-semibold text-white">2026</span>
                    <span class="pb-1 text-neutral-400">stagione attiva</span>
                  </div>

                  <p class="mt-4 leading-7 text-neutral-300">
                    Apri una finestra dedicata con tutte le modalità per tesserarti: segreteria
                    oppure modulo PDF ufficiale.
                  </p>

                  <button
                    @click="showMembershipModal = true"
                    class="mt-8 inline-flex w-full items-center justify-center rounded-full bg-lime-400 px-6 py-4 text-base font-medium text-black transition duration-300 hover:-translate-y-1 hover:scale-[1.02]"
                  >
                    Tesserati ora
                  </button>

                  <p class="mt-4 text-center text-sm text-neutral-500">
                    Procedura semplice e immediata
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- MODAL -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="showMembershipModal"
        class="fixed inset-0 z-[2000] flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm"
        @click.self="showMembershipModal = false"
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
                  Tesseramento SportCity
                </p>
                <h3 class="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Scegli come tesserarti
                </h3>
                <p class="mt-4 max-w-2xl text-neutral-300">
                  Puoi passare in segreteria oppure scaricare direttamente il modulo PDF ufficiale.
                </p>
              </div>

              <button
                @click="showMembershipModal = false"
                class="rounded-full border border-white/10 px-3 py-2 text-sm text-white transition hover:bg-white/5"
              >
                ✕
              </button>
            </div>

            <div class="mt-10 grid gap-6 md:grid-cols-2">
              <!-- SEGRETERIA -->
              <TiltCard>
                <div
                  class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                  style="transform-style: preserve-3d"
                >
                  <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent"
                  ></div>

                  <div class="relative" style="transform: translateZ(24px)">
                    <p class="text-sm uppercase tracking-[0.22em] text-lime-400">Opzione 1</p>

                    <h4 class="mt-4 text-2xl font-semibold text-white">Passa in segreteria</h4>

                    <p class="mt-4 leading-7 text-neutral-300">
                      La soluzione più diretta per ricevere supporto, informazioni e completare il
                      tesseramento con il personale del centro.
                    </p>

                    <div class="mt-8 space-y-3 text-neutral-300">
                      <p>Via Palmiro Azzi 5, Mantova</p>
                      <p>+39 351 518 8191</p>
                      <p>Lun - Ven 09:00 - 00:00</p>
                      <p>Sab - Dom 09:00 - 20:00</p>
                    </div>

                    <a
                      href="tel:+393515188191"
                      class="mt-8 inline-flex rounded-full bg-lime-400 px-5 py-3 font-medium text-black transition hover:scale-[1.03]"
                    >
                      📞Chiama la segreteria
                    </a>
                  </div>
                </div>
              </TiltCard>

              <!-- PDF -->
              <TiltCard>
                <div
                  class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                  style="transform-style: preserve-3d"
                >
                  <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent"
                  ></div>

                  <div class="relative" style="transform: translateZ(24px)">
                    <p class="text-sm uppercase tracking-[0.22em] text-lime-400">Opzione 2</p>

                    <h4 class="mt-4 text-2xl font-semibold text-white">Scarica il modulo PDF</h4>

                    <p class="mt-4 leading-7 text-neutral-300">
                      Scarica il modulo ufficiale di tesseramento 2026, compilalo e portalo in
                      segreteria per completare la registrazione.
                    </p>

                    <div class="mt-8 rounded-[1.5rem] border border-white/10 bg-black/20 p-6">
                      <p class="text-sm text-neutral-400">Documento</p>
                      <p class="mt-2 text-lg font-semibold text-white">
                        Modulo Richiesta Tesseramento 2026
                      </p>
                    </div>

                    <a
                      href="https://www.mantovasportcity.it/docs/Modulo%20Richiesta%20Tesseramento%202026.pdf"
                      target="_blank"
                      rel="noreferrer"
                      class="mt-8 inline-flex rounded-full bg-lime-400 px-5 py-3 font-medium text-black transition hover:scale-[1.03]"
                    >
                      Scarica il PDF
                    </a>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <SiteFooter />
  </div>
</template>

<style scoped>
/* puoi aggiungere qui altri ritocchi se vuoi */
</style>
