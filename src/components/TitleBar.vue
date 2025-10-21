<template>
  <div class="title-bar flex items-center justify-between px-3 py-2 bg-black/50 backdrop-blur text-white cursor-move select-none relative">
    <!-- Left: empty spacer to balance -->
    <div class="w-[60px]"></div>

    <div class="absolute inset-0 flex justify-center items-center pointer-events-none">
      <span class="text-sm text-white font-medium truncate">{{ title }}</span>
    </div>

    <!-- macOS-like control buttons -->
    <div class="flex space-x-2 z-10">
      <button class="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600" @click="$emit('maximize')"></button>
      <button class="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500" @click="$emit('minimize')"></button>
      <button class="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600" @click="$emit('close')"></button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
