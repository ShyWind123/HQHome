<template>
  <img id="background-img">
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
// import { getBackground } from '../api/api'

// let bgURL = `/backgrounds/default.jpg`
// const base = 'https://cn.bing.com'

// onMounted(async () => {
//   const result = await getBackground();
//   if (result !== null) {
//     bgURL = base + result;
//   }
// })
</script>

<style scoped>
#background-img {
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
  background: url(https://api.oneneko.com/v1/bing_today) no-repeat center center;
  background-blend-mode: multiply;
}
</style>