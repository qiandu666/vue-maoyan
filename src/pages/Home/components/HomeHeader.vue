<template>
  <header>
    {{title}}
    <slot></slot>
  </header>
</template>
<script>
  export default{
    data(){
      return {
        title:'猫眼电影'
      }
      
    }
  }
</script>
<style lang="less" scoped>
header{
  width: 375px;
  height: 50px;
  background-color: @theme-color;
  .center();
  font-size: @l-font;
  color:white;
  position: relative;

}
</style>