import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SportsView from '../views/SportsView.vue'
import PricingView from '../views/PricingView.vue'
import EventsView from '../views/EventsView.vue'
import ContactView from '../views/ContactView.vue'
import BookingView from '../views/BookingView.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0, behavior: 'instant' }
  },
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/il-centro', name: 'about', component: AboutView },
    { path: '/sport', name: 'sports', component: SportsView },
    { path: '/tariffe', name: 'pricing', component: PricingView },
    { path: '/eventi', name: 'events', component: EventsView },
    { path: '/contatti', name: 'contact', component: ContactView },
    { path: '/prenota', name: 'booking', component: BookingView },
  ],
})

export default router
