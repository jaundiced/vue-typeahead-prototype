import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import BulmaTest from '@/components/BulmaTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test',
      component: Test
    },
    {
      path:"/b",
      name: "Bulma Test",
      component: BulmaTest
    }
  ]
})
