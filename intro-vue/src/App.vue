<template>
  <div id='app'>
    <router-view/>
<Header />
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

</style>
