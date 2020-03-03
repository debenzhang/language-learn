import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/editor',
    name: 'Editor',
    component: () => import('../views/Editor.vue')
  },
  {
    path: '/lesson/1',
    name: 'Lesson1',
    component: () => import('../page/1.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
