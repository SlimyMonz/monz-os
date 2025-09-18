import { ref, onMounted, onUnmounted } from 'vue';

const DESKTOP_BREAKPOINT = 1280; //1280px minimum for desktop view

export function displayIsMobile() {
  const isMobile = ref(window.innerWidth < DESKTOP_BREAKPOINT);

  const handleResize = () => {
    isMobile.value = window.innerWidth < DESKTOP_BREAKPOINT;
  };

  onMounted(() => {
    window.addEventListener('resize', handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });

  return { isMobile };
}
