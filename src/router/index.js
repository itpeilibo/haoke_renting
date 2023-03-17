import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout/home'
  },
  {
    path: '/IndexBar',
    name: 'IndexBar',
    component: () => import('@/components/IndexBar.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/login.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/components/search.vue')
  },
  {
    path: '/HousingInformation',
    name: 'HousingInformation',
    component: () => import('@/views/HousingInformation')
  },
  {
    path: '/MyCollection',
    name: 'MyCollection',
    component: () => import('@/views/MyCollection')
  },
  {
    path: '/searchs',
    name: 'searchs',
    component: () => import('@/views/Rental/components/search')
  },
  {
    path: '/baidu',
    name: 'baidu',
    component: () => import('@/views/baidu')
  },
  {
    path: '/MyRent',
    name: 'MyRent',
    component: () => import('@/views/MyRent')
  },
  {
    path: '/Rental',
    name: 'Rental',
    component: () => import('@/views/Rental')
  },
  {
    path: '/layout',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '/layout/home',
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        name: 'gethome',
        path: '/layout/gethome',
        component: () => import('@/views/gethome')
      },
      {
        path: '/layout/getnews',
        component: () => import('@/views/getnews')
      },
      {
        path: '/layout/myhome',
        component: () => import('@/views/myhome')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
