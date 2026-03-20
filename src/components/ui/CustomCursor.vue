<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

const cursorDot = ref(null)
const cursorRing = ref(null)

let removeListeners = null

onMounted(() => {
  const dot = cursorDot.value
  const ring = cursorRing.value

  if (!dot || !ring) return

  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0

  if (isTouchDevice) return

  const moveCursor = (event) => {
    const x = event.clientX
    const y = event.clientY

    gsap.to(dot, {
      x,
      y,
      duration: 0.08,
      ease: 'power3.out',
    })

    gsap.to(ring, {
      x,
      y,
      duration: 0.22,
      ease: 'power3.out',
    })
  }

  const handleMouseOver = (event) => {
    const target = event.target.closest("a, button, [data-cursor='hover'], .cursor-hover")

    if (!target) return

    gsap.to(dot, {
      scale: 1.8,
      duration: 0.2,
      ease: 'power2.out',
    })

    gsap.to(ring, {
      scale: 1.8,
      opacity: 0.9,
      duration: 0.25,
      ease: 'power2.out',
    })
  }

  const handleMouseOut = (event) => {
    const target = event.target.closest("a, button, [data-cursor='hover'], .cursor-hover")

    if (!target) return

    gsap.to(dot, {
      scale: 1,
      duration: 0.2,
      ease: 'power2.out',
    })

    gsap.to(ring, {
      scale: 1,
      opacity: 1,
      duration: 0.25,
      ease: 'power2.out',
    })
  }

  const handleMouseLeaveWindow = () => {
    gsap.to([dot, ring], {
      opacity: 0,
      duration: 0.2,
    })
  }

  const handleMouseEnterWindow = () => {
    gsap.to([dot, ring], {
      opacity: 1,
      duration: 0.2,
    })
  }

  window.addEventListener('mousemove', moveCursor)
  document.addEventListener('mouseover', handleMouseOver)
  document.addEventListener('mouseout', handleMouseOut)
  document.addEventListener('mouseleave', handleMouseLeaveWindow)
  document.addEventListener('mouseenter', handleMouseEnterWindow)

  removeListeners = () => {
    window.removeEventListener('mousemove', moveCursor)
    document.removeEventListener('mouseover', handleMouseOver)
    document.removeEventListener('mouseout', handleMouseOut)
    document.removeEventListener('mouseleave', handleMouseLeaveWindow)
    document.removeEventListener('mouseenter', handleMouseEnterWindow)
  }
})

onBeforeUnmount(() => {
  if (removeListeners) removeListeners()
})
</script>

<template>
  <div class="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
    <div
      ref="cursorRing"
      class="absolute left-0 top-0 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-white/[0.03] backdrop-blur-sm"
    ></div>

    <div
      ref="cursorDot"
      class="absolute left-0 top-0 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400 shadow-[0_0_18px_rgba(163,230,53,0.45)]"
    ></div>
  </div>
</template>
