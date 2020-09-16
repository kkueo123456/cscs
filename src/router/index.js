import Vue from 'vue'
import Router from 'vue-router'
//登录
const login = () => import('../pages/login')
//layout
const index = () => import('../pages/layout/index')
//首页二级路由
// 系统设置
// 管理员管理
const sysAdmin = () => import('../pages/system/admin/index')
// 菜单管理管理
const sysMenu = () => import('../pages/system/menu/index')
// 角色管理
const sysUser = () => import('../pages/system/user/index')
// 商城设置
// 商城轮播
const shopBanner = () => import('../pages/shops/Banner/index')
// 商城分类
const shopCate = () => import('../pages/shops/Category/index')
// 商品管理
const shopGoods = () => import('../pages/shops/Goods/index')
// 会员管理
const shopMem = () => import('../pages/shops/Member/index')
// 秒杀管理
const shopSeck = () => import('../pages/shops/Seckill/index')
// 商品属性
const shopSpec = () => import('../pages/shops/Specs/index')
Vue.use(Router)
//商城管理
export default new Router({
  routes: [{
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        title: "首页"
      },
      children: [{
          path: 'sysAdmin',
          name: 'sysAdmin',
          component: sysAdmin,
          meta: {
            title: "管理员管理"
          }
        },
        {
          path: 'sysMenu',
          name: 'sysMenu',
          component: sysMenu,
          meta: {
            title: "菜单管理"
          }
        },
        {
          path: 'sysUser',
          name: 'sysUser',
          component: sysUser,
          meta: {
            title: "用户管理"
          }
        },
        {
          path: 'shopBanner',
          name: 'shopBanner',
          component: shopBanner,
          meta: {
            title: "商城轮播"
          }
        },
        {
          path: 'shopCate',
          name: 'shopCate',
          component: shopCate,
          meta: {
            title: "商城分类"
          }
        },
        {
          path: 'shopGoods',
          name: 'shopGoods',
          component: shopGoods,
          meta: {
            title: "商品管理"
          }
        },
        {
          path: 'shopMem',
          name: 'shopMem',
          component: shopMem,
          meta: {
            title: "会员管理"
          }
        },
        {
          path: 'shopSeck',
          name: 'shopSeck',
          component: shopSeck,
          meta: {
            title: "秒杀管理"
          }
        },
        {
          path: 'shopSpec',
          name: 'shopSpec',
          component: shopSpec,
          meta: {
            title: "商品属性"
          }
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        title: "登录"
      }
    }, {
      path: '*',
      redirect: '/login',
    }
  ]
})
