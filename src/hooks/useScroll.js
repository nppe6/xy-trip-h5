import { ref } from 'vue'
import { onMounted, onUnmounted } from 'vue'
// 引入库 对滚动做节流  优化性能 这个库比lo大师 小
import { throttle } from 'underscore'

export default function useScroll() {
  const isReachButton = ref(false)
  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)

  const scrollListenerHandler = throttle(() => {
    // 表示当前屏幕的高度
    clientHeight.value = document.documentElement.clientHeight
    // 表示当前滚动的高度
    scrollTop.value = document.documentElement.scrollTop
    // 表示页面文档内容总高度
    scrollHeight.value = document.documentElement.scrollHeight
    // console.log(scrollTop.value)

    if (clientHeight.value + scrollTop.value >= scrollHeight.value - 1) {
      console.log('滚动到底部了')
      isReachButton.value = true
    }
  }, 100)

  onMounted(() => {
    window.addEventListener('scroll', scrollListenerHandler)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', scrollListenerHandler)
  })

  return { isReachButton, clientHeight, scrollTop, scrollHeight }
}
