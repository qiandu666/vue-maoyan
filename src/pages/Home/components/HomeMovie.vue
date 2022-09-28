<template>
  <ul class="movies">
    <li v-for="item in MoviesList">
      <img :src='item.img.split("/w.h").join("/64.95")' alt="">
      <div class="movies-con">
        <p>{{item.nm}}</p>
        <p v-if="item.sc">观众评<span>{{item.sc}}</span></p>
        <p v-else="item.sc">{{item.wish}}人想看</p>
        <p>主演:{{item.star}}</p>
        <p>{{item.showInfo}}</p>
      </div>
      <p class="buy" v-if="item.showst==3" >购票</p>
      <p class="buy" v-if="item.showst==4" style="background-color:rgb(60, 159, 230)">预售</p>
    </li>
  </ul>
  </template>
  <script>
    import {moviesApi}  from "@/api/api.js"
    export default{
      data(){
        return {
          MoviesList:[]
        }
      },
      mounted(){
        this.getdata();
      },
      methods:{
        async getdata(){
            const res=await moviesApi();
            this.MoviesList=res.result
            console.log(res);
        }
      }
    }
  </script>
  <style lang="less" scoped>
    .movies{
      margin-top: 20px;
      width: 375px;
      height: 114px;
      background-color: #fff;
      
      li{
        display: flex;
        padding: 10px;
        background-color: #fff;
        border-bottom: 1px solid @border-color;
        position: relative;
        .buy{
          width: 54px;
          height: 28px;
          background-color: #F03D37;
          border-radius: 14px;
          color: white;
          font-size: @m-font;
          text-align: center;
          line-height: 28px;
          position: absolute;
          top:40px;
          right:20px

        }
        img {
        width: 64px;
        height: 90px;
        margin-right: 10px;
        }
        .movies-con{
          p{
            margin-bottom: 6px;
            width: 180px;
            .ell();
          }
          p:nth-of-type(1){
            font-size: @xl-font;
            font-weight: 900;
            
          }
          p:nth-of-type(2){
            font-size: @s-font;
            span{
              font-size: @m-font;
              font-weight: 900;
              color: orange;
            }
          }
          p:nth-of-type(3){
            font-size: @xs-font;
          }
          p:nth-of-type(4){
            font-size: @xs-font;
          }
        }
      }
      
      
    }
  </style>