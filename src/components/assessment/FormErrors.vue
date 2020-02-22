<template>
  <div >
    <p class="error" v-if="errorStatus">Invalid Input! Please see the prompt above.</p>
  </div>
</template>

<script>
export default {
  name: "FormErrors",
  props: ["errorStatus"],
};
</script>

<style>
.error {
  background-color: #f67272;
  border-radius: 6px;
  margin: 10px 0px;
  padding: 10px 20px;
  color: #811919;
}
</style>
