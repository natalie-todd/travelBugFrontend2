<template>
<div id='first'>
    <router-view></router-view>
        <Modal />
    </div>
    
</template>

<script>
import Modal from '@/components/Modal';
export default {
  name: 'first',
  components: {
    Modal
  },
};
</script>

<style>


</style>
