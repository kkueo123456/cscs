<template>
  <div class="wrap">
    <el-table
      :data="menuList"
      style="width: 100%"
      row-key="id"
      :tree-props="{children: 'children'}"
      class="wrap-table"
    >
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="title" label="菜单名称"></el-table-column>
      <el-table-column prop="url" label="菜单地址"></el-table-column>
      <el-table-column label="图标">
        <template slot-scope="scope">
          <i :class="scope.row.icon"></i>
        </template>
      </el-table-column>
      <el-table-column label="类型">
        <template slot-scope="scope">
          <el-tag type="success" v-if="scope.row.type==1">目录</el-tag>
          <el-tag type="warning" v-if="scope.row.type==2">菜单</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="修改">
        <template slot-scope="scope">
          <v-add :isAdd="isAdd" :editId="scope.row.id"></v-add>
          <el-button
            type="danger"
            size="small"
            @click="del(scope.row.id)"
            circle
            icon="el-icon-delete"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import vAdd from "./add";
import { mapActions, mapGetters } from "vuex";
import { MenuDel } from "../../../request/request";
export default {
  props: ["isAdd"],
  components: {
    vAdd,
  },
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    ...mapActions({
      getMenuData: "shopCar/getMenuData",
    }),
    del(id) {
      MenuDel(id).then((res) => {
        if (res.code == 200) {
          this.$message.success(res.msg);
          this.getMenuData();
        } else {
          this.$message.error(res.msg);
        }
      });
    },
  },
  mounted() {
    this.getMenuData();
    console.log(this.menuList);
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
.wrap-table /deep/ .el-table__header-wrapper .cell {
  text-align: center;
}

.wrap-table /deep/ .el-table__body-wrapper td {
  text-align: center;
}
</style>