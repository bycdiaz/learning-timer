<template>
  <div id="app">
    <PageTitle title="How long until"/>
    <QuestionTemplate
      v-if="currentPage < questions.length"
      :page="currentPage"
      :question="questions[currentPage]"
      @change="answers[currentPage] = $event"
    />
    <InputSummary :answers="answers" v-else/>
    <div class="buttons">
      <button @click="currentPage--" v-if="currentPage > 0 && currentPage < 6">Previous</button>
      <button @click="currentPage++" v-if="currentPage <= questions.length - 1">Next Page</button>
      <router-link to="/results" tag="button" v-if="currentPage === 5">
        Submit for Review
      </router-link>
    </div>
  </div>
</template>

<script>
import PageTitle from '../Title.vue';
import questions from './questions.js' 
import QuestionTemplate from './QuestionTemplate.vue'
import InputSummary from './InputSummary.vue'

export default {
  name: 'Assessment',
  components: {
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
