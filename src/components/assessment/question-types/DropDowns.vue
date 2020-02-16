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
          <option disabled value="">Please select one</option>
          <option v-for="option in dropdown.dropSelections" :key="option.value">{{ option.selectText}}</option>
        </select>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'DropDowns',
  props: ["content"],
  data() {
    return {
      selected: '',
      selection: '',
    };
  },
}

</script>

<style>

</style>
