import Vue from 'vue'
import Router from 'vue-router'
import views from '@/views'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        label: '首頁'
      },
      component: views.Home
    },
    {
      path: '/cfp',
      name: 'CFP',
      meta: {
        label: 'CFP'
      },
      component: views.CFP
    },
    {
      path: '/agenda',
      name: 'Agenda',
      meta: {
        label: '議程'
      },
      component: views.Agenda
    }
  ].map(routeRule => {
    routeRule.path = `/2019${routeRule.path}`
    return routeRule
  })
})

export default router
