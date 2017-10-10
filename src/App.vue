<template>
  <div id="app">
    <b-alert show variant="primary">Primary Alert</b-alert>
   <b-alert show variant="secondary">Secondary Alert</b-alert>
   <b-alert show variant="success">Success Alert</b-alert>
   <b-alert show variant="danger">Danger Alert</b-alert>
   <b-alert show variant="warning">Warning Alert</b-alert>
   <b-alert show variant="info">Info Alert</b-alert>
   <b-alert show variant="light">Light Alert</b-alert>
   <b-alert show variant="dark">Dark Alert</b-alert>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
