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
import { storeToRefs } from 'pinia';

const appStore = useAppStore();
const { runningApps } = storeToRefs(appStore);
const { defocusApp } = appStore;
</script>
