import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: HelloWorld
    },
    {
      path: '/user/:id',
      name: 'userInfo',
      component: User
    }
  ]
})
