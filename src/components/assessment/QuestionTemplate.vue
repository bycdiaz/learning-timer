<template>
  <div>
    <p class="directions">
      Please answer the question below and click Next Page after you
      are satisfied with your entry.
    </p>
      <component
        :is="question.type"
        :content="question.content"
        @change="$emit('change', $event)"
        @validate="$emit('validate', $event)"
        :answers="answers"
        :page="page"
        class="question"
      />
  </div>
</template>

<script>
import questions from "../../json_files/questions.js";
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
  props: ["page","answers", "question"]
};
</script>

<style scoped>
.question {
  margin: 20px 0px;
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
}
</style>
