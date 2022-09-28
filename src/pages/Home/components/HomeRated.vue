<template>
  <div class="rated">
    <p>最受好评电影</p>
    <ul class="rated-content">
      <li v-for="item in list">
        <img :src=item.imgUrl alt="">
        <span>{{item.title}}</span>
        <p class="score" v-if="item.score">观众评分{{item.score}}</p>
        <p class="score" v-else="item.score">{{item.wishNum}}人想看</p>
      </li>
    </ul>
  </div>
</template>
<script>
  import {ratedApi} from "@/api/api.js"
  export default{
    data(){
      return{
        list:[]
      };
    },
    mounted(){
      this.getdate()
    },
    methods:{
      async getdate(){
        const res=await ratedApi();
        this.list=res.result;
      },
    }
    
  }
</script>
<style lang="less" scoped>
  .rated{
    width: 375px;
    height: 206px;
    background-color: #fff;
    padding: 20px;
    p{
      font-size: @m-font;
      margin-bottom: 10px;
    }
    .rated-content{
      height: 160px;
      display: flex;
      overflow: auto;
      li{
        margin-right: 10px;
        flex-shrink: 0;
        width: 85px;
        height: 100%;
        font-size: @m-font;
        position: relative;
        img{
          width: 85px;
          height: 115px;
        }
        span{
          display: block;
          font-size: @xs-font;
          .ell();
          font-weight: 900;
          margin-top: 10px;
        }
        .score{
          width: 85px;
          height: 18px;
          position: absolute;
          bottom: 24px;
          font-size: @xs-font;
          color: #faaf00;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.8)
          );
        }
      }
    }
  }
</style>