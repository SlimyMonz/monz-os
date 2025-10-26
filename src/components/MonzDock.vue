<template>
  <!-- Parent container: full height, flex column -->
  <div class="flex flex-col h-full w-full justify-center items-center">
    <!-- Dock container: full width, vertical layout -->
    <div class="flex flex-col rounded-2xl bg-black/25 backdrop-blur space-y-4 p-4">
      <div v-for="(app, index) in AppList" :key="index" class="flex flex-1 flex-col items-center group cursor-pointer"
        @click="openAppFromItem(app)">
        <!-- App and Indicator -->
        <div class="relative flex rounded-2xl transition-transform duration-200 group-hover:scale-120">
          <img :src="app.icon" :alt="app.label" class="rounded-xl" />

          <div v-if="isAppRunning(app)"
            class="absolute right-[-0.5rem] top-1/2 transform -translate-y-1/2 w-[0.1rem] h-8 rounded-sm bg-white/75 pointer-events-none">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { AppList } from '@/apps/AppList'
import { useAppStore } from '@/stores/appStateStore';

const { openAppFromItem, isAppRunning } = useAppStore();

</script>
