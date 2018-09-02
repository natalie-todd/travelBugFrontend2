<template>
<div>
    <!-- <b-nav class='logout'> -->
        <div class='circle'>
<h1 class='circle-text'>Welcome to Travel Bug</h1>
</div>
  <div class='column'>
  <h1>Come Explore</h1>
  </div>
    <!-- <router-link to='/' tag='button' class="header-1-logout">Logout</router-link> -->
  <!-- </b-nav> -->
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
/* .logout {
  display: flex;
  justify-content: space-between;
} */
.circle{
  margin: 2%;
}
.circle-text {
  display: table-cell;
  height: 125px;
  width: 125px;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%;
  background: #cc444a;
  color: #fff;
  font: 18px "josefin sans", arial;
  border-style: solid;
  border-color: black;
}
.column {
  display: flex;
  justify-content: center;
}
</style>