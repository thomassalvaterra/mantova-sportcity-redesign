<script setup>
import SiteFooter from '../components/layout/SiteFooter.vue'
import HeroSection from '../components/home/HeroSection.vue'
import FeaturesSection from '../components/home/FeaturesSection.vue'
import SportsPreview from '../components/home/SportsPreview.vue'
import AppShowcaseSection from '../components/home/AppShowcaseSection.vue'
import CTASection from '../components/home/CTASection.vue'
</script>

<template>
  <div class="bg-neutral-950 text-white">
    <HeroSection />
    <FeaturesSection />
    <SportsPreview />
    <AppShowcaseSection />
    <CTASection />
    <SiteFooter />
  </div>
</template>
