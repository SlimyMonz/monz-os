import { ref, onMounted, onUnmounted } from 'vue';

const windowSize = ref({
  width: window.innerWidth,
  height: window.innerHeight,
});

export function useWindowSize() {
  function updateWindowSize() {
    windowSize.value.width = window.innerWidth;
    windowSize.value.height = window.innerHeight;
  }

  onMounted(() => {
    window.addEventListener('resize', updateWindowSize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateWindowSize);
  });

  return { windowSize };
}
