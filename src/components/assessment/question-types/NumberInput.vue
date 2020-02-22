<template>
  <div>
    <form class="form">
      <p>{{ content.prompt }}</p>
      <input class="number-input" type="number" value="answer" v-model="numberInput" @input="validate(numberInput)">
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
        this.invalidInput = false;
        this.$emit('validate', "valid");
        this.$emit('change', numberInput);
      } else {
        this.invalidInput = true;
        this.$emit('validate', "invalid");
      }
    }
  }
}

</script>

<style>
.number-input {
  height: 30px;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 10px;
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0; 
}

</style>
