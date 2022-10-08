<template>
  <router-view />
  <HomeFooter />
</template>
<script>
import HomeFooter from "../Home/components/HomeFooter.vue";

export default {
  components: {
    HomeFooter,
  },
};
</script>
<style lang="less" scoped>
.top {
  position: fixed;
  top: 0px;
  width: 100%;
}
.content {
  position: fixed;
  top: 154px;
  bottom: 48px;
  // overflow: auto;
}
.icon-ziyuan {
  position: absolute;
  right: 20px;
  font-size: @xl-font;
}
</style>
