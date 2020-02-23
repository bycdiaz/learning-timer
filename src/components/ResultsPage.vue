<template>
  <div class="results">
    <PageTitle title="Time Until Dev"/>
    <p class="text">Here are your results:</p>
    <p>{{ result.intro }}</p>
    <p class="text">Here are some tips that can help get you there:</p>
    <ul class="list">
      <li v-for="(tip, index) in result.tips" v-bind:key="index">
        {{tip}}
      </li>
    </ul>
    <router-link class="button" to="/" tag="button">Go Again</router-link>
  </div>
</template>

<script>
import PageTitle from './Title.vue';
import result from '../json_files/result.js'

export default {
  name: 'ResultsPage',
  components: {
    PageTitle,
  },
    data: function() {
    return {
      result,
    };
  },
}
</script>

<style>
.results > * {
  margin: 20px 0px;
}

.list {
  margin-left: 20px;
}

li {
  list-style-type: disc;
}

.button {
  margin: 0 auto;
}
</style>
