<template>
  <div id="landing">
    <PageTitle class="animated fadeInRight" title="Time Until Dev" />
    <Description class="description" />
    <ButtonBegin class="button" buttonText="Get Started" />
  </div>
</template>

<script>
import PageTitle from "../Title.vue";
import Description from "./SiteDescription.vue";
import ButtonBegin from "./ButtonBegin.vue";

export default {
  name: "LandingPage",
  title: "How Long Until",
  components: {
    PageTitle,
    Description,
    ButtonBegin
  },
  data: function() {
    return {};
  }
};
</script>

<style scoped>
#landing {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

#landing > * {
  margin-bottom: 30px;
}

.description {
  text-align: justify;
  font-size: 20px;
}
</style>
