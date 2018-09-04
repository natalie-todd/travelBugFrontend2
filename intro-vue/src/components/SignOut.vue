<template>
    <div>
        <b-nav class='logout'>
             <router-link to='/' tag='button' class="header-1-logout">Logout</router-link>
  </b-nav>
        </div>
</template>

<script>
export default {
  name: "SignOut",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>
</style>
