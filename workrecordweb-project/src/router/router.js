import Home from '../views/Home.vue'

export default [
  {
    path: '/',
    type: 'pie-chart',
    name: 'logn',
    component: () => import('../views/login/login.vue'),
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/Home',
    name: '首页',
    type: 'home',
    component: Home,
    meta: {
      keepAlive: true
    }

  },
  {
    path: '/Page1',
    name: 'Page1',
    type: 'smile',
    component: Home,
    meta: {
      keepAlive: true
    }

  },
  {
    path: '/Page2',
    name: 'Page2',
    type: 'facebook',
    component: Home,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/Page3',
    name: 'Page3',
    type: 'twitter',
    component: Home,
    meta: {
      keepAlive: true
    },
    children: [
      {
        path: '/Page3-1',
        name: 'Page3-2-2',
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
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // }
]
