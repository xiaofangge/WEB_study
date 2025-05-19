import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    showNum({ count }) {
      return `当前最新的值为：【 ${count} 】`
    }
  },
  mutations: {
    add(state) {
      state.count++
    },
    addN(state, step) {
      state.count += step
    },
    sub(state) {
      state.count--;
    },
    subN(state, step) {
      state.count -= step;
    }
  },
  actions: {
    addAsync({ commit }) {
      setTimeout(() => {
        commit('add')
      }, 1000)
    },
    addNAsync({ commit }, step) {
      setTimeout(() => {
        commit('addN', step)
      }, 1000)
    },
    subAsync({ commit }) {
      setTimeout(() => {
        commit('sub')
      }, 1000)
    },
    subNAsync({ commit }, step) {
      setTimeout(() => {
        commit('subN', step)
      }, 1000)
    }
  },
  modules: {
  }
})
