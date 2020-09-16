let baseUrl = "/api"
//菜单列表接口
const MenuList = baseUrl + '/menulist?istree=1'
const MenuAdd = baseUrl + '/menuadd'
const MenuEdit = baseUrl + '/menuinfo'
const MenuEditSure = baseUrl + '/menuedit'
const MenuDel=baseUrl+'/menudelete'
//登录 
const login = baseUrl+'/userlogin'
//角色接口
const userList=baseUrl+'/rolelist'
const userAdd=baseUrl+'/roleadd'
const userEdit=baseUrl+'/roleinfo'
const userEditSure=baseUrl+'/roleedit'
const userDel=baseUrl+'roledelete'
// 管理员接口
const adminAdd=baseUrl+'/useradd'
const adminList=baseUrl+'/userlist'
const adminDel=baseUrl+'/userdelete'
const adminEdit=baseUrl+'/useredit'
export default {
  MenuList,
  MenuAdd,
  MenuEdit,
  MenuEditSure,
  MenuDel,
  login,
  userList,
  userAdd,
  userEdit,
  userEditSure,
  userDel,
  adminAdd,
  adminList,
  adminDel,
  adminEdit
}
