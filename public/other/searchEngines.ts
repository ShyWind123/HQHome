const searchEngines = new Map([
  ["bing", { icon: "icon-Bing", url: "https://cn.bing.com/?mkt=zh-CN&mkt=zh-CN", search: "https://www.bing.com/search?q=" }],
  ["baidu", { icon: "icon-baidu1", url: "https://www8.baidu.com/", search: "https://www.baidu.com/s?wd=" }],
  ["google", { icon: "icon-Google", url: "https://www.google.com/", search: "https://www.google.com/search?q=" }],
  ["bilibili", { icon: "icon-bilibili", url: "https://www.bilibili.com/", search: "https://search.bilibili.com/all?keyword=" }]
])

export default searchEngines