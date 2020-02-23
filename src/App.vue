<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  width: 70%;
}

.buttons {
  margin: 0 auto;
}

.button {
  border-width: 3px;
  width: 25%;
  background-color: white;
  border-color: #26539c;
  color: #26539c;
  border-radius: 10px;
  font-size: 20px;
  padding: 10px 0px;
}

.button:hover {
  border-width: 3px;
  box-shadow: 3px 3px 5px rgb(0, 0, 0);
  transition: box-shadow 0.2s ease-in-out;
  background-color: #26539c;
  transition: background-color 0.01s ease-in-out;
  color: white;
  transition: color 0.1s ease-in-out;
  border: 2px solid #26539c;
}
</style>
