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
    <QuestionTemplate />
    <button v-if="counter > 0" @click="counter -= 1">Previous</button>
    <button v-if="counter < 5" @click="counter += 1">Next Page</button>
    <router-link v-if="counter === 5" to="/results" tag="button">Submit for Review</router-link>
  </div>
</template>

<script>
import EnteredInfo from './EnteredInfo.vue';
import PageTitle from '../Title.vue'; 
import QuestionTemplate from './QuestionTemplate.vue'

export default {
  name: 'Assessment',
  components: {
    EnteredInfo,
    PageTitle,
    QuestionTemplate,
  },
  data: function() {
    return {
      counter: 0,
    }
  },
  computed: {
    result: function() {
      return this.counter;
    },
  } 
}
</script>

<style>

</style>
