<template lang="html">
  <div>
    <!-- Tabs with card integration -->
    <b-card no-body>
      <b-tabs small card ref="tabs" class="mx-auto w-50">
        <b-tab title="My Info">
          <b-card :title="usersProfile.name"
                  :img-src="usersProfile.picAddr"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2">
            <p class="card-text">Email: {{usersProfile.email}}</p>
            <p class="card-text">Position: {{usersProfile.position}}</p>
            <p class="card-text">introduction:<br/> {{ usersProfile.introduction }}</p>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </b-tab>
        <b-tab title="My Projects">
          <projects></projects>
        </b-tab>
        <b-tab title="My Schedule">
          Sibzamini!
        </b-tab>
        <b-tab title="Messages">
          I'm the last tab
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import Projects from './Projects.vue'

export default {
  components:{
    'projects': Projects
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
