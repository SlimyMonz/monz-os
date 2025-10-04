<!-- Based off of code from: https://primevue.org/dock/ -->

<template>
  <div class="dock-advanced">
    <Dock :model="DockItems" position="left" style="margin: 1rem">
      <template #item="{ item }">
        <img v-tooltip.right="item.label" :src="item.icon" :alt="(item.label as string ?? 'app icon')"
          style="width: 64px"
          class="w-16 h-16 rounded-lg object-cover cursor-pointer transition-transform hover:scale-120"
          @click="onDockItemClick($event, item)" />
      </template>
    </Dock>
  </div>
</template>

<script setup lang="ts">
import Dock from 'primevue/dock';
import { DockItems } from '@/apps/AppList';
import { useAppState } from '@/composables/useAppState';
import type { MenuItem } from 'primevue/menuitem';

const { openApp } = useAppState();

const onDockItemClick = (event: PointerEvent, item: MenuItem) => {
  if (item.command) {
    item.command({ originalEvent: event, item });
  } else {
    openApp(item.app);
  }
  event.preventDefault();
};
</script>
