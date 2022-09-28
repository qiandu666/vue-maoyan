<template>
  <div class="nav">
    <div class="left">
      <select name="" id="">
        <option >杭州</option>
        <option >上海</option>
        <option >北京</option>
      </select>
    </div>
    <ul class="middle">
        <li v-for="item in navlist" :key="item.title" :class="{active:active===item.title}" @click="active=item.title">{{item.title}}</li>
    </ul>
    <div class="right">
      <span class="iconfont icon-sousuo"></span>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        navlist:[
        {
          title: "热映",
        },
        {
          title: "影院",
        },
        {
          title: "待映",
        },
        {
          title: "经典电影",
        },
      ],
      active:'热映'
      }
    }
  }
</script>
<style lang="less" scoped>
  .nav{
    width: 375px;
    height: 44px;
    display: flex;
    padding: 10px;
    background-color: #fff;
    border-bottom:1px solid @border-color;
    border-top:1px solid @border-color;
    .center();
    .left select{
      border: none;
      font-size: @m-font;
    }
    .middle{
      .active {
      font-weight: 900;
      position: relative;
        &::after{
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
      flex:1;
      li {
        flex: 2;
        .center();
        &:last-child{
          flex: 3;
        }
        
      }
      font-size: @m-font;
    }
    .right .icon-sousuo{
      font-size: @xl-font;
      .center();
      color: red;
    }
  }
</style>