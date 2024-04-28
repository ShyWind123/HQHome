import axios from "axios";  

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

export const getBackground = async () => {
  axios.request({
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN',
    headers: { 
      'Cookie': 'MUID=251DE2E9DA606F9E19BCF686DBB26E16; SRCHD=AF=NOFORM; SRCHHPGUSR=SRCHLANG=zh-Hans; SRCHUID=V=2&GUID=BFB0BFA52C104F7B8FACE815E836BFD5&dmnchg=1; SRCHUSR=DOB=20240428; _EDGE_S=F=1&SID=1E907BB86D876A5E30946FD76C556B78; _EDGE_V=1; _SS=SID=1E907BB86D876A5E30946FD76C556B78; MUIDB=251DE2E9DA606F9E19BCF686DBB26E16'
    }
  })
  .then((response) => {
    return response.data.images[0].url;
  })
  .catch((error) => {
    console.log(error);
  });
  return null;
}