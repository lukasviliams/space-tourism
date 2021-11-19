import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/destination', 
    name:'Destination', 
    component: () => import ('../views/Destination.vue')
  }, 
  {
    path:'/crew', 
    name:'Crew', 
    component: () => import ('../views/Crew.vue')
  }, 
  {
    path:'/technology', 
    name:'Technology', 
    component:() => import ('../views/Technology.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
