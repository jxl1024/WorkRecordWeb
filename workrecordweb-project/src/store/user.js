import { UserApi } from './../until/api'
import { GET, POST, PUT, DELETE } from './../until/axios'
import axios from 'axios'
const url = UserApi.list;

const state = {
  userlist: [],
  pagination: {
    pageIndex: 1,
    pageSize: 10
  },
  load: false,
  recode: null
  // recode: {
  //   userID: 'TEST'
  // }
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
    axios.delete(url, { data: params })
      .then((res) => {
      })
    DELETE(url, params).then((res) => {

    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
