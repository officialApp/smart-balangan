import Vue from 'vue'
import Router from 'vue-router'
import routes from 'vue-auto-routing'
import VueMeta from 'vue-meta'
Vue.use(VueMeta)
import { createRouterLayout } from 'vue-router-layout'

Vue.use(Router)

const RouterLayout = createRouterLayout(layout => {
  return import('@/layouts/' + layout + '.vue')
})

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: RouterLayout,
      children: routes
    }
  ]
})
