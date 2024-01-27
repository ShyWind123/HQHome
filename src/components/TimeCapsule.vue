<template>
  <div id="time-capsule-container" class="frosted-glass">
    <div id="return-to-weather-icon-container">
      <i class="iconfont icon-cuowu" id="return-to-weather-icon" @click="toggleWeatherCapsule"></i>
    </div>
    <div id="date-container">
      {{ currentDate.year }} &nbsp;年&nbsp;
      {{ currentDate.month }} &nbsp;月&nbsp;
      {{ currentDate.day }} &nbsp;日&nbsp;&nbsp;&nbsp;
      {{ currentDate.weekday }}
    </div>
    <a-divider />
    <div id="today-progress-container">
      <div id="today-progress-content">
        今年已经过去&nbsp;&nbsp;<span style="color:#ccffff">{{ todayDays }}</span>&nbsp;/&nbsp;<span style="color:#fff">{{
          totalDays }}</span>&nbsp;&nbsp;天
      </div>

      <div id="today-progress">
        <a-progress :stroke-color="'#ccffff'" :trail-color="'#fff'" :percent="todayPercent" :size="15"
          :show-info="false" />
        <div>{{ todayPercent }}%</div>
      </div>
    </div>
    <div id="history-today-container" @click="clickHistoryToday" ref="historyTodayContainer">
      <div id="history-today-title">
        历史上的今天
      </div>
      <div id="history-today-content">
        {{ historyToday }}
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import { storeToRefs } from 'pinia';
import { getGlobalStore } from '../store/store';
import { getTodayHistory } from '../api/api';

const globalStore = getGlobalStore()
const { toggleWeatherCapsule } = globalStore
const { currentDate } = storeToRefs(globalStore)

const todayDays = ref<number>()
const totalDays = ref<number>()
const todayPercent = ref<number>()

const historyToday = ref<string>()
const historyTodayContainer = ref()

onMounted(() => {
  calculateDays()
  updateTodayHistory()
})

const getDaysOfYear = (date: Date) => {
  return Math.ceil((date.getTime() - new Date(new Date().getFullYear().toString()).getTime()) / (24 * 60 * 60 * 1000));
}

const calculateDays = () => {
  const thisYear = new Date().getFullYear()
  todayDays.value = getDaysOfYear(new Date())
  totalDays.value = getDaysOfYear(new Date(thisYear, 11, 31))
  todayPercent.value = Math.floor((new Date().getTime() - new Date(thisYear, 0, 1, 0, 0, 0, 0).getTime()) / (new Date(thisYear + 1, 0, 1, 0, 0, 0, 0).getTime() - new Date(thisYear, 0, 1, 0, 0, 0, 0).getTime()) * 100 * 100) / 100
}

const updateTodayHistory = async () => {
  const res = await getTodayHistory()
  historyToday.value = res.data.title
}

const clickHistoryToday = () => {
  updateTodayHistory()
  historyTodayContainer.value.classList.add("animate__animated")
  historyTodayContainer.value.classList.add("animate__rubberBand")
  setTimeout(() => {
    historyTodayContainer.value.classList.remove("animate__animated")
    historyTodayContainer.value.classList.remove("animate__rubberBand")
  }, 1000)
}

</script>

<style scoped>
#time-capsule-container {
  width: 550px;
  border-radius: 10px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  /* height: 300px; */
}

#date-container {
  color: var(--primary-color);
  margin: 20px;
  font-size: 30px;
  margin-bottom: 0;
}

/* #today-progress-container {
  margin: 20px;
} */

#today-progress-content {
  font-size: 20px;
}

#today-progress {
  margin: auto;
  width: 500px;
}

#history-today-container {
  margin: 30px;
  border-radius: 10px;
}

#history-today-container:hover {
  background: var(--frosted-glass-color-dark);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);
}

#history-today-title {
  font-size: 20px;
  margin: 15px;
}

#history-today-content {
  margin: 15px;
  color: var(--primary-color);
  font-size: 30px;
}

#return-to-weather-icon-container {
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  padding: 5px;
}

#return-to-weather-icon-container {
  font-size: 15px;
  color: var(--primary-color);
}

#return-to-weather-icon-container:hover {
  border-radius: 15px;
  color: var(--second-color);
  background: var(--frosted-glass-color);
}

@media (max-width:500px) {
  #time-capsule-container {
    width: 80vw;
    margin: 10px;
  }

  #date-container {
    margin: 20px;
    font-size: 15px;
    margin-bottom: 0;
  }

  #today-progress-content {
    font-size: 10px;
  }

  #today-progress {
    width: 75vw;
  }

  #history-today-container {
    margin: 15px;
  }

  #history-today-title {
    font-size: 10px;
    margin: 10px;
  }

  #history-today-content {
    margin: 10px;
    font-size: 20px;
  }
}
</style>