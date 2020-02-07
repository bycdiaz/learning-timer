<template>
  <router-link to="/assessment" tag="button">{{ buttonText }}</router-link>
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
