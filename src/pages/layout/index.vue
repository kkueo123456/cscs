<template>
  <div class="wrap">
    <el-container>
      <el-aside width="220px">
        <left></left>
      </el-aside>
      <el-container>
        <el-header class="page-header">
            <v-top></v-top>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Left from "./left";
import vTop from "./top";
export default {
  props: [],
  components: {
    Left,vTop
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>
<style lang="stylus" scoped>
.wrap {
  display: flex;
}
.wrap .el-header{
    box-shadow 0 0 5px 0 #ccc
    padding 0
}
</style>