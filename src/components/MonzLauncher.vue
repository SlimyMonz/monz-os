<template>
  <div class="flex flex-col w-full h-lvh overflow-hidden bg-[url(@/assets/wallpaper/monz_skin.jpg)] bg-center bg-cover">
    <div class="flex flex-col p-5 h-full">
      <!-- Date/Time Widget -->
      <div class="flex flex-col items-center m-3 my-10">
        <div class="text-white bg-black/50 backdrop-blur rounded-xl p-5 text-center">
          <div class="text-7xl">
            {{ currentTime.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' }) }}
          </div>
          <div class="text-3xl">
            {{ currentTime.toLocaleDateString(undefined, { month: 'long', year: 'numeric', day: 'numeric' }) }}
          </div>
        </div>
      </div>

      <!-- List of Apps -->
      <div class="bg-black/25 backdrop-blur-xs rounded-3xl flex-1 overflow-hidden m-5">
        <!-- Scrollable app list -->
        <div class="overflow-auto h-full no-scrollbar">
          <div
            v-for="(app, index) in AppList"
            :key="index"
            class="relative p-5 m-5 bg-black/25 backdrop-blur rounded-2xl cursor-pointer"
            @click="openAppFromItem(app)"
          >
            <div class="w-18 h-18 flex items-center">
              <img :src="app.icon" alt="App icon" class="w-full h-full rounded-xl" />
              <p class="m-5 p-2 text-3xl text-white rounded-xl">{{ app.label }}</p>
            </div>
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

<style lang="css" scoped>

.no-scrollbar::-webkit-scrollbar {
  display: none;
}

</style>