<template>
  <video :src="video"></video>
</template>
<script>
export default {
  data() {
    return {
      video: "",
    };
  },
  mounted() {
    // this.video = this.$route.params.vd;
    console.log(this.$route.params.vd);
  },
};
</script>
