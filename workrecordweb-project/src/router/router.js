import Home from '../views/Home.vue'
import User from '../views/user/index.vue'
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
    path: '/user',
    name: '用户',
    type: 'team',
    component: User,
    meta: {
      keepAlive: true
    }

  },
  {
    path: '/department',
    name: '部门',
    type: 'facebook',
    component: () => import('../views/department'),
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
