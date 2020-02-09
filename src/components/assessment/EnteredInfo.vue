<template>
  <div class="entered-info">
    <p>All Entered info will appear here below:</p>
      {{ $store.getters.q1Response}}
    <p>End of entered info.</p>
  </div>
</template>

<script>

export default {
  name: 'EnteredInfo',
}
</script>

<style>

</style>
