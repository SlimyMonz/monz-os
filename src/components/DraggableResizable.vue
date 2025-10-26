<!-- More online code that I barely understand, but at least it works. -->

<template>
  <div
    class="absolute select-none"
    :style="wrapperStyle"
    ref="wrapper"
    @mousedown="onMouseDown"
    @touchstart="onMouseDown"
  >
    <!-- Resize handles -->
    <template v-if="resizable">
      <div
        v-for="handle in handles"
        :key="handle"
        :class="['resize-handle', handle]"
        @mousedown.stop.prevent="startResize(handle, $event)"
        @touchstart.stop.prevent="startResize(handle, $event)"
      ></div>
    </template>

    <!-- Main window slot -->
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

import type { CSSProperties } from 'vue';

const props = defineProps({
  x: { type: Number, required: true },
  y: { type: Number, required: true },
  w: { type: Number, required: true },
  h: { type: Number, required: true },
  z: { type: Number, required: true },
  minWidth: { type: Number, default: 320 },
  minHeight: { type: Number, default: 200 },
  draggable: { type: Boolean, default: true },
  resizable: { type: Boolean, default: true },
  parent: { type: Boolean, default: false },
});

const emits = defineEmits(['update:x', 'update:y', 'update:w', 'update:h']);

const wrapper = ref<HTMLElement | null>(null);
const dragging = ref(false);
const resizing = ref(false);
const resizeDir = ref('');
const startX = ref(0);
const startY = ref(0);
const startW = ref(0);
const startH = ref(0);
const startLeft = ref(0);
const startTop = ref(0);
const parentRect = ref<DOMRect | null>(null);

const handles = [
  'top', 'right', 'bottom', 'left',
  'top-left', 'top-right', 'bottom-left', 'bottom-right'
];

const wrapperStyle = computed<CSSProperties>(() => ({
  left: `${props.x}px`,
  top: `${props.y}px`,
  width: `${props.w}px`,
  height: `${props.h}px`,
  position: 'absolute',
  zIndex: props.z,
}));

function getClientXY(e: MouseEvent | TouchEvent) {
  if ('touches' in e) {
    const touch = e.touches?.[0];
    if (touch) {
      return { x: touch.clientX, y: touch.clientY };
    }
    return { x: 0, y: 0 };
  } else {
    return { x: e.clientX, y: e.clientY };
  }
}

function updateBounds() {
  if (props.parent) {
    parentRect.value = new DOMRect(
      0,
      0,
      window.innerWidth,
      window.innerHeight
    );
  }
}


function onMouseDown(e: MouseEvent | TouchEvent) {
  if (!props.draggable || resizing.value) return;

  dragging.value = true;
  document.body.style.userSelect = 'none';
  const { x: clientX, y: clientY } = getClientXY(e);

  startX.value = clientX;
  startY.value = clientY;
  startLeft.value = props.x;
  startTop.value = props.y;

  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);
  window.addEventListener('touchmove', onMouseMove);
  window.addEventListener('touchend', onMouseUp);
}

function onMouseMove(e: MouseEvent | TouchEvent) {
  const { x: clientX, y: clientY } = getClientXY(e);

  if (dragging.value) {
    const dx = clientX - startX.value;
    const dy = clientY - startY.value;

    let newX = startLeft.value + dx;
    let newY = startTop.value + dy;

    // Constrain to parent
    if (parentRect.value) {
      newX = Math.max(0, Math.min(newX, parentRect.value.width - props.w));
      newY = Math.max(0, Math.min(newY, parentRect.value.height - props.h));
    }

    emits('update:x', newX);
    emits('update:y', newY);
  }

  if (resizing.value) {
    const dx = clientX - startX.value;
    const dy = clientY - startY.value;
    let newW = startW.value;
    let newH = startH.value;
    let newX = props.x;
    let newY = props.y;

    if (resizeDir.value.includes('right')) newW = Math.max(props.minWidth, startW.value + dx);
    if (resizeDir.value.includes('bottom')) newH = Math.max(props.minHeight, startH.value + dy);
    if (resizeDir.value.includes('left')) {
      newW = Math.max(props.minWidth, startW.value - dx);
      newX = startLeft.value + dx;
    }
    if (resizeDir.value.includes('top')) {
      newH = Math.max(props.minHeight, startH.value - dy);
      newY = startTop.value + dy;
    }

    if (parentRect.value) {
      newW = Math.min(newW, parentRect.value.width - newX);
      newH = Math.min(newH, parentRect.value.height - newY);
    }

    emits('update:x', newX);
    emits('update:y', newY);
    emits('update:w', newW);
    emits('update:h', newH);
  }
}

function onMouseUp() {
  dragging.value = false;
  resizing.value = false;

  document.body.style.userSelect = '';

  window.removeEventListener('mousemove', onMouseMove);
  window.removeEventListener('mouseup', onMouseUp);
  window.removeEventListener('touchmove', onMouseMove);
  window.removeEventListener('touchend', onMouseUp);
}

function startResize(dir: string, e: MouseEvent | TouchEvent) {
  resizing.value = true;
  resizeDir.value = dir;
  const { x: clientX, y: clientY } = getClientXY(e);

  startX.value = clientX;
  startY.value = clientY;
  startW.value = props.w;
  startH.value = props.h;
  startLeft.value = props.x;
  startTop.value = props.y;

  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);
  window.addEventListener('touchmove', onMouseMove);
  window.addEventListener('touchend', onMouseUp);
}

onMounted(() => {
  updateBounds();
  window.addEventListener('resize', updateBounds);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateBounds);
  onMouseUp();
});

</script>

<!-- I hate CSS, but this is for the handles to work. -->
<style scoped>
.resize-handle {
  position: absolute;
  z-index: 2;
}
.top, .bottom {
  height: 6px; left: 0; right: 0; cursor: ns-resize;
}
.left, .right {
  width: 6px; top: 0; bottom: 0; cursor: ew-resize;
}
.top { top: -3px; }
.bottom { bottom: -3px; }
.left { left: -3px; }
.right { right: -3px; }

.top-left, .top-right, .bottom-left, .bottom-right {
  width: 10px; height: 10px;
}
.top-left { top: -5px; left: -5px; cursor: nwse-resize; }
.top-right { top: -5px; right: -5px; cursor: nesw-resize; }
.bottom-left { bottom: -5px; left: -5px; cursor: nesw-resize; }
.bottom-right { bottom: -5px; right: -5px; cursor: nwse-resize; }
</style>
