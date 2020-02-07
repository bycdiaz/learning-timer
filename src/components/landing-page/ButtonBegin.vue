<template>
  <router-link to="/assessment" tag="button">{{ buttonText }}</router-link>
</template>

<script>
export default {
  name: 'ButtonBegin',
  props: {
    buttonText: String,
  },
}
</script>

<style scoped>

</style>
