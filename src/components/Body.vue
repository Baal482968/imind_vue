<template lang="html">
  <div>
    <!-- Tabs with card integration -->
    <b-card no-body>
      <b-tabs small card ref="tabs" class="mx-auto w-75 col-md-6 col-xs-12">
        <b-tab title="My Info">
          <user-info></user-info>
        </b-tab>
        <b-tab title="My Learning Courses">
          <user-courses></user-courses>
        </b-tab>
        <b-tab title="My Completed Courses">
          <user-completed-courses></user-completed-courses>
        </b-tab>
        <b-tab title="My Notes">
          <user-notes></user-notes>
        </b-tab>
        <b-tab title="My Accomplish">
          <about-us></about-us>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import UserInfo from './UserInfo.vue';
import UserCourses from './UserCourses.vue';
import UserCompletedCourses from './UserCompletedCourses.vue';
import UserNotes from './UserNotes.vue'

export default {
  components:{
    'user-info': UserInfo,
    'user-courses': UserCourses,
    'user-completed-courses': UserCompletedCourses,
    'user-notes': UserNotes
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
