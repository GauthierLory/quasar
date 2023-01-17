// import * as VueRouter from 'vue-router'
import useAuthUser from '../composables/useAuthUser.js'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { name: 'Login', path: '/login', component: () => import('pages/LoginPage.vue') },
      {
        name: 'Logout',
        path: '/logout',
        beforeEnter: async (to, from) => {
          const { logout } = useAuthUser()
          await logout()
          return { path: '/login' }
        }
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]
// const router = VueRouter.createRouter({
//   history: VueRouter.createWebHistory(),
//   routes
// })

export default routes
