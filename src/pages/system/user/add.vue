<template>
  <div class="wrap">
    <el-button v-if="isAdd" @click="add" class="add">添加</el-button>
    <el-button v-else type="primary" size="small" @click="edit(editId)" circle icon="el-icon-edit"></el-button>
    <div class="dialog">
      <el-dialog :title="isAdd?'添加':'修改'" :visible.sync="dialogVisible" width="40%">
        <el-form ref="form" :model="form" label-width="auto">
          <el-form-item label="标题" prop="icon">
            <el-input v-model="form.rolename" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="权限">
            <el-tree
              :data="menuList"
              show-checkbox
              node-key="id"
              ref="tree"
              default-expand-all
              :check-strictly="checkStrictly"
              :props="{
                children: 'children',
                label: 'title'
              }"
            ></el-tree>
          </el-form-item>
          <el-form-item label="角色状态">
            <el-switch v-model="form.status" :active-value="1" :inactive-value="2"></el-switch>
          </el-form-item>
          <el-form-item>
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
  rolename: "",
  menus: [],
  status: 1,
};
import {
  userAdd,
  MenuEdit,
  userEditSure,
  userEdit,
  admDelete,
} from "../../../request/request";
import { mapActions, mapGetters } from "vuex";
import { Loading } from "element-ui";
export default {
  props: ["isAdd", "editId"],
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
    }),
    add() {
      this.dialogVisible = true;
      this.form = { ...clear };
    },
    edit(id) {
      this.id = id;
      this.dialogVisible = true;
      this.checkStrictly = false;
      userEdit(id).then((res) => {
        this.form = { ...res.list };
        if (this.form.menus) {
          let idarr = this.form.menus.split(",");
          this.$nextTick(() => {
            this.$refs.tree.setCheckedKeys(idarr);
            this.checkStrictly = true;
          });
        }
      });
    },
    submit() {
      let arr = this.$refs.tree
        .getCheckedKeys()
        .concat(this.$refs.tree.getHalfCheckedKeys());
      if (arr.length) {
        this.form.menus = arr;
      } else {
        this.$message.warning("请选择权限");
        return;
      }
      this.$refs.form.validate((valid) => {
        if (valid) {
          let load = Loading.service({
            text: "等待数据加载",
          });
          if (this.isAdd) {
            userAdd(this.form)
              .then((res) => {
                load.close();
                this.$message.success(res.msg);
                this.AactionGetUserList().then((res) => {
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
            userEditSure(data)
              .then((res) => {
                load.close();
                this.$message.success(res.msg);
                this.dialogVisible = false;
                this.AactionGetUserList();
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
    reset() {},
    //操作树状节点的方法
    getList(val) {
      console.log(val);
    },
  },
  mounted() {
    this.getMenuData();
  },
  updated() {},
  watch: {},
  computed: {
    ...mapGetters({
      menuList: "shopCar/menuList",
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