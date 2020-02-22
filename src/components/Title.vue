<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: String,
  }
}
</script>

<style scoped>
h1 {
  font-size: 50px;
  color: rgb(0, 0, 0);
}

</style>
