<template>
  <div class="question">
    <form>
      <p>{{ content.prompt }}</p>
      <div class="drop-down" v-for="dropdown in content.dropdowns" v-bind:key="dropdown.value">
        <label :for="dropdown.labelFor">{{ dropdown.text}}</label>
        <select 
          :key="dropdown.value"
          v-model="selection"
          @change="$emit('change', selection)"
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
    </form>
  </div>
</template>

<script>
export default {
  name: 'DropDowns',
  props: ["content", "answers", "page"],
  data() {
    return {
      selection: this.answers[this.page],
    };
  },
}

</script>

<style>

</style>
