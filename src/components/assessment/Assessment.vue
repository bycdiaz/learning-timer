<template>
  <div id="app">
    <PageTitle title="How long until"/>
    <EnteredInfo v-if="$store.getters.counter < 5"/>
    <QuestionTemplate v-if="questions[this.$store.getters.counter]" />
    <InputSummary v-else/>
  </div>
</template>

<script>
import EnteredInfo from './EnteredInfo.vue';
import PageTitle from '../Title.vue';
import questions from './questions.js' 
import QuestionTemplate from './QuestionTemplate.vue'
import InputSummary from './InputSummary.vue'

export default {
  name: 'Assessment',
  components: {
    EnteredInfo,
    PageTitle,
    QuestionTemplate,
    InputSummary,
  },
  data: function() {
    return {
      questions,
    }
  },
}
</script>

<style>

</style>
