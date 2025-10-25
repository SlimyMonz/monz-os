<template>

  <div
    class="flex flex-1 items-center bg-black/50 backdrop-blur text-white text-xs select-none"
    style="user-select: none;">

    <!-- Left: Logo + App Menu -->
    <div class="flex-none px-3">
      <p class="text-lg font-semibold cursor-default select-none">Z</p>
    </div>
    <div class="flex-none">
      <AppMenu :appMenu="appStore.focusedApp.menu" />
    </div>

    <!-- Center: Date & time  -->
    <div class="flex flex-1 justify-center"
      style="pointer-events: none;">
      {{ currentTime.toLocaleDateString(undefined, { weekday: 'long', month: 'long', year: 'numeric', day: 'numeric' })
      }}
      &nbsp;
      {{ currentTime.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' }) }}
    </div>

    <!-- Right: System icons -->
    <div class="flex-none px-3">
      <span title="Wi-Fi" class="cursor-default select-none">📶</span>
      <span title="Battery" class="cursor-default select-none">🔋</span>
      <span title="User" class="cursor-default select-none">👤</span>
    </div>
  </div>

</template>

<script setup lang="ts">
import { useCurrentTime } from '@/composables/getDateTime';
import { useAppStore } from '@/composables/appStateStore';
import AppMenu from './AppMenu.vue';

const { currentTime } = useCurrentTime();
const appStore = useAppStore();
</script>
