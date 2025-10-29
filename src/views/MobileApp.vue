<template>
    <div class="flex flex-col w-full h-screen overflow-hidden">
        <!-- App Top Bar (Fixed / Stationary) -->
        <div
            class="flex cursor-move select-none bg-black text-white justify-between items-center px-3 h-12">
            <AppMenu :appMenu="appStore.focusedApp.menu" />
            <button class="w-8 h-8 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center"
                @click="defocusApp()">
                X
            </button>
        </div>

        <!-- Main App Content (Scrollable) -->
        <div class="flex-1 bg-white/50 overflow-auto">
            <component :is="appStore.focusedApp.component" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/appStateStore'
import AppMenu from '@/components/AppMenu.vue'

const appStore = useAppStore();
const { defocusApp } = useAppStore();
</script>
