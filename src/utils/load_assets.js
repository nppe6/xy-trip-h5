export const getAssets = (image) => {
  // 本地获取图片资源的方法
  return new URL(`../assets/image/tabbar/${image}`, import.meta.url).href
}
