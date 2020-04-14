// import axios from 'axios'
import { DepartmentApi } from './../until/api';
import { GET, POST, PUT, DELETE } from './../until/axios';
const url = DepartmentApi.list
const state = {
  list: [],
  load: false
}
const mutations = {
  getData (state, res) {
    state.list = res;
  },
  load (state, f) {
    state.load = f
  }
}
const actions = {
  setLoad: ({ commit }, f) => {
    commit('load', f)
  },
  list: ({ dispatch, commit }, params) => {
    GET(url, params).then(res => {
      commit('getData', res.data)
    })
  },
  add: ({ dispatch, commit }, params) => {
    POST(url, params).then((res) => {
      // console.log(res)
    })
  },
  put: ({ dispatch, commit }, params) => {
    PUT(url, params).then((res) => {
      // console.log(res)
    })
  },
  delete: ({ dispatch, commit }, params) => {
    DELETE(url, params).then((res) => {
      // console.log(res)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
