import Vue from 'vue'
import Vuex from 'vuex'
import department from './department'
import user from './user'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    department
  }
})
