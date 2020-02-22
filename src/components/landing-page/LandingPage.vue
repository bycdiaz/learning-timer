<template>
  <div id="landing">
    <PageTitle class="title animated fadeInRight" title="Time Until Dev" />
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

<style>
#landing {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

#landing > * {
  margin-bottom: 30px;
}

.title {
  font-weight: bold;
  font-size: 70px;
  text-align: center;
  animation-duration: 1.2s;
  animation-delay: 0s;
  text-shadow: 4px 4px 10px rgb(122, 122, 122);
}

.description {
  text-align: justify;
  font-size: 20px;
}

.button {
  width: 30%;
  margin: 0 auto;
  background-color: #376b31;
  border-radius: 10px;
  border-color: white;
  color: white;
  font-size: 20px;
  padding: 5px 0px;
}

.button:hover {
  box-shadow: 3px 3px 5px grey;
  transition: box-shadow 0.2s ease-in-out;
  background-color: white;
  transition: background-color 0.1s ease-in-out;
  color: #376b31;
  transition: color 0.1s ease-in-out;
  border: 2px solid #376b31;
}
</style>
