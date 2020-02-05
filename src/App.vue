<template>
  <div id="app">
    <PageTitle title="How long until"/> 
  </div>
</template>

<script>
import PageTitle from './components/Title.vue'

export default {
  name: 'app',
  components: {
    PageTitle,
  },
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
</style>
