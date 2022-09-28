<template>
  <div class="top">
    <HomeHeader><span class="iconfont icon-ziyuan"></span></HomeHeader>
    <HomeLogo/>
    <HomeNav/>
  </div>
  <div class="content">
    <HomeList/>
  </div>
  
  <HomeFooter/>
 
</template>
<script>
  import HomeHeader from "./components/HomeHeader.vue"
  import HomeLogo from "./components/HomeLogo.vue"
  import HomeNav from "./components/HomeNav.vue"
  import HomeFooter from "./components/HomeFooter.vue"
  import HomeList from "./components/HomeList.vue"
  export default{
    components:{
      HomeHeader,
      HomeLogo,
      HomeNav,
      HomeFooter,
      HomeList
    }
}
</script>
<style lang="less" scoped>
  .top{
    position: fixed;
    top: 0px;
    width: 100%;
  }
  .content{
    position: fixed;
    top: 154px;
    bottom: 48px;
    overflow: auto;
    
  }
  .icon-ziyuan{
    position: absolute;
    right: 20px;
    font-size: @xl-font;
  }
</style>