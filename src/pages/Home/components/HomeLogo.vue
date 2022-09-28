<template>
  <div class="logo">
    <img src="@/assets/images/logo.png" alt="">
    <a href="">发现最热电影</a>
    <a href="">打开App&gt;</a>
  </div>

</template>
<script></script>
<style lang="less" scoped>
  .logo{
    width: 375px;
    height: 60px;
    padding: 10px;
    display: flex;
    background-color: #fff;
    .center();
    justify-content: space-between;
      img{
      width: 94px;
      height: 39px;
    }
    a:nth-of-type(1){
      font-size: @m-font;
      margin-right: -40px;
    }
    a:nth-of-type(2){
      font-size: @l-font;
      color: #b37e7e;
    }
  }
  
</style>