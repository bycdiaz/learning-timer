<template>
  <div>
    <p>Questions and your answers are listed below. If you would like to edit a response, 
      please use the Previous button.</p>
    <div class="qa-pair" v-for="(answer, index) in answers" v-bind:key="answer.value">
      <p> <span class="label">{{ `Question ${index + 1}:` }}</span> {{ `${questions[index].content.prompt}`}}</p>
      <span><span class="label">Answer:</span> {{ answer }}</span>
    </div>
  </div>
</template>

<script>
import questions from '../../json_files/questions.js'

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

.input-summary > * {
  margin: 20px 10px;
  font-size: 18px;
}

.label {
  font-weight: bolder;
}

.qa-pair > * {
  margin:10px 0px;
}

</style>
