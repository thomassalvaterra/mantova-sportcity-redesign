<script setup>
import { ref } from 'vue'
import gsap from 'gsap'

const wrapperRef = ref(null)

function handleMove(event) {
  const el = wrapperRef.value
  if (!el) return

  const rect = el.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  const moveX = ((x - rect.width / 2) / rect.width) * 16
  const moveY = ((y - rect.height / 2) / rect.height) * 16

  gsap.to(el, {
    x: moveX,
    y: moveY,
    duration: 0.28,
    ease: 'power2.out',
  })
}

function handleLeave() {
  const el = wrapperRef.value
  if (!el) return

  gsap.to(el, {
    x: 0,
    y: 0,
    duration: 0.35,
    ease: 'power3.out',
  })
}
</script>

<template>
  <div
    ref="wrapperRef"
    class="inline-block will-change-transform"
    @mousemove="handleMove"
    @mouseleave="handleLeave"
  >
    <slot />
  </div>
</template>
