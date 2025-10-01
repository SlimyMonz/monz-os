<template>
  <v-app>
    <v-main>
      <Mobile v-if="isMobile"/>
      <Desktop v-else/>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Mobile from './views/Mobile.vue';
import Desktop from './views/Desktop.vue';

import { displayIsMobile } from './composables/isMobile';

const isMobile = displayIsMobile();




</script>
