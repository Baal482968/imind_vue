<template>
  <div id="app">
    <vue-header></vue-header>
    <router-view></router-view> <!-- body -->
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
