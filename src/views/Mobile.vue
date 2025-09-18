<template>
  <div class="desktop-apps">
    <component v-if="focusedApp" :is="focusedApp.component" />
    <div v-else>
        
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppState } from '@/composables/useAppState';
const { focusedApp } = useAppState();
</script>