<template lang="html">
  <div id="login">
    <div class="jumbotron vertical-center">
      <b-container fluid class="mx-auto w-25">
        <b-row class="my-1">
          <b-col sm="10">
            <label for="input-large" class="my-3">Username:</label>
            <b-form-input id="input-large" size="lg" type="text" placeholder="Enter your name"></b-form-input>
            <label for="input-large" class="my-3">Password:</label>
            <b-form-input id="input-large" size="lg" type="password" placeholder="Enter your password"></b-form-input>
          </b-col>
          <b-col sm="2" class="btn">
            <b-button id="submitbtn" class="my-auto">Login</b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>

.vertical-center {
  min-height: 100%;  /* Fallback for browsers do NOT support vh unit */
  min-height: 100vh; /* These two lines are counted as one :-)       */

  display: flex;
  align-items: center;
}
.btn{
  display: flex;
  align-items: center;
  min-height: 40%;
}
</style>
