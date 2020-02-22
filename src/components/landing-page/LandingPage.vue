<template>
  <div id="landing">
    <PageTitle class="title" title="Learning Timeline"/> 
    <Description class="description" /> 
    <ButtonBegin class="button" buttonText= "Get Started"/>
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
#landing {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

#landing > * {
  margin-bottom: 20px;
}

.button {
  width: 30%;
  margin: 0 auto;
}
</style>
