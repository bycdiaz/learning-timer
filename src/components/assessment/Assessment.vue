<template>
  <div id="app">
    <PageTitle title="How long until"/>
    <EnteredInfo />
    <p>This is the Assessment page! Please answer the question below 
      and click submit after you have entered the information.</p>
      <button @click="counter += 1">Next Page</button>
      <p>{{ result }}</p>
  </div>
</template>

<script>
import EnteredInfo from './EnteredInfo.vue';
import PageTitle from '../Title.vue' 

export default {
  name: 'Assessment',
  components: {
    EnteredInfo,
    PageTitle,
  },
  data: function() {
    return {
      counter: 0,
    }
  },
  computed: {
    result: function() {
      return this.counter;
    }
  }
}
</script>

<style>

</style>
