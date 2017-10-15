<template lang="html">
  <div id="login">
    <div class="jumbotron vertical-center">
      <b-container fluid class="w-25">
        <h1>Please Login</h1>
        <b-row class="my-2">
          <b-col sm="12" class="my-2">
            <b-form-input id="input-large" size="lg" type="text" placeholder="Enter your name"></b-form-input>
          </b-col>
          <b-col sm="12" class="my-2">
            <b-form-input id="input-large" size="lg" type="password" placeholder="Enter your password"></b-form-input>
          </b-col>
          <b-col sm="12" class="my-2">
    				<p>Forgot your password? <a href="#">click here</a></p>
    				<p>New user? <a href="#">create new account</a></p>
    			</b-col>
        </b-row>
        <b-row class="justify-content-center align-items-center">
          <div class="btn">
            <b-button size="lg" variant="primary">Login</b-button>
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
  margin-bottom: 10%;
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
