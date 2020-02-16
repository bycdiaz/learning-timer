<template>
  <div class="question">
    <form>
      <p>{{ content.prompt }}</p>
      <p>Dropdown info here.</p>
      <div class="drop-down" v-for="dropdown in content.dropdowns" :key="dropdown.value">
        <label :for="dropdown.labelFor">{{ dropdown.text}}</label>
        <select 
          :key="dropdown.value"
          v-model="selections[content.dropdowns.indexOf(dropdown)]"
          @change="$emit('change', selections)"
        >
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
      selections: [],
    };
  },
}

</script>

<style>

</style>
