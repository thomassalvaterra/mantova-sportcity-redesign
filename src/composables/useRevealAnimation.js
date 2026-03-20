import { onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useRevealAnimation(sectionRef, itemSelector = '.reveal-item') {
  onMounted(async () => {
    await nextTick()

    if (!sectionRef.value) return

    const items = sectionRef.value.querySelectorAll(itemSelector)

    if (!items.length) return

    gsap.set(items, {
      opacity: 0,
      y: 60,
    })

    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.18,
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 78%',
        once: true,
      },
    })
  })
}
