<template>
  <div>
      <header
        class="fixed top-0 left-0 right-0 flex items-center justify-between px-3 bg-black/50 backdrop-blur text-white text-xs font-sans select-none z-50 relative"
        style="user-select: none;">

        <!-- Left: Logo + App Menu -->
        <div class="flex items-center space-x-2 min-w-[100px] flex-shrink-0">
          <span class="text-lg font-semibold cursor-default select-none">Z</span>
          <AppMenu :appMenu="appStore.focusedApp.menu" />
        </div>

        <!-- Center: Date & time  -->
        <div
          class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 tracking-wide select-none whitespace-nowrap"
          style="pointer-events: none;">
          {{ currentTime.toLocaleDateString(undefined, { weekday: 'long', month: 'long', year: 'numeric', day: 'numeric' }) }}
          &nbsp;
          {{ currentTime.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' }) }}
        </div>

        <!-- Right: System icons -->
        <div class="flex items-center space-x-3 min-w-[80px] justify-end pr-1 select-none flex-shrink-0">
          <span title="Wi-Fi" class="cursor-default select-none">📶</span>
          <span title="Battery" class="cursor-default select-none">🔋</span>
          <span title="User" class="cursor-default select-none">👤</span>
        </div>
      </header>
  </div>
</template>

<script setup lang="ts">
import { useCurrentTime } from '@/composables/getDateTime';
import { useAppStore } from '@/composables/useAppState';
import AppMenu from './AppMenu.vue';

const { currentTime } = useCurrentTime();
const appStore = useAppStore();
</script>
