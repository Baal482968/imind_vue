<template lang="html">
  <div>
    <h1>My learning courses</h1>
    <ol>
      <li v-for="course in learningCourses">
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
    learningCourses(){
      return this.$store.state.learningCourses;
    }
  }
}
</script>

<style lang="css" scoped>
h1{
  margin-bottom: 3%;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>
