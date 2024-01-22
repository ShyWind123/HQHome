<template>
  <img src="../../public/images/background.jpg" id="background-img">
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

</script>

<style scoped>
#background-img {
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
}
</style>