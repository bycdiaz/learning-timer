<template>
  <div class="question">
    <div>
      <p>{{ content.prompt }}</p>
      <input type="number">
    </div>
  </div>
</template>

<script>

export default {
  name: 'NumberInput',
  props: ["content"],
}

</script>

<style>

</style>
