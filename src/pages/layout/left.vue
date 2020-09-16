<template>
  <div>
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="rgba(37,42,50)"
          text-color="#fff"
          active-text-color="white"
          :router="true"
        >
          <div class="title">小U商城后台</div>
          <el-submenu v-for="(item) in arr" :key="item.index" :index="item.index">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.name}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                v-for="item2 in item.group"
                :key="item2.index"
                :index="item2.path"
              >{{item2.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: [],
  components: {},
  data() {
    return {
      arr: [
        {
          index: "1",
          name: "系统设置",
          // path: "/index/sysMenu",
          group: [
            {
              index: "1-1",
              name: "菜单管理",
              path: "/index/sysMenu",
            },
            {
              index: "1-2",
              name: "角色管理",
              path: "/index/sysUser",
            },
            {
              index: "1-3",
              name: "管理员管理",
              path: "/index/sysAdmin",
            },
          ],
        },
        {
          index: "2",
          name: "商城设置",
          // path: "/index/sysMenu",
          group: [
            {
              index: "2-1",
              name: "商城分类",
              path: "/index/shopCate",
            },
            {
              index: "2-2",
              name: "商品管理",
              path: "/index/shopGoods",
            },
            {
              index: "2-3",
              name: "会员管理",
              path: "/index/shopMem",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>
<style lang="stylus" scoped>
@import '../../stylus/color.styl';
.tac {
  width: 220px;
}

.tac .title {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  letter-spacing: 5px;
  color: white;
  background-color: rgb(68, 68, 68);
}
.tac .el-menu-vertical-demo  /deep/ .el-submenu__title:hover{
  background-color: rgb(37, 37, 37) !important;

}

.tac .el-menu-item-group /deep/ .el-menu-item:hover {
  background-color:$publicColor !important;
}

.tac .el-menu-item-group /deep/ .is-active {
  background-color: $publicColor !important;
}

.tac .el-menu {
  height: 100vh;
}
</style>