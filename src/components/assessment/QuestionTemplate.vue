<template>
  <div class="question-template">
    <h1>Question {{ this.$store.getters.counter + 1}}</h1>
    <p>{{ questions[this.$store.getters.counter].description }}</p>
    <form>
      {{ questions[this.$store.getters.counter].type }}
      <div v-if="questions[this.$store.getters.counter].type === 'numericInput'">
        <input type="number">
      </div>
      <div v-else-if="questions[this.$store.getters.counter].type === 'textArea'">
        <textarea type="text" maxlength="50"></textarea>
      </div>
      <div v-else-if="questions[this.$store.getters.counter].type === 'radioFocus'">
        <input type="radio" name="focusLevel" value="high">
        <span>80% - 100%</span>
        <input type="radio" name="focusLevel" value="moderate">
        <span>50% - 79%</span>
        <input type="radio" name="focusLevel" value="low">
        <span>0% - 49%</span>
      </div>
      <div v-else-if="questions[this.$store.getters.counter].type === 'radioMotivation'">
        <input type="radio" name="motivationLevel" value="very">
        <span>Very Motivated</span>
        <input type="radio" name="motivationLevel" value="fairly">
        <span>Fairly Motivated</span>
        <input type="radio" name="motivationLevel" value="mildly">
        <span>Mildly Motivated</span>
        <input type="radio" name="motivationLevel" value="low">
        <span>Not Motivated</span>
      </div>
      <div v-else-if="questions[this.$store.getters.counter].type === 'pace'">
        <label for="masterDifficulty">Master Level Exercises/Topics</label>
        <select id="masterDifficulty">
          <option value="fast">Fast</option>
          <option value="medium">Medium</option>
          <option value="slow">Slow</option>
        </select>
        <label for="mediumDifficulty">Medium Level Exercises/Topics</label>
        <select id="mediumDifficulty">
          <option value="fast">Fast</option>
          <option value="medium">Medium</option>
          <option value="slow">Slow</option>
        </select>
        <label for="lowDifficulty">Low Level Exercises/Topics</label>
        <select id="lowDifficulty">
          <option value="fast">Fast</option>
          <option value="medium">Medium</option>
          <option value="slow">Slow</option>
        </select>
      </div>
    </form>
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
