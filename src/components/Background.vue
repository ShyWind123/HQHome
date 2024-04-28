<template>
  <img :src="url" id="background-img">
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
const url = 'https://api.oneneko.com/v1/bing_today'
</script>

<style scoped>
#background-img {
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
}
</style>