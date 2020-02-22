<template>
  <div class="results">
    <PageTitle title="Time Until Dev"/>
    <p class="text">Here are your results:</p>
    <p>
      I know what you are thinking... Where is the timeline? I came here to see how long it would
      take me to become a programmer. Here is the hard truth: estimating when you'll know enough
      to get a job is really, really hard. Learning to code is not like baking a cake. You can't
      set a timer and wait for that coding cake to come out the oven. There are so many variables
      to learning: your level of prior experience, the depth of that prior experience, time
      available for learning, efficiency in that available time, rate at which you learn concepts
      of varying difficulty, rate at which you work through projects of varying difficulty, etc,
      etc, etc...
    </p>
    <p class="text">
      Here are a few tips that can help get you there:
    </p>
    <ul>
      <li>Pick one learning resource and stick with it.</li>
      <li>Find a community of learners.</li>
      <li>Be consistent. This means coding every day, even if it is for a few minutes.</li>
      <li>Find joy in the learning process. Progress is hard if all you think about is the prize.</li>
      <li>Don't compare your current skills or learning pace to others. Everyone has different things going on in their life.</li>
    </ul>
    <router-link class="button" to="/" tag="button">Go Again</router-link>
  </div>
</template>

<script>
import PageTitle from './Title.vue';

export default {
  name: 'ResultsPage',
  components: {
    PageTitle,
  }
}
</script>

<style>
.text {
  margin:10px 0px;
}

.results {
  font-size: 18px;
}

ul {
  list-style-type: circle;
  margin-left: 30px;
  margin-bottom: 30px;
}
</style>
