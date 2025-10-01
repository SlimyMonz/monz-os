<!-- Based off of code from: https://primevue.org/dock/ -->

<template>
            <Menubar :model="menubarItems">
                <template #start>
                    <i class="pi pi-apple px-2"></i>
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
import { ref } from 'vue';

import { useAppState } from '@/composables/useAppState';
const { focusedApp } = useAppState();

import { useCurrentTime } from '@/composables/getDateTime';
const { currentTime } = useCurrentTime();

const menubarItems = ref([
    {
        label: focusedApp.value?.name || "Menu",
        class: 'menubar-root'
    },
    {
        label: 'File',
        items: [
            {
                label: 'New',
                icon: 'pi pi-fw pi-plus',
                items: [
                    {
                        label: 'Bookmark',
                        icon: 'pi pi-fw pi-bookmark'
                    },
                    {
                        label: 'Video',
                        icon: 'pi pi-fw pi-video'
                    },

                ]
            },
            {
                label: 'Delete',
                icon: 'pi pi-fw pi-trash'
            },
            {
                separator: true
            },
            {
                label: 'Export',
                icon: 'pi pi-fw pi-external-link'
            }
        ]
    },
    {
        label: 'Edit',
        items: [
            {
                label: 'Left',
                icon: 'pi pi-fw pi-align-left'
            },
            {
                label: 'Right',
                icon: 'pi pi-fw pi-align-right'
            },
            {
                label: 'Center',
                icon: 'pi pi-fw pi-align-center'
            },
            {
                label: 'Justify',
                icon: 'pi pi-fw pi-align-justify'
            },

        ]
    },
    {
        label: 'Users',
        items: [
            {
                label: 'New',
                icon: 'pi pi-fw pi-user-plus',
            },
            {
                label: 'Delete',
                icon: 'pi pi-fw pi-user-minus',

            },
            {
                label: 'Search',
                icon: 'pi pi-fw pi-users',
                items: [
                    {
                        label: 'Filter',
                        icon: 'pi pi-fw pi-filter',
                        items: [
                            {
                                label: 'Print',
                                icon: 'pi pi-fw pi-print'
                            }
                        ]
                    },
                    {
                        icon: 'pi pi-fw pi-bars',
                        label: 'List'
                    }
                ]
            }
        ]
    },
    {
        label: 'Events',
        items: [
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Save',
                        icon: 'pi pi-fw pi-calendar-plus'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-calendar-minus'
                    }
                ]
            },
            {
                label: 'Archive',
                icon: 'pi pi-fw pi-calendar-times',
                items: [
                    {
                        label: 'Remove',
                        icon: 'pi pi-fw pi-calendar-minus'
                    }
                ]
            }
        ]
    },
    {
        label: 'Quit'
    }
]);
</script>

<style scoped>

</style>
