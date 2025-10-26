<template>
  <div class="flex items-center h-full w-full title-bar text-white cursor-move select-none" :class="maximizedStyle">

    <div class="flex-1 flex-none">
      <div v-if="maximized && menu">
        <AppMenu :appMenu="menu"></AppMenu>
      </div>
      <div v-else>
        <div class="w-[60px]"></div>
      </div>
    </div>

    <div class="flex flex-1 justify-center pointer-events-none">
      <span class="text-sm text-white font-medium truncate">{{ title }}</span>
    </div>

    <!-- macOS-like control buttons -->
    <div class="flex-1 flex-none mx-1 group cursor-pointer">
      <button class="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 mx-1 cursor-pointer" @click="$emit('maximize')"></button>
      <button class="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 mx-1 cursor-pointer" @click="$emit('minimize')"></button>
      <button class="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 mx-1 cursor-pointer" @click="$emit('close')"></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MenuItem } from '@/types';
import AppMenu from './AppMenu.vue';
import { computed } from 'vue';

const maximizedStyle = computed(() => {
  return props.maximized ? 'bg-black' : 'bg-black/70';
});

const props = defineProps<{
  title: string,
  maximized: boolean,
  menu?: MenuItem[]
}>()
</script>
