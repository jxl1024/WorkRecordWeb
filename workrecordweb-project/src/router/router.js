import Home from '../views/Home.vue'

export default [
  {
    path: '/',
    type: 'pie-chart',
    name: 'logn',
    component: () => import('../views/login/login.vue'),
    meta: {
      keepAlive: false
    },
    children: []

  },
  {
    path: '/Home',
    name: '首页',
    type: 'home',
    component: Home,
    meta: {
      keepAlive: true
    },
    children: []

  },
  {
    path: '/Page1',
    name: 'Page1',
    type: 'pie-chart',
    component: Home,
    meta: {
      keepAlive: true
    },
    children: []

  },
  {
    path: '/Page2',
    name: 'Page2',
    type: 'pie-chart',
    component: Home,
    meta: {
      keepAlive: true
    },
    children: []
  },
  {
    path: '/Page3',
    name: 'Page3',
    type: 'pie-chart',
    component: Home,
    meta: {
      keepAlive: true
    },
    children: [
      {
        path: '/Page3-1',
        name: 'Page3-1',
        component: Home,
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/Page3-2',
        name: 'Page3-2',
        component: Home,
        meta: {
          keepAlive: true
        }
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
