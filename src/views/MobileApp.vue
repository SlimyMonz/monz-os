<template>
    <div class="flex flex-col h-full w-full">
        <!-- App Header -->
        <header
            class="cursor-move select-none bg-black text-white flex justify-between px-3 py-2 relative">
            <AppMenu :appMenu="appStore.focusedApp.menu" />
            <button class="w-8 h-8 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center"
                @click="defocusApp()">
                X
            </button>
        </header>

        <!-- Main Content -->
        <main class=" bg-white/50 overflow-auto">
            <component :is="appStore.focusedApp.component" />
        </main>
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/composables/useAppState'
import AppMenu from '@/components/AppMenu.vue'

const appStore = useAppStore();
const { defocusApp } = useAppStore();
</script>
