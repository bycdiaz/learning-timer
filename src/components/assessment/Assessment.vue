<template>
  <div id="assessment">
    <PageTitle class="title" title="Time Until Dev" />
    <QuestionTemplate
      v-if="currentPage < questions.length"
      :page="currentPage"
      :answers="answers"
      :question="questions[currentPage]"
      @change="answers[currentPage] = $event"
      @validate="validStatus = $event"
      class="question-template"
    />
    <InputSummary class="input-summary" :answers="answers" v-else />
    <div class="buttons">
      <button class="button" @click="currentPage--" v-if="currentPage > 0 && currentPage < 6">Previous</button>
      <button
        class="button"
        @click="validStatus === 'valid' ? currentPage++ : null"
        v-if="currentPage <= questions.length - 1"
        :disabled="validStatus === 'invalid'"
      >Next Page</button>
      <router-link class="button" to="/results" tag="button" v-if="currentPage === 5">Submit for Review</router-link>
    </div>
  </div>
</template>

<script>
import PageTitle from "../Title.vue";
import questions from "./questions.js";
import QuestionTemplate from "./QuestionTemplate.vue";
import InputSummary from "./InputSummary.vue";

export default {
  name: "Assessment",
  components: {
    PageTitle,
    QuestionTemplate,
    InputSummary
  },
  data: function() {
    return {
      currentPage: 0,
      questions,
      answers: [],
      validStatus: "invalid"
    };
  },
  watch: {
    currentPage: function() {
      if (this.answers[this.currentPage]) {
        this.validStatus = "valid";
      } else {
        this.validStatus = "invalid";
      }
      return this.validStatus;
    }
  }
};
</script>

<style>
#assessment > * {
  margin-bottom: 20px;
}

.button:disabled {
  width: 25%;
  margin: 0 auto;
  background-color: white;
  border-color: #646464;
  border-width: 3px;
  color: #646464;
  border-radius: 10px;
  font-size: 20px;
  padding: 10px 0px;
}
</style>
