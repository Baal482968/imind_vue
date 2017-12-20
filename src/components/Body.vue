<template lang="html">
  <div>
    <!-- Tabs with card integration -->
    <b-card no-body>
      <b-tabs small card ref="tabs" class="mx-auto w-75 col-md-6 col-xs-12">
        <b-tab title="My Info">
          <user-info></user-info>
        </b-tab>
        <b-tab title="My Learning Courses">
          <user-learning-courses></user-learning-courses>
        </b-tab>
        <b-tab title="My Completed Courses">
          <user-completed-courses></user-completed-courses>
        </b-tab>
        <b-tab title="My Notes">
          <user-notes></user-notes>
        </b-tab>
        <b-tab title="All courses">
          <all-courses></all-courses>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import UserInfo from './UserInfo.vue';
import UserLearningCourses from './UserLearningCourses.vue';
import UserCompletedCourses from './UserCompletedCourses.vue';
import UserNotes from './UserNotes.vue'
import AllCourses from './AllCourses.vue'

export default {
  components:{
    'user-info': UserInfo,
    'user-learning-courses': UserLearningCourses,
    'user-completed-courses': UserCompletedCourses,
    'user-notes': UserNotes,
    'all-courses': AllCourses
  },
  data(){
    return{

    }
  },
  computed: {
    usersProfile(){
      return this.$store.state.usersProfile;
    }
  }
}
</script>

<style lang="css" scoped>

</style>
