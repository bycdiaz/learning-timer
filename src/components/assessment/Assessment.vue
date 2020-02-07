<template>
  <div id="app">
    <PageTitle title="How long until"/>
    <EnteredInfo />
    <p>
      This is the Assessment page! Please answer the question below 
      and click submit after you have entered the information.
    </p>
    <component :is="dynamicComponent"></component>
    <button @click="counter += 1">Next Page</button>
    {{ counter }}
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
      questionArray: [
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
      return this.questionArray[this.result]
    }
  } 
}
</script>

<style>

</style>
