<template>
    <nav v-if="appMenu?.length" class="flex ml-3 space-x-3">
        <!-- Menu Bar Parent -->
        <div v-for="item in appMenu" :key="item.label" class="relative group">
            <span
                class="text-xs font-sans text-white cursor-pointer px-3 py-1 rounded-lg hover:bg-white/20 transition select-none"
                @click="item.command?.()">
                {{ item.label }}
            </span>
            <!-- Menu Bar Children -->
            <div v-if="item.children?.length"
                class="absolute left-0 mt-0.75 hidden group-hover:block bg-white/75 text-gray-900 rounded-xl shadow-lg min-w-[150px] border border-gray-300">
                <div v-for="child in item.children" :key="child.label"
                    class="px-3 py-1 m-1 hover:bg-white hover:rounded-lg cursor-pointer whitespace-nowrap select-none"
                    @click.stop="child.command?.()">
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
