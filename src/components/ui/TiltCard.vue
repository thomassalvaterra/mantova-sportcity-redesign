<script setup>
import { ref } from 'vue'
import gsap from 'gsap'

const cardRef = ref(null)

function handleMove(event) {
  const card = cardRef.value
  if (!card) return

  const rect = card.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  const centerX = rect.width / 2
  const centerY = rect.height / 2

  const rotateY = ((x - centerX) / centerX) * 8
  const rotateX = -((y - centerY) / centerY) * 8

  gsap.to(card, {
    rotateX,
    rotateY,
    scale: 1.02,
    duration: 0.35,
    ease: 'power2.out',
    transformPerspective: 1000,
    transformOrigin: 'center center',
  })
}

function handleLeave() {
  const card = cardRef.value
  if (!card) return

  gsap.to(card, {
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    duration: 0.5,
    ease: 'power3.out',
  })
}
</script>

<template>
  <div
    class="will-change-transform"
    style="transform-style: preserve-3d"
    ref="cardRef"
    @mousemove="handleMove"
    @mouseleave="handleLeave"
  >
    <slot />
  </div>
</template>
