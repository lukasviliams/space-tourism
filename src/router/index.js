import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Destination from '../views/Destination.vue'
import Crew from '../views/Crew.vue'
import Technology from '../views/Technology.vue'

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
    component: Destination,
  }, 
  {
    path:'/crew', 
    name:'Crew', 
    component: Crew,
  }, 
  {
    path:'/technology', 
    name:'Technology', 
    component: Technology
  },
  // Catch All routes 404
  {
    path: '/:catchAll(.*)', 
    name:'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
