import { ref } from 'vue';
import type { Component } from 'vue';

type App = {
  name: string;
  icon: string;
  component: Component;
};

const openedApps = ref<App[]>([]);
const focusedApp = ref<App | null>(null);

export function useAppState() {
  function openApp(app: App) {
    // If already open, just focus it
    const alreadyOpen = openedApps.value.find(a => a.name === app.name);
    if (!alreadyOpen) {
      openedApps.value.push(app);
    }
    focusedApp.value = app;
  }

  function closeApp(appName: string) {
    openedApps.value = openedApps.value.filter(app => app.name !== appName);
    if (focusedApp.value?.name === appName) {
      focusedApp.value = openedApps.value.at(-1) || null; // focus last opened app
    }
  }

  function setFocus(appName: string) {
    const app = openedApps.value.find(a => a.name === appName);
    if (app) focusedApp.value = app;
  }

  function isAppOpen(appName: string) {
    return openedApps.value.some(app => app.name === appName);
  }

  return {
    openedApps,
    focusedApp,
    openApp,
    closeApp,
    setFocus,
    isAppOpen
  };
}
