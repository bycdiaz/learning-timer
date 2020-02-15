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
  props: ["content"],
  data() {
    return {
      numberInput: ""
    };
  },
}

</script>

<style>

</style>
