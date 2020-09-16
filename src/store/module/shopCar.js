import {
  getMenuList
} from '../../request/request'
import {
  Loading
} from 'element-ui'
export default {
  namespaced: true,
  state: {
    menuList: []
  },
  mutations: {
    changeMenuList(state, data) {
      state.menuList = data
    }
  },
  actions: {
    getMenuData(store) {
      let load = Loading.service({
        text: "等待数据加载",
        target:'.el-main'
      });
      let data = []
      getMenuList().then(res => {
        load.close()
        if (res.code == 200) {
          data = res.list
          store.commit('changeMenuList', data)
        }
      }).catch(err => {
        load.close()

      })
    }
  },
  getters: {
    menuList(state) {
      return state.menuList
    }
  }

}
