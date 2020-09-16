<template>
  <div>
    <v-add :isAdd="isAdd"></v-add>
    <v-list :isAdd="!isAdd"></v-list>
  </div>
</template>
<script>
import vAdd from "./add";
import vList from "./List";
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  props: [],
  components: {
    vAdd,
    vList,
  },
  data() {
    return {
      isAdd: true,
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>
<style lang="stylus" scoped></style>