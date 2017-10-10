<template>
  <div id="app">
    <vue-header></vue-header>
    <vue-body></vue-body>
    <vue-footer></vue-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Body from './components/Body.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    'vue-header': Header,
    'vue-body': Body,
    'vue-footer': Footer
  },
  data () {
    return {

    }
  }
}
</script>

<style>
#app{
  margin: auto;
}
</style>
