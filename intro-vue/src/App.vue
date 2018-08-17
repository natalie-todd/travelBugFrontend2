<template>
  <div id='app'>
    <router-view/>

  </div>
</template>

<script>
const API_URL = "https://travel-bug-backend.herokuapp.com/profiles";

export default {
  name: "Register",
  data() {
    return {
      show: true
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #C9F0FF;
}
</style>
