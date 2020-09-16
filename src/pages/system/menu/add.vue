<template>
  <div class="wrap">
    <el-button v-if="isAdd" @click="add" class="add">添加</el-button>
    <el-button v-else type="primary" size="small" @click="edit(editId)" circle icon="el-icon-edit"></el-button>

    <div class="dialog">
      <el-dialog :title="isAdd?'添加':'修改'" :visible.sync="dialogVisible" width="40%">
        <el-form ref="form" :model="form" label-width="auto" :rules="rules">
          <el-form-item label="类目" class="radio">
            <el-radio-group v-model="form.type">
              <el-radio :label="1">目录</el-radio>
              <el-radio :label="2">菜单</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item v-if="form.type==2" label="上级目录">
            <el-select v-model="form.pid" placeholder="请选择">
              <el-option v-for="item in menuList" :key="item.id" :label="item.title" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item :label="form.type==1 ?'目录名称':'菜单名称'" prop="title">
            <el-input v-model="form.title" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="图标" prop="icon">
            <el-input v-model="form.icon" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item label="地址" v-if="form.type==2" prop="url">
            <el-input v-model="form.url" placeholder="请输入菜单地址"></el-input>
          </el-form-item>
          <el-form-item label="状态" class="switch">
            <el-switch v-model="form.status" :active-value="1" :inactive-value="2"></el-switch>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submit">{{isAdd?'立即添加':'修改'}}</el-button>
            <!-- <el-button type="primary" v-else @click="edit">修改</el-button> -->
            <el-button @click="dialogVisible = false">重置</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>
<script>
let clear = {
  pid: 0,
  type: 1,
  title: "",
  icon: "",
  status: 1,
  url: "",
};
import { MenuAdd, MenuEdit, EditSure } from "../../../request/request";
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
      rules: {
        // 验证规则对象！
        title: [{ required: true, message: "必填！", trigger: "blur" }],
        icon: [{ required: true, message: "必填！", trigger: "blur" }],
        url: [{ required: true, message: "必填！", trigger: "blur" }],
      },
    };
  },
  methods: {
    ...mapActions({
      getMenuData: "shopCar/getMenuData",
    }),
    add() {
      this.dialogVisible = true;
      this.form = { ...clear };
    },
    edit(id) {
      this.id = id;
      this.dialogVisible = true;
      MenuEdit(id).then((res) => {
        this.form = { ...res };
      });
    },
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          let load = Loading.service({
            text: "等待数据加载",
          });
          if (this.isAdd) {
            MenuAdd(this.form)
              .then((res) => {
                load.close();
                this.$message.success(res.msg);
                this.getMenuData().then((res) => {
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
            EditSure(data)
              .then((res) => {
                load.close();
                this.$message.success(res.msg);
                this.dialogVisible = false;
                this.getMenuData()
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
  },
  mounted() {
    this.option = this.menuList;
  },
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