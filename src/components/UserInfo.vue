<template lang="html">
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
    <b-button href="#" variant="primary">Edit</b-button>
  </b-card>
</template>

<script>
export default {
  computed: {
    usersProfile(){
      return this.$store.state.usersProfile;
    }
  }
}
</script>

<style lang="css">
</style>
