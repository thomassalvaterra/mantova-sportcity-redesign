<script setup>
import { RouterView } from 'vue-router'
import CustomCursor from './components/ui/CustomCursor.vue'
import PageLoader from './components/ui/PageLoader.vue'
import MainNavbar from './components/layout/MainNavbar.vue'
import BookingModal from './components/ui/BookingModal.vue'
import WhatsappFloat from './components/ui/WhatsappFloat.vue'
import { useBookingModal } from './stores/bookingModal'

const { isBookingModalOpen, closeBookingModal } = useBookingModal()
</script>

<template>
  <PageLoader />
  <CustomCursor />
  <MainNavbar />

  <RouterView v-slot="{ Component, route }">
    <transition name="page-smooth" mode="out-in">
      <div :key="route.fullPath" class="page-shell">
        <component :is="Component" />
      </div>
    </transition>
  </RouterView>

  <BookingModal :is-open="isBookingModalOpen" @close="closeBookingModal" />
  <WhatsappFloat />
</template>
