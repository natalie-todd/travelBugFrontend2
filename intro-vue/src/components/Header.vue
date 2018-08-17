<template>
  <div class="header-1">
    <img src="../assets/TravelBug.png" class="dion">
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
  .header-1{
    display:flex;
  }

  .header-1-logout{
    align-items: center;
    height: 20px;
    margin-top: 20px;
    margin-left: 10px;
    color: #C9F0FF;
    background-color: #302B27;
    border: #C9F0FF solid 2px;
    border-radius: 5px;
    padding-bottom: 25px;
  }

  .header-1-logout:hover{
    color: #5F758E;
    background-color: black;
    border: 2px solid #5F758E;
    border-radius: 5px;
  }

  .dion{
    height: 100px;
    width: 100px;
    margin: -30px 8px 0px 0px;
    padding: 15px;
    background-color: black;
    border: 3px solid #5F758E;
    border-radius: 100px;
  }

  .travel-bug{
    font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;
    font-size: 92px;
    padding: 40px 10px;
    text-align: center;
    text-transform: uppercase;
    text-rendering: optimizeLegibility;
    color: #131313;
    background-color: #86BBD8;
    letter-spacing: .15em;
    width: 1000px;
    margin-right: 0px; 
    margin-top: -50px;
    text-shadow: 1px -1px 0 #767676, 
      -1px 2px 1px #737272, 
      -2px 4px 1px #767474, 
      -3px 6px 1px #787777, 
      -4px 8px 1px #7b7a7a, 
      -5px 10px 1px #7f7d7d, 
      -6px 12px 1px #828181, 
      -7px 14px 1px #868585, 
      -8px 16px 1px #8b8a89, 
      -9px 18px 1px #8f8e8d, 
      -10px 20px 1px #949392, 
      -11px 22px 1px #999897; 
    border-radius: 5px;
    border: 5px solid black;
  }
</style>