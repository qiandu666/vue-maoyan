<template>
  <div>城市选择页</div>
  <div v-for="(item, index) in city">
    <p v-if="item.prefix == 'hotCities'" class="citytitle">热门城市</p>
    <p v-else class="citytitle">{{ item.prefix.toUpperCase() }}</p>
    <div v-if="index == 0" class="allcity">
      <div
        v-for="item1 in item.cities"
        class="onecity"
        @click="injectCity(item1.name)"
      >
        {{ item1.name }}
      </div>
    </div>
    <div v-else>
      <div
        v-for="item1 in item.cities"
        class="one1city"
        @click="injectCity(item1.name)"
      >
        {{ item1.name }}
      </div>
    </div>
  </div>
</template>
<script>
import { areaApi } from "@/api/api.js";
import { nextTick } from "vue";
import { computed } from "vue";
export default {
  data() {
    return {
      city: [],
      inCity: "",
    };
  },
  mounted() {
    this.getCity();
  },
  methods: {
    async getCity() {
      const cityData = await areaApi();
      this.city = cityData.result;
      await nextTick();
      console.log(this.city);
    },
    injectCity(incity) {
      this.inCity = incity;
      localStorage.setItem("historyCity", incity);
      this.$router.push({
        path: "/home/movies",
        // query: {
        //   city: incity,
        // },
      });
    },
  },
};
</script>
<style lang="less" scoped>
div {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.citytitle {
  background-color: rgb(235, 235, 235);
  font-size: @xxxl-font;
  margin-top: 20px;
  padding: 6px;
  text-indent: 18px;
}
.allcity {
  background-color: rgb(245, 245, 245);
  display: flex;
  flex-wrap: wrap;
  .onecity {
    background-color: rgb(255, 255, 255);
    width: 100px;
    height: 33px;
    font-size: @s-font;
    flex-shrink: 0;
    margin: 10px;
    .center();
  }
}
.one1city {
  width: 330px;
  height: 45px;
  background-color: pink;
  margin: 0 auto;
  background-color: rgb(245, 245, 245);
  font-size: @s-font;
  line-height: 45px;
  border-bottom: 1px solid rgb(210, 209, 213);
}
</style>
