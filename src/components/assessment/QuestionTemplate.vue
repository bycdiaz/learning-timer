<template>
  <div class="question-template">
    <p>
      Please answer the question below and click Next Page after you 
      are satisfied with your entry.
    </p>

    <form>
      <component :is="question.type" :content="question.content"/>

<!-- 

      <div v-else-if="questions[this.$store.getters.counter].question === 'question3'">
        <input type="radio" name="focusLevel" value="high">
        <span>80% - 100%</span>
        <input type="radio" name="focusLevel" value="moderate">
        <span>50% - 79%</span>
        <input type="radio" name="focusLevel" value="low">
        <span>0% - 49%</span>
      </div>

      <div v-else-if="questions[this.$store.getters.counter].question === 'question4'">
        <input type="radio" name="motivationLevel" value="very">
        <span>Very Motivated</span>
        <input type="radio" name="motivationLevel" value="fairly">
        <span>Fairly Motivated</span>
        <input type="radio" name="motivationLevel" value="mildly">
        <span>Mildly Motivated</span>
        <input type="radio" name="motivationLevel" value="low">
        <span>Not Motivated</span>
      </div>

      <div v-else-if="questions[this.$store.getters.counter].question === 'question5'">
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
      </div> -->

    </form>
  </div>
</template>

<script>
import questions from './questions.js'
import TextArea from './question-types/TextArea.vue'
import NumberInput from './question-types/NumberInput.vue'

export default {
  name: 'QuestionTemplate',
  components: {
    TextArea,
    NumberInput,
  },
  data: function() {
    return {
      questions,
    }
  },
  props: ["page", "question"]
}

</script>

<style>

</style>
