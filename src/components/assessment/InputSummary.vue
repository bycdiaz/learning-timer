<template>
  <div class="input-summary">
    <p>Here is all of your information. Please review before submitting.</p>

    <button @click="counterSubtract">Previous</button>
    <router-link to="/results" tag="button">
      Submit for Review
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'InputSummary',
  methods: {
    counterSubtract: function() {
      return this.$store.commit('counterSubtract', (this.$store.getters.counter - 1))
    },
  }
}
</script>

<style>

</style>
