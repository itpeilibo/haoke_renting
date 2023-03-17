import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken } from '@/utils/storeage'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    user: getToken('my-token'),
    chengshi: {
      id: 'AREA|88cff55c-aaa4-e2e0',
      name: '北京'
    },
    sonchengshi: {
      coord: {},
      arr: []
    },
    searchs: {
      search: {
        name: '请选择',
        id: ''
      }
    }
  },
  getters: {},
  mutations: {
    getsonchengshi (state, obj) {
      state.sonchengshi.arr = obj.arr
      state.sonchengshi.coord = obj.coord
    },
    getToken (state, user) {
      state.user = user
      setToken('my-token', user)
    },
    getchengshi (state, item) {
      state.chengshi = item
    },
    getsraechs (state, item) {
      state.searchs.search.name = item.communityName
      state.searchs.search.id = item.community
    }
  },
  actions: {},
  modules: {}
})
