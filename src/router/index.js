import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AcercaDeNosotros from '../views/AcercaDeNosotrosView.vue'
import Servicios from '../views/ServiciosView.vue'
import Contacto from '../views/ContactoView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/acercadenosotros',
      name: 'AcercaDeNosotros',
      component: AcercaDeNosotros 
    },
    {
      path: '/servicios',
      name: 'Servicios',
      component: Servicios 
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: Contacto 
    },
  ]
})

export default router
