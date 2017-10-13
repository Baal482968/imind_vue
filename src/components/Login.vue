<template lang="html">
  <div id="login">
    <div class="jumbotron vertical-center">
      <b-container fluid class="w-25">
        <h1>Please Login</h1>
        <b-row class="my-5">
          <b-col sm="3">
            <label for="input-large" class="my-3">Username:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input id="input-large" size="lg" type="text" placeholder="Enter your name"></b-form-input>
          </b-col>
          <b-col sm="3">
            <label for="input-large" class="my-3">Password:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input id="input-large" size="lg" type="password" placeholder="Enter your password"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="my-2 justify-content-center align-items-center">
          <div class="btn">
            <b-button>Login</b-button>
          </div>
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
h1{
  text-align: center;
}
.vertical-center {
  min-height: 60%;  /* Fallback for browsers do NOT support vh unit */
  min-height: 60vh; /* These two lines are counted as one :-)       */

  display: flex;
  align-items: center;
}
.my-3{
  font-size: 130%;
}
</style>
