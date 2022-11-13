import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categoryList: [],
  },
  getters: {
    getCategoryList: (state) => state.categoryList,
  },
  mutations: {
    setCategories(state, payload) {
      if(!Array.isArray(payload)){
        payload = [payload]
      }
      state.categoryList.push(...payload)
    }
  },
  actions: { 
    async loadCategories ({ commit }) {
      const res = await new Promise((resolve) => {
        // имитируем работу с сетью 
        setTimeout(() => {
          resolve(['Food', 'Transport', 'Education', 'Housing', 'Healthcare', 'Closing'])
        }, 1000)
      })
      .then(res => {
      // запускаем изменение состояния через commit
      commit('setCategories', res)
      })
    },
},
  modules: {
  }
})
