<template lang="html">
  <div id="single-project" class="mx-auto w-50">
    <h1>Project Name: {{ getSingleProject.name }}</h1>
    <h2>Status: {{ getSingleProject.status }}</h2>
    <b-nav pills>
      <b-nav-item v-on:click="addNode">Add node</b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item>Another Link</b-nav-item>
      <b-nav-item disabled>Disabled</b-nav-item>
    </b-nav>
    <div class="board">
      <svg width="1000" height="1000">
        <circle v-for="node in getProjectNode" :cx="node.x" :cy="node.y" :r="node.r" :stroke="node.stroke" :stroke-width="node.strokeWidth" :fill="node.fill" />
      </svg>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
  data(){
    return{
      id: this.$route.params.id
    }
  },
  computed: {
    getSingleProject(){
      return this.$store.getters.getSingleProject(this.id);
    },
    getProjectNode(){
      return this.$store.state.projectNode;
    }
  },
  methods: {
    addNode: function () {
      this.$store.dispatch('addNode');
    }
  }
}
</script>

<style lang="css" scoped>

</style>
