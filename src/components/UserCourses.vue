<template lang="html">
  <div>
    <h1>My courses</h1>
    <ul>
      <li v-for="project in projects">
        <router-link v-bind:to="'/project/'+ project.id"><h2>{{ project.name }}</h2></router-link>
        <p>Status: {{ project.status }}</p>
      </li>
    </ul>
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

<style lang="css" scoped>
h1{
  margin-bottom: 3%;
}
</style>
