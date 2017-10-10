<template lang="html">
  <vue-event-calendar :events="demoEvents"></vue-event-calendar>
</template>

<script>
export default {
  data () {
    return {
      demoEvents: [
        {
          date: '2017/10/10',
          title: 'Finance Meeting',
          desc: 'Remember to bring laptop'
        },
        {
          date: '2017/11/12',
          title: 'Bar'
        }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
