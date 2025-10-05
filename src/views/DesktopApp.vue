<template>
  <div
    class="app-window fixed border border-gray-700 bg-white shadow-lg rounded overflow-hidden"
    :style="{
      left: app.position.x + 'px',
      top: app.position.y + 'px',
      width: app.size.width + 'px',
      height: app.size.height + 'px',
      zIndex: app.zIndex,
    }"
    @mousedown="focusApp(app)"
  >

    <TitleBar
      :title="app.label"
      @close="closeApp(app)"
      @drag="handleDrag"
    />

    <!-- Content -->
    <div class="content w-full h-full overflow-auto">
      <component :is="app.component" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AppWindow } from '@/types';
import TitleBar from '@/components/TitleBar.vue';
import { useAppStore } from '@/composables/useAppState';
const { closeApp, focusApp } = useAppStore();
defineProps<{ app: AppWindow }>();

function handleDrag() {
  // empty
}
</script>
