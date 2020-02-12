<template>
  <div class="question">
    <div>
      <p>{{ content.prompt }}</p>
      <textarea value="answer" maxlength="140"></textarea>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TextArea',
  props: ["content"],
}

</script>

<style>

</style>
