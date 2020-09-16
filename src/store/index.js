import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
import shopCar from './module/shopCar'
import user from './module/user'
import admin from './module/admin'
const state = {

}


const mutations = {

}

const actions = {

}

const getters = {

}

const modules = {
  shopCar,user,admin
}
let store = new vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules
})
export default store
