<template>
  <div id="app">
    <PageTitle title="How long until"/>
    <EnteredInfo v-if="$store.getters.counter < 5"/>
    <p v-if="$store.getters.counter < 5">
      Please answer the question below 
      and click Next Page after you are satisfied with your entry.
    </p>
    <p v-if="$store.getters.counter === 5">
      Please review your information. If you are satisfied, click the button below.
    </p>
    <QuestionTemplate />
    <button v-if="$store.getters.counter > 0" @click="counterSubtract">Previous</button>
    <button v-if="$store.getters.counter < 5" @click="counterAdd">Next Page</button>
    <router-link v-if="$store.getters.counter === 5" to="/results" tag="button">Submit for Review</router-link>
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
  methods: {
    counterAdd: function() {
      return this.$store.commit('counterAdd', (this.$store.getters.counter + 1))
    },
    counterSubtract: function() {
      return this.$store.commit('counterSubtract', (this.$store.getters.counter - 1))
    },
  } 
}
</script>

<style>

</style>
