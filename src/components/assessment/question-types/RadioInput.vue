<template>
  <div class="question">
    <div>
      <p>{{ content.prompt }}</p>

      <form>
        <div v-for="option in content.options" :key="option.value">
          <input
            type="radio"
            :value="option.attributes.value"
            v-model="radioValue"
            @change="$emit('change', option.attributes.value)"
          />
          <span>{{ option.text }}</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "RadioInput",
  props: ["content", "options"],
  data() {
    return {
      radioValue: null
    };
  }
};
</script>

<style>
</style>