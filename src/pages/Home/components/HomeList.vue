<template>
    <HomeRated/>
  <HomeMovie/>

</template>
<script>
  import HomeMovie from "./HomeMovie.vue"
  import HomeRated from "./HomeRated.vue"
  export default{
    components:{
      HomeMovie,
      HomeRated
    }
  }
</script>
<style lang="less" scoped></style>