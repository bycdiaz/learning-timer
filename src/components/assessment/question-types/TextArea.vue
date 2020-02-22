<template>
  <div class="question">
    <form>
      <p>{{ content.prompt }}</p>
      <textarea
        value="answer"
        v-model="textInput"
        @input="validate(textInput)"
      >
      </textarea>
      <FormErrors :errorStatus="invalidInput" />
    </form>
  </div>
</template>

<script>
import FormErrors from '../FormErrors.vue'

export default {
  name: "TextArea",
  components: {
    FormErrors,
  },
  props: ["content", "answers", "page"],
  data() {
    return {
      textInput: this.answers[this.page],
      invalidInput: false,
    };
  },
  methods: {
    validate(textInput) {
      const length = textInput.length;
      const firstChar = textInput.charAt(0);
      const lastChar = textInput.slice(-1);
      const punctuation = ['.', '?', '!'];

      if (length >= 20 && firstChar === firstChar.toUpperCase() && punctuation.includes(lastChar)) {
        this.$emit('validate', "valid");
        this.$emit('change', textInput);
      } else {
        this.$emit('validate', "invalid");
      }
    }
  }
};
</script>

<style>
</style>
