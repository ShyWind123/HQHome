<template>
  <div id="search-container">
    <i class="iconfont icon-jiantou_yemian_xiangxia_o hidden arrow down-arrow" @click="toggle()" ref="downArrow"></i>
    <i class="iconfont icon-jiantou_yemian_xiangshang arrow up-arrow" @click="toggle()" ref="upArrow"></i>
    <transition enter-active-class="animate__animated animate__fadeInDown"
      leave-active-class="animate__animated animate__fadeOutUp">
      <div id="search-box" ref="searchBox" v-show="showSearchBox">
        <div id="search-engine-icon-container" class="frosted-glass">
          <a-dropdown placement="bottom">
            <i class="iconfont" :class="searchEngines.get(currentSearchEngine)?.icon" id="search-engine-icon"
              @click="gotoWeb"></i>
            <template #overlay>
              <a-menu class="frosted-glass">
                <template v-for="searchEngineItem in searchEngines">
                  <a-menu-item v-if="searchEngineItem[0] != currentSearchEngine" class="frosted-glass"
                    @click="changeSearchEngine(searchEngineItem[0])">
                    <i class="iconfont" :class="searchEngineItem[1].icon"></i>
                  </a-menu-item>
                </template>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
        <input :value="searchValue" placeholder="search here..." id="search-input" class="unselectable frosted-glass"
          @keyup.enter="onSearch" @input="changeValue" />
        <div id="search-icon-container" class="frosted-glass" @click="onSearch">
          <i class="iconfont icon-search" id="search-icon"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import searchEngines from "../../public/other/searchEngines"

const upArrow = ref()
const downArrow = ref()
const searchBox = ref()

const showSearchBox = ref<boolean>(true)
const currentSearchEngine = ref<string>("bing")
const searchValue = ref<string>('');

function toggle() {
  downArrow.value.classList.toggle("hidden")
  upArrow.value.classList.toggle("hidden")
  showSearchBox.value = !showSearchBox.value
}

function changeSearchEngine(selectedSearchEngine: string) {
  currentSearchEngine.value = selectedSearchEngine
}

function gotoWeb() {
  window.open(searchEngines.get(currentSearchEngine.value)?.url, '_blank')
}

function onSearch() {
  if (searchValue.value != "") {
    window.open(searchEngines.get(currentSearchEngine.value)?.search + searchValue.value, '_blank')
  }
}

function changeValue(e: any) {
  searchValue.value = e.target.value
}
</script>

<style scoped>
#search-container {
  flex-direction: column;
  height: 100px;
  justify-content: space-between;
  display: flex;
}

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


#search-input {
  flex: 1;
  border: none;
  color: var(--primary-color);
  outline: none;
  padding: 10px;
}

#search-input::placeholder {
  color: var(--primary-color);
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

.hidden {
  visibility: hidden;
  position: absolute;
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