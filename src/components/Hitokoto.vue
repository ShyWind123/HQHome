<template>
  <div>
    <div class="hitokoto-container frosted-glass-dark" ref="hitokotoContainer">
      <div class="hitokoto-menu">
        <div class="hitokoto-return" @click="toggleSearchHitokoto">
          <i class="iconfont icon-fanhui"></i>
        </div>
        <!-- <div class="hitokoto-hide" @click="hideHitokoto">
          <i class="iconfont icon-window-min-full"></i>
        </div> -->
      </div>
      <div class="hitokoto-content">
        {{ `「 ${hitokotoData.content} 」` }}
      </div>
      <div>
        <div class="hitokoto-from">
          {{ `-- 「 ${hitokotoData.from} 」` }}
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import { getHitokoto } from '../api/api'
import { getGlobalStore } from '../store/store'

const globalStore = getGlobalStore()
const { toggleSearchHitokoto } = globalStore

const hitokotoContainer = ref()

const hitokotoData = reactive({ content: "这是一句话", from: "无名" })

onMounted(() => {
  getHitokotoData()
})

const getHitokotoData = async () => {
  const result = await getHitokoto();
  hitokotoData.content = result.hitokoto
  hitokotoData.from = result.from
}

const hideHitokoto = () => {
  hitokotoContainer.value.classList.add("hidden")
}

</script>

<style scoped>
.hitokoto-container {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 10px;
}

.hitokoto-return {
  color: var(--primary-color);
  font-size: 5px;
  margin: auto;
  float: left;
  padding: 5px;
}

.hitokoto-return:hover {
  color: var(--second-color);
  border-radius: 15px;
  background: var(--frosted-glass-color);
}

.hitokoto-hide {
  color: var(--primary-color);
  font-size: 10px;
  margin: auto;
  float: right;
}

.hitokoto-hide:hover {
  color: var(--second-color);
}

.hitokoto-content {
  color: var(--primary-color);
  font-size: 25px;
  padding: 5px 15px;
  margin: 5px 15px;
}

.hitokoto-from {
  color: var(--primary-color);
  font-size: 10px;
  padding: 5px;
  float: right;
}
</style>