import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入
import Antd from 'ant-design-vue'
// 引入样式
import 'ant-design-vue/dist/antd.less'
import './assets/css/public.css'
// 引入全局接口配置文件
import globalApi from './common/Global.vue'
Vue.config.productionTip = false
// 挂载到Vue实例上面
Vue.prototype.GLOBAL = globalApi
// 全局注册
Vue.use(Antd)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
