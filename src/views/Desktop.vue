<template>
  <div class="background-container">
    <MenuBar></MenuBar>
    <MonzDock></MonzDock>

      <Dialog v-for="app in runningApps" 
          :key="(app.label as string)" 
          :visible="(app.visible as boolean)" 
          :header="(app.label as string)"
          :style="{ width: '50vw' }"
          :closeOnEscape="false"
          :dismissableMask="false"
          @update:visible="closeApp(app)">
        <component :is="app.component" />
      </Dialog>

  </div>
</template>

<script setup lang="ts">
import MenuBar from '@/components/MenuBar.vue';
import MonzDock from '@/components/MonzDock.vue';

import { Dialog } from 'primevue';

import { useAppState } from '@/composables/useAppState';

const { runningApps, closeApp } = useAppState();

</script>

<style lang="css" scoped>
.background-container {
  background-image: url('@/assets/wallpaper/monz_skin.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}
</style>