<template>
    <div class="background-container">
    <header class="" style="user-select: none;">
        <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 tracking-wide select-none whitespace-nowrap"
            style="pointer-events: none;">
            {{ currentTime.toLocaleDateString(undefined, { month: 'long', year: 'numeric', day: 'numeric' }) }}
            &nbsp;
            {{ currentTime.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' }) }}
        </div>
    </header>
    <div
        class="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col items-center p-3 rounded-2xl bg-black/50 backdrop-blur shadow-md/50">
        <div v-for="(app, index) in AppList" :key="index" class="relative m-3 flex flex-col items-center group"
            @click="openAppFromItem(app)">
            <div
                class="w-14 h-14 flex items-center justify-center rounded-2xl transition-transform duration-200 group-hover:scale-120">
                <img :src="app.icon" alt="App icon" class="w-full h-full object-contain rounded-xl" />
            </div>
        </div>
    </div>
    </div>
</template>


<script setup lang="ts">
import { AppList } from '@/apps/AppList'
import { useCurrentTime } from '@/composables/getDateTime';
import { useAppStore } from '@/composables/useAppState';

const { openAppFromItem } = useAppStore();
const { currentTime } = useCurrentTime();
</script>
