import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Landing from '@/components/Landing'
import Login from '@/components/Login'
import MainLayout from '@/components/layouts/MainLayout'
import Tasks from '@/components/Tasks'
import NotFoundComponent from '@/components/NotFoundComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'MainLayout',
      component: MainLayout,
      children: [
        {
          path: 'hello',
          alias: '',
          component: Hello,
          name: 'Hello',
          meta: {
            description: 'Vue hello World',
            requiresAuth: true
          }
        },
        {
          path: 'tasks',
          name: 'Tasks',
          component: Tasks,
          meta: {
            description: 'Tasks',
            requiresAuth: true
          }
        }
      ]
    },
    {
      path: '*',
      component: NotFoundComponent
    }
  ]
})
