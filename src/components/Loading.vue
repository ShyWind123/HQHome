<template>
  <div class="loader-mask" ref="loaderMask">
    <div class="loader">
      <div class="loader-outer"></div>
      <div class="loader-middle"></div>
      <div class="loader-inner"></div>
    </div>
    <div class="loader-content">
      欢迎访问HQ的主页
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

const loaderMask = ref()

document.addEventListener('readystatechange', function () {
  if (window.document.readyState === 'complete') {
    loaderMask.value.classList.add("hidden")
  }
})

</script>

<style scoped>
.loader-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
}

.loader {
  position: absolute;
  top: 40vh;
  left: 50vw;
}

.loader-content {
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  color: var(--primary-color);
}

.loader-outer,
.loader-middle,
.loader-inner {
  border: 3px solid transparent;
  border-top-color: var(--primary-color);
  border-right-color: var(--primary-color);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
}

.loader-outer {
  width: 3.5em;
  height: 3.5em;
  margin-left: -1.75em;
  margin-top: -1.75em;
  animation: spin 2s linear infinite;
}

.loader-middle {
  width: 2.1em;
  height: 2.1em;
  margin-left: -1.05em;
  margin-top: -1.05em;
  animation: spin 1.75s linear reverse infinite;
}

.loader-inner {
  width: 0.8em;
  height: 0.8em;
  margin-left: -0.4em;
  margin-top: -0.4em;
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>