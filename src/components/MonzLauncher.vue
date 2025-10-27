<template>
    <div class="flex flex-col w-full h-screen bg-[url(@/assets/wallpaper/monz_skin.jpg)] bg-center bg-cover">
        <div class="flex flex-col p-8">
            <!-- Date/Time Widget -->
            <div class="flex flex-col items-center m-3 mb-10">
                <div class="text-white bg-black/50 backdrop-blur rounded-xl p-5 text-center">
                    <div class="text-5xl">
                        {{ currentTime.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' }) }}
                    </div>
                    <div class="text-xl">
                        {{ currentTime.toLocaleDateString(undefined, { month: 'long', year: 'numeric', day: 'numeric' })
                        }}
                    </div>
                </div>
            </div>
            <!-- List of Apps -->
            <div class="bg-black/10 backdrop-blur-xs rounded-2xl mx-15">
                <div v-for="(app, index) in AppList" :key="index" class="relative m-1 p-2"
                    @click="openAppFromItem(app)">
                    <div class="w-18 h-18 flex items-center">
                        <img :src="app.icon" alt="App icon" class="w-full h-full object-contain rounded-xl" />
                        <p class="m-3 p-2 text-xl text-white bg-black/50 backdrop-blur rounded-xl">{{ app.label }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { AppList } from '@/apps/AppList'
import { useCurrentTime } from '@/composables/getDateTime';
import { useAppStore } from '@/stores/appStateStore';

const { openAppFromItem } = useAppStore();
const { currentTime } = useCurrentTime();
</script>
