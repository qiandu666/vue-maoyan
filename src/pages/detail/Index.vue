<template>
  <HomeLogo />
  <div class="detailContent" v-if="detailDatas.img">
    <p class="detailTitle">
      猫眼电影&gt;<span>{{ detailDatas.nm }}</span>
    </p>
    <div class="detailTop">
      <div class="left">
        <img :src="detailDatas.img.split('/w.h').join('/100.138')" alt="" />
        <div class="detailTopMovies" @click="goToShiPin">
          <img src="@/assets/images/poster-play.png" alt="" />
        </div>
      </div>
      <div class="right">
        <p>{{ detailDatas.nm }}</p>
        <p>
          {{ detailDatas.enm }}
        </p>
        <p>
          {{ detailDatas.cat
          }}<span class="movieType">{{ detailDatas.ver }}</span>
        </p>
        <p>{{ detailDatas.star }}</p>
        <p>
          <span>{{ detailDatas.pubDesc }}</span>
        </p>
        <div class="moviehobby">
          <div class="moviehobby1">♥想看</div>
          <div class="moviehobby2">☆看过</div>
        </div>
      </div>
    </div>
    <div class="detailScore">
      <div class="detailScore1">
        <img src="@/assets/images/logo-new.png" alt="" />
        <p>猫眼电影评分</p>
        <p>{{ detailDatas.wish }}想看</p>
        <p v-if="detailDatas.sc !== 0">{{ detailDatas.watched }}看过</p>
      </div>
      <div class="detailScore2">
        <p v-if="detailDatas.sc == 0">
          {{ detailDatas.wish }}<span>人想看</span>
        </p>
        <p v-else>{{ detailDatas.sc }}</p>
        <p>{{ detailDatas.snum }}人评</p>
      </div>
    </div>
    <div class="detailIntroduce">
      <div class="detailIntroduce1">
        <div class="detailIntroduce1-left">简介</div>
        <div
          v-if="change"
          class="detailIntroduce1-right"
          @click="intruceChange(change)"
        >
          展开
        </div>
        <div
          v-else
          class="detailIntroduce1-right"
          @click="intruceChange(change)"
        >
          收起
        </div>
      </div>
      <div class="detailIntroduce2">
        {{ detailDatas.dra }}
      </div>
    </div>
    <div class="detailStar">
      <div class="detailStar1">
        <div class="detailStar-left">剧照</div>
        <div class="detailStar-right">全部</div>
      </div>
      <ul class="detailStar2">
        <li v-for="item in detailDatas.photos">
          <img :src="item.split('/w.h').join('/140.93')" alt="" />
        </li>
      </ul>
    </div>
  </div>
  <!-- <div v-else>loading</div> -->
  <DetailFooter />
</template>
<script>
import { detailApi } from "@/api/api.js";
import HomeLogo from "../Home/movies/components/HomeLogo.vue";
import DetailFooter from "./components/detailfooter.vue";
import { nextTick } from "vue";
export default {
  data() {
    return {
      detailDatas: {},
      change: true,
    };
  },
  methods: {
    async detailData() {
      const detail = await detailApi({ id: this.$route.query.moviesid });
      console.log(detail.result);
      const detailData = detail.result;
      this.detailDatas = detailData;
      await nextTick();
      document.querySelector(".detailContent").style.backgroundColor =
        detailData.backgroundColor;
    },
    intruceChange(change) {
      if (change) {
        document.querySelector(".detailIntroduce2").style.webkitLineClamp =
          "99";
      } else {
        document.querySelector(".detailIntroduce2").style.webkitLineClamp = "3";
      }
      this.change = !this.change;
    },
    goToShiPin() {
      console.log(this.detailDatas.vd);
      window.location = this.detailDatas.vd;
    },
  },
  mounted() {
    this.detailData();
  },
  components: {
    HomeLogo,
    DetailFooter,
  },
  beforeRouteEnter(to, from) {
    console.log("22");
  },
};
</script>
<style lang="less" scoped>
.detailContent {
  width: 375px;
  height: 800px;
  padding: 21px 16px;
  .detailTitle {
    color: #ccc;
    font-size: @m-font;
    margin-bottom: 10px;
  }
  .detailTop {
    width: 344px;
    height: 144px;
    display: flex;
    margin-bottom: 20px;
    .left {
      width: 100px;
      height: 138px;
      margin-right: 10px;
      position: relative;
      .detailTopMovies {
        position: absolute;
        left: 0px;
        bottom: -6px;
        img {
          width: 20px;
          height: 20px;
        }
      }
    }
    .right {
      p {
        color: #ccc;
        font-size: @s-font;
        margin-bottom: 6px;
        line-height: 14px;
        display: flex;
        align-items: center;
        .movieType {
          background-color: rgba(255, 255, 255, 0.35);
          display: inline-block;
          .ell();
          height: 14px;
          width: 70px;
          line-height: 14px;
          text-align: center;
          margin-left: 10px;
        }
      }
      p:nth-child(1) {
        color: white;
        font-size: @xxl-font;
        margin-bottom: 15px;
      }
      .moviehobby {
        display: flex;
        width: 232px;
        height: 30px;
        justify-content: space-between;
        color: white;
        text-align: center;
        font-size: @m-font;
        line-height: 30px;
        .moviehobby1 {
          width: 110px;
          height: 30px;
          background-color: rgba(255, 255, 255, 0.35);
          border-radius: 5px;
        }
        .moviehobby2 {
          width: 110px;
          height: 30px;
          background-color: rgba(255, 255, 255, 0.35);
          border-radius: 5px;
        }
      }
    }
  }
  .detailScore {
    width: 344px;
    height: 102px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.18);
    .detailScore1 {
      display: flex;
      flex-shrink: 1;
      padding: 10px;
      img {
        margin-top: 2px;
      }
      p {
        height: 20px;
        display: inline-block;
        line-height: 20px;
      }
      p:nth-child(2) {
        font-size: @s-font;
        color: white;
      }
      p:nth-child(3) {
        font-size: @xs-font;
        color: #ccc;
        margin-left: 80px;
      }
      p:nth-child(4) {
        font-size: @xs-font;
        color: #ccc;
        margin-left: 10px;
      }
      img {
        width: 16px;
        height: 16px;
      }
    }
    .detailScore2 {
      .center();
      flex-direction: column;
      p:nth-child(1) {
        color: #ffb400;
        font-size: @xxxl-font;
      }
      p:nth-child(2) {
        color: #ccc;
        font-size: @xs-font;
        margin-top: 10px;
      }
      span {
        font-size: @xxs-font;
        color: #ccc;
      }
    }
  }
  .detailIntroduce {
    padding: 10px;
    .detailIntroduce1 {
      display: flex;
      color: white;
      justify-content: space-between;
      font-size: @m-font;
      margin-bottom: 20px;
      .detailIntroduce1-right {
        font-size: @s-font;
        color: #ccc;
      }
    }
    .detailIntroduce2 {
      color: white;
      line-height: 22px;
      font-size: @s-font;
      display: -webkit-box;
      overflow: hidden; /*自动隐藏文字*/
      -webkit-line-clamp: 3;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis; /*文字隐藏后添加省略号*/
    }
  }
  .detailStar {
    .detailStar1 {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      .detailStar-left {
        color: white;
        font-size: @l-font;
      }
      .detailStar-right {
        color: #ccc;
        font-size: @s-font;
      }
    }
    .detailStar2 {
      display: flex;
      // flex-shrink: 0;
      padding: 10px;
      overflow: auto;
      li {
        margin-right: 10px;
        width: 145px;
        height: 93px;
        // img {
        //   width: 100%;
        //   // height: 93px;
        // }
      }
    }
  }
}
</style>
