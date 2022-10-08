<template>
  <router-view />
</template>
<script>
import Home from "@/pages/Home/index.vue";
export default {
  components: {
    Home,
  },
  mounted() {
    // 关闭浏览器窗口的时候清空浏览器缓存在localStorage的数据
    window.onbeforeunload = function (e) {
      var storage = window.localStorage;
      storage.clear();
    };
  },
};
</script>
<style scoped></style>
