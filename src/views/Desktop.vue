<template>
  <div class="background-container" @click.self="defocusApp()">
    <MenuBar></MenuBar>
    <MonzDock></MonzDock>

  <template v-for="app in runningApps" :key="app.id">
    <DesktopApp
      v-if="app.active"
      v-show="!app.minimized"
      :app="app"
    ></DesktopApp>
  </template>

  </div>
</template>


<script setup lang="ts">
import MenuBar from '@/components/MenuBar.vue';
import MonzDock from '@/components/MonzDock.vue';
import DesktopApp from './DesktopApp.vue';

import { useAppStore } from '@/composables/useAppState';

const { runningApps, defocusApp } = useAppStore();

</script>

<style lang="css" scoped>
.background-container {
  background-image: url('@/assets/wallpaper/monz_skin.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}
</style>