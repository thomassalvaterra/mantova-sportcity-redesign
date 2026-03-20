<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TiltCard from '../components/ui/TiltCard.vue'
import SiteFooter from '../components/layout/SiteFooter.vue'

gsap.registerPlugin(ScrollTrigger)

const heroRef = ref(null)
const storyRef = ref(null)
const valuesRef = ref(null)
const mindsetRef = ref(null)
const ctaRef = ref(null)

const sponsors = [
  {
    name: 'Conad Mantova',
    src: '/images/sponsors/conad.png',
  },
  {
    name: 'Pulitutto',
    src: '/images/sponsors/pulitutto.png',
  },
  {
    name: 'Cupra Vanni',
    src: '/images/sponsors/cupra-vanni.png',
  },
  {
    name: 'Vieggi K',
    src: '/images/sponsors/viaggi-k.png',
  },
  {
    name: 'Medical Experience Mantova',
    src: '/images/sponsors/medical-experience.svg',
  },
  {
    name: 'Je Ma Noleggi',
    src: '/images/sponsors/jema-noleggi.png',
  },
]

function animateSection(sectionEl, selector = '.reveal-item', y = 50) {
  if (!sectionEl) return
  const items = sectionEl.querySelectorAll(selector)
  if (!items.length) return

  gsap.set(items, {
    opacity: 0,
    y,
  })

  gsap.to(items, {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.14,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: sectionEl,
      start: 'top 78%',
      once: true,
    },
  })
}

onMounted(async () => {
  await nextTick()

  if (heroRef.value) {
    const heroItems = heroRef.value.querySelectorAll('.hero-reveal')

    gsap.set(heroItems, {
      opacity: 0,
      y: 35,
    })

    gsap.to(heroItems, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.12,
      ease: 'power3.out',
    })
  }

  animateSection(storyRef.value)
  animateSection(valuesRef.value)
  animateSection(mindsetRef.value)
  animateSection(ctaRef.value)
})
</script>

<template>
  <div class="bg-neutral-950 text-white">
    <main>
      <section ref="heroRef" class="relative overflow-hidden pt-50 pb-24">
        <div
          class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(163,230,53,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_24%)]"
        ></div>

        <div
          class="pointer-events-none absolute inset-x-0 top-1/2 z-0 -translate-y-1/2 select-none overflow-hidden"
        >
          <div
            class="w-full text-center text-[20vw] font-semibold uppercase leading-none tracking-[-0.12em] text-white/[0.03]"
          >
            ABOUT
          </div>
        </div>

        <div class="relative mx-auto max-w-7xl px-6">
          <p class="hero-reveal mb-4 text-sm uppercase tracking-[0.35em] text-lime-400">
            Chi siamo
          </p>

          <div class="grid gap-10 md:grid-cols-2 md:items-end">
            <div>
              <h1
                class="hero-reveal text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl"
              >
                Una storia fatta di sport, valori e persone
              </h1>
            </div>

            <div>
              <p class="hero-reveal max-w-xl text-lg leading-8 text-neutral-300">
                SportCity Mantova nasce nel giugno 2013 da un gruppo di amici uniti dalla passione
                per lo sport e dal desiderio di creare un luogo autentico, dinamico e aperto a
                tutti.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref="storyRef" class="pb-24">
        <div class="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
          <div class="flex flex-col justify-center">
            <p class="reveal-item mb-4 text-sm uppercase tracking-[0.3em] text-lime-400">
              La nostra identità
            </p>

            <h2 class="reveal-item text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Un progetto nato da una passione condivisa
            </h2>

            <div class="mt-6 space-y-5 text-lg leading-8 text-neutral-300">
              <p class="reveal-item">
                Fin dall’inizio il centro è stato pensato come uno spazio in cui lo sport non fosse
                solo attività fisica, ma anche incontro, crescita e condivisione.
              </p>

              <p class="reveal-item">
                Nel tempo SportCity Mantova è diventato un punto di riferimento per chi cerca un
                ambiente curato, vivo e costruito su valori veri.
              </p>
            </div>
          </div>

          <div class="reveal-item relative flex items-center justify-center">
            <div
              class="pointer-events-none absolute h-[340px] w-[340px] rounded-full bg-lime-400/10 blur-3xl"
            ></div>

            <TiltCard class="w-full">
              <div
                class="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-900 shadow-[0_20px_80px_rgba(0,0,0,0.4)]"
                style="transform-style: preserve-3d"
              >
                <div
                  class="min-h-[460px] bg-[url('/images/about-hero.jpg')] bg-cover bg-center"
                  style="transform: translateZ(18px)"
                ></div>

                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"
                ></div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      <section ref="valuesRef" class="pb-24">
        <div class="mx-auto max-w-7xl px-6">
          <div class="grid gap-6 md:grid-cols-3">
            <article
              class="reveal-item floating-card rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <p class="text-sm uppercase tracking-[0.25em] text-lime-400">Lealtà</p>
              <h3 class="mt-4 text-2xl font-semibold">Valori concreti</h3>
              <p class="mt-4 leading-7 text-neutral-300">
                Lealtà, correttezza, amicizia, fair play e onestà sono i principi che guidano ogni
                giorno la nostra idea di sport.
              </p>
            </article>

            <article
              class="reveal-item floating-card floating-card-delay-1 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <p class="text-sm uppercase tracking-[0.25em] text-lime-400">Integrazione</p>
              <h3 class="mt-4 text-2xl font-semibold">Una community aperta</h3>
              <p class="mt-4 leading-7 text-neutral-300">
                Crediamo nello sport come strumento di unione, inclusione e crescita personale,
                capace di creare relazioni vere.
              </p>
            </article>

            <article
              class="reveal-item floating-card floating-card-delay-2 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <p class="text-sm uppercase tracking-[0.25em] text-lime-400">Impianto indoor</p>
              <h3 class="mt-4 text-2xl font-semibold">Sport tutto l’anno</h3>
              <p class="mt-4 leading-7 text-neutral-300">
                Il nostro impianto indoor polivalente permette di vivere il centro in ogni stagione
                con continuità, comfort e qualità.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section ref="mindsetRef" class="pb-24">
        <div class="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
          <div class="reveal-item relative flex items-center justify-center">
            <div
              class="pointer-events-none absolute h-[320px] w-[320px] rounded-full bg-lime-400/10 blur-3xl"
            ></div>

            <TiltCard class="w-full">
              <div
                class="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-neutral-900 shadow-[0_20px_80px_rgba(0,0,0,0.4)]"
                style="transform-style: preserve-3d"
              >
                <div
                  class="min-h-[440px] bg-[url('/images/about-values.jpg')] bg-cover bg-center"
                  style="transform: translateZ(18px)"
                ></div>

                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent"
                ></div>
              </div>
            </TiltCard>
          </div>

          <div class="flex items-center">
            <div>
              <p class="reveal-item mb-4 text-sm uppercase tracking-[0.3em] text-lime-400">
                Il nostro modo di vivere lo sport
              </p>

              <h2
                class="reveal-item text-3xl font-semibold leading-tight tracking-tight md:text-5xl"
              >
                Coraggio, altruismo, spirito di squadra
              </h2>

              <div class="mt-6 space-y-5 text-lg leading-8 text-neutral-300">
                <p class="reveal-item">
                  Per noi lo sport è coraggio, generosità, sacrificio e rispetto. È un’esperienza
                  che aiuta a crescere come atleti e come persone.
                </p>

                <p class="reveal-item">
                  E soprattutto, nello sport di squadra nessuno vince da solo: il valore del gruppo
                  fa sempre la differenza.
                </p>
              </div>

              <div class="mt-8 flex flex-wrap gap-3 text-sm text-neutral-300">
                <span class="reveal-item rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  Fair play
                </span>
                <span class="reveal-item rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  Amicizia
                </span>
                <span class="reveal-item rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  Rispetto
                </span>
                <span class="reveal-item rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  Integrazione
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="relative pb-24">
        <div class="mx-auto max-w-7xl px-6">
          <div class="mb-10">
            <p class="mb-4 text-sm uppercase tracking-[0.3em] text-lime-400">I nostri partner</p>

            <h2 class="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Una rete di sponsor che sostiene il progetto
            </h2>
          </div>
        </div>

        <div class="relative overflow-hidden">
          <div class="marquee-track">
            <div class="marquee-content">
              <div
                v-for="(sponsor, index) in [...sponsors, ...sponsors]"
                :key="`${sponsor.name}-${index}`"
                class="sponsor-card"
              >
                <img :src="sponsor.src" :alt="sponsor.name" class="h-23 w-auto object-contain" />
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
.marquee-track {
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, white 8%, white 92%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, white 8%, white 92%, transparent);
}

.marquee-content {
  display: flex;
  width: max-content;
  gap: 1.25rem;
  animation: sponsorMarquee 26s linear infinite;
}

.sponsor-card {
  position: relative;
  overflow: hidden;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 280px;
  min-height: 130px;
  border-radius: 1.75rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.06);
  padding: 1.75rem;
  backdrop-filter: blur(12px);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.sponsor-card:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 0 30px rgba(163, 230, 53, 0.15);
}

.sponsor-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -120%;
  width: 60%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.35), transparent);
  transform: skewX(-20deg);
  animation: shine 4.5s ease-in-out infinite;
}

.sponsor-card:hover::before {
  animation: shineFast 0.8s ease forwards;
}

@keyframes sponsorMarquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-50% - 0.625rem));
  }
}

@keyframes shine {
  0% {
    left: -120%;
  }
  60% {
    left: 120%;
  }
  100% {
    left: 120%;
  }
}

@keyframes shineFast {
  from {
    left: -120%;
  }
  to {
    left: 120%;
  }
}

.floating-card {
  position: relative;
  overflow: hidden;
  transition:
    transform 0.35s ease,
    border-color 0.35s ease,
    background 0.35s ease,
    box-shadow 0.35s ease;
  animation: cardFloat 4.8s ease-in-out infinite;
}

.floating-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.07), transparent 35%);
  pointer-events: none;
  opacity: 0.9;
}

.floating-card:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: rgba(163, 230, 53, 0.3);
  background: rgba(255, 255, 255, 0.08);
  box-shadow:
    0 18px 40px rgba(0, 0, 0, 0.28),
    0 0 30px rgba(163, 230, 53, 0.1);
}

.floating-card-delay-1 {
  animation-delay: 0.8s;
}

.floating-card-delay-2 {
  animation-delay: 1.6s;
}

@keyframes cardFloat {
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
</style>
