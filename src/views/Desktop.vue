<template>
  <div class="desktop-background">
  <MenuBar/>

    <DesktopApp
      v-for="app in openedApps"
      :key="app.name"
      :icon="app.icon"
      :is="app.component"
    />

  <Dock class="dock"/>
  </div>
</template>

<script setup lang="ts">
import { useAppState } from '@/composables/useAppState';

const { openedApps } = useAppState();
</script>

<style lang="css">
html, body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%;
}

.desktop-background {
  position: fixed; /* Better than absolute or static for full-screen control */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('@/assets/wallpaper/monz_skin.jpg') no-repeat center center;
  background-size: cover;
  overflow: hidden;
}

.dock {
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 0 10px 10px 0;
  box-shadow: 2px 0 10px rgba(0,0,0,0.2);
  z-index: 100;
}

</style>