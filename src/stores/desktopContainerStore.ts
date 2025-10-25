// Thank you to online people for having figured out most of this stuff. I'm not very good at DOM stuff.

import { defineStore } from 'pinia'
import { ref, onUnmounted } from 'vue'

export const useDesktopContainerStore = defineStore('desktopContainer', () => {
  const width = ref(0)
  const height = ref(0)
  const element = ref<HTMLElement | null>(null)

  let observer: ResizeObserver | null = null

  function setElement(el: HTMLElement | null) {
    if (observer) {
      observer.disconnect()
      observer = null
    }

    element.value = el

    if (el) {
      observer = new ResizeObserver(() => {
        const rect = el.getBoundingClientRect()
        width.value = rect.width
        height.value = rect.height
      })
      observer.observe(el)

      const rect = el.getBoundingClientRect()
      width.value = rect.width
      height.value = rect.height
    }
  }

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return {
    width,
    height,
    element,
    setElement,
  }
})
