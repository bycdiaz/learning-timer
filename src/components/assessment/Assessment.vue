<template>
  <div id="app">
    <PageTitle title="How long until"/>
    <EnteredInfo />
    {{ answers }}
    <QuestionTemplate
      v-if="currentPage < questions.length"
      :page="currentPage"
      :question="questions[currentPage]"
      @change="answers[currentPage] = $event"
    />
    <InputSummary v-else/>
    <div class="buttons">
      <button @click="currentPage--">Previous</button>
      <button @click="currentPage++" v-if="currentPage <= questions.length - 1">Next Page</button>
      <router-link to="/results" tag="button" v-else>
        Submit for Review
      </router-link>
    </div>
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
      currentPage: 0,
      questions,
      answers: [],
    }
  },
}
</script>

<style>

</style>
