import { createRouter, createWebHistory } from 'vue-router'
// import Login_In from '@/components/Login_In.vue'
// import Toggleclass from '@/components/Toggleclass.vue'
import HashedPass from '@/components/HashedPass.vue'
import Weather from '@/components/Weather.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: Login_In,
    // },
    // {
    //   path: '/',
    //   name: 'toggle',
    //   component: Toggleclass,
    // },
    {
      path: '/pass',
      name: 'password',
      component: HashedPass,
    },
    {
      path: '/weather',
      name: 'weather',
      component: Weather,
    }
  ],
})

export default router
