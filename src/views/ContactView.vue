<script setup>
import { ref } from 'vue'
import TiltCard from '../components/ui/TiltCard.vue'
import SiteFooter from '../components/layout/SiteFooter.vue'
import { useRevealAnimation } from '../composables/useRevealAnimation'

const heroRef = ref(null)
const contactCardsRef = ref(null)
const whatsappRef = ref(null)
const mapRef = ref(null)
const socialRef = ref(null)

useRevealAnimation(heroRef)
useRevealAnimation(contactCardsRef)
useRevealAnimation(whatsappRef)
useRevealAnimation(mapRef)
useRevealAnimation(socialRef)

const whatsappGroupUrl = 'https://chat.whatsapp.com/KxbyepZHgKW4e8jLhlAtk4'
const whatsappQrUrl = 'https://www.mantovasportcity.it/assets/qrcode.png'
const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Via+Palmiro+Azzi+5+Mantova'
const appStoreUrl = 'https://apps.apple.com/it/app/sport-city-mantova/id6642675287'
const playStoreUrl =
  'https://play.google.com/store/apps/details?id=it.anytimes.sportcitymantova.app'
</script>

<template>
  <div class="min-h-screen bg-neutral-950 text-white">
    <main>
      <!-- HERO -->
      <section ref="heroRef" class="relative overflow-hidden pt-48 pb-24 md:pt-56">
        <div
          class="pointer-events-none absolute -left-24 -top-20 h-[420px] w-[420px] rounded-full bg-lime-400/15 blur-[120px]"
        ></div>
        <div
          class="pointer-events-none absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-white/5 blur-[100px]"
        ></div>

        <div
          class="pointer-events-none absolute inset-x-0 top-[58%] -translate-y-1/2 select-none overflow-hidden"
        >
          <div class="bg-word">CONTACT</div>
        </div>

        <div class="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <p class="reveal-item mb-4 text-sm uppercase tracking-[0.35em] text-lime-400">Contatti</p>

          <h1 class="reveal-item text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Tutti i riferimenti del centro
          </h1>

          <p class="reveal-item mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            Una pagina contatti più chiara, immersiva e utile: segreteria, mappe, app, gruppo
            WhatsApp e social in un’unica esperienza.
          </p>
        </div>
      </section>

      <!-- CONTACT CARDS -->
      <section ref="contactCardsRef" class="relative overflow-hidden pb-24">
        <div
          class="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[140px]"
        ></div>

        <div class="relative z-10 mx-auto max-w-7xl px-6">
          <div class="grid gap-8 md:grid-cols-3">
            <TiltCard class="reveal-item">
              <div
                class="relative rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl"
                style="transform-style: preserve-3d"
              >
                <div
                  class="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/[0.08] to-transparent opacity-80"
                ></div>

                <div class="relative" style="transform: translateZ(24px)">
                  <p class="text-sm uppercase tracking-[0.25em] text-lime-400">Dove siamo</p>

                  <h2 class="mt-4 text-2xl font-semibold tracking-tight">Mantova</h2>

                  <p class="mt-4 leading-7 text-neutral-300">
                    Via Palmiro Azzi 5<br />
                    46100 Mantova (MN)
                  </p>

                  <div class="mt-6 space-y-2 text-neutral-400">
                    <p>Lun - Ven · 09:00 - 00:00</p>
                    <p>Sab - Dom · 09:00 - 20:00</p>
                  </div>

                  <a
                    :href="mapsUrl"
                    target="_blank"
                    rel="noreferrer"
                    class="mt-8 inline-flex rounded-full border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/5"
                  >
                    Apri su Google Maps
                  </a>
                </div>
              </div>
            </TiltCard>

            <TiltCard class="reveal-item">
              <div
                class="relative rounded-[2rem] border border-lime-400/30 bg-lime-400/[0.08] p-8 shadow-[0_20px_60px_rgba(163,230,53,0.12)] backdrop-blur-xl"
                style="transform-style: preserve-3d"
              >
                <div
                  class="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/[0.08] to-transparent opacity-80"
                ></div>

                <div class="relative" style="transform: translateZ(24px)">
                  <p class="text-sm uppercase tracking-[0.25em] text-lime-400">Segreteria</p>

                  <h2 class="mt-4 text-2xl font-semibold tracking-tight">Contatto diretto</h2>

                  <p class="mt-4 leading-7 text-neutral-300">
                    Per campi, corsi, tornei, tesseramenti e qualsiasi altra attività del centro.
                  </p>

                  <div class="mt-6 text-lg font-medium text-white">+39 351 518 8191</div>

                  <a
                    href="tel:+393515188191"
                    class="mt-8 inline-flex rounded-full bg-lime-400 px-5 py-3 font-medium text-black transition hover:scale-[1.03]"
                  >
                    Chiama la segreteria
                  </a>
                </div>
              </div>
            </TiltCard>

            <TiltCard class="reveal-item">
              <div
                class="relative rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl"
                style="transform-style: preserve-3d"
              >
                <div
                  class="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/[0.08] to-transparent opacity-80"
                ></div>

                <div class="relative" style="transform: translateZ(24px)">
                  <p class="text-sm uppercase tracking-[0.25em] text-lime-400">App ufficiale</p>

                  <h2 class="mt-4 text-2xl font-semibold tracking-tight">Prenota da smartphone</h2>

                  <p class="mt-4 leading-7 text-neutral-300">
                    Prenota campi, controlla disponibilità e ricevi notifiche in pochi click.
                  </p>

                  <div class="mt-8 flex flex-wrap gap-3">
                    <a
                      :href="appStoreUrl"
                      target="_blank"
                      rel="noreferrer"
                      class="inline-flex rounded-full bg-lime-400 px-5 py-3 font-medium text-black transition hover:scale-[1.03]"
                    >
                      App Store
                    </a>

                    <a
                      :href="playStoreUrl"
                      target="_blank"
                      rel="noreferrer"
                      class="inline-flex rounded-full border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/5"
                    >
                      Google Play
                    </a>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      <!-- WHATSAPP GROUP -->
      <section ref="whatsappRef" class="pb-24">
        <div class="mx-auto max-w-7xl px-6">
          <div class="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div
              class="reveal-item relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-10 shadow-[0_20px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl md:p-14"
            >
              <div
                class="pointer-events-none absolute -left-10 top-0 h-56 w-56 rounded-full bg-lime-400/10 blur-3xl"
              ></div>

              <div class="relative z-10">
                <p class="mb-4 text-sm uppercase tracking-[0.3em] text-lime-400">
                  Gruppo WhatsApp ufficiale
                </p>

                <h2 class="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                  Entra nel gruppo del centro
                </h2>

                <p class="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
                  Ricevi aggiornamenti rapidi su disponibilità dei campi, tornei, eventi e
                  comunicazioni importanti. È il modo più veloce per restare sempre in contatto con
                  SportCity Mantova.
                </p>

                <div class="mt-8 flex flex-wrap gap-3 text-sm text-neutral-300">
                  <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    Disponibilità campi
                  </span>
                  <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    Tornei ed eventi
                  </span>
                  <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    Comunicazioni rapide
                  </span>
                </div>

                <a
                  :href="whatsappGroupUrl"
                  target="_blank"
                  rel="noreferrer"
                  class="mt-8 inline-flex rounded-full bg-lime-400 px-6 py-3 font-medium text-black transition hover:scale-[1.03]"
                >
                  Unisciti al gruppo
                </a>
              </div>
            </div>

            <TiltCard class="reveal-item">
              <div
                class="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl"
                style="transform-style: preserve-3d"
              >
                <div
                  class="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/[0.08] to-transparent opacity-80"
                ></div>

                <div
                  class="relative flex flex-col items-center justify-center"
                  style="transform: translateZ(24px)"
                >
                  <p class="text-sm uppercase tracking-[0.22em] text-lime-400">QR Code WhatsApp</p>

                  <div
                    class="mt-6 overflow-hidden rounded-[1.5rem] bg-white p-4 shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
                  >
                    <img
                      :src="whatsappQrUrl"
                      alt="QR Code gruppo WhatsApp SportCity Mantova"
                      class="h-64 w-64 object-contain"
                    />
                  </div>

                  <p class="mt-6 text-center leading-7 text-neutral-300">
                    Scansiona il QR per entrare nel gruppo direttamente dal tuo smartphone.
                  </p>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      <section ref="mapRef" class="pb-24">
        <div class="mx-auto max-w-7xl px-6">
          <div class="grid gap-8 md:grid-cols-2 md:items-center">
            <!-- MAPPA -->
            <TiltCard class="reveal-item">
              <div
                class="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-900 shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
                style="transform-style: preserve-3d"
              >
                <div style="transform: translateZ(18px)">
                  <iframe
                    src="https://www.google.com/maps?q=Via+Palmiro+Azzi+5+Mantova&output=embed"
                    class="h-[460px] w-full border-0"
                    loading="lazy"
                  ></iframe>
                </div>

                <!-- overlay glow -->
                <div
                  class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                ></div>

                <!-- label -->
                <div
                  class="absolute bottom-6 left-6 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-sm text-white backdrop-blur-md"
                  style="transform: translateZ(38px)"
                >
                  SportCity Mantova
                </div>
              </div>
            </TiltCard>

            <!-- TESTO -->
            <div class="relative reveal-item">
              <div
                class="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-lime-400/10 blur-3xl"
              ></div>

              <div class="relative z-10">
                <p class="mb-4 text-sm uppercase tracking-[0.3em] text-lime-400">Posizione</p>

                <h2 class="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                  Vieni a trovarci al centro
                </h2>

                <p class="mt-6 text-lg leading-8 text-neutral-300">
                  SportCity Mantova si trova in una posizione comoda e facilmente raggiungibile.
                  Puoi aprire la mappa direttamente per ottenere indicazioni precise e arrivare al
                  centro senza difficoltà.
                </p>

                <div class="mt-8 flex flex-wrap gap-3 text-sm text-neutral-300">
                  <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    Parcheggio disponibile
                  </span>
                  <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    Accesso facile
                  </span>
                  <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    Zona Mantova
                  </span>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Via+Palmiro+Azzi+5+Mantova"
                  target="_blank"
                  rel="noreferrer"
                  class="mt-8 inline-flex rounded-full bg-lime-400 px-6 py-3 font-medium text-black transition hover:scale-[1.03]"
                >
                  Apri su Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SOCIAL -->
      <section ref="socialRef" class="pb-24">
        <div class="mx-auto max-w-7xl px-6">
          <div class="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            <div class="relative reveal-item">
              <div
                class="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-lime-400/10 blur-3xl"
              ></div>

              <div class="relative z-10">
                <p class="mb-4 text-sm uppercase tracking-[0.3em] text-lime-400">Social</p>

                <h2 class="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                  Segui il centro anche sui social
                </h2>

                <p class="mt-6 text-lg leading-8 text-neutral-300">
                  Instagram e Facebook diventano parte dell’esperienza visiva del sito: invece di
                  due semplici pulsanti, qui mostriamo davvero la presenza del centro sui social in
                  una veste più coinvolgente e moderna.
                </p>

                <div class="mt-8 flex flex-wrap gap-3 text-sm text-neutral-300">
                  <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    News e tornei
                  </span>
                  <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    Foto e community
                  </span>
                  <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    Aggiornamenti rapidi
                  </span>
                </div>

                <div class="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://www.instagram.com/sportcity.mantova/"
                    target="_blank"
                    rel="noreferrer"
                    class="rounded-full bg-lime-400 px-6 py-3 font-medium text-black transition hover:scale-[1.03]"
                  >
                    Apri Instagram
                  </a>

                  <a
                    href="https://www.facebook.com/Mantovasportcity/"
                    target="_blank"
                    rel="noreferrer"
                    class="rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5"
                  >
                    Apri Facebook
                  </a>
                </div>
              </div>
            </div>

            <div
              class="relative flex flex-col items-center justify-center gap-10 md:flex-row md:items-end md:gap-8"
            >
              <div
                class="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-3xl"
              ></div>

              <!-- TELEFONO INSTAGRAM -->
              <div class="relative w-full max-w-[280px]">
                <!-- label esterna -->
                <div
                  class="pointer-events-none absolute -left-28 top-[65%] hidden -translate-y-1/2 md:flex md:items-center md:gap-3"
                >
                  <span class="social-label"> Instagram </span>

                  <svg
                    class="h-8 w-20 text-lime-400"
                    viewBox="0 0 80 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 10H72"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-dasharray="4 4"
                    />
                    <path
                      d="M72 10L64 4M72 10L64 16"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <!-- label mobile -->
                <div class="mb-4 flex items-center justify-center gap-3 md:hidden">
                  <span class="social-label">Instagram</span>
                </div>

                <TiltCard class="w-full reveal-item phone-float phone float-1">
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

                        <div class="phone-screen">
                          <img
                            src="/images/social/instagram-home.jpg"
                            alt="Instagram SportCity Mantova"
                            class="phone-img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>

              <!-- TELEFONO FACEBOOK -->
              <div class="relative w-full max-w-[280px] md:translate-y-8">
                <!-- label esterna -->
                <div
                  class="pointer-events-none absolute -right-28 top-1/2 hidden -translate-y-1/2 md:flex md:items-center md:gap-3"
                >
                  <svg
                    class="h-8 w-20 text-lime-400"
                    viewBox="0 0 80 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 10H79"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-dasharray="4 4"
                    />
                    <path
                      d="M8 10L16 4M8 10L16 16"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span class="social-label"> Facebook </span>
                </div>

                <!-- label mobile -->
                <div class="mb-4 flex items-center justify-center gap-3 md:hidden">
                  <span class="social-label">Facebook</span>
                </div>

                <TiltCard class="w-full reveal-item phone-float phone-float-2">
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

                        <div class="phone-screen">
                          <img
                            src="/images/social/facebook-home.jpg"
                            alt="Facebook SportCity Mantova"
                            class="phone-img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>

<style scoped>
.phone-float {
  transform-style: preserve-3d;
  will-change: transform;
  animation: phoneFloat 5.6s ease-in-out infinite;
}

.phone-float-1 {
  animation-delay: 0s;
}

.phone-float-2 {
  animation-delay: 0.8s;
}

@keyframes phoneFloat {
  0% {
    transform: translateY(0px) rotateZ(0deg);
  }
  50% {
    transform: translateY(-12px) rotateZ(-1deg);
  }
  100% {
    transform: translateY(0px) rotateZ(0deg);
  }
}

@media (max-width: 768px) {
  .phone-float {
    animation: phoneFloatMobile 4.8s ease-in-out infinite;
  }

  .phone-float-1 {
    animation-delay: 0s;
  }

  .phone-float-2 {
    animation-delay: 0.7s;
  }

  @keyframes phoneFloatMobile {
    0% {
      transform: translateY(0px) rotateZ(0deg);
    }
    50% {
      transform: translateY(-8px) rotateZ(-0.8deg);
    }
    100% {
      transform: translateY(0px) rotateZ(0deg);
    }
  }
}
</style>
