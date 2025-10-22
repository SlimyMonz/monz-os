<template>

      <Mobile v-if="isMobile"/>
      <Desktop v-else/>

</template>

<script setup lang="ts">
import Mobile from './views/Mobile.vue';
import Desktop from './views/Desktop.vue';

import { displayIsMobile } from './composables/isMobile';
import { onMounted } from 'vue';
import { useSettings } from './composables/useSettings';

const isMobile = displayIsMobile();
const { loadSettings } = useSettings;

onMounted(() => {
  loadSettings();
});

</script>
