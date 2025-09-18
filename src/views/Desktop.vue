<template>
  <div class="desktop-apps">
    <component
      v-for="app in openedApps"
      :key="app.name"
      :is="app.component"
    />
  </div>
</template>

<script setup lang="ts">
import { useAppState } from '@/composables/useAppState';
const { openedApps } = useAppState();
</script>
