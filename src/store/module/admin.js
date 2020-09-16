import {
  adminList
} from '../../request/request'
import {
  Loading
} from 'element-ui'
export default {
  namespaced: true,
  state: {
    admlist: [],
    admPage: 0,
    admSize: 0
  },
  mutations: {
    changeAdminList(state, data) {
      state.admlist = data
    }
  },
  actions: {
    AactionGetAdminList(store, data) {
      adminList().then(res => {
        console.log(res);
        res.list ? store.commit('changeAdminList', res.list) : []
      })
    }
  },
  getters: {
    admlist(state) {
      return state.admlist
    }
  }

}
