<template>
  <Background></Background>
  <div class="global-show-hide-container-outer">
    <GlobalShowHide></GlobalShowHide>
  </div>
  <transition name="global-show-hide" enter-active-class="animate__animated animate__zoomIn"
    leave-active-class="animate__animated animate__zoomOut" mode="out-in">
    <div class="main-container" v-if="isGlobalShow">
      <TopShowHide></TopShowHide>
      <transition name="top-show-hide" enter-active-class="animate__animated animate__fadeInDown"
        leave-active-class="animate__animated animate__fadeOutUp" mode="out-in">
        <div v-if="isTopShow" class="search-hitokoto-container">
          <transition name="search-hitokoto-toggle" enter-active-class="animate__animated animate__flipInY"
            leave-active-class="animate__animated animate__flipOutY" mode="out-in">
            <div class="search-links-container" v-if="isSearchShow">
              <Search></Search>
              <Links></Links>
            </div>
            <Hitokoto v-else-if="isHitokotoShow"></Hitokoto>
          </transition>
        </div>
      </transition>
      <div class="weather-capsule-container">
        <transition name="weather-capsule-toggle" enter-active-class="animate__animated animate__flipInX"
          leave-active-class="animate__animated animate__flipOutX" mode="out-in">
          <TimeWeather v-if="isTimeWeatherShow" @click="toggleWeatherCapsule"></TimeWeather>
          <TimeCapsule v-else-if="isTimeCapsuleShow"></TimeCapsule>
        </transition>
      </div>
      <div class="webs-container-outer">
        <Webs></Webs>
      </div>
      <Log id="log-component"></Log>
    </div>
  </transition>

  <Loading></Loading>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { storeToRefs } from 'pinia'
import Search from '../components/Search.vue';
import Log from '../components/Log.vue';
import Loading from '../components/Loading.vue';
import Background from '../components/Background.vue';
import Hitokoto from '../components/Hitokoto.vue';
import TopShowHide from '../components/TopShowHide.vue';
import Links from '../components/Links.vue';
import TimeWeather from '../components/TimeWeather.vue';
import TimeCapsule from '../components/TimeCapsule.vue';
import Webs from '../components/Webs.vue'
import GlobalShowHide from '../components/GlobalShowHide.vue';
import { getGlobalStore } from '../store/store'

const globalStore = getGlobalStore()
const { isSearchShow, isHitokotoShow, isTopShow, isGlobalShow, isTimeWeatherShow, isTimeCapsuleShow } = storeToRefs(globalStore)
const { toggleWeatherCapsule } = globalStore
</script>

<style scoped>
.main-container {
  width: 100vw;
  height: 100vh;
}

#log-component {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 5px;
}

.global-show-hide-container-outer {
  position: absolute;
  top: 0;
  right: 0;
}

.search-links-container {
  display: flex;
  flex-direction: column;
}

.weather-capsule-container {
  position: absolute;
  left: 50vw;
  top: 55vh;
  transform: translate(-50%, -50%);
}

.webs-container-outer {
  display: flex;
  position: absolute;
  bottom: 0;
  left: 50vw;
  transform: translateX(-50%);
}
</style>