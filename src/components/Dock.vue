<template>

        <p>Dock</p>
        <v-container>
                <v-col>
                        <v-row v-for="app in AppList">
                                <v-icon :icon="app.icon"></v-icon>
                        </v-row>/>
                </v-col>
                
        </v-container>>

</template>

<script setup lang="ts">
import { AppList } from '@/apps/AppList';


</script>

<style>

</style>