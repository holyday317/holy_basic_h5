import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/recommendHome'
  }
  
//   {
//     path: '/recommendHome',
//     name: 'recommendHome',
//     component: () => import(/* webpackChunkName: "recommendHome" */ '../views/recommend/recommendHome.vue')
//     // meta: {
//     //   keepAlive: true
//     // }
//   }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
