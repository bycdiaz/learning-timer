<template>
  <div id="landing">
    <PageTitle class="title" title="Time Until Dev" />
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
.title {
  animation-duration: 2s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%; 
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}

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
