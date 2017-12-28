<template lang="html">
  <div>
    <h1>My completed courses</h1>
    <ol>
      <li v-for="course in completedCourses">
        <b-card :title="course.name"
          :img-src="course.img"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 50rem;"
          class="mb-6">
        <p class="card-text">
          {{course.content}}
        </p>
        <b-embed type="iframe"
           aspect="16by9"
           :src="course.url"
           allowfullscreen
        ></b-embed>
        <b-button href="#" variant="primary">Like</b-button>
        <b-button href="#" variant="primary">Unlike</b-button>
        </b-card>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  computed: {
    completedCourses(){
      return this.$store.state.completedCourses;
    }
  }
}
</script>

<style lang="css">
</style>
