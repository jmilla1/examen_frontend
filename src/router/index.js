import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CalculoCalificaciones from '@/components/CalculoCalificaciones.vue'
import FormularioRegistro from '@/components/FormularioRegistro.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/calculo',
    name: 'CalculoCalificaciones',
    component: CalculoCalificaciones
  },
  {
    path: '/registro',
    name: 'FormularioRegistro',
    component: FormularioRegistro
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
