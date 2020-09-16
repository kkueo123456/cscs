<template>
  <div class="wrap">
    <el-table :data="userList">
      <el-table-column prop="id" label="ID" align="center"></el-table-column>
      <el-table-column prop="rolename" label="角色名称" align="center"></el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <el-tag type="success" v-if="scope.row.status==1">启用</el-tag>
          <el-tag type="danger" v-if="scope.row.status==2">禁用</el-tag>
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
import { userDel } from "../../../request/request";
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
      getUserList: "user/AactionGetUserList",
    }),
    del(id) {
      userDel(id).then((res) => {
        this.$message.success(res.msg);
        this.getUserList();
      });
    },
  },
  mounted() {
    this.getUserList();
  },
  watch: {},
  computed: {
    ...mapGetters({
      userList: "user/userList",
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