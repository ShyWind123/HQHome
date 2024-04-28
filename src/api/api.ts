export const getHitokoto = async () => {
  const res = await fetch("https://v1.hitokoto.cn");
  return await res.json();
}

export const getLocation = async (key: string) => {
  const res = await fetch(`https://restapi.amap.com/v3/ip?key=${key}`)
  return await res.json();
}

export const getWeather = async (key: string, adcode: string) => {
  const res = await fetch(`https://restapi.amap.com/v3/weather/weatherInfo?key=${key}&city=${adcode}`)
  return await res.json();
}

export const getTodayHistory = async () => {
  const res = await fetch("https://api.leafone.cn/api/lishi?type=rand")
  return await res.json();
}
