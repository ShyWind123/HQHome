<template>
  <img :src="bgURL" id="background-img">
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'

const bgNum = 6
const bgURL = `/backgrounds/background${Math.floor(Math.random() * bgNum + 1)}.jpg`

</script>

<style scoped>
#background-img {
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
}
</style>