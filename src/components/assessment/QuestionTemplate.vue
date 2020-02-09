<template>
  <div class="question-template">
    <p>Question information will appear below</p>
    {{ questions.question1.description }}
  </div>
</template>

<script>
import questions from './questions.js'

export default {
  name: 'QuestionTemplate',
  data: function() {
    return {
      questions,
    }
  },
}

</script>

<style>

</style>
