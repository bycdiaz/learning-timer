<template>
  <div>
    <h1 class="title">{{ title }}</h1>
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
.title {
  font-weight: bold;
  font-size: 70px;
  text-align: center;
  animation-duration: 1.2s;
  animation-delay: 0s;
  text-shadow: 2px 2px 5px rgb(0, 0, 0);
}

</style>
