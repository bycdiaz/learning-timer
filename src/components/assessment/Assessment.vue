<template>
  <div id="app">
    <PageTitle title="How long until"/>
    <EnteredInfo v-if="counter < 5"/>
    <p v-if="counter < 5">
      Please answer the question below 
      and click Next Page after you are satisfied with your entry.
    </p>
    <p v-if="counter === 5">
      Please review your information. If you are satisfied, click the button below.
    </p>
    <component :is="dynamicComponent"></component>
    <button v-if="counter > 0" @click="counter -= 1">Previous</button>
    <button v-if="counter < 5" @click="counter += 1">Next Page</button>
    <router-link v-if="counter === 5" to="/results" tag="button">Submit for Review</router-link>
  </div>
</template>

<script>
import EnteredInfo from './EnteredInfo.vue';
import PageTitle from '../Title.vue'; 
import Question1 from './Question1.vue';
import Question2 from './Question2.vue';
import Question3 from './Question3.vue';
import Question4 from './Question4.vue';
import Question5 from './Question5.vue';

export default {
  name: 'Assessment',
  components: {
    EnteredInfo,
    PageTitle,
    Question1,
    Question2,
    Question3,
    Question4,
    Question5,
  },
  data: function() {
    return {
      counter: 0,
      dynamicComponentArray: [
        Question1,
        Question2,
        Question3,
        Question4,
        Question5
      ]
    }
  },
  computed: {
    result: function() {
      return this.counter;
    },
    dynamicComponent() {
      return this.dynamicComponentArray[this.result]
    }
  } 
}
</script>

<style>

</style>
