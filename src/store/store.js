import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    q1Response: '',
  },
  mutations: {
    change(state, q1Response) {
      state.q1Response = q1Response
    }
  },
  getters: {
    q1Response: state => state.q1Response
  }
})
