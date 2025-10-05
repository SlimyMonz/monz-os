import { defineComponent, ref } from 'vue';
import type { AppItem, AppWindow } from '@/types';

// Desktop is just a placeholder so that I don't have to set focusedApp to null.
const desktopApp: AppWindow = {
  id: 'desktop',
  label: 'Desktop',
  component: defineComponent({}),
  active: true,
  minimized: false,
  maximized: false,
  zIndex: 0,
  position: { x: 0, y: 0 },
  size: { width: 0, height: 0 }
};

// Running app windows and focus.
const runningApps = ref<AppWindow[]>([]);
const focusedApp = ref<AppWindow>(desktopApp);

function getMaxZIndex(): number {
  return Math.max(0, ...runningApps.value.map(app => app.zIndex));
}

function normalizeZIndexes() {
  const activeApps = runningApps.value.filter(app => app.active && !app.minimized);
  activeApps.sort((a, b) => a.zIndex - b.zIndex);
  activeApps.forEach((app, index) => {
    app.zIndex = index + 1;
  });
}

function focusApp(app: AppWindow) {
  normalizeZIndexes();
  app.zIndex = getMaxZIndex() + 1;
  focusedApp.value = app;
}

function defocusApp() {
  focusedApp.value = desktopApp;
}

function openAppFromItem(item: AppItem) {

  if (item.command) {
    item.command();
    return; // Don't open a new AppWindow if there's a custom command.
  }

  // Try to find existing window by label
  const existing = runningApps.value.find(w => w.label === item.label);

  if (existing) {
    existing.active = true;
    existing.minimized = false;
    focusApp(existing);
    return; // Only one AppWindow per app.
  }

  // Create new window instance
  const newApp: AppWindow = {
    id: item.label.toLowerCase(), 
    label: item.label,
    component: item.component,
    active: true,
    minimized: false,
    maximized: false,
    zIndex: getMaxZIndex() + 1,
    position: { x: 100, y: 100 },
    size: { width: 640, height: 480 },
  };

  runningApps.value.push(newApp);
  focusApp(newApp);
}

function closeApp(app: AppWindow) {
  app.active = false;
  defocusApp();
}

function minimizeApp(app: AppWindow) {
  app.minimized = true;
  defocusApp();
}

function restoreApp(app: AppWindow) {
  app.minimized = false;
  app.active = true;
  focusApp(app);
}

function toggleMaximizeApp(app: AppWindow) {
  app.maximized = !app.maximized;
}

function isAppOpen(app: AppItem): boolean {
  const id = app.label.toLowerCase();
  return runningApps.value.some(runningApp => runningApp.id === id);
}


export function useAppState() {
  return {
    runningApps,
    focusedApp,
    openAppFromItem,
    closeApp,
    minimizeApp,
    restoreApp,
    toggleMaximizeApp,
    focusApp,
    defocusApp,
    isAppOpen
  };
}
