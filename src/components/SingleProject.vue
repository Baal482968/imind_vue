<template lang="html">
  <div id="single-project" class="mx-auto w-50">
    <h1>Project Name: {{ getSingleProject.name }}</h1>
    <h2>Status: {{ getSingleProject.status }}</h2>
    <b-nav pills>
      <b-nav-item v-on:click="createNode">Active</b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item>Another Link</b-nav-item>
      <b-nav-item disabled>Disabled</b-nav-item>
    </b-nav>
    <div class="board">

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      id: this.$route.params.id
    }
  },
  methods: {
    createNode: function () {
      console.log("Create!");
    }
  },
  computed: {
    getSingleProject(){
      return this.$store.getters.getSingleProject(this.id);
    }
  }
}
</script>

<style lang="css" scoped>
.board{
  height: 600px;
  width: 1200px;
  border: 2px solid;
}
</style>
