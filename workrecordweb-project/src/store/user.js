import { UserApi } from './../until/api'
import { GET } from './../until/axios/request.js'

const url = UserApi.list;

const state = {
  userlist: [],
  pagination: {
    pageIndex: 1,
    pageSize: 10
  }

}
const mutations = {
  getData (state, { payload }) {
    state.userlist = payload
  },
  changePage (state, res) {
    state.pagination = res
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
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
