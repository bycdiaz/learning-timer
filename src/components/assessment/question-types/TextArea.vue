<template>
  <div class="question">
    <div>
      <p>{{ content.prompt }}</p>
      <textarea
        value="answer"
        v-model="textInput"
        @change="validate(textInput)"
      >
      </textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextArea",
  props: ["content", "answers", "page"],
  data() {
    return {
      textInput: this.answers[this.page],
    };
  },
  methods: {
    validate(textInput) {
      const length = textInput.length;
      const firstChar = textInput.charAt(0);
      const lastChar = textInput.slice(-1);
      const punctuation = ['.', '?', '!'];

      if (length >= 30 && firstChar === firstChar.toUpperCase() && punctuation.includes(lastChar)) {
        console.log("Valid");
      } else {
        console.log("Not Valid");
      }
      this.$emit('change', textInput);
    }
  }
};
</script>

<style>
</style>
