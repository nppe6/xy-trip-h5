import { ref } from 'vue'
import { onMounted, onUnmounted } from 'vue'

export default function useScroll() {
  const isReachButton = ref(false)
  console.log(isReachButton)

  const scrollListenerHandler = () => {
    // 表示当前屏幕的高度
    const clientHeight = document.documentElement.clientHeight
    // 表示当前滚动的高度
    const scrollTop = document.documentElement.scrollTop
    // 表示页面文档内容总高度
    const scrollHeight = document.documentElement.scrollHeight
    if (clientHeight + scrollTop >= scrollHeight - 1) {
      console.log('滚动到底部了')
      isReachButton.value = true
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', scrollListenerHandler)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', scrollListenerHandler)
  })

  return { isReachButton }
}
