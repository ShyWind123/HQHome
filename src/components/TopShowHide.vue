<template>
  <div>
    <div id="show-hide-container" v-if="isTopHide">
      <i class="iconfont icon-jiantou_yemian_xiangxia_o arrow down-arrow" @click="toggleTopHideShow"></i>
    </div>
    <div id="show-hide-container" v-else>
      <i class="iconfont icon-jiantou_yemian_xiangshang arrow up-arrow" @click="toggleTopHideShow"></i>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { getGlobalStore } from '../store/store'
import { storeToRefs } from 'pinia'

const globalStore = getGlobalStore()
const { isTopHide, isTopShow } = storeToRefs(globalStore)
const { toggleTopHideShow } = globalStore


</script>

<style scoped>
#show-hide-container {
  display: flex;
  flex-direction: column;
  height: 50px;
}

.arrow {
  margin: 10px auto;
  font-size: 30px;
  color: var(--primary-color);
}

.up-arrow {
  animation: downFlowUp 3s infinite linear;
}

.down-arrow {
  animation: upFlowDown 3s infinite linear;
}


@keyframes downFlowUp {
  0% {
    opacity: 1;
    transform: none;
  }

  20% {
    opacity: 1;
    transform: none;
  }

  80% {
    opacity: 0.5;
    transform: translateY(-10px);
  }

  100% {
    opacity: 0;
    transform: translateY(-10px);
  }
}

@keyframes upFlowDown {
  0% {
    opacity: 1;
    transform: translateY(-10px);
  }

  20% {
    opacity: 1;
    transform: translateY(-10px);
  }

  80% {
    opacity: 0.5;
    transform: none;
  }

  100% {
    opacity: 0;
    transform: none;
  }
}
</style>