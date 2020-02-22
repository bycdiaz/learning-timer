<template>
  <div class="question">
    <form>
      <p>{{ content.prompt }}</p>
      <input type="number" value="answer" v-model="numberInput" @input="validate(numberInput)">
      <FormErrors :errorStatus="invalidInput" />
    </form>
  </div>
</template>

<script>
import FormErrors from '../FormErrors.vue'

export default {
  name: 'NumberInput',
    components: {
    FormErrors,
  },
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
        this.$emit('validate', "valid");
        this.$emit('change', numberInput);
      } else {
        this.$emit('validate', "invalid");
      }
    }
  }
}

</script>

<style>

</style>
