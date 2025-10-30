<template>
    <div class="fixed inset-0 overflow-hidden overscroll-none">
    <MobileApp v-if="appStore.focusedApp.label !== 'Desktop'" :app="appStore.focusedApp"/>
    <MonzLauncher v-else/>
    </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/appStateStore';
import MobileApp from './MobileApp.vue';
import MonzLauncher from '@/components/MonzLauncher.vue';

const appStore = useAppStore();
</script>
