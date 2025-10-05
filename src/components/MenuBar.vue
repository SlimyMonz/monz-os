<template>
  <div>
    <template v-if="isMobile">
      <p class="p-4 text-center text-white bg-gray-900">Mobile Menu</p>
    </template>

    <template v-else>
      <header
        class="fixed top-0 left-0 right-0 h-8 flex items-center justify-between px-3 bg-white/10 backdrop-blur-sm text-white text-xs font-sans select-none z-50 shadow-md"
        style="user-select: none;"
      >
        <!-- Left: Apple logo & app name -->
        <div class="flex items-center space-x-2 min-w-[100px]">
          <span class="text-lg font-semibold cursor-default select-none"></span>
          <span class="hidden sm:inline truncate cursor-default select-none">
            {{ app.focusedApp.label }}
          </span>
        </div>

        <!-- Center: Date & time -->
        <div class="flex-1 text-center font-mono tracking-wide select-none">
          {{ currentTime.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' }) }}
          &nbsp;
          {{ currentTime.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' }) }}
        </div>

        <!-- Right: System icons -->
        <div class="flex items-center space-x-3 min-w-[80px] justify-end pr-1 select-none">
          <span title="Wi-Fi" class="cursor-default select-none">📶</span>
          <span title="Battery" class="cursor-default select-none">🔋</span>
          <span title="User" class="cursor-default select-none">👤</span>
        </div>
      </header>
    </template>
  </div>
</template>

<script setup lang="ts">
import { displayIsMobile } from '@/composables/isMobile';
import { useCurrentTime } from '@/composables/getDateTime';
import { useAppStore } from '@/composables/useAppState';

const isMobile = displayIsMobile();
const { currentTime } = useCurrentTime();
const app = useAppStore();
</script>
