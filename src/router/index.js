import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [

  {
    path: '/zh/agent/default.aspx',
    name: 'login-default',
    component: require('@/views/Index/index').default
  },
  {
    path: '/zh/agent/GroupAdd.aspx',
    name: 'group-add',
    component: require('@/views/GroupAdd/index').default
  },
  {
    path: '/zh/agent/Card/CardAdd.aspx',
    name: 'card-add',
    component: require('@/views/CardAdd/index').default
  },
  {
    path: '/zh/agent/',
    name: 'agent-main',
    component: require('@/views/Content/index').default,
    children: [{
      path: 'Main.html',
      name: 'agent-center',
      component: require('@/views/Center/index').default,
    }]
  }, {
    path: "*",
    redirect: "/zh/agent/default.aspx"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
