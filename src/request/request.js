import axios from 'axios'
import API from '../until/api'
// 菜单管理请求
export function getMenuList() {
  return axios({
    url: API.MenuList,
    method: 'get',
  })
}
// 菜单添加
export function MenuAdd(data) {
  return axios({
    url: API.MenuAdd,
    method: 'post',
    data: data
  }).then(res => {
    return res
  })
}
// 菜单编辑
// 查询一条数据
export function MenuEdit(id) {
  return axios({
    url: API.MenuEdit,
    method: 'get',
    params: {
      id
    }
  }).then(res => {
    if (res.code == 200) {
      return res.list
    }
  })
}
// 修改的提交
export function EditSure(data) {
  return axios({
    url: API.MenuEditSure,
    method: 'post',
    data: data
  })
}
// 菜单删除
export function MenuDel(id) {
  return axios({
    url: API.MenuDel,
    method: 'post',
    data: {
      id
    }
  })
}

// 获取角色
export function getUserList() {
  return axios({
    url: API.userList,
    method: 'get',
  })
}
// 角色添加
export function userAdd(data) {
  console.log(data);
  return axios({
    url: API.userAdd,
    method: 'post',
    data: data
  })
}
// 角色修改
export function userEdit(id) {
  return axios({
    url: API.userEdit,
    method: 'get',
    params: {
      id
    }
  })
}
// 角色修改确定

export function userEditSure(data) {
  return axios({
    url: API.userEditSure,
    method: 'post',
    data: data
  })
}
// 角色删除
export function userDel(id) {
  return axios({
    url: API.userDel,
    method: 'post',
    data: {
      id
    }
  })
}
//管理员添加
export function adminAdd(data) {
  return axios({
    url: API.adminAdd,
    method: 'post',
    data: data
  })
}
//管理员列表
export function adminList(page = 1, size = 10) {
  return axios({
    url: API.adminList,
    method: 'get',
    params: {
      size,
      page
    }
  })
}
//管理员删除

export function admDelete(id) {
  return axios({
    url: API.adminDel,
    method: 'post',
    data: {
      uid:id
    }
  })
}
// 管理员编辑
export function admEdit(data){
  return axios({
    url:API.adminEdit,
    method:'post',
    data:data
  })
}