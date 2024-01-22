<template>
  <div class="unselectable" draggable="false" oncontextmenu="return false;">
    <router-view></router-view>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

</script>

<style scoped></style>