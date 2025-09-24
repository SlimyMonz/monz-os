<template>
  <div class="desktop-background">
  <MenuBar/>

    <div class="desktop-app-container" v-if="focusedApp">
      <DesktopApp
        :app="focusedApp"
        :key="focusedApp.name"
        :icon="focusedApp.icon"
        :is="focusedApp.component"
      />
    </div>

  <Dock class="dock"/>
  </div>
</template>

<script setup lang="ts">
import { useAppState } from '@/composables/useAppState';
const { focusedApp } = useAppState();
</script>

<style lang="css">
html, body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%;
}

.desktop-background {
  position: fixed; 
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
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(1rem);
  border-radius: 0 1rem 1rem 0;
  box-shadow: 0.2rem 0 1rem rgba(0, 0, 0, 0.2);
}

.desktop-app-container {
  position: absolute;
  top: 3rem;   
  left: 10rem; 
  right: 10rem;
  bottom: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

 
}

</style>