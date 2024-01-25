<template>
  <div id="Links-container">
    <div id="Links-icon-container" v-for="(item, index) in linksURL" @click="goToURL(item)" @mouseover="hoverWeb(item)"
      @mouseleave="changeHoverWeb('')">
      <i class="iconfont" :class="item.icon" id="Links-icon"></i>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { linksURL } from '../../public/other/linksURL.ts'
import { getGlobalStore } from '../store/store'

const globalStore = getGlobalStore()
const { changeHoverWeb } = globalStore

const goToURL = (item: any) => {
  window.open(item.url, '_blank')
}

const hoverWeb = (item: any) => {
  changeHoverWeb(item.name)
}
</script>

<style scoped>
#Links-container {
  width: 400px;
  display: flex;
  justify-content: space-around;
  border-radius: 5px;
  padding: 10px;
  margin: auto;
}

#Links-icon-container {
  width: 40px;
  height: 40px;
  margin: 5px;
  display: flex;
  border-radius: 5px;
  background: var(--frosted-glass-color);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);
}

#Links-icon-container:hover {
  background: var(--frosted-glass-color-dark);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);
}

#Links-icon:hover {
  color: var(--primary-color);
}

#Links-icon {
  font-size: 25px;
  margin: auto;
  /* color: var(--primary-color); */
}
</style>