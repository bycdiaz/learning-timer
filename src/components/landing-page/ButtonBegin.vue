<template>
  <form @submit.prevent="testFunction">
    <input type="submit" v-bind:value="buttonText">
  </form>
</template>

<script>
export default {
  name: 'ButtonBegin',
  props: {
    buttonText: String,
  },
  methods : {
    testFunction() {
      console.log('Button Works!');
    },
  },
}
</script>

<style scoped>

</style>
