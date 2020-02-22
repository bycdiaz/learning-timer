<template>
  <div class="question">
    <form>
      <p>{{ content.prompt }}</p>
      <div class="drop-down" v-for="dropdown in content.dropdowns" v-bind:key="dropdown.value">
        <label :for="dropdown.labelFor">{{ dropdown.text}}</label>
        <select 
          :key="dropdown.value"
          v-model="selection"
          @change="validate(selection)"
          class="select"
        >
          <option 
            v-for="option in dropdown.dropSelections"
            :key="option.value"
            :value="option.value"
            :disabled="option.disabled"
          >
            {{ option.selectText}}
          </option>
        </select>
      </div>
      <FormErrors :errorStatus="selected" />
    </form>
  </div>
</template>

<script>
import FormErrors from '../FormErrors.vue'

export default {
  name: 'DropDowns',
    components: {
    FormErrors,
  },
  props: ["content", "answers", "page"],
  data() {
    return {
      selection: this.answers[this.page],
    };
  },
  methods: {
    validate(selection) {
      if (selection) {
        this.$emit('validate', "valid");
        this.$emit('change', selection)
      } else {
        this.$emit('validate', "invalid");
      }
    }
  }
}

</script>

<style>

.drop-down {
  margin: 20px 0px;
}

.select {
  color: #26539c;
  background-color: white;
  border-radius: 4px;
  width: 140px;
  height: 25px;
}

</style>
