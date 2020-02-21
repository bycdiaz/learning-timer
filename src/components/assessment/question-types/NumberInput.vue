<template>
  <div class="question">
    <div>
      <p>{{ content.prompt }}</p>
      <input type="number" value="answer" v-model="numberInput" @input="validate(numberInput)">
      <FormErrors :errorStatus="invalidInput" />
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
      invalidInput: false,
    };
  },
    methods: {
    validate(numberInput) {
      if (parseInt(numberInput) > 0) {
        console.log("Valid");
        this.invalidInput = false;
        this.$emit('validate', "valid");
        this.$emit('change', numberInput);
      } else {
        console.log("Not Valid");
        this.invalidInput = true;
        this.$emit('validate', "invalid");
      }
    }
  }
}

</script>

<style>

</style>
