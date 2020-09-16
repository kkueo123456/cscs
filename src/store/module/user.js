import {
    getUserList
  } from '../../request/request'
  import {
    Loading
  } from 'element-ui'
  export default {
    namespaced: true,
    state: {
        userList: []
    },
    mutations: {
      changeUserList(state, data) {
        state.userList = data
      }
    },
    actions: {
        AactionGetUserList(store,data){
            getUserList().then(res=>{
               store.commit('changeUserList',res.list)
            })
        }
    },
    getters: {
      userList(state) {
        return state.userList
      }
    }
  
  }
  