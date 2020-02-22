<template>
  <div>
    <form class="form">
      <p>{{ content.prompt }}</p>
      <textarea
        value="answer"
        v-model="textInput"
        @input="validate(textInput)"
        class="text-area"
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
        this.invalidInput = false;
        this.$emit('validate', "valid");
        this.$emit('change', textInput);
      } else {
        this.invalidInput = true;
        this.$emit('validate', "invalid");
      }
    }
  }
};
</script>

<style scoped>
textarea {
  width: 60%;
  height: 80px;
  margin-top: 20px;
  border-radius: 10px;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 0px;
}
</style>
