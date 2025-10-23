<template>
    <MobileApp v-if="appStore.focusedApp.label !== 'Desktop'" :app="appStore.focusedApp"/>
    <MonzLauncher v-else/>
</template>

<script setup lang="ts">
import { useAppStore } from '@/composables/useAppState';
import MobileApp from './MobileApp.vue';
import MonzLauncher from '@/components/MonzLauncher.vue';

const appStore = useAppStore();
</script>
