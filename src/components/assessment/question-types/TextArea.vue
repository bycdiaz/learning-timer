<template>
  <div class="question">
    <div>
      <p>{{ content.prompt }}</p>
      <textarea value="answer" v-model="textInput" @change="$emit('change', textInput)"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextArea",
  props: ["content"],
  data() {
    return {
      textInput: ""
    };
  }
  // methods: {
  // captureInput(textInput) {
  //   console.log(textInput.target.value);
  // }
  // validate() {
  //   // length of at least 140
  //   // capital to start
  //   // end with punctuation
  //   // notify user of issue
  //   // console.log(textInput);
  //   console.log(e.target.value);
  //   this.$emit("valid", e.target.value);
  // }
  // }
};
</script>

<style>
</style>
