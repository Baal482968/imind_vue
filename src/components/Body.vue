<template lang="html">
  <div>
    <!-- Tabs with card integration -->
    <b-card no-body>
      <b-tabs small card ref="tabs" class="mx-auto w-75">
        <b-tab title="My Info">
          <user-info></user-info>
        </b-tab>
        <b-tab title="My Projects">
          <user-projects></user-projects>
        </b-tab>
        <b-tab title="My Schedule">
          <user-schedule></user-schedule>
        </b-tab>
        <b-tab title="About Us">
          <about-us></about-us>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import UserInfo from './UserInfo.vue';
import UserProjects from './UserProjects.vue';
import UserSchedule from './UserSchedule.vue';
import AboutUs from './AboutUs.vue'

export default {
  components:{
    'user-info': UserInfo,
    'user-projects': UserProjects,
    'user-schedule': UserSchedule,
    'about-us': AboutUs
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
