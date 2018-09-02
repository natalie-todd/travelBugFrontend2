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

document.body.style.backgroundImage =
  "url('https://www.maxpixel.net/static/photo/2x/Nature-Pakistan-Travel-Landscape-Forest-Tree-Lake-2366663.jpg')";
</script>

<style>
/* .first {
  height: 100vh;
} */
body {
  height: 100vh;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background: fluid;
  /* width: 100%; */
}
@media (max-width: 767px) {
  body {
    background: fixed;
  }
}
</style>
