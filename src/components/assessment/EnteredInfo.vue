<template>
  <div class="entered-info">
    <p>All Entered info will appear here below:</p>
    <div class="answers" v-for="answer in answers" v-bind:key="answer.value">
      <div>
        {{ answer }}
      </div>
    </div>
    <p>End of entered info.</p>
  </div>
</template>

<script>
import questions from '../../json_files/questions.js' 

export default {
  name: 'EnteredInfo',
  props: ["answers"],
  data: function() {
    return {
      questions,
    }
  }, 
}

</script>

<style scoped>
  .entered-info {
    border: 1px black solid;
  }
</style>
