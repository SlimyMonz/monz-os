<template>
  <!-- Entire Window -->
  <div class="flex flex-col w-full h-screen bg-[url(@/assets/wallpaper/monz_skin.jpg)] bg-center bg-cover">
    <!-- Top: Menu -->
    <div class="flex h-8">
      <MenuBar />
    </div>
    <!-- Bottom: Dock + Desktop -->
    <div class="flex flex-1">
      <!-- Left: Dock-->
      <div class="h-full w-30 p-2" @click.self="appStore.defocusApp()">
        <MonzDock />
      </div>
      <!-- Right: Desktop -->
      <div class="h-full w-full" @click.self="appStore.defocusApp()">
        <template v-for="app in appStore.runningApps" :key="app.id">
          <DesktopApp v-if="app.active" v-show="!app.minimized" :app="app" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuBar from '@/components/MenuBar.vue';
import MonzDock from '@/components/MonzDock.vue';
import DesktopApp from './DesktopApp.vue';
import { useAppStore } from '@/stores/appStateStore';

const appStore = useAppStore();
</script>
