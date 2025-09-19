<template>
  <MenuBar/>

    <DesktopApp
      v-for="app in openedApps"
      :key="app.name"
      :icon="app.icon"
      :is="app.component"
    />

  <Dock/>
</template>

<script setup lang="ts">
import { useAppState } from '@/composables/useAppState';

const { openedApps } = useAppState();
</script>
