<!-- Based off of code from: https://primevue.org/dock/ -->

<template>
    <div class="dock-window dock-advanced">
    <Dock :model="AppList" position="left">
        <template #item="{ item: app }">
            <a v-tooltip.right="app.label" @click="openApp(app)" href="#" class="p-dock-item-link">
                <img :src="app.icon" style="width: 100%" />
            </a>
        </template>
    </Dock>
    </div>
</template>

<script setup lang="ts">

import Dock from 'primevue/dock';
import { useAppState } from '@/composables/useAppState';
import { AppList } from '@/apps/AppList';

const { openApp } = useAppState();

</script>
