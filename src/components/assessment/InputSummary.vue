<template>
  <div class="input-summary">
    <p>Questions and your answers are listed below. If you would like to edit a response, 
      please use the Previous button below.</p>
    <div class="qa-pair" v-for="(answer, index) in answers" v-bind:key="answer.value">
      <p> {{ `Question ${index + 1}: ${questions[index].content.prompt}`}}</p>
      <span>Answer: {{ answer }}</span>
    </div>
  </div>
</template>

<script>
import questions from './questions.js'

export default {
  name: 'InputSummary',
  data: function() {
    return {
      questions,
    }
  },
  props: ["answers"],
}
</script>

<style>

.qa-pair {
  border: 1px black solid;
}
</style>
