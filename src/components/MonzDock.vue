<template>
  <!-- Dock container -->
  <div
    class="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col items-center p-3 rounded-2xl bg-black/50 backdrop-blur shadow-md/50"
  >
    <div
      v-for="(app, index) in AppList"
      :key="index"
      class="relative m-3 flex flex-col items-center group"
      @click="openAppFromItem(app)"
    >
      <!-- App icon with scaling on hover -->
      <div
        class="w-14 h-14 flex items-center justify-center rounded-2xl transition-transform duration-200 group-hover:scale-120"
      >
        <img
          :src="app.icon"
          alt="App icon"
          class="w-full h-full object-contain rounded-xl"
        />
      </div>

      <!-- Indicator right of icon -->
        <div
          v-if="isAppRunning(app)"
          class="absolute right-[-0.80rem] top-1/2 transform -translate-y-1/2 w-[0.1rem] h-8 rounded-sm bg-white opacity-75 pointer-events-none"
        ></div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { AppList } from '@/apps/AppList'
import { useAppStore } from '@/stores/appStateStore';

const { openAppFromItem, isAppRunning } = useAppStore();

</script>

