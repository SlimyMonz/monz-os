<template>
    <nav v-if="appMenu?.length" class="flex items-center space-x-3">

        <!-- Menu Bar Parent -->
        <div v-for="item in appMenu" :key="item.label" class="relative group">
            <span
                class="text-xs font-sans text-white cursor-pointer px-3 flex items-center rounded-xl hover:bg-white/50 transition select-none"
                @click="item.command?.()">
                {{ item.label }}
            </span>

            <!-- Menu Bar Children -->
            <div v-if="item.children?.length"
                class="absolute left-0 hidden group-hover:block bg-black/75 text-white hover:text-black-600 rounded-xl min-w-[150px]">
                <div v-for="child in item.children" :key="child.label"
                    class="px-3 py-1 m-1 hover:bg-white/70 hover:rounded-lg cursor-pointer whitespace-nowrap select-none hover:text-black"
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
