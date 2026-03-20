<script setup>
const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Il Centro', to: '/il-centro' },
  { label: 'Sport', to: '/sport' },
  { label: 'Tariffe', to: '/tariffe' },
  { label: 'Eventi', to: '/eventi' },
  { label: 'Contatti', to: '/contatti' },
]

const brandLetters = ['S', 'P', 'O', 'R', 'T', 'C', 'I', 'T', 'Y']
</script>

<template>
  <footer class="relative w-full border-t border-white/10 bg-black">
    <div class="w-full px-6 py-14 md:px-10 xl:px-14">
      <div class="grid gap-12 xl:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <!-- BRAND -->
        <div>
          <div class="footer-brand-3d" aria-label="SPORTCITY">
            <span
              v-for="(letter, index) in brandLetters"
              :key="`${letter}-${index}`"
              class="footer-letter"
            >
              {{ letter }}
            </span>
          </div>

          <p class="mt-6 max-w-xl text-base leading-7 text-neutral-400 md:text-lg">
            Il tuo spazio dedicato allo sport, alla community e ai momenti da vivere dentro e fuori
            dal campo.
          </p>

          <div class="mt-8 flex flex-wrap gap-3 text-sm text-neutral-300">
            <span class="footer-pill">Padel</span>
            <span class="footer-pill">Beach Tennis</span>
            <span class="footer-pill">Beach Volley</span>
            <span class="footer-pill">Pickleball</span>
            <span class="footer-pill">Padbol</span>
          </div>
        </div>

        <!-- NAV -->
        <div>
          <p class="footer-title">Navigazione</p>

          <nav class="mt-5 grid gap-2">
            <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to" class="footer-link">
              <span>{{ link.label }}</span>
              <span class="footer-arrow">→</span>
            </RouterLink>
          </nav>
        </div>

        <!-- CONTACTS -->
        <div>
          <p class="footer-title">Contatti</p>

          <div class="mt-5 grid gap-3 text-neutral-300">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Via+Palmiro+Azzi+5+Mantova"
              target="_blank"
              rel="noreferrer"
              class="footer-contact"
            >
              <span class="footer-contact-label">Indirizzo</span>
              <span>Via Palmiro Azzi 5, Mantova</span>
            </a>

            <a href="tel:+393515188191" class="footer-contact">
              <span class="footer-contact-label">Segreteria</span>
              <span>+39 351 518 8191</span>
            </a>

            <div class="footer-contact">
              <span class="footer-contact-label">Orari</span>
              <span>Lun - Ven 09:00 - 00:00</span>
              <span>Sab - Dom 09:00 - 20:00</span>
            </div>

            <div class="mt-2 flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/sportcity.mantova/"
                target="_blank"
                rel="noreferrer"
                class="footer-social"
              >
                Instagram
              </a>

              <a
                href="https://www.facebook.com/Mantovasportcity/"
                target="_blank"
                rel="noreferrer"
                class="footer-social"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 h-px w-full bg-white/10"></div>

      <div
        class="mt-5 flex flex-col gap-2 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between"
      >
        <p>© 2026 Sport City Mantova. Tutti i diritti riservati.</p>
        <a
          href="https://portfolio-eta-vert-i9e452m5nk.vercel.app/"
          target="_blank"
          class="transition hover:text-lime-400"
        >
          Design & sviluppo — Thomas Salvaterra
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-brand-3d {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  align-items: center;
  perspective: 1200px;
}

.footer-letter {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: clamp(40px, 4vw, 64px);
  height: clamp(56px, 6vw, 82px);
  padding: 0 0.2rem;
  border-radius: 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.04));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.12),
    0 10px 24px rgba(0, 0, 0, 0.32),
    0 0 0 rgba(163, 230, 53, 0);
  backdrop-filter: blur(8px);
  color: white;
  font-size: clamp(2rem, 5vw, 4.2rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.08em;
  transform: translateY(0) rotateX(0deg) rotateY(0deg) scale(1);
  transform-style: preserve-3d;
  transition:
    transform 0.28s ease,
    box-shadow 0.28s ease,
    border-color 0.28s ease,
    background 0.28s ease,
    color 0.28s ease;
  cursor: default;

  animation: footerFloat 5.8s ease-in-out infinite;
}

.footer-letter:hover {
  transform: translateY(-10px) rotateX(12deg) rotateY(-10deg) scale(1.06);
  border-color: rgba(163, 230, 53, 0.35);
  background: linear-gradient(180deg, rgba(163, 230, 53, 0.22), rgba(255, 255, 255, 0.06));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.14),
    0 18px 34px rgba(0, 0, 0, 0.36),
    0 0 26px rgba(163, 230, 53, 0.16);
  color: #f7ffe8;
}

.footer-letter:nth-child(1) {
  animation-delay: 0s;
}
.footer-letter:nth-child(2) {
  animation-delay: 0.12s;
}
.footer-letter:nth-child(3) {
  animation-delay: 0.24s;
}
.footer-letter:nth-child(4) {
  animation-delay: 0.36s;
}
.footer-letter:nth-child(5) {
  animation-delay: 0.48s;
}
.footer-letter:nth-child(6) {
  animation-delay: 0.6s;
}
.footer-letter:nth-child(7) {
  animation-delay: 0.72s;
}
.footer-letter:nth-child(8) {
  animation-delay: 0.84s;
}
.footer-letter:nth-child(9) {
  animation-delay: 0.96s;
}

.footer-title {
  font-size: 0.78rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #a3e635;
}

.footer-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.85rem 0.95rem;
  border-radius: 0.95rem;
  border: 1px solid transparent;
  color: rgb(212 212 212);
  background: rgba(255, 255, 255, 0.03);
  transition:
    transform 0.25s ease,
    background 0.25s ease,
    border-color 0.25s ease,
    color 0.25s ease;
}

.footer-link:hover {
  transform: translateX(6px);
  color: white;
  border-color: rgba(163, 230, 53, 0.16);
  background: rgba(255, 255, 255, 0.06);
}

.footer-arrow {
  color: #a3e635;
  transition: transform 0.25s ease;
}

.footer-link:hover .footer-arrow {
  transform: translateX(4px);
}

.footer-contact {
  display: grid;
  gap: 0.2rem;
  padding: 0.95rem 1rem;
  border-radius: 0.95rem;
  border: 1px solid transparent;
  background: rgba(255, 255, 255, 0.03);
  transition:
    transform 0.25s ease,
    background 0.25s ease,
    border-color 0.25s ease,
    color 0.25s ease;
}

a.footer-contact:hover,
.footer-contact:hover {
  transform: translateY(-3px);
  border-color: rgba(163, 230, 53, 0.16);
  background: rgba(255, 255, 255, 0.06);
  color: white;
}

.footer-contact-label {
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #a3e635;
}

.footer-social {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 0.95rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  background: rgba(255, 255, 255, 0.04);
  transition:
    transform 0.25s ease,
    background 0.25s ease,
    border-color 0.25s ease;
}

.footer-social:hover {
  transform: translateY(-3px);
  border-color: rgba(163, 230, 53, 0.18);
  background: rgba(255, 255, 255, 0.07);
}

.footer-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.55rem 0.9rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
}

@media (max-width: 768px) {
  .footer-brand-3d {
    gap: 0.25rem;
  }

  .footer-letter {
    min-width: 34px;
    height: 48px;
    border-radius: 0.9rem;
  }
}

@keyframes footerFloat {
  0% {
    transform: translateY(0px) rotateX(0deg);
  }
  25% {
    transform: translateY(-8px) rotateX(4deg);
  }
  50% {
    transform: translateY(-14px) rotateX(0deg);
  }
  75% {
    transform: translateY(-8px) rotateX(-4deg);
  }
  100% {
    transform: translateY(0px) rotateX(0deg);
  }
}
</style>
