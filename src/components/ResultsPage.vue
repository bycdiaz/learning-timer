<template>
  <div class="results">
    <PageTitle />
    <p>Here are your results:</p>
    <router-link to="/" tag="button">Go Again</router-link>
  </div>
</template>

<script>
import PageTitle from './Title.vue';

export default {
  name: 'ResultsPage',
  components: {
    PageTitle,
  }
}
</script>

<style>

</style>
