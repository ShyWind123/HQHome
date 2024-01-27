<template>
  <div id="time-weather-container" class="frosted-glass" @mouseover="changeSearchShowContent('点击试试?')"
    @mouseleave="changeSearchShowContent('')">
    <div id="date-container">
      {{ currentDate.year }} &nbsp;年&nbsp;
      {{ currentDate.month }} &nbsp;月&nbsp;
      {{ currentDate.day }} &nbsp;日&nbsp;&nbsp;&nbsp;
      {{ currentDate.weekday }}
    </div>
    <div id="time-container">
      <span>
        {{ currentDate.hour }} :
        {{ currentDate.minute }} :
        {{ currentDate.second }}
      </span>

    </div>
    <div id="weather-container">
      <div id="weather-container-inner">

      </div>
      <div id="weather-container-inner">
        <i class="iconfont icon-dingwei" id="weather-icons"></i>
        {{ location.province }}&nbsp;
        {{ location.city }}&nbsp;&nbsp;&nbsp;&nbsp;
        <i class="iconfont icon-shouye" id="weather-icons"></i>
        {{ weather.weather }}&nbsp;&nbsp;&nbsp;&nbsp;
        <i class="iconfont icon-wendu" id="weather-icons"></i>
        {{ weather.temperature }}℃
      </div>
      <div id="weather-container-inner">
        <i class="iconfont icon-feng" id="weather-icons"></i>
        {{ weather.winddirection }}风&nbsp;
        {{ weather.windpower }}级&nbsp;&nbsp;&nbsp;&nbsp;
        <i class="iconfont icon-shidu" id="weather-icons"></i>
        湿度{{ weather.humidity }}
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import { storeToRefs } from 'pinia';
import { getGlobalStore } from '../store/store';
import { getLocation, getWeather } from '../api/api';

const globalStore = getGlobalStore()
const { changeSearchShowContent, updateTime } = globalStore
const { currentDate } = storeToRefs(globalStore)

const amapKey = import.meta.env.VITE_AMAP_KEY

const location = reactive({ province: "", city: "", adcode: "" })
const weather = reactive({ weather: "", temperature: "", winddirection: "", windpower: "", humidity: "" })

onMounted(async () => {
  updateTime()
  setInterval(() => {
    updateTime()
  }, 1000)

  getInformation()
})

const getInformation = async () => {
  const res1 = await getLocation(amapKey)
  location.city = res1.city
  location.province = res1.province
  location.adcode = res1.adcode

  const res2 = await getWeather(amapKey, location.adcode)
  weather.weather = res2.lives[0].weather
  weather.temperature = res2.lives[0].temperature
  weather.winddirection = res2.lives[0].winddirection
  weather.windpower = res2.lives[0].windpower
  weather.humidity = res2.lives[0].humidity
}


</script>

<style scoped>
#time-weather-container {
  width: 550px;
  border-radius: 10px;
  margin: 20px;
  display: flex;
  flex-direction: column;
}

#date-container {
  color: var(--primary-color);
  margin: 20px;
  font-size: 35px;
  margin-bottom: 0;
}

#time-container {
  color: #fff;
  margin: 10px;
  font-size: 100px;
  font-family: 'Digital7';
  letter-spacing: 2px;
  /* border: #000 2px solid; */
  border-radius: 20px;
}

#weather-container {
  color: var(--primary-color);
  margin: 10px;
  margin-top: 0;
  font-size: 20px;
  display: flex;
  flex-direction: column;
}

#weather-container-inner {
  margin-bottom: 10px;
}

#weather-icons {
  font-size: 20px;
  color: var(--primary-color);
}

@media (max-width: 600px) {
  #time-weather-container {
    width: 80vw;
    margin: 10px;
  }

  #date-container {
    margin: 10px;
    font-size: 15px;
  }

  #time-container {
    margin: 5px;
    font-size: 50px;
    letter-spacing: 1px;
  }

  #weather-container {
    margin: 10px;
    font-size: 10px;
  }

  #weather-icons {
    font-size: 10px;
  }
}

@media (max-width:300px) {
  #weather-container {
    margin: 10px;
    font-size: 8px;
  }

  #weather-icons {
    font-size: 8px;
  }
}
</style>