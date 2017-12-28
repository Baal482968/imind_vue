<template lang="html">
  <div>
    <h1>All courses</h1>
    <div>
    <b-form-input v-model="text1"
                  type="text"
                  placeholder="Find the courses you want"></b-form-input>
    </div>
    <div>
      <ol>
        <li v-for="course in allCourses">
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      text1: ''
    }
  },
  computed: {
    allCourses(){
      return this.$store.state.allCourses;
    }
  }
}
</script>

<style lang="css">
</style>