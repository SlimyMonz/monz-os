<template>
  <draggable-resizable-vue
  v-model:x="app.position.x"
  v-model:y="app.position.y"
  v-model:w="app.size.width"
  v-model:h="app.size.height"
  :z="app.zIndex"
  :drag-handle="'.title-bar'"
  :parent="true"
  handles-type="borders"
  :active-on-hover="true"
  @mousedown="focusApp(app)"
>
  <!-- Use flex layout to keep TitleBar and content inside total height -->
  <div class="flex flex-col h-full w-full">
    <TitleBar
      class="title-bar"
      :title="app.label"
      @close="closeApp(app)"
    />
    <div class="flex-1 overflow-hidden">
      <component :is="app.component" />
    </div>
  </div>
</draggable-resizable-vue>

</template>


<script setup lang="ts">
import type { AppWindow } from '@/types';
import TitleBar from '@/components/TitleBar.vue';
import { useAppStore } from '@/composables/useAppState';
import DraggableResizableVue from 'draggable-resizable-vue3'

const { closeApp, focusApp } = useAppStore();
defineProps<{ app: AppWindow }>();

</script>


