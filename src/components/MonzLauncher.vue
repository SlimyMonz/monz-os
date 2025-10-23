<template>
    <div class="background-container">
        <div class="flex flex-col p-8">
            <div class="flex flex-col p-5 text-center m-3 mx-25 p-2 text-white bg-black/50 backdrop-blur rounded-xl">
                <div class="text-5xl">
                    {{ currentTime.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' }) }}
                </div>
                <div class="text-xl">
                    {{ currentTime.toLocaleDateString(undefined, { month: 'long', year: 'numeric', day: 'numeric' }) }}
                </div>
            </div>
            <div v-for="(app, index) in AppList" :key="index" class="relative m-1 ml-10 p-2 "
                @click="openAppFromItem(app)">
                <div class="w-18 h-18 flex items-center ">
                    <img :src="app.icon" alt="App icon" class="w-full h-full object-contain rounded-xl" />
                    <p class="m-3 p-2 text-xl text-white bg-black/50 backdrop-blur rounded-xl">{{ app.label }}</p>
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
