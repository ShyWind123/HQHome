<template>
  <div id="webs-container">
    <div id="webs-hide-container" class="frosted-glass-dark" @click="toggleBottomHideShow">
      <i class="iconfont icon-shang" id="webs-hide-icon"></i>
    </div>
    <div id="webs-container-inner" class="frosted-glass" v-if="isBottomShow">
      <div id="webs-title-container">
        <i class="iconfont icon-web" id="webs-title-icon"></i>
        <span id="webs-title-content">其他网站</span>
      </div>
      <div id="webs-content-container" :key="refreshKey">
        <div id="arrow-icon-container" class="frosted-glass-dark" @click="prePage">
          <i id="arrow-icon" class="iconfont icon-icon-arrow-left2"></i>
        </div>
        <div v-for="item in currentWebs" id="one-web-container" @click="goToWeb(item)" class="frosted-glass-dark">
          <i class="iconfont" :class="item.icon" id="one-web-icon"></i>
          <span id="one-web-text">{{ item.name }}</span>
        </div>
        <div id="arrow-icon-container" class="frosted-glass-dark" @click="nextPage">
          <i id="arrow-icon" class="iconfont icon-icon-arrow-right2"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import myWebs from '../assets/myWebs.json'
import { storeToRefs } from 'pinia';
import { getGlobalStore } from '../store/store';

const globalStore = getGlobalStore()
const { isBottomShow } = storeToRefs(globalStore)
const { toggleBottomHideShow } = globalStore

const refreshKey = ref(0)

const totalNums = myWebs.length
let pageNums = 3
let currentPageIdx = 0
let currentWebs = new Array

if (document.body.clientWidth <= 500) {
  pageNums = 1
}

onMounted(() => {
  updateWebs()
})

const updateWebs = () => {
  currentWebs = new Array
  for (let i = 0; i < pageNums && currentPageIdx * pageNums + i < totalNums; i++) {
    currentWebs.push(myWebs[currentPageIdx * pageNums + i])
  }
  refreshKey.value++
}

const goToWeb = (webItem: any) => {
  window.open(webItem.url, '_self')
}

const prePage = () => {
  currentPageIdx -= 1
  if (currentPageIdx < 0) {
    currentPageIdx = Math.ceil(totalNums / pageNums) - 1
  }
  updateWebs()
}

const nextPage = () => {
  currentPageIdx += 1
  console.log(Math.ceil(totalNums / pageNums));
  if (currentPageIdx >= Math.ceil(totalNums / pageNums)) {
    currentPageIdx = 0
  }
  updateWebs()
}
</script>

<style scoped>
#webs-container {
  display: flex;
  flex-direction: column;
}

#webs-hide-container {
  width: 30px;
  margin: auto;
  border-radius: 15px 15px 0 0;
}

#webs-hide-icon {
  color: var(--primary-color);
  font-size: 10px;
  margin: auto;
}

#webs-container-inner {
  border-radius: 10px 10px 0 0;
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  /* width: 60vw; */
  justify-content: space-around;
  white-space: nowrap;
}

#webs-title-container {
  margin: auto;
  margin-left: 20px;
  margin-right: 10px;
}

#webs-title-icon {
  font-size: 25px;
}

#webs-title-content {
  font-size: 25px;
}

#webs-content-container {
  display: flex;
}

#one-web-container {
  padding: 10px;
  margin: 10px;
  border-radius: 2px;
}

#one-web-container:hover {
  color: var(--primary-color);
}

#one-web-icon {
  font-size: 30px;
  margin: 5px;
}

#one-web-text {
  color: var(--primary-color);
  font-size: 25px;
  margin: 5px;
}

#arrow-icon-container {
  margin: auto;
  border-radius: 15px;
  padding: 5px;
}

#arrow-icon {
  font-size: 15px;
  color: var(--primary-color);
}

#arrow-icon:hover {
  color: var(--second-color);
}

@media (max-width:500px) {
  #webs-title-container {
    margin: auto;
    margin-top: 10px;
    margin-bottom: 5px;
  }

  #webs-title-icon {
    font-size: 15px;
  }

  #webs-title-content {
    font-size: 15px;
  }

  #webs-container-inner {
    display: flex;
    flex-direction: column;
  }

  #one-web-container {
    padding: 5px;
    margin: 5px;
    border-radius: 2px;
  }

  #one-web-icon {
    font-size: 20px;
    margin: 5px;
  }

  #one-web-text {
    font-size: 15px;
    margin: 5px;
  }

  #arrow-icon-container {
    padding: 0;
  }

  #arrow-icon {
    font-size: 15px;
    margin: auto;
  }
}
</style>