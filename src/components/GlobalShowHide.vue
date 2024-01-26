<template>
  <div id="global-show-hide-container">
    <div class="global-show-hide-icon-container frosted-glass" v-if="isGlobalShow" @click="toggleGlobalHideShow">
      <i class="iconfont icon-yanjing_yincang global-show-hide-icon"></i>
    </div>
    <div class="global-show-hide-icon-container frosted-glass" v-if="isGlobalHide" @click="toggleGlobalHideShow">
      <i class="iconfont icon-yanjing_xianshi global-show-hide-icon"></i>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { getGlobalStore } from '../store/store';
import { storeToRefs } from 'pinia';

const globalStore = getGlobalStore()

const { isGlobalShow, isGlobalHide } = storeToRefs(globalStore)
const { toggleGlobalHideShow } = globalStore


</script>

<style scoped>
.global-show-hide-icon-container {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  display: flex;
  margin: 5px;
}

.global-show-hide-icon {
  font-size: 25px;
  margin: auto;
}

.global-show-hide-icon:hover {
  color: var(--primary-color);
}
</style>