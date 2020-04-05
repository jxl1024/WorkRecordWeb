// import axios from 'axios'
import { UserApi } from './../until/api';
import { GET } from './../until/axios/request';
const state = {
  testData: [],
  loading: false
}
const mutations = {
  getData (state, res) {
    state.testData = res;
  },
  load (state, f) {
    state.loading = f
  }
}
const actions = {
  getLoad: ({ commit }, f) => {
    commit('load', f)
  },
  testData: ({ dispatch, commit }) => {
    // dispatch('getLoad', true)
    const url = UserApi.list
    // axios.get(url).then((res) => {
    //   commit('getData', res);
    // }).then((res) => {
    //   dispatch('getLoad', false)
    // })
    const params = {
      pageIndex: 1,
      pageSize: 10
    }
    GET(url, params).then(res => {
      console.log(res)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
