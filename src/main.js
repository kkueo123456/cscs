// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import "./assets/css/reset.css";
import ElementUI from "element-ui";
import echarts from "echarts";
Vue.prototype.$echarts = echarts;
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
Vue.config.productionTip = false;
import store from "./store/index";
//axios
import axios from "axios";
axios.interceptors.response.use(res => {
  console.log("---" + res.config.url + "--------");
  console.log(res.data);
  return res.data;
});
axios.interceptors.request.use(req => {
  if (req.url == "/api/userlogin") {
    console.log("denglu");
    return req;
  } else {
    let admToken = JSON.parse(localStorage.getItem("token"));
    req.headers.authorization = admToken.token;
    return req;
  }
});
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
router.beforeEach((to, from, next) => {
  let adm = localStorage.getItem("token");
  if (to.path == "/login" || adm) {
    document.title = to.meta.title;
    next();
    return;
  }
  next("/login");
});
// Vue.directive("focus", {
//   // 注意：在每个函数中， 第一个参数永远是el， 表示被绑定了指令的那个元素，这个el参数，是一个原生的JS对象
//   bind: function(el){ // 每当指令绑定到元素上的时候，会立即执行这个bind函数，只执行一次
//   },
//   inserted: function(el){ // inserted 表示元素插入到DOM中的时候，会执行inserted函数【触发一次】
//     console.log(el)
//       el.focus()
//   },
//   updated: function(el) { // 当VNode更新的时候，会执行updated，可能会触发多次
//       console.log('123')
//   },
// })
