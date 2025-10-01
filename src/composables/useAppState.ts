import type { MenuItem } from 'primevue/menuitem';
import { ref } from 'vue';


const focusedApp = ref<MenuItem | null>(null);

const runningApps = ref<MenuItem[]>([]);

export function useAppState() {

  function openApp(app: MenuItem) {
    console.log(app.label + " opened");
    focusedApp.value = app;
    runningApps.value.push(app);
  }

  function minimizeApp(app: MenuItem) {
    focusedApp.value = null;
  }

  function closeApp(app: MenuItem) {
    runningApps.value.pop();
    focusedApp.value = null;
  }

  function isAppFocused(app: MenuItem) {
    if (focusedApp.value != null)
    {
      if (focusedApp.value.name == app.name) return true;
    }
    return false;
  }

  function isAppOpen(app: MenuItem) {
    
  }

  return {
    focusedApp,
    openApp,
    closeApp,
    isAppFocused
  };
}
