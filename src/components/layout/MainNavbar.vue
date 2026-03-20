<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vue-router'
import logoSportCity from '../../assets/logo-sportcity.png'

const route = useRoute()
const isScrolled = ref(false)
const isMenuOpen = ref(false)

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Il Centro', to: '/il-centro' },
  { label: 'Sport', to: '/sport' },
  { label: 'Tariffe', to: '/tariffe' },
  { label: 'Eventi', to: '/eventi' },
  { label: 'Contatti', to: '/contatti' },
]

function isActive(path) {
  return route.path === path
}

function handleScroll() {
  isScrolled.value = window.scrollY > 24
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

watch(
  () => route.fullPath,
  () => {
    closeMenu()
  },
)

watch(isMenuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<template>
  <header
    :class="[
      'fixed left-0 top-0 z-[1000] w-full border-b transition-all duration-300',
      isScrolled
        ? 'border-white/10 bg-black/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]'
        : 'border-white/5 bg-black/25 backdrop-blur-md',
    ]"
  >
    <div
      :class="[
        'flex w-full items-center justify-between px-4 sm:px-6 md:px-10 xl:px-14 transition-all duration-300',
        isScrolled ? 'py-3' : 'py-4 md:py-6',
      ]"
    >
      <!-- logo -->
      <RouterLink to="/" class="flex items-center" @click="closeMenu">
        <img
          :src="logoSportCity"
          alt="Sport City Mantova"
          :class="[
            'w-auto object-contain transition-all duration-300',
            isScrolled ? 'h-10 sm:h-11 md:h-12' : 'h-12 sm:h-14 md:h-16',
          ]"
        />
      </RouterLink>

      <!-- nav desktop -->
      <nav class="hidden items-center gap-10 text-[15px] font-medium text-white md:flex">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="group relative px-2 py-1 text-white/80 transition duration-300 hover:text-white"
          :class="isActive(link.to) ? 'text-white font-semibold' : 'text-white/70'"
        >
          {{ link.label }}

          <span
            :class="[
              'absolute -bottom-1 left-0 h-[2px] bg-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.6)] transition-all duration-300',
              isActive(link.to)
                ? 'w-full opacity-100'
                : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100',
            ]"
          ></span>
        </RouterLink>
      </nav>

      <!-- actions desktop -->
      <div class="hidden items-center gap-3 md:flex">
        <RouterLink
          to="/contatti"
          class="rounded-full border border-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/5"
        >
          Contatti
        </RouterLink>

        <RouterLink
          to="/prenota"
          class="rounded-full bg-lime-400 px-5 py-2 text-sm font-medium text-black shadow-[0_0_10px_rgba(163,230,53,0.6)] transition hover:scale-[1.03]"
        >
          Prenota un campo
        </RouterLink>
      </div>

      <!-- mobile actions -->
      <div class="flex items-center gap-2 md:hidden">
        <RouterLink
          to="/prenota"
          class="rounded-full bg-lime-400 px-4 py-2 text-xs font-semibold text-black shadow-[0_0_10px_rgba(163,230,53,0.6)] transition hover:scale-[1.03] sm:px-5 sm:text-sm"
          @click="closeMenu"
        >
          Prenota
        </RouterLink>

        <button
          type="button"
          @click="toggleMenu"
          class="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
          :aria-expanded="isMenuOpen"
          aria-label="Apri menu"
        >
          <div class="relative h-4 w-5">
            <span
              class="absolute left-0 top-0 h-[2px] w-full rounded-full bg-white transition-all duration-300"
              :class="isMenuOpen ? 'translate-y-[7px] rotate-45' : ''"
            ></span>
            <span
              class="absolute left-0 top-[7px] h-[2px] w-full rounded-full bg-white transition-all duration-300"
              :class="isMenuOpen ? 'opacity-0' : ''"
            ></span>
            <span
              class="absolute left-0 top-[14px] h-[2px] w-full rounded-full bg-white transition-all duration-300"
              :class="isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''"
            ></span>
          </div>
        </button>
      </div>
    </div>
  </header>

  <!-- mobile menu -->
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 z-[999] bg-black/75 backdrop-blur-md md:hidden"
      @click="closeMenu"
    >
      <div
        class="absolute left-4 right-4 top-24 overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-950/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
        @click.stop
      >
        <div
          class="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-lime-400/10 blur-3xl"
        ></div>

        <div class="relative z-10">
          <p class="mb-5 text-xs uppercase tracking-[0.3em] text-lime-400">Navigazione</p>

          <nav class="grid gap-2">
            <RouterLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="flex items-center justify-between rounded-2xl border px-4 py-4 text-base font-medium transition"
              :class="
                isActive(link.to)
                  ? 'border-lime-400/30 bg-lime-400/10 text-white'
                  : 'border-white/8 bg-white/5 text-white/85 hover:bg-white/8'
              "
            >
              <span>{{ link.label }}</span>
              <span class="text-lime-400">→</span>
            </RouterLink>
          </nav>

          <div class="mt-6 grid gap-3">
            <RouterLink
              to="/contatti"
              class="flex items-center justify-center rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/5"
            >
              Contatti
            </RouterLink>

            <RouterLink
              to="/prenota"
              class="flex items-center justify-center rounded-full bg-lime-400 px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
            >
              Prenota un campo
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
