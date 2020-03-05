import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/works',
      name: 'works',
      component: () => import('../views/Works.vue')
    },
    {
      path: '/contact',
      name: '/contact',
      component: () => import('../views/Contact.vue')
    }
  ]
})
