<template>
  <div class="question">
    <div>
      <p>{{ content.prompt }}</p>
      <input type="number" value="answer" v-model="numberInput" @change="$emit('change', numberInput)">
    </div>
  </div>
</template>

<script>
export default {
  name: 'NumberInput',
  props: ["content", "answers", "page"],
  data() {
    return {
      numberInput: this.answers[this.page],
    };
  },
}

</script>

<style>

</style>
