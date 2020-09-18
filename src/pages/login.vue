<template>
  <el-row class="login-bg">
    <el-col :span="8" class="login-box">
      <h3>小U商城管理系统</h3>
      <el-form :model="form" ref="form">
        <el-form-item>
          <el-input v-model="form.username" placeholder="请输入账号">
            <template slot="prepend">
              <i class="el-icon-user"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" show-password placeholder="请输入密码">
            <template slot="prepend">
              <i class="el-icon-lock"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="login-btn" type="primary" @click="login">立即登录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  created() {},
  methods: {
    ...mapActions({
      Login: "admin/Login",
    }),
    login() {
      this.Login(this.form).then((res) => {
        this.$message.success(res.msg);
        this.$router.push("/index");
      });
    },
  },
  components: {},
};
</script>
<style scoped>
.login-bg {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/img/login.jpg");
  background-size: 100% 100%;
}
.login-box {
  background-color: #fff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
  padding: 30px 40px;
  border-radius: 5px;
  border: 1px solid #eee;
}
.login-box h3 {
  line-height: 40px;
  text-align: center;
  margin-bottom: 20px;
}
.login-btn {
  display: block;
  width: 100%;
}
</style>