<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import logoSportCity from '../../assets/logo-sportcity.png'

const loaderRef = ref(null)
const bgTextRef = ref(null)
const logoRef = ref(null)

onMounted(() => {
  const loader = loaderRef.value
  const bgText = bgTextRef.value
  const logo = logoRef.value

  if (!loader || !bgText || !logo) return

  const hasVisited = sessionStorage.getItem('sportcity-loader-shown')

  if (hasVisited) {
    loader.style.display = 'none'
    return
  }

  sessionStorage.setItem('sportcity-loader-shown', 'true')

  const tl = gsap.timeline()

  tl.set(loader, {
    opacity: 1,
    display: 'flex',
  })

  tl.fromTo(
    bgText,
    {
      opacity: 0,
      scale: 1.08,
      y: 20,
    },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1.1,
      ease: 'power3.out',
    },
  )

  tl.fromTo(
    logo,
    {
      opacity: 0,
      scale: 0.78,
      y: 16,
    },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1,
      ease: 'power4.out',
    },
    '-=0.65',
  )

  tl.to(
    logo,
    {
      scale: 1.04,
      duration: 0.8,
      yoyo: true,
      repeat: 1,
      ease: 'sine.inOut',
    },
    '-=0.15',
  )

  tl.to(loader, {
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: 'power2.out',
  })

  tl.set(loader, {
    display: 'none',
  })
})
</script>

<template>
  <div
    ref="loaderRef"
    class="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-neutral-950"
  >
    <div
      class="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl"
    ></div>
    <div
      class="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-lime-400/10 blur-3xl"
    ></div>

    <div
      ref="bgTextRef"
      class="pointer-events-none absolute inset-x-0 top-1/2 z-0 -translate-y-1/2 select-none text-center"
    >
      <span
        class="text-[20vw] font-semibold uppercase leading-none tracking-[-0.08em] text-white/[0.04] md:text-[14vw]"
      >
        SPORTCITY
      </span>
    </div>

    <div ref="logoRef" class="relative z-10">
      <img
        :src="logoSportCity"
        alt="Sport City Mantova"
        class="h-28 object-contain drop-shadow-[0_0_28px_rgba(163,230,53,0.22)] md:h-36"
      />
    </div>
  </div>
</template>
