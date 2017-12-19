<template lang="html">
  <div id="single-project" class="mx-auto w-50">
    <h1>{{ getSingleProject.name }}</h1>
    <p>{{ getSingleProject.status }}</p>
    <p>Current session: </p>
    <b-nav pills>
      <b-nav-item></b-nav-item>
      <b-nav-item></b-nav-item>
      <b-nav-item></b-nav-item>
      <b-nav-item></b-nav-item>
    </b-nav>
    <div v-for="course in courses">
      <b-card :title="course.name"
          :img-src="course.img"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 50rem;"
          class="mb-6">
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
      <b-embed type="iframe"
           aspect="16by9"
           :src="course.url"
           allowfullscreen
      ></b-embed>
      <b-button href="#" variant="primary">Like</b-button>
      <b-button href="#" variant="primary">Unlike</b-button>
      </b-card>
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
    courses(){
      return this.$store.state.courses;
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
