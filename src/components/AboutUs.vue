<template lang="html">
  <b-embed type="iframe"
           aspect="16by9"
           :src="video.url"
           allowfullscreen
  ></b-embed>
</template>

<script>
export default {
  computed: {
    video(){
      return this.$store.state.video;
    }
  }
}
</script>

<style lang="css">
</style>
