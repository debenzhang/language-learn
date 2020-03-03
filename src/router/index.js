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
  },
  {
    path: '/lesson/2',
    name: 'Lesson2',
    component: () => import('../page/2.vue')
  },
  {
    path: '/lesson/3',
    name: 'Lesson3',
    component: () => import('../page/3.vue')
  },
  {
    path: '/lesson/4',
    name: 'Lesson4',
    component: () => import('../page/4.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
