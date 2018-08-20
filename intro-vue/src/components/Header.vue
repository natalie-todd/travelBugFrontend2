<template>
<div>
    <b-nav class='logout'>
        <div class='circle'>
<h1 class='circle-text'>Welcome to Travel Bug</h1>
</div>

    <router-link to='/' tag='button' class="header-1-logout">Logout</router-link>
  </b-nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>
 
<style>
.logout {
  display: flex;
  justify-content: space-between;
}
</style>