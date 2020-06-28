import Vue from 'vue'
import VueRouter from 'vue-router'
import  home  from './modules/index'
Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/login'),
  },
  home,
]

const router = new VueRouter({
  routes
})

export default router
