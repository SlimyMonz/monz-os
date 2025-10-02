import { AppList } from '@/apps/AppList';
import type { AppItem } from '@/types';
import { ref } from 'vue';

const focusedApp = ref<AppItem | null> (null);
const runningApps = ref<AppItem[]>(AppList);

export function useAppState() {

  function openApp(app: AppItem) {
    // Normalize first to keep consistent order
    normalizeZIndexes();

    // Then set the focused app to top zIndex (highest + 1)
    const maxZIndex = getMaxZIndex();
    runningApps.value[app.id]!.zIndex = maxZIndex + 1;

    // "Run" the app:
    runningApps.value[app.id]!.visible = true;
    focusedApp.value = app;
  }

  function closeApp(app: AppItem) {
    focusedApp.value = app;
    runningApps.value[app.id]!.visible = false;
    focusedApp.value = null;
    normalizeZIndexes();
  }

  // Set all active apps to their current zIndex order normalized from 0...N (bottom to top)
  function normalizeZIndexes() {
    // Get all active apps (non-null)
    const activeApps = runningApps.value
      .filter((app): app is AppItem => app !== null);

    // Sort ascending by zIndex (lowest on bottom)
    activeApps.sort((a, b) => a.zIndex - b.zIndex);

    // Reassign zIndexes starting at 0 for bottom, increasing
    activeApps.forEach((app, index) => {
      app.zIndex = index;
    });
  }

  // Get current max zIndex among running apps
  function getMaxZIndex() {
    const activeApps = runningApps.value.filter((app): app is AppItem => app !== null);
    if (activeApps.length === 0) return 0;
    return Math.max(...activeApps.map(app => app.zIndex));
  }
  
  return {
    focusedApp,
    runningApps,
    openApp,
    closeApp
  };
}
