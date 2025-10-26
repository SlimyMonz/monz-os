<template>
  <!-- Entire Window -->
  <div class="flex flex-col w-full h-screen bg-[url(@/assets/wallpaper/monz_skin.jpg)] bg-center bg-cover" @click.self="appStore.defocusApp()">
    <!-- Top of Column -->
    <div class="flex h-8">
      <MenuBar />
    </div>
    <!-- Bottom of Column -->
    <div class="flex flex-1">
      <!-- Left of Row -->
      <div  class="w-30 p-2" >
      <MonzDock/>
      </div>
      <!-- Right of Row -->
       <div ref="desktopContainer" class="flex-1 h-full w-full">
      <template v-for="app in appStore.runningApps" :key="app.id">
        <DesktopApp v-if="app.active" v-show="!app.minimized" :app="app"/>
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
