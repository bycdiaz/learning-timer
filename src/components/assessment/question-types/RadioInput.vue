<template>
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
        <span class="option">{{ option.text }}</span>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: "RadioInput",
  components: {
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
        this.$emit('validate', "valid");
        this.$emit('change', option.attributes.value)
      } else {
        this.$emit('validate', "invalid");
      }
    }
  }
};
</script>

<style>
form {
  margin: 10px 20px;
}

.option {
  font-size: 1em;
}

input[type=radio] {
    border: 0px;
    width: 5%;
    height: 1.25em;
}
</style>