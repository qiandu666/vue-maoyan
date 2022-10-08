<template>
  <div class="homeList-scroll">
    <div>
      <HomeRated />
      <HomeMovie @addbs="addbs" ref="child" @refresh="refresh" />
      <p v-if="dateHave" class="tishi">已经到底了~</p>
    </div>
  </div>
</template>
<script>
let bs;
import HomeMovie from "./components/HomeMovie.vue";
import HomeRated from "./components/HomeRated.vue";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      dateHave: false,
    };
  },
  methods: {
    addbs() {
      bs = new BScroll(".homeList-scroll", {
        scrollX: false,
        scrollY: true,
        // 让原先的点击事件有效
        click: true,
        // 开启上拉加载的功能
        pullUpLoad: true,
      });
      bs.on("pullingUp", () => {
        // 可以给组件添加ref，用this.$refs.xxx的方式可以直接拿到子组件的实例
        // 拿到子组件实例以后就可以去拿到子组件实例下的属性和方法了
        this.$refs.child.getMore();
      });
    },
    refresh(done) {
      bs.refresh();
      if (done) {
        bs.finishPullUp();
      } else {
        this.dateHave = true;
      }
    },
  },

  components: {
    HomeMovie,
    HomeRated,
  },
};
</script>
<style lang="less" scoped>
.homeList-scroll {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .tishi {
    text-align: center;
    font-family: "Times New Roman", Times, serif;
    font-size: 16px;
    margin-top: 5px;
    color: rgb(240, 61, 55);
  }
}
</style>
