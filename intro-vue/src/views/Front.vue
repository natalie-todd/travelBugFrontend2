<template>
<div id='first'>
    <router-view></router-view>
    <Header />
        <Modal />
            <!-- <Hero /> -->
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
</script>

<style>
.first {
  height: 100vh;
}
</style>
