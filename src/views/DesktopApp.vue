<template>
  <draggable-resizable-vue
    v-model:x="computedX"
    v-model:y="computedY"
    v-model:w="computedWidth"
    v-model:h="computedHeight"
    :min-width="320"
    :min-height="200"
    :z="computedZ"
    :drag-handle="'.title-bar'"
    :parent="true"
    handles-type="borders"
    :active-on-hover="true"
    class="!border-none !outline-none rounded-md overflow-hidden shadow-xl/50"
    @mousedown="focusApp(app)"
  >
    <div class="flex flex-col h-full w-full">

      <div class="cursor-move select-none">
        <TitleBar
          :title="app.label"
          @close="closeApp(app)"
          @minimize="minimizeApp(app)"
          @maximize="toggleMaximizeApp(app)"
        />
      </div>

      <!-- Scrollable content -->
      <div class="flex-1 overflow-auto bg-white/50 pr-0.75">
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

const { closeApp, focusApp, toggleMaximizeApp, minimizeApp } = useAppStore();
const props = defineProps<{ app: AppWindow }>();

import { useWindowSize } from '@/composables/windowState';
import { computed } from 'vue';

const { windowSize } = useWindowSize();

const computedX = computed({
  get() {
    // When maximized, position is always 0 on X axis (top-left)
    return props.app.maximized ? 0 : props.app.position.x;
  },
  set(val) {
    if (!props.app.maximized) props.app.position.x = val;
  }
});

const computedY = computed({
  get() {
    // When maximized, position is always 0 on Y axis (top-left)
    return props.app.maximized ? 0 : props.app.position.y;
  },
  set(val) {
    if (!props.app.maximized) props.app.position.y = val;
  }
});

const computedWidth = computed({
  get() {
    // Use full window width when maximized, else stored width
    return props.app.maximized ? windowSize.value.width : props.app.size.width;
  },
  set(val) {
    if (!props.app.maximized) props.app.size.width = val;
  }
});

const computedHeight = computed({
  get() {
    // Use full window height when maximized, else stored height
    return props.app.maximized ? windowSize.value.height : props.app.size.height;
  },
  set(val) {
    if (!props.app.maximized) props.app.size.height = val;
  }
});

const computedZ = computed(() => {
  return props.app.zIndex;
});

</script>