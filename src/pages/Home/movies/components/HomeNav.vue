<template>
  <div class="nav">
    <div class="left">
      <select name="" id="" @click="goToCity">
        <option value="">{{ loactionCity }}</option>
      </select>
    </div>
    <ul class="middle">
      <router-link
        v-for="item in navlist"
        :key="item.title"
        :to="'/home/movies' + item.url"
        class="li"
      >
        {{ item.title }}
      </router-link>
    </ul>
    <div class="right">
      <span class="iconfont icon-sousuo"></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navlist: [
        {
          title: "热映",
          url: "/hotshow",
        },
        {
          title: "影院",
          url: "/cinema",
        },
        {
          title: "待映",
          url: "/toreflect",
        },
        {
          title: "经典电影",
          url: "/classmovies",
        },
      ],
      active: "热映",
      loactionCity: "杭州",
    };
  },
  methods: {
    goToCity() {
      this.$router.push("/city");
    },
    // thirdChange(item) {
    //   this.active = item.title;
    //   this.$router.push("/home/movies" + item.url);
    // },
  },
  mounted() {
    if (localStorage.getItem("historyCity")) {
      this.loactionCity = localStorage.getItem("historyCity");
    }
  },
};
</script>
<style lang="less" scoped>
.nav {
  width: 375px;
  height: 44px;
  display: flex;
  padding: 10px;
  background-color: #fff;
  border-bottom: 1px solid @border-color;
  border-top: 1px solid @border-color;
  .center();
  .left select {
    border: none;
    font-size: @m-font;
  }
  .middle {
    .router-link-active {
      font-weight: 900;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 30px;
        height: 3px;
        background-color: @theme-color;
        left: 50%;
        transform: translateX(-50%);
        bottom: -10px;
        border-radius: 1.5px;
      }
    }

    .center();
    flex: 1;
    .li {
      flex: 2;
      .center();
      &:last-child {
        flex: 3;
      }
    }
    font-size: @m-font;
  }
  .right .icon-sousuo {
    font-size: @xl-font;
    .center();
    color: red;
  }
}
</style>
