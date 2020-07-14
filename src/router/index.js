import Vue from 'vue'
import VueRouter from 'vue-router'

import home from 'views/home/home'
import cart from 'views/cart/cart'
import category from 'views/category/category'
import profile from 'views/profile/profile'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home,
    name: 'home'
  },
  {
    path: '/cart',
    component: cart,
    name: 'cart'
  },
  {
    path: '/category',
    component: category,
    name: 'category'
  },
  {
    path: '/profile',
    component: profile,
    name: 'profile'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
