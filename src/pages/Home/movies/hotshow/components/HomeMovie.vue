<template>
  <ul class="movies">
    <li v-for="item in MoviesList" @click="goToDetail(item)">
      <img :src="item.img.split('/w.h').join('/64.95')" alt="" />
      <div class="movies-con">
        <p>{{ item.nm }}</p>
        <p v-if="item.sc">
          观众评<span>{{ item.sc }}</span>
        </p>
        <p v-else="item.sc">{{ item.wish }}人想看</p>
        <p>主演:{{ item.star }}</p>
        <p>{{ item.showInfo }}</p>
      </div>
      <p class="buy" v-if="item.showst == 3">购票</p>
      <p
        class="buy"
        v-if="item.showst == 4"
        style="background-color: rgb(60, 159, 230)"
      >
        预售
      </p>
    </li>
  </ul>
</template>
<script>
import { moviesApi, moviesMoreApi } from "@/api/api.js";
import { nextTick } from "vue";
export default {
  data() {
    return {
      MoviesList: [],
      count: 0,
      size: 6,
      startnum: 12,
      ids: [],
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    async getdata() {
      const res = await moviesApi();
      this.MoviesList = res.result;
      this.count = res.count;
      this.startIndex = res.result.length;
      this.ids = res.ids;
      await nextTick();
      this.$emit("addbs");
    },
    async getMore() {
      const newIds = this.ids.slice(this.startnum, this.startnum + this.size);
      const newStr = newIds.join(",");
      const resmore = await moviesMoreApi({ ids: newStr });
      this.MoviesList.push(...resmore.result);
      this.startnum += this.size;
      await nextTick();
      this.$emit("refresh", this.count > this.MoviesList.length);
      console.log(this.MoviesList);
    },
    goToDetail(item) {
      // this.$router.push("/detail");
      // console.log(item);
      this.$router.push({
        path: "/detail",
        query: { moviesid: item.movieid },
      });
    },
  },
};
</script>
<style lang="less" scoped>
.movies {
  margin-top: 10px;
  width: 375px;
  background-color: #fff;
  li {
    display: flex;
    padding: 10px;
    background-color: #fff;
    border-bottom: 1px solid @border-color;
    position: relative;
    .buy {
      width: 54px;
      height: 28px;
      background-color: #f03d37;
      border-radius: 14px;
      color: white;
      font-size: @m-font;
      text-align: center;
      line-height: 28px;
      position: absolute;
      top: 40px;
      right: 20px;
    }
    img {
      width: 64px;
      height: 90px;
      margin-right: 10px;
    }
    .movies-con {
      p {
        margin-bottom: 6px;
        width: 180px;
        .ell();
      }
      p:nth-of-type(1) {
        font-size: @xl-font;
        font-weight: 900;
      }
      p:nth-of-type(2) {
        font-size: @s-font;
        span {
          font-size: @m-font;
          font-weight: 900;
          color: orange;
        }
      }
      p:nth-of-type(3) {
        font-size: @xs-font;
      }
      p:nth-of-type(4) {
        font-size: @xs-font;
      }
    }
  }
}
</style>
