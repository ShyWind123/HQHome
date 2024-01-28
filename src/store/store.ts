import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

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

  const isTimeWeatherShow = ref<boolean>(true)
  const isTimeCapsuleShow = ref<boolean>(false)
  function toggleWeatherCapsule() {
    isTimeWeatherShow.value = !isTimeWeatherShow.value
    isTimeCapsuleShow.value = !isTimeCapsuleShow.value
    currentSeachShowContent.value = ''
  }

  const isTopHide = ref<boolean>(false)
  const isTopShow = ref<boolean>(true)
  function toggleTopHideShow() {
    isTopHide.value = !isTopHide.value
    isTopShow.value = !isTopShow.value
  }

  const isBottomHide = ref<boolean>(true)
  const isBottomShow = ref<boolean>(false)
  function toggleBottomHideShow() {
    isBottomHide.value = !isBottomHide.value
    isBottomShow.value = !isBottomShow.value
  }

  const currentSeachShowContent = ref<string>("")
  function changeSearchShowContent(newContent: string) {
    currentSeachShowContent.value = newContent
  }

  const weekdays = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
  const currentDate = reactive({ year: "", month: "", day: "", hour: "", minute: "", second: "", weekday: "" })
  function updateTime() {
    const now = new Date()
    currentDate.year = now.getFullYear().toString(),
      currentDate.month = (now.getMonth() + 1).toString(),
      currentDate.day = now.getDate().toString(),
      currentDate.hour = ('0' + now.getHours()).slice(-2),
      currentDate.minute = ('0' + now.getMinutes()).slice(-2),
      currentDate.second = ('0' + now.getSeconds()).slice(-2),
      currentDate.weekday = weekdays[now.getDay()]
  }


  return {
    isGlobalHide, isGlobalShow, toggleGlobalHideShow,
    isSearchShow, isHitokotoShow, toggleSearchHitokoto,
    isTopHide, isTopShow, toggleTopHideShow,
    isBottomHide, isBottomShow, toggleBottomHideShow,
    isTimeWeatherShow, isTimeCapsuleShow, toggleWeatherCapsule,
    currentSeachShowContent, changeSearchShowContent,
    currentDate, updateTime
  }
})