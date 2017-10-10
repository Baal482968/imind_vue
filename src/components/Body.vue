<template lang="html">
  <div>
    <!-- Tabs with card integration -->
    <b-card no-body>
      <b-tabs small card ref="tabs" class="mx-auto" style="width:60%;">
        <b-tab title="My Info">
          <b-card :title="usersProfile.name"
                  :img-src="usersProfile.picAddr"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2">
            <p class="card-text">Email: {{usersProfile.email}}</p>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </b-tab>
        <b-tab title="My Projects">
          I'm the second tab
          <b-card>I'm the card in tab</b-card>
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
export default {
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
