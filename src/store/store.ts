import { defineStore } from 'pinia'
import { ref } from 'vue'

export const getGlobalStore = defineStore('global', () => {
  const isSearchShow = ref<boolean>(true)
  const isHitokotoShow = ref<boolean>(false)
  const isHide = ref<boolean>(false)
  const isShow = ref<boolean>(true)
  function toggleSearchHitokoto() {
    isSearchShow.value = !isSearchShow.value
    isHitokotoShow.value = !isHitokotoShow.value
  }
  function toggleHideShow() {
    isHide.value = !isHide.value
    isShow.value = !isShow.value
  }

  return { isSearchShow, isHitokotoShow, isHide, isShow, toggleHideShow, toggleSearchHitokoto }
})