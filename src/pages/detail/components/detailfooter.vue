<template>
  <div class="detailfooter">
    <div class="detailfooter1">
      <img src="@/assets/images/share-icon.png" alt="" />
    </div>
    <div class="detailfooter2">特惠购票</div>
  </div>
</template>
<style lang="less" scoped>
.detailfooter {
  width: 375px;
  height: 60px;
  background-color: white;
  position: fixed;
  bottom: 0px;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .detailfooter1 {
    img {
      width: 19px;
      height: 19px;
    }
  }
  .detailfooter2 {
    width: 282px;
    height: 44px;
    background-image: linear-gradient(-90deg, #fb3333, #ff5269);
    border-radius: 22px;
    color: white;
    font-size: @xl-font;
    .center();
  }
}
</style>
