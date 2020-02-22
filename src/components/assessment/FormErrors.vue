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
  background-color: rgb(251, 86, 86);
  border-radius: 10px;
  margin: 10px 0px;
  padding: 5px 5px;
}
</style>
