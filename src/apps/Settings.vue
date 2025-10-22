<template>
  <div>
    <label for="username">Username: </label>
    <input id="username" v-model="settings.username" />
  </div>
</template>

<script setup lang="ts">
import { useSettings } from '@/composables/useSettings'

const { settings } = useSettings;
</script>
