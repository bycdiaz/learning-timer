<template>
  <div class="question">
    <div>
      <p>{{ content.prompt }}</p>

      <form>
        <div v-for="option in content.options" :key="option.value">
          <input
            type="radio"
            :value="option.attributes.value"
            v-model="radioValue"
            @change="validate(option)"
          />
          <span>{{ option.text }}</span>
        </div>
        <FormErrors :errorStatus="selected" />
      </form>
    </div>
  </div>
</template>

<script>
import FormErrors from '../FormErrors.vue'

export default {
  name: "RadioInput",
  components: {
    FormErrors,
  },
  props: ["content", "answers", "page"],
  data() {
    return {
      radioValue: this.answers[this.page],
      selected: false,
    };
  },
  methods: {
    validate(option) {
      if (option) {
        console.log("Valid");
        this.invalidInput = false;
        this.$emit('validate', "valid");
        this.$emit('change', option.attributes.value)
      } else {
        console.log("Not Valid");
        this.invalidInput = true;
        this.$emit('validate', "invalid");
      }
    }
  }
};
</script>

<style>
</style>