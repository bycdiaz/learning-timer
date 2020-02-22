<template>
  <div id="app">
    <PageTitle title="How long until I'm a developer"/> 
    <Description /> 
    <ButtonBegin buttonText = "Get Started"/>
  </div>
</template>

<script>
import PageTitle from '../Title.vue'
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

</style>
