import { ref } from 'vue'

const isBookingModalOpen = ref(false)

export function useBookingModal() {
  function openBookingModal() {
    isBookingModalOpen.value = true
  }

  function closeBookingModal() {
    isBookingModalOpen.value = false
  }

  return {
    isBookingModalOpen,
    openBookingModal,
    closeBookingModal,
  }
}
