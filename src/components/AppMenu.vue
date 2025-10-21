<template>
  <nav v-if="appMenu?.length" class="flex ml-3 space-x-3">
    <div v-for="item in appMenu" :key="item.label" class="relative group">
      <span
        class="text-xs font-sans text-white cursor-pointer px-3 py-1 rounded hover:bg-white/20 transition select-none"
        @click="item.command?.()">
        {{ item.label }}
      </span>

      <div
        v-if="item.children?.length"
        class="absolute left-0 mt-1 hidden group-hover:block bg-white text-gray-900 rounded shadow-lg min-w-[150px] py-1 border border-gray-300"
      >
        <div
          v-for="child in item.children"
          :key="child.label"
          class="px-3 py-1 hover:bg-gray-300 cursor-pointer whitespace-nowrap select-none"
          @click.stop="child.command?.()"
        >
          {{ child.label }}
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import type { MenuItem } from '@/types';

defineProps<{
  appMenu?: MenuItem[];
}>();
</script>
