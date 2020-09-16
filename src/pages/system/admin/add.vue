<template>
  <div class="wrap">
    <el-button v-if="isAdd" @click="add" class="add">添加</el-button>
    <el-button v-else type="primary" size="small" @click="edit(edit2)" circle icon="el-icon-edit"></el-button>
    <div class="dialog">
      <el-dialog :title="isAdd?'添加':'修改'" :visible.sync="dialogVisible" width="40%">
        <el-form :model="form" ref="form" label-width="140px">
          <el-form-item label="管理员角色" prop="roleid">
            <el-select v-model="form.roleid" placeholder="请选择角色">
              <el-option
                v-for="item in userList"
                :key="item.id"
                :label="item.rolename"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="管理员名称" prop="username">
            <el-input v-model="form.username" placeholder="请输入管理员名称"></el-input>
          </el-form-item>
          <el-form-item label="管理员密码" prop="password">
            <el-input v-model="form.password" :placeholder="isAdd ? '请输入密码':'留空表示不修改'"></el-input>
          </el-form-item>
          <el-form-item label="管理员状态">
            <el-switch v-model="form.status" :active-value="1" :inactive-value="2"></el-switch>
          </el-form-item>
          <el-form-item label>
            <el-button type="primary" @click="submit">提交</el-button>
            <el-button type="warning" @click="reset">重置</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>
<script>
let clear = {
  roleid: "",
  username: "",
  password: "",
  status: 1, // 状态1正常2禁用
};
import {
  adminAdd,
  MenuEdit,
  userEditSure,
  admEdit,
} from "../../../request/request";
import { mapActions, mapGetters } from "vuex";
import { Loading } from "element-ui";
export default {
  props: ["isAdd", "edit2"],
  components: {},
  data() {
    return {
      id: 0,
      dialogVisible: false,
      form: { ...clear },
      option: [],
      checkStrictly: false,
    };
  },
  methods: {
    ...mapActions({
      AactionGetUserList: "user/AactionGetUserList",
      getMenuData: "shopCar/getMenuData",
      getAdminList: "admin/AactionGetAdminList",
    }),
    add() {
      this.dialogVisible = true;
      this.form = { ...clear };
    },
    edit(edit2) {
      this.form = { ...edit2 };
      this.form.randstr ? delete this.form.randstr : "";
      this.form.id ? delete this.form.id : "";
      this.form.rolename ? delete this.form.rolename : "";
      console.log(this.form);
      this.dialogVisible = true;
    },
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          let load = Loading.service({
            text: "等待数据加载",
          });
          if (this.isAdd) {
            adminAdd(this.form)
              .then((res) => {
                load.close();
                this.$message.success(res.msg);
                this.getAdminList().then((res) => {
                  console.log(res);
                  this.dialogVisible = false;
                  this.form = { ...clear };
                });
              })
              .catch((err) => {
                load.close();
              });
          } else {
            this.form.id = this.id;
            let data = { ...this.form };
            admEdit(this.form)
              .then((res) => {
                this.dialogVisible = false;

                load.close();
                this.getAdminList();
              })
              .catch((err) => {
                load.close();
              });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    reset() {
      console.log(qweqweqweq);
    },
    //操作树状节点的方法
    getList(val) {
      console.log(val);
    },
  },
  mounted() {
    this.AactionGetUserList();
  },
  updated() {},
  watch: {},
  computed: {
    ...mapGetters({
      menuList: "shopCar/menuList",
      userList: "user/userList",
    }),
  },
};
</script>
<style lang="stylus" scoped>
@import '../../../stylus/color.styl';

.wrap {
  display: inline-block;
}

.wrap .add {
  background-color: $publicColor !important;
  border-color: $publicColor;
  color: white;
}

.dialog .el-radio-group /deep/ .is-checked .el-radio__inner {
  background: $publicColor !important;
  border-color: $publicColor;
}

.dialog .el-radio-group /deep/ .is-checked .el-radio__label {
  color: $publicColor;
}

.dialog .el-button--primary {
  background-color: $publicColor;
  border-color: $publicColor;
}

.switch /deep/ .is-checked .el-switch__core {
  background-color: $publicColor;
  border-color: $publicColor;
}
</style>