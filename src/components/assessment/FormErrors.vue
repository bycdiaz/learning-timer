<template>
  <div class="error">
    <p v-if="errorStatus">Invalid Input! Please see the prompt above.</p>
  </div>
</template>

<script>
export default {
  name: "FormErrors",
  props: ["errorStatus"],
};
</script>

<style>
</style>
