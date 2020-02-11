<template>
  <div class="question-template">
    <h1>Question {{ this.$store.getters.counter + 1}}</h1>
    <p>
      Please answer the question below and click Next Page after you 
      are satisfied with your entry.
    </p>
    <p>{{ questions[this.$store.getters.counter].description }}</p>
    <form @submit.prevent="collectAnswer">
      {{ questions[this.$store.getters.counter].type }}

      <div v-if="questions[this.$store.getters.counter].question === 'question1'">
        <textarea value="answer" maxlength="140"></textarea>
      </div>

      <div v-else-if="questions[this.$store.getters.counter].question === 'question2'">
        <input type="number">
      </div>

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
      </div>

      <div class="buttons">
        <button v-if="$store.getters.counter > 0" @click="counterSubtract">Previous</button>
        <button type="submit" v-if="$store.getters.counter < 5" @click="counterAdd()">Next Page</button>
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
    methods: {
    counterAdd: function() {
      return this.$store.commit('counterAdd', (this.$store.getters.counter + 1))
    },
    counterSubtract: function() {
      return this.$store.commit('counterSubtract', (this.$store.getters.counter - 1))
    },
    collectAnswer: function(e) {
      console.log(e.target.value);
      
      return this.$store.commit('collectAnswer', e.target.value)
    },
  },
}

</script>

<style>

</style>
