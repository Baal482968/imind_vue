<template lang="html">
  <div>
    <h1>Projects</h1>
    <b-table striped hover :items="projects"></b-table>
    <ul>
      <li v-for="project in projects">
        <router-link v-bind:to="'/project/'+ project.id">{{ project.name }}</router-link>
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

<style lang="css">
</style>
