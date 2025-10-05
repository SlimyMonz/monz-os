<template>
  <div class="background-container" @click.self="defocusApp()">
    <MenuBar></MenuBar>
    <MonzDock></MonzDock>

      <Dialog v-for="app in runningApps" 
          :key="app.id" 
          :header="app.label"
          :visible="app.active" 
          :maximizable="true"
          :closeOnEscape="false"
          :dismissableMask="false"
          @update:visible="closeApp(app)"
          @click="focusApp(app)"
          :style="{showNavigators: false}"
          >
        <component :is="app.component" />
      </Dialog>


  </div>
</template>

<!--
<template>
  <div>
    <component
      v-for="win in windows"
      :key="win.id"
      :is="win.component"
      v-if="win.active"
      v-show="win.visible"
      v-bind="win.props"
      class="app-window"
      :style="{
        position: 'absolute',
        top: win.position.y + 'px',
        left: win.position.x + 'px',
        width: win.size.width + 'px',
        height: win.size.height + 'px',
        zIndex: win.zIndex,
      }"
    />
  </div>
</template>
-->

<script setup lang="ts">
import MenuBar from '@/components/MenuBar.vue';
import MonzDock from '@/components/MonzDock.vue';

import { Dialog } from 'primevue';

import { useAppState } from '@/composables/useAppState';

const { runningApps, closeApp, focusApp, defocusApp } = useAppState();

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