<template>
<div id='first'>
    <router-view></router-view>
    <Header />
        <Modal />
    </div>
</template>
<script>
import Header from "@/components/Header";
import Modal from "@/components/Modal";
export default {
  name: "first",
  components: {
    Header, 
    Modal
  }
};

document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2017/06/07/15/53/new-zealand-2380705_1280.jpg')";
</script>

<style>
.first {
  height: 100vh;
  /* background-image: url('./assets/green-hil.jpg'); */
}
body {
  height: 100vh;
    background-size: 100% auto;
    background-repeat: no-repeat;
}
</style>
