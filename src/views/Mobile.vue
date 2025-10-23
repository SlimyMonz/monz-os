<template>
    <MobileApp v-if="focusedApp.label !== 'Desktop'" :app="focusedApp"/>
    <MonzLauncher v-else/>
</template>

<script setup lang="ts">
import { useAppStore } from '@/composables/useAppState';
import { storeToRefs } from 'pinia';
import MobileApp from './MobileApp.vue';
import MonzLauncher from '@/components/MonzLauncher.vue';

const appStore = useAppStore();
const { focusedApp } = storeToRefs(appStore);
</script>
