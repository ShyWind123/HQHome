import { defineStore } from 'pinia'
import { ref } from 'vue'

export const getGlobalStore = defineStore('global', () => {
  const isGlobalShow = ref<boolean>(true)
  const isGlobalHide = ref<boolean>(false)
  function toggleGlobalHideShow() {
    isGlobalHide.value = !isGlobalHide.value
    isGlobalShow.value = !isGlobalShow.value
  }

  const isSearchShow = ref<boolean>(true)
  const isHitokotoShow = ref<boolean>(false)
  function toggleSearchHitokoto() {
    isSearchShow.value = !isSearchShow.value
    isHitokotoShow.value = !isHitokotoShow.value
  }

  const isTopHide = ref<boolean>(false)
  const isTopShow = ref<boolean>(true)
  function toggleTopHideShow() {
    isTopHide.value = !isTopHide.value
    isTopShow.value = !isTopShow.value
  }

  const currentHoverWeb = ref<string>("")
  function changeHoverWeb(newWebName: string) {
    currentHoverWeb.value = newWebName
  }

  return {
    isGlobalHide, isGlobalShow, toggleGlobalHideShow,
    isSearchShow, isHitokotoShow, toggleSearchHitokoto,
    isTopHide, isTopShow, toggleTopHideShow,
    currentHoverWeb, changeHoverWeb
  }
})