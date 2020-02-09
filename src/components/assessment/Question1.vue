<template>
  <div class="question">
    <!-- <form @submit.prevent=""> -->
    <form v-on:submit.prevent>
      <input type="text" @input="changed" placeholder="Enter your response here" name="q1Response">
    </form>
  </div>
</template>

<script>

export default {
  name: 'Question1',
  methods: {
    changed: function(event) {
      console.log(event.target.value);
      this.$store.commit('change', event.target.value)
    }
  }
}
</script>

<style>

</style>
