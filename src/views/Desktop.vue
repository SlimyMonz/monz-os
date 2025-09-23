<template>
  <div class="desktop-background">
  <MenuBar/>

    <DesktopApp
      v-for="app in openedApps"
      :key="app.name"
      :icon="app.icon"
      :is="app.component"
    />

  <Dock/>
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
</style>