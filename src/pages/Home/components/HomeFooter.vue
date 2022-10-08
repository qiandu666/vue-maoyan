<template>
  <ul class="footer">
    <router-link
      :to="'/home' + item.url"
      v-for="item in tabbarList"
      :key="item.title"
      class="li"
    >
      <span class="iconfont" :class="item.icon"></span>
      {{ item.title }}
    </router-link>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      tabbarList: [
        {
          title: "电影/影院",
          icon: "icon-xiaoshipinyingshi48",
          url: "/movies",
        },
        {
          title: "视频",
          icon: "icon-shipin",
          url: "/videos",
        },
        {
          title: "小视频",
          icon: "icon-dianying",
          url: "/mini",
        },
        {
          title: "演出",
          icon: "icon-yanchu-xianxing2-0",
          url: "/show",
        },
        {
          title: "我的",
          icon: "icon-wode",
          url: "/mine",
        },
      ],
      active: "icon-xiaoshipinyingshi48",
    };
  },
  methods: {
    // goToChange(item) {
    //   this.active = item.icon;
    //   this.$router.push("/home" + item.url);
    // },
  },
};
</script>
<style lang="less" scoped>
.footer {
  background-color: #fff;
  position: fixed;
  bottom: 0px;
  width: 375px;
  height: 48px;
  border-top: 1px solid #d8d8d8;
  .center();
  .active {
    color: red;
  }
  .li {
    .iconfont {
      font-size: @l-font;
    }
    flex: 1;
    font-size: @xs-font;
    .center();
    flex-direction: column;
  }
  .router-link-active {
    color: @theme-color;
  }
}
</style>
