import Vue from 'vue'
import Router from 'vue-router'
// 配置路由
import Layout from '@/page/layout'
import Center from '@/page/center'
import Order from '@/page/order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [{
        path: '/',
        name: 'Center',
        component: Center
      }, {
        path: 'order',
        name: 'Order',
        component: Order
      }]
    }
  ]
})
