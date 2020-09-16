<template>
  <div class="header">
     <div class="lt">
        <el-breadcrumb separator="/" class="mbx">
          <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{$route.meta.title}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-button size="small" v-if="$route.path!='/index'"  @click="$router.back()" icon="el-icon-back" circle></el-button>
     </div>
     <div>
        
     </div>
  </div>
</template>
<script>
import { mapState,mapMutations } from "vuex"
export default {
    data(){
        return{  }
    },
    computed: {
    },
    methods:{
    },
    components:{}
}
</script>
<style scoped>
.header{
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
.header .lt{
  display: flex;
  align-items: center;
}
.header .mbx{
  margin:0 20px;
}
</style>