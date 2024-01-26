<template>
  <div id="search-box">
    <div id="search-engine-icon-container" class="frosted-glass">
      <a-dropdown placement="bottom">
        <i class="iconfont" :class="currentSearchEngineInfo.icon" id="search-engine-icon" @click="gotoWeb"></i>
        <template #overlay>
          <a-menu class="frosted-glass">
            <template v-for="searchEngineItem in searchEngines">
              <a-menu-item v-if="searchEngineItem.name != currentSearchEngine" class="frosted-glass"
                @click="changeSearchEngine(searchEngineItem)">
                <i class="iconfont" :class="searchEngineItem.icon"></i>
              </a-menu-item>
            </template>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
    <div id="search-input-container" class=" frosted-glass">
      <input :value="searchValue" :placeholder="currentHoverWeb" id="search-input" class="unselectable"
        @keyup.enter="onSearch" @input="changeValue" />
    </div>
    <div id="search-icon-container" class="frosted-glass" @click="onSearch">
      <i class="iconfont icon-search" id="search-icon"></i>
    </div>
    <div id="toggleToHitokoto-container" @click="toggleSearchHitokoto">
      <div id="toggleToHitokoto-icon" class="frosted-glass-dark">
        <i class="iconfont icon-youbian-tianchong"></i>
      </div>

    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import searchEngines from "../assets/searchEngines.json"
import { getGlobalStore } from '../store/store'
import { storeToRefs } from 'pinia';

const globalStore = getGlobalStore()
const { toggleSearchHitokoto } = globalStore
const { currentHoverWeb } = storeToRefs(globalStore)

const currentSearchEngine = ref<string>("bing")
const currentSearchEngineInfo = reactive({ icon: "", url: "", search: "" })
const searchValue = ref<string>('');

const getCurrentSearchEngineInfo = () => {
  for (let item of searchEngines) {
    if (item.name === currentSearchEngine.value) {
      currentSearchEngineInfo.icon = item.icon
      currentSearchEngineInfo.url = item.url
      currentSearchEngineInfo.search = item.search
      break
    }
  }
}

const changeSearchEngine = (selectedSearchEngine: any) => {
  currentSearchEngine.value = selectedSearchEngine.name
  getCurrentSearchEngineInfo()
}

const gotoWeb = () => {
  window.open(currentSearchEngineInfo.url, '_blank')
}

const onSearch = () => {
  if (searchValue.value != "") {
    window.open(currentSearchEngineInfo.search + searchValue.value, '_blank')
  }
}

const changeValue = (e: any) => {
  searchValue.value = e.target.value
}

onMounted(() => {
  getCurrentSearchEngineInfo()
})

</script>

<style scoped>
#search-box {
  height: 50px;
  width: 50vw;
  margin: auto;
  border-radius: 10px;
  padding: 2px;
  display: flex;
  justify-content: center;
}

#search-engine-icon-container {
  width: 80px;
  border-radius: 10px 0 0 10px;
  display: flex;
}

#search-engine-icon {
  font-size: 30px;
  margin: auto;
  color: var(--primary-color);
}

#search-engine-icon:hover {
  font-size: 30px;
  margin: auto;
  color: #000;
}

#search-input-container {
  flex: 1;
  padding: 5px;
}

#search-input {
  width: 100%;
  height: 100%;
  border: none;
  color: var(--primary-color);
  caret-color: var(--second-color);
  outline: none;
  padding: 15px;
  background: rgba(0, 0, 0, 0);
  /* font-family: "PingFang SC", serif; */
  font-family: "Smiley Sans", serif;
}

#search-input::selection {
  color: var(--second-color);
}

#search-input::placeholder {
  color: var(--primary-color);
}

#search-input:focus {
  background: rgba(80, 80, 80, 0.1);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  border-radius: 5px;
}

#search-icon-container {
  width: 50px;
  border-radius: 0 10px 10px 0;
  display: flex;
}

#search-icon {
  font-size: 25px;
  margin: auto;
  color: var(--primary-color);
}

#search-icon:hover {
  color: var(--second-color);
  font-size: 30px;
}

#search-icon:active {
  color: var(--second-color);
}

#toggleToHitokoto-container {
  display: flex;
}

#toggleToHitokoto-icon {
  color: var(--primary-color);
  font-size: 3px;
  padding: 1px;
  margin: auto;
  border-radius: 0 5px 5px 0;
}

#toggleToHitokoto-icon:hover {
  color: var(--second-color);
}

@media (max-width: 1000px) {
  #search-box {
    width: 90vw;
  }
}
</style>