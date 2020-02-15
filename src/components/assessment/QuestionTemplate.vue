<template>
  <div class="question-template">
    <p>
      Please answer the question below and click Next Page after you
      are satisfied with your entry.
    </p>

    <form>
      <component :is="question.type" :content="question.content" @change="$emit('change', $event)" />
    </form>
  </div>
</template>

<script>
import questions from "./questions.js";
import TextArea from "./question-types/TextArea.vue";
import NumberInput from "./question-types/NumberInput.vue";
import RadioInput from "./question-types/RadioInput.vue";
import DropDowns from './question-types/DropDowns.vue'

export default {
  name: "QuestionTemplate",
  components: {
    questions,
    TextArea,
    NumberInput,
    RadioInput,
    DropDowns
  },
  data: function() {
    return {
      questions,
    };
  },
  props: ["page", "question"]
};
</script>

<style>
</style>
