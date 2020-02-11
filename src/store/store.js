import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    counter: 0,
    responses: [],
  },
  mutations: {
    collectAnswer(state, answer) {
      state.responses.push(answer)
    },
    counterAdd(state, counter) {
      state.counter = counter 
    },
    counterSubtract(state, counter) {
      state.counter = counter
    }
  },
  getters: {
    responses: state => state.responses,
    counter: state => state.counter
  }
})
