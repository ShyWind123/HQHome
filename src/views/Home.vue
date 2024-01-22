<template>
  <Background></Background>
  <div id="main-container">
    <Search></Search>
  </div>
  <Log id="log-component"></Log>
  <Loading></Loading>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import Search from '../components/Search.vue';
import Log from '../components/Log.vue';
import Loading from '../components/Loading.vue';
import Background from '../components/Background.vue';
</script>

<style scoped>
#main-container {
  width: 100vw;
  height: 100vh;
}

#log-component {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 5px;
}
</style>