<template>
  <v-app>
    <v-main>
      <Mobile v-if="isMobile" :apps="appList" />
      <Desktop v-else :apps="appList" />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { type Component } from 'vue';

import Mobile from './views/Mobile.vue';
import Desktop from './views/Desktop.vue';
import Settings from './components/Settings.vue';
import { displayIsMobile } from './composables/isMobile';

const isMobile = displayIsMobile();

type App = {
  name: string,
  icon: string,
  component: Component
}

const appList: App[] = [
  {
    name: "Settings",
    icon: "settings.icon",
    component: Settings
  }
]

</script>
