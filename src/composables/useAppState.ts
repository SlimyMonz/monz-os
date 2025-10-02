import type { AppItem } from '@/types';
import { ref } from 'vue';


const focusedApp = ref<AppItem | null>(null);

const runningApps = ref<AppItem[]>([]);

export function useAppState() {

  function openApp(app: AppItem) {
    console.log(app.label + " opened");
    focusedApp.value = app;
    if (!runningApps.value.some(a => a.name === app.name)) {
      runningApps.value.push(app);
    }
  }

  function minimizeApp(app: AppItem) {
    focusedApp.value = app;
    focusedApp.value = null;
  }

  function closeApp(app: AppItem) {
    focusedApp.value = app;
    runningApps.value.pop();
    focusedApp.value = null;
  }

  function isAppFocused(app: AppItem) {
    if (focusedApp.value != null)
    {
      if (focusedApp.value.name == app.name) return true;
    }
    return false;
  }

  function isAppOpen(app: AppItem) {
    
  }

  return {
    focusedApp,
    runningApps,
    openApp,
    closeApp,
    isAppFocused
  };
}
