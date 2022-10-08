<template>
  <div class="top">
    <HomeHeader>
      <span class="iconfont icon-ziyuan"></span>
    </HomeHeader>

    <HomeLogo />

    <HomeNav />
  </div>

  <div class="content">
    <!-- <router-view /> -->
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
import HomeHeader from "./components/HomeHeader.vue";
import HomeLogo from "./components/HomeLogo.vue";
import HomeNav from "./components/HomeNav.vue";
export default {
  components: {
    HomeHeader,
    HomeLogo,
    HomeNav,
  },
};
</script>

<style lang="less" scoped>
.top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.content {
  position: fixed;
  top: 156px;
  left: 0;
  right: 0;
  bottom: 50px;
  // overflow: auto;
  margin-top: -2px;
}

.iconfont {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  font-size: @xxl-font;
}
</style>
