<template>
  <div id="app">
    <PageTitle title="How long until"/>
    <EnteredInfo />
    <QuestionTemplate :page="currentPage" :question="questions[currentPage]"/>
    <!-- <InputSummary v-else/> -->
    <div class="buttons">
      <button @click="currentPage--">Previous</button>
      <button @click="currentPage++">Next Page</button>
    </div>
  </div>
</template>

<script>
import EnteredInfo from './EnteredInfo.vue';
import PageTitle from '../Title.vue';
import questions from './questions.js' 
import QuestionTemplate from './QuestionTemplate.vue'
// import InputSummary from './InputSummary.vue'

export default {
  name: 'Assessment',
  components: {
    EnteredInfo,
    PageTitle,
    QuestionTemplate,
    // InputSummary,
  },
  data: function() {
    return {
      currentPage: 0,
      questions,
    }
  },
}
</script>

<style>

</style>
