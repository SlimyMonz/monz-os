import { ref } from 'vue';
import type { Component } from 'vue';

type App = {
  name: string;
  icon: string;
  component: Component;
};

const focusedApp = ref<App | null>(null);

export function useAppState() {

  function openApp(app: App) {
    focusedApp.value = app;
  }

  function closeApp() {
    focusedApp.value = null;
  }

  function isAppOpen(appName: string) {
    if (focusedApp.value != null)
    {
      if (focusedApp.value.name == appName) return true;
    }
    return false;
  }

  return {
    focusedApp,
    openApp,
    closeApp,
    isAppOpen
  };
}
