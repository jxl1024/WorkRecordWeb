import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入
import Antd from 'ant-design-vue'
// 引入样式
import 'ant-design-vue/dist/antd.less'

Vue.config.productionTip = false

// 全局注册
Vue.use(Antd)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
