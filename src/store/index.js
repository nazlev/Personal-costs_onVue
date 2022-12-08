import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categoryList: [],
    page: 1,
    itemsPerPage: 10,
    payList: ['Food', 'Transport', 'Education', 'Housing', 'Healthcare', 'Closing']
  },
  getters: {
    getCategoryList: (state) => {
      const pageCount = Math.floor(state.categoryList.length / state.itemsPerPage)
      const startIdx = (state.page - 1) * state.itemsPerPage
      const endIdx = (startIdx + state.itemsPerPage <= state.categoryList.length) ? startIdx + state.itemsPerPage : state.categoryList.length 
      return state.categoryList.slice(startIdx, endIdx)
    },
    getPayList: (state) => state.payList,
    getList: (state) => state.categoryList
  },
  mutations: {
    setCategoryList: (state, list) => {state.categoryList = list},
    setCategoryPage: (state, pageNum) => {state.page = pageNum},
    setNextPage: (state) => {state.page = ++state.page == (state.categoryList.length - 1) ? state.page - 1 : state.page++},
    setPrevPage: (state) => {state.page--}
  },
  actions: { 
    async getCategoryList ({ commit }) {
      const res = await new Promise((res) => {
        setTimeout(() => {
          commit('setCategoryList', [
            {id: 1, date: '23.03.2020', name: 'Food', value: 169},
            {id: 2, date: '24.03.2020', name: 'Transport', value: 360},
            {id: 3, date: '25.03.2020', name: 'Education', value: 530},
            {id: 4, date: '26.03.2020', name: 'Housing', value: 273},
            {id: 5, date: '27.03.2020', name: 'Healthcare', value: 545},
            {id: 6, date: '28.03.2020', name: 'Housing', value: 502},
            {id: 7, date: '29.03.2020', name: 'Closing', value: 692},
            {id: 8, date: '30.03.2020', name: 'Food', value: 545},
            {id: 9, date: '01.04.2020', name: 'Housing', value: 339},
            {id: 10, date: '02.04.2020', name: 'Closing', value: 912},
            {id: 11, date: '03.04.2020', name: 'Food', value: 339},
            {id: 12, date: '04.04.2020', name: 'Transport', value: 203}
          ])
          res()
        }, 0)
      })
    },
},
  modules: {
  }
})
