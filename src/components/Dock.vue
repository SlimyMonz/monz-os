<template>
  <div class="dock-inner">
    <div
      v-for="(app, index) in AppList"
      :key="index"
      class="appicon-wrapper"
      @click="openApp(app.component)"
    >
      <div class="appicon">
        <img :src="app.icon" alt="App icon" class="appicon-img" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AppList } from '@/apps/AppList'
import type { Component } from 'vue';

function openApp(app: Component) {
  // Connect this to app state
}
</script>

<style scoped>
.dock-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.75rem;
  border-radius: 1rem;
  margin-left: 0.5rem;
}

.appicon-wrapper {
  margin: 0.75rem;
  cursor: pointer;
  transition: transform 0.2s ease;

}

.appicon-wrapper:hover {
  transform: scale(1.2);
}

.appicon {
  width: 64px;
  height: 64px;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.4);
  transition: background 0.3s;
  border-radius: 1rem;
}

.appicon-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  padding: 0.25rem;
}

.appicon:hover {
  background: rgba(255, 255, 255, 0.25);
}


</style>
