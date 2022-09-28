<template>
  <ul class="footer">
    <li v-for="item in tabbarList" :key="item.title" :class="{active:active===item.icon}" @click="active=item.icon">
      <span class="iconfont" :class="item.icon"></span>
      {{item.title}}
    </li>
  </ul>
</template>
<script>
  export default{
    data(){
      return {
        tabbarList: [
        {
          title: "电影/影院",
          icon: "icon-xiaoshipinyingshi48",
        },
        {
          title: "视频",
          icon: "icon-shipin",
        },
        {
          title: "小视频",
          icon: "icon-dianying",
        },
        {
          title: "演出",
          icon: "icon-yanchu-xianxing2-0",
        },
        {
          title: "我的",
          icon: "icon-wode",
        },
      ],
      active:'icon-xiaoshipinyingshi48'
      }
    }
  }
</script>
<style lang="less" scoped>
  .footer{
    background-color: #fff;
    position: fixed;
    bottom: 0px;
    width: 375px;
    height: 48px;
    border-top: 1px solid #d8d8d8;
    .center();
    .active{
        color: red;
    }
    li{
      .iconfont{
        font-size: @l-font;
      }
      flex: 1;
      font-size: @xs-font;
      .center();
      flex-direction: column;
    }
  }
</style>