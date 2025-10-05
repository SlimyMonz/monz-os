<template>
  <div 
    class="title-bar flex justify-between items-center cursor-move select-none px-3 h-8 text-xs font-sans rounded-t border-b border-white/10"
    style="user-select: none;"
  >
    <span class="title truncate font-semibold cursor-default" :title="title">
      {{ title }}
    </span>
    <button
      class="close-btn w-5 h-5 flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 text-white text-sm leading-none"
      @click="$emit('close')"
      aria-label="Close"
      title="Close"
    >
      ×
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();

</script>
