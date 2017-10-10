<template lang="html">
  <div>
    <h1>Projects</h1>
    <b-table striped hover :items="projects"></b-table>
  </div>
</template>

<script>
export default {
  computed: {
    projects(){
      return this.$store.state.projects;
    }
  }
}
</script>

<style lang="css">
</style>
