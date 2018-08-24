<template>
<div id='first'>
    <router-view></router-view>
        <Modal />
            <Hero />
    </div>
</template>
<script>
import Modal from "@/components/Modal";
import Hero from "@/components/Hero";
export default {
  name: "first",
  components: {
    Modal,
    Hero
  }
};
</script>

<style>
</style>
