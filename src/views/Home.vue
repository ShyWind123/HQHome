<template>
  <Background></Background>
  <div id="main-container">
    <ShowHide></ShowHide>
    <transition enter-active-class="animate__animated animate__fadeInDown"
      leave-active-class="animate__animated animate__fadeOutUp">
      <div id="search-and-hitokoto" v-if="isShow">
        <transition enter-active-class="animate__animated animate__flipInY animate__delay-1s"
          leave-active-class="animate__animated animate__flipOutY">
          <!-- <transition enter-active-class="animate__animated animate__slideInRight"
          leave-active-class="animate__animated animate__slideOutRight"> -->
          <Search v-if="isSearchShow"></Search>
        </transition>
        <transition enter-active-class="animate__animated animate__flipInY animate__delay-1s"
          leave-active-class="animate__animated animate__flipOutY">
          <!-- <transition enter-active-class="animate__animated animate__slideInLeft"
          leave-active-class="animate__animated animate__slideOutLeft"> -->
          <Hitokoto id="hitokoto-component" v-if="isHitokotoShow"></Hitokoto>
        </transition>
      </div>
    </transition>
  </div>
  <Log id="log-component"></Log>
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
import ShowHide from '../components/ShowHide.vue';
import { getGlobalStore } from '../store/store'

const globalStore = getGlobalStore()
const { isSearchShow, isHitokotoShow, isShow } = storeToRefs(globalStore)
</script>

<style scoped>
#main-container {
  width: 100vw;
  height: 100vh;
}

#hitokoto-component {
  margin: 20px;
  display: flex;
}

#log-component {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 5px;
}
</style>