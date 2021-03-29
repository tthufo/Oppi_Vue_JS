import Vue from 'vue'
import Router from 'vue-router'
import PollMenu from '@/components/PollMenu'
import MainMenu from '@/components/MainMenu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainMenu',
      component: MainMenu
    },
    {
      path: '/dashboard',
      name: 'PollMenu',
      component: PollMenu
    }
  ]
})
