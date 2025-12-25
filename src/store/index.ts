import { createStore } from 'vuex'

interface State {
  count: number
}

export default createStore({
  state: {
    count: 0,
  },
  getters: {
    double: (state: State) => state.count * 2,
  },
  mutations: {
    increment(state: State) {
      state.count++
    },
  },
  actions: {
    incrementAsync({ commit }) {
      commit('increment')
    },
  },
})
