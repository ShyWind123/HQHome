<template>
  <img src="../../public/images/background.jpg" class="unselectable" draggable="false" oncontextmenu="return false;"
    id="background-img">
  <div id="main-container">
    <Search></Search>
    <Log id="log-component"></Log>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import Search from '../components/Search.vue';
import Log from '../components/Log.vue';

</script>

<style scoped>
#background-img {
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
}

#main-container {
  width: 100vw;
  height: 100vh;
}

#log-component {
  position: fixed;
  top: 0;
  right: 0;
  margin: 5px;
}
</style>