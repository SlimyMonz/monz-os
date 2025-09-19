<template>
  <v-app>
    <v-main>
      <p v-if="isMobile">Mobile</p>
      <p v-else>Desktop</p>
      <Mobile v-if="isMobile" :apps="appList" />
      <Desktop v-else :apps="appList" />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { type Component } from 'vue';

import { AppList } from './apps/AppList'
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
    component: AppList.Settings
  }
]

</script>
