<template>
    <v-system-bar>
        <div v-if=isMobile></div>
        <div v-else>
            <v-menu>
                <p>button</p>
            </v-menu>
        </div>
        <v-icon icon="mdi-wifi-strength-4"></v-icon>
        <v-icon icon="mdi-signal" class="ms-2"></v-icon>
        <v-icon icon="mdi-battery" class="ms-2"></v-icon>

        <span class="ms-2">3:13PM</span>
    </v-system-bar>
</template>

<script setup lang="ts">
import { displayIsMobile } from '@/composables/isMobile';

const isMobile = displayIsMobile();

</script>