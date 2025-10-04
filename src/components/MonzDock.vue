<!-- Based off of code from: https://primevue.org/dock/ -->

<template>
  <div class="dock-advanced">
    <Dock :model="DockItems" position="left" style="margin: 1rem">
      <template #item="{ item }">
        <img 
          v-tooltip.right="item.label" 
          :src="item.icon" 
          :alt="(item.label as string ?? 'app icon')" 
          style="width: 64px" 
          class="w-16 h-16 rounded-lg object-cover cursor-pointer transition-transform hover:scale-120" 
          @click="openApp(item.app)" />
      </template>
    </Dock>
  </div>
</template>

<script setup lang="ts">
import Dock from 'primevue/dock';
import { DockItems } from '@/apps/AppList';
import { useAppState } from '@/composables/useAppState';

const { openApp } = useAppState();
</script>

