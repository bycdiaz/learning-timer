<template>
  <div id="app">
    <LandingPage /> 
  </div>
</template>

<script>
import LandingPage from './components/landing-page/LandingPage.vue'

export default {
  name: 'app',
  components: {
    LandingPage,
  },
}
</script>

<style>
#app {
  margin: 100px;
}
</style>
