<template>
  <div class="question-template">
    <p>Question information will appear here</p>
    {{ $store.getters.counter }}
    
    {{ questions[$store.getters.counter].description }}
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
