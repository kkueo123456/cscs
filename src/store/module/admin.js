import { adminList, admLogin } from "../../request/request";
import { Loading } from "element-ui";
import { Message } from "element-ui";
export default {
  namespaced: true,
  state: {
    admlist: [],
    admPage: 0,
    admSize: 0,
    saveLogin: ""
  },
  mutations: {
    changeAdminList(state, data) {
      state.admlist = data;
    },
    saveLogin(state, data) {
      state.saveLogin = data;
    }
  },
  actions: {
    AactionGetAdminList(store, data) {
      adminList().then(res => {
        console.log(res);
        res.list ? store.commit("changeAdminList", res.list) : [];
      });
    },
    Login(store, data) {
      return admLogin(data).then(res => {
        console.log(res);
        if (res.code == 200) {
          let info = JSON.stringify(res.list);
          localStorage.setItem("token", info);
          store.commit("saveLogin", res.list);
        } else {
          Message.error(res.msg);
        }
        return res;
      });
    }
  },
  getters: {
    admlist(state) {
      return state.admlist;
    }
  }
};
