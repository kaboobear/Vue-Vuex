import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contacts from '../views/Contacts.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/about',
    component: About,
  },
  {
    path: '/contacts',
    component: Contacts,
  },
  {
    path: '/',
    component: Home
  },
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
