<template>
  <div id="Links-container">
    <div id="Links-icon-container" v-for="(item, index) in linksURL" @click="goToURL(item)" @mouseover="hoverLink(item)"
      @mouseleave="changeSearchShowContent('')">
      <i class="iconfont" :class="item.icon" id="Links-icon"></i>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import linksURL from '../assets/linksURL.json'
import { getGlobalStore } from '../store/store'

const globalStore = getGlobalStore()
const { changeSearchShowContent } = globalStore

const goToURL = (item: any) => {
  window.open(item.url, '_self')
}

const hoverLink = (item: any) => {
  changeSearchShowContent(item.name)
}
</script>

<style scoped>
#Links-container {
  width: 450px;
  display: flex;
  justify-content: space-around;
  border-radius: 5px;
  padding: 10px;
  margin: auto;
}

#Links-icon-container {
  width: 45px;
  height: 45px;
  margin: 10px;
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
  font-size: 30px;
  margin: auto;
  /* color: var(--primary-color); */
}

@media (max-width: 500px) {
  #Links-container {
    width: 90vw;
  }
}
</style>