<template>
<div id='first'>
    <router-view></router-view>
        <Modal />
    <Footer />
    </div>
    
</template>

<script>
import Modal from '@/components/Modal';
import Footer from '@/components/Footer';
export default {
  name: 'first',
  components: {
    Modal,
    Footer,
  },
};
</script>

<style>
template {
  min-height: 100%;
}

#first{
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: space-between;
}
</style>
