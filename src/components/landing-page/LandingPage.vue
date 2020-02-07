<template>
  <div id="app">
    <PageTitle title="How long until"/> 
    <Description /> 
    <ButtonBegin buttonText = "Get Started"/>
  </div>
</template>

<script>
import PageTitle from './Title.vue'
import Description from './SiteDescription.vue'
import ButtonBegin from './ButtonBegin.vue'

export default {
  name: 'LandingPage',
  title: 'How Long Until',
  components: {
    PageTitle,
    Description,
    ButtonBegin,
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
