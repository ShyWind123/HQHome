<template>
  <img src="../../public/images/background.jpg" class="unselectable" draggable="false" oncontextmenu="return false;"
    id="background-img">
  <div id="main-container">
    <Search></Search>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import Search from '../components/Search.vue';

</script>

<style scoped>
#background-img {
  position: fixed;
  left: 0;
  right: 0;
  z-index: -1;
}

#main-container {
  width: 100vw;
  height: 100vh;
}
</style>