<template>

    <MobileApp v-if="focusedApp" :is="focusedApp.component" />
    <div v-else>
        
    </div>

</template>

<script setup lang="ts">
import { useAppState } from '@/composables/useAppState';
const { focusedApp } = useAppState();


</script>