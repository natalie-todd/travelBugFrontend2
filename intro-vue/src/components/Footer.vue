<template>
<div class='footer'>
    <router-link to='/main' class='anchor'>Home</router-link>
    <router-link to='/about' class='anchor'>About</router-link>
    <router-link to='/faq' class='anchor'>FAQ</router-link>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    };
  }
};
</script>
 
<style>
.footer {
  background-color: #C9F0FF;
}
  .anchor{
    text-decoration: none;
    color: #C9F0FF;
    background-color: #302B27;
    border: #C9F0FF solid 2px;
    border-radius: 5px;
    padding-left:3px;;
    padding-right: 3px;
  }

  .anchor:hover{
    color: #C9F0FF;
    background-color: #302B27;
  }
</style>