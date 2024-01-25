<template>
  <Background></Background>
  <div id="main-container">
    <ShowHide></ShowHide>
    <transition enter-active-class="animate__animated animate__fadeInDown"
      leave-active-class="animate__animated animate__fadeOutUp">
      <div v-if="isShow">
        <transition enter-active-class="animate__animated animate__flipInY"
          leave-active-class="animate__animated animate__flipOutY" mode="out-in">
          <div class="search-links-container" v-if="isSearchShow">
            <Search></Search>
            <Links></Links>
          </div>

          <Hitokoto v-else></Hitokoto>
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
import Links from '../components/Links.vue';
import { getGlobalStore } from '../store/store'

const globalStore = getGlobalStore()
const { isSearchShow, isShow } = storeToRefs(globalStore)
</script>

<style scoped>
#main-container {
  width: 100vw;
  height: 100vh;
}

#log-component {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 5px;
}

.search-links-container {
  display: flex;
  flex-direction: column;
}
</style>