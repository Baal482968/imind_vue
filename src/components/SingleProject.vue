<template lang="html">
  <div id="single-project" class="mx-auto w-50">
    <h1>Project Name: {{ getSingleProject.name }}</h1>
    <h2>Status: {{ getSingleProject.status }}</h2>
  </div>
</template>

<script>
export default {
  data(){
    return{
      id: this.$route.params.id
    }
  },
  computed: {
    getSingleProject(){
      return this.$store.getters.getSingleProject(this.id);
    }
  }
}
</script>

<style lang="css">
</style>
