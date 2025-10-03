<!-- Based off of code from: https://primevue.org/dock/ -->

<template>
    <Menubar :model="menubarItems">
        <template #start>
            <i class="pi pi-apple px-2"></i>
            <span class="app-label px-2">{{ focusedApp.label }}</span>
        </template>
        <template #end>
            <i class="pi pi-video px-2"></i>
            <i class="pi pi-wifi px-2"></i>
            <i class="pi pi-volume-up px-2"></i>
            <span>{{ currentTime.toLocaleDateString() }} {{ currentTime.toLocaleTimeString() }}</span>
            <i class="pi pi-search px-2"></i>
            <i class="pi pi-bars px-2"></i>
        </template>
    </Menubar>
</template>

<script setup lang="ts">
import { Menubar } from 'primevue';

import { useAppState } from '@/composables/useAppState';
const { focusedApp } = useAppState();

import { useCurrentTime } from '@/composables/getDateTime';
const { currentTime } = useCurrentTime();


const menubarItems = [
    {
        label: 'File',
        items: [
            {
                label: 'New',
                icon: 'pi pi-fw pi-plus',
                items: [
                    { label: 'Bookmark', icon: 'pi pi-fw pi-bookmark' },
                    { label: 'Video', icon: 'pi pi-fw pi-video' },
                ]
            },
            { label: 'Delete', icon: 'pi pi-fw pi-trash' },
            { separator: true },
            { label: 'Export', icon: 'pi pi-fw pi-external-link' }
        ]
    },
    {
        label: 'Edit',
        items: [
            { label: 'Left', icon: 'pi pi-fw pi-align-left' },
            { label: 'Right', icon: 'pi pi-fw pi-align-right' },
            { label: 'Center', icon: 'pi pi-fw pi-align-center' },
            { label: 'Justify', icon: 'pi pi-fw pi-align-justify' }
        ]
    },

    {
        label: 'Quit'
    }
];

</script>

<style scoped></style>
