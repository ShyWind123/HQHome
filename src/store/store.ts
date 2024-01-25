import { defineStore } from 'pinia'
import { ref } from 'vue'

export const getGlobalStore = defineStore('global', () => {
  const isSearchShow = ref<boolean>(true)
  const isHitokotoShow = ref<boolean>(false)
  function toggleSearchHitokoto() {
    isSearchShow.value = !isSearchShow.value
    isHitokotoShow.value = !isHitokotoShow.value
  }

  const isHide = ref<boolean>(false)
  const isShow = ref<boolean>(true)
  function toggleHideShow() {
    isHide.value = !isHide.value
    isShow.value = !isShow.value
  }

  const currentHoverWeb = ref<string>("")
  function changeHoverWeb(newWebName: string) {
    currentHoverWeb.value = newWebName
  }

  return {
    isSearchShow, isHitokotoShow, toggleSearchHitokoto,
    isHide, isShow, toggleHideShow,
    currentHoverWeb, changeHoverWeb
  }
})