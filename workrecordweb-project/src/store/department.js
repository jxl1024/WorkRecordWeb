import axios from 'axios'
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
  // getLoad: ({ commit },{ amount }) => {
  //   commit('load')
  // },
  testData: ({ commit }) => {
    commit('load', true)
    const url = 'https://api.rn-solutions.com/api/powerstation/baseinformation?number=A06'
    axios.get(url).then((res) => {
      commit('getData', res);
      commit('load',false)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
