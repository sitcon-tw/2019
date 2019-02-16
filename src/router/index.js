import Vue from 'vue'
import Router from 'vue-router'
import views from '@/views'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/2019/cfp'
    },
    {
      path: '/',
      name: 'Home',
      meta: {
        type: 'self',
        index: 0,
        label: 'SITCON 19'
      },
      component: views.Home
    },
    {
      path: '/agenda',
      name: 'Agenda',
      meta: {
        type: 'main',
        index: 1,
        label: '議程'
      },
      component: views.Agenda
    },
    {
      path: '/agenda/:sessionId',
      name: 'AgendaPopup',
      meta: {
        type: 'popup'
      },
      component: views.Agenda
    },
    {
      path: '/active',
      name: 'Active',
      meta: {
        type: 'main',
        index: 2,
        label: '活動'
      },
      component: views.Active
    },
    {
      path: '/sponsor',
      name: 'Sponsor',
      meta: {
        type: 'main',
        index: 3,
        label: '贊助'
      },
      component: views.Sponsor
    },
    {
      path: '/location',
      name: 'Location',
      meta: {
        type: 'main',
        index: 4,
        label: '地點'
      },
      component: views.Location
    },
    {
      path: '/venue',
      name: 'Venue',
      meta: {
        type: 'main',
        index: 5,
        label: '會場地圖'
      },
      component: views.Venue
    },
    {
      path: '/staff',
      name: 'Staff',
      meta: {
        type: 'main',
        index: 6,
        label: '工作人員'
      },
      component: views.Staff
    },
    {
      path: '/cfp',
      name: 'CFP',
      meta: {
        type: 'self',
        label: 'CFP'
      },
      component: views.CFP
    }
  ].map(routeRule => {
    routeRule.path = `/2019${routeRule.path}`
    return routeRule
  }),
  scrollBehavior (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

export default router
