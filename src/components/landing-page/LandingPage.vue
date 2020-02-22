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
/* Title Animation Start */
.title {
  animation-duration: 1s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 300%;
    width: 300%; 
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
/* Title Animation End */

/* Page Layout Start */
#landing {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#landing > * {
  margin-bottom: 30px;
}

.description {
  text-align: justify;
  font-size: 20px;
}
/* Page Layout End */
</style>
