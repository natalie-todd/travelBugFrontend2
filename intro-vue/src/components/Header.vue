<template>
  <div class="header-1">
    <!-- <img src="../assets/TravelBug.png" class="dion"> -->
    <h1 class="travel-bug">Travel Bug</h1>
    <router-link to='/' tag='button' class="header-1-logout">Logout</router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
};
</script>
 
<style>

</style>