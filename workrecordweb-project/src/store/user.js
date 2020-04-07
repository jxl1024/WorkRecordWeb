import { UserApi } from './../until/api'
import { GET, POST } from './../until/axios/request.js'
const url = UserApi.list;

const state = {
  userlist: [],
  pagination: {
    pageIndex: 1,
    pageSize: 10
  },
  load: false,
  // recode: null,
  recode: {
    userID: 'TEST'
  }
}
const mutations = {
  getData (state, { payload }) {
    state.userlist = payload
  },
  changePage (state, res) {
    state.pagination = res
  },
  setLoading: (state, flag) => {
    state.load = flag
  },
  setRecord: (state, params) => {
    state.recode = params
  }
}

const actions = {
  getUserList: ({ dispatch, commit }, params) => {
    GET(url, params).then((res) => {
      commit({
        type: 'getData',
        payload: res.data
      })
    })
  },
  addUser: ({ dispatch, commit }, params) => {
    commit('getData', null)
    POST(url, params).then((res) => {
      console.log(res)
      commit('getData', null)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
