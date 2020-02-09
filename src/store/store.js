import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    counter: 0,
    q1Response: '',
  },
  mutations: {
    change(state, q1Response) {
      state.q1Response = q1Response
    },
    counterAdd(state, counter) {
      state.counter = counter 
    },
    counterSubtract(state, counter) {
      state.counter = counter
    }
  },
  getters: {
    // q1Response: state => state.q1Response
    counter: state => state.counter
  }
})
