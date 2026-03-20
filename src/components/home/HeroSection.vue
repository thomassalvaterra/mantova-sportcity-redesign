<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import MagneticButton from '../ui/MagneticButton.vue'
import gsap from 'gsap'

const heroText = ref(null)
const heroStage = ref(null)
const heroCard = ref(null)
const floatingCardOne = ref(null)
const floatingCardTwo = ref(null)

let cleanupMouseMove = null
let cleanupTouchMove = null
let cleanupTouchEnd = null

onMounted(async () => {
  await nextTick()

  if (heroText.value) {
    gsap.fromTo(
      heroText.value.children,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
      },
    )
  }

  if (heroCard.value) {
    gsap.fromTo(
      heroCard.value,
      {
        opacity: 0,
        y: 30,
        rotateX: 8,
        rotateY: -8,
        scale: 0.96,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 1.2,
        delay: 0.2,
        ease: 'power3.out',
      },
    )
  }

  if (floatingCardOne.value && floatingCardTwo.value) {
    gsap.to(floatingCardOne.value, {
      y: -10,
      duration: 2.4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

    gsap.to(floatingCardTwo.value, {
      y: 10,
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  }

  const stage = heroStage.value
  const card = heroCard.value

  if (!stage || !card) return

  const animateCard = (clientX, clientY, intensity = 12) => {
    const rect = stage.getBoundingClientRect()
    const x = clientX - rect.left
    const y = clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateY = ((x - centerX) / rect.width) * intensity
    const rotateX = ((centerY - y) / rect.height) * intensity

    gsap.to(card, {
      rotateX,
      rotateY,
      transformPerspective: 1200,
      transformOrigin: 'center center',
      duration: 0.45,
      ease: 'power2.out',
    })

    if (floatingCardOne.value) {
      gsap.to(floatingCardOne.value, {
        x: ((x - centerX) / rect.width) * 12,
        y: ((y - centerY) / rect.height) * 8,
        duration: 0.45,
        ease: 'power2.out',
      })
    }

    if (floatingCardTwo.value) {
      gsap.to(floatingCardTwo.value, {
        x: ((x - centerX) / rect.width) * -10,
        y: ((y - centerY) / rect.height) * -8,
        duration: 0.45,
        ease: 'power2.out',
      })
    }
  }

  const resetCard = () => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
      ease: 'power3.out',
    })

    if (floatingCardOne.value) {
      gsap.to(floatingCardOne.value, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
      })
    }

    if (floatingCardTwo.value) {
      gsap.to(floatingCardTwo.value, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
      })
    }
  }

  const handleMouseMove = (event) => {
    animateCard(event.clientX, event.clientY, 12)
  }

  const handleMouseLeave = () => {
    resetCard()
  }

  const handleTouchMove = (event) => {
    const touch = event.touches[0]
    if (!touch) return
    animateCard(touch.clientX, touch.clientY, 7)
  }

  const handleTouchEnd = () => {
    resetCard()
  }

  stage.addEventListener('mousemove', handleMouseMove)
  stage.addEventListener('mouseleave', handleMouseLeave)
  stage.addEventListener('touchmove', handleTouchMove, { passive: true })
  stage.addEventListener('touchend', handleTouchEnd, { passive: true })

  cleanupMouseMove = () => {
    stage.removeEventListener('mousemove', handleMouseMove)
    stage.removeEventListener('mouseleave', handleMouseLeave)
  }

  cleanupTouchMove = () => {
    stage.removeEventListener('touchmove', handleTouchMove)
  }

  cleanupTouchEnd = () => {
    stage.removeEventListener('touchend', handleTouchEnd)
  }
})

onBeforeUnmount(() => {
  if (cleanupMouseMove) cleanupMouseMove()
  if (cleanupTouchMove) cleanupTouchMove()
  if (cleanupTouchEnd) cleanupTouchEnd()
})
</script>

<template>
  <section class="relative flex min-h-screen items-center overflow-hidden bg-neutral-950">
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(163,230,53,0.18),transparent_22%),radial-gradient(circle_at_85%_25%,rgba(163,230,53,0.08),transparent_18%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.06),transparent_30%)]"
    ></div>

    <div
      class="absolute inset-0 bg-gradient-to-b from-black/20 via-neutral-950/55 to-neutral-950"
    ></div>

    <div
      class="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl"
    ></div>
    <div
      class="pointer-events-none absolute bottom-10 right-0 h-80 w-80 rounded-full bg-lime-400/10 blur-3xl"
    ></div>

    <div
      class="pointer-events-none absolute inset-x-0 top-1/2 z-0 -translate-y-1/2 select-none overflow-hidden text-center"
    >
      <span class="bg-word">SPORTCITY</span>
    </div>

    <div
      class="relative mx-auto grid min-h-screen w-full max-w-7xl items-center gap-12 px-4 py-28 sm:px-6 sm:py-32 md:grid-cols-2 md:gap-16 md:px-10 xl:px-14"
    >
      <!-- TESTO -->
      <div ref="heroText" class="max-w-3xl text-center md:text-left">
        <p class="mb-4 text-xs uppercase tracking-[0.35em] text-lime-400 sm:text-sm">
          Mantova Sport City
        </p>

        <h1
          class="text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl"
        >
          Il centro sportivo di riferimento a Mantova
        </h1>

        <p
          class="mx-auto mt-6 max-w-xl text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8 md:mx-0"
        >
          Sport City Mantova è uno spazio moderno dedicato allo sport e al benessere, con campi
          indoor e outdoor per vivere ogni giorno un’esperienza attiva e coinvolgente.
        </p>

        <div class="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap md:items-start">
          <MagneticButton>
            <RouterLink
              to="/prenota"
              class="inline-flex min-w-[220px] items-center justify-center rounded-full bg-lime-400 px-6 py-3 font-medium text-black transition hover:scale-[1.03] sm:min-w-0"
            >
              Prenota ora
            </RouterLink>
          </MagneticButton>

          <MagneticButton>
            <RouterLink
              to="/il-centro"
              class="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/15 px-6 py-3 font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/5 sm:min-w-0"
            >
              Scopri il centro
            </RouterLink>
          </MagneticButton>
        </div>

        <div
          class="mt-10 flex flex-wrap justify-center gap-3 text-sm text-neutral-300 md:justify-start"
        >
          <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
            Padel
          </span>
          <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
            Beach Tennis
          </span>
          <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
            Beach Volley
          </span>
          <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
            Pickleball
          </span>
          <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
            Padbol
          </span>
        </div>
      </div>

      <!-- CARD HERO -->
      <div
        ref="heroStage"
        class="relative flex items-center justify-center px-0 md:px-0"
        style="perspective: 1200px"
      >
        <div
          class="pointer-events-none absolute h-[320px] w-[320px] rounded-full bg-lime-400/10 blur-3xl sm:h-[380px] sm:w-[380px] md:h-[420px] md:w-[420px]"
        ></div>

        <!-- floating cards: solo tablet+ -->
        <div
          ref="floatingCardOne"
          class="absolute left-2 top-0 z-20 hidden w-48 rounded-[1.5rem] border border-white/10 bg-black/55 p-4 backdrop-blur-xl lg:block xl:left-0"
        >
          <p class="text-xs uppercase tracking-[0.22em] text-lime-400">Esperienza</p>
          <p class="mt-2 text-base font-semibold text-white">Più sport, più qualità</p>
          <p class="mt-2 text-sm leading-6 text-neutral-300">
            Un ambiente moderno pensato per vivere lo sport ogni giorno.
          </p>
        </div>

        <div
          ref="floatingCardTwo"
          class="absolute bottom-4 right-2 z-20 hidden w-52 rounded-[1.5rem] border border-white/10 bg-black/55 p-4 backdrop-blur-xl lg:block xl:right-0"
        >
          <p class="text-xs uppercase tracking-[0.22em] text-lime-400">Prenotazione</p>
          <p class="mt-2 text-base font-semibold text-white">Più semplice e veloce</p>
          <p class="mt-2 text-sm leading-6 text-neutral-300">
            Controlla disponibilità e prenota il tuo campo in pochi passaggi.
          </p>
        </div>

        <div
          ref="heroCard"
          class="relative z-10 w-full max-w-[360px] will-change-transform sm:max-w-[420px] md:max-w-[520px] xl:max-w-[560px]"
          style="transform-style: preserve-3d"
        >
          <div
            class="overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
            style="transform: translateZ(0)"
          >
            <div
              class="relative min-h-[420px] bg-[url('/images/hero.jpg')] bg-cover bg-center sm:min-h-[480px] md:min-h-[540px] xl:min-h-[560px]"
            >
              <div
                class="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent"
              ></div>

              <div
                class="absolute left-4 top-4 rounded-full border border-white/10 bg-black/45 px-3 py-2 text-xs text-white backdrop-blur-md sm:left-6 sm:top-6 sm:px-4 sm:text-sm"
              >
                Sport experience
              </div>

              <div
                class="absolute bottom-4 left-4 right-4 grid gap-3 sm:bottom-6 sm:left-6 sm:right-6 sm:gap-4 md:grid-cols-2"
              >
                <div
                  class="rounded-[1.4rem] border border-white/10 bg-black/50 p-4 backdrop-blur-md sm:rounded-[1.5rem] sm:p-5"
                  style="transform: translateZ(30px)"
                >
                  <p class="text-xs uppercase tracking-[0.2em] text-lime-400 sm:text-sm">
                    Indoor & Outdoor
                  </p>
                  <p class="mt-2 text-lg font-semibold text-white sm:text-xl">Più flessibilità</p>
                </div>

                <div
                  class="rounded-[1.4rem] border border-white/10 bg-black/50 p-4 backdrop-blur-md sm:rounded-[1.5rem] sm:p-5"
                  style="transform: translateZ(45px)"
                >
                  <p class="text-xs uppercase tracking-[0.2em] text-lime-400 sm:text-sm">
                    Community
                  </p>
                  <p class="mt-2 text-lg font-semibold text-white sm:text-xl">Uno spazio vivo</p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="pointer-events-none absolute -bottom-6 left-10 right-10 h-16 rounded-full bg-black/40 blur-2xl"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
