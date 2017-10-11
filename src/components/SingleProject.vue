<template lang="html">
  <div id="single-project" class="mx-auto w-50">
    <h1>Project Name: {{ project.name }}</h1>
    <h2>Status: {{ project.status }}</h2>
  </div>
</template>

<script>
export default {
  data(){
    return{
      project: this.$store.state.projects[0]
      // Temporary, it will be change after DB setup
    }
  }
}
</script>

<style lang="css">
</style>
