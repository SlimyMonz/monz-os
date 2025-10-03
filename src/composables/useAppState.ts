import { ref } from 'vue';
import { AppList } from '@/apps/AppList';
import type { AppItem } from '@/types';
import { defineComponent } from 'vue';

const desktopApp: AppItem = {
  id: 0,
  zIndex: 0,
  label: "Desktop",
  component: defineComponent({})
}

const focusedApp = ref<AppItem>(desktopApp);
const runningApps = ref<AppItem[]>(AppList);

function normalizeZIndexes() {
  const activeApps = runningApps.value.filter((app): app is AppItem => app !== null);
  activeApps.sort((a, b) => a.zIndex - b.zIndex);
  activeApps.forEach((app, index) => {
    app.zIndex = index;
  });
}

function getMaxZIndex() {
  const activeApps = runningApps.value.filter((app): app is AppItem => app !== null);
  if (activeApps.length === 0) return 0;
  return Math.max(...activeApps.map(app => app.zIndex));
}

function openApp(app: AppItem) {
  focusApp(app);
  runningApps.value[app.id]!.visible = true;
}

function closeApp(app: AppItem) {
  normalizeZIndexes();
  runningApps.value[app.id]!.visible = false;
  
}

function focusApp(app: AppItem) {
  normalizeZIndexes();
  const maxZIndex = getMaxZIndex();
  runningApps.value[app.id]!.zIndex = maxZIndex + 1;
  focusedApp.value = runningApps.value[app.id]!;
}

function defocusApp() {
  focusedApp.value = desktopApp;
}


export function useAppState() {
  return {
    focusedApp,
    runningApps,
    openApp,
    closeApp,
    focusApp,
    defocusApp
  };
}
