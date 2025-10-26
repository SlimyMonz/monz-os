import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { AppItem, AppWindow } from '@/types';
import { defineComponent } from 'vue';

const desktopApp: AppWindow = {
  id: 'desktop',
  label: 'Desktop',
  component: defineComponent({}),
  active: true,
  minimized: false,
  maximized: false,
  zIndex: 0,
  prevZ: 0,
  position: { x: 0, y: 0 },
  size: { width: 0, height: 0 },
  prevPosition: { x: 0, y: 0 },
  prevSize: { width: 0, height: 0 },
  menu: [{ label: 'Desktop' }]
};

export const useAppStore = defineStore('appStore', () => {
  const runningApps = ref<AppWindow[]>([]);
  const focusedApp = ref<AppWindow>(desktopApp);

  const activeApps = computed(() =>
    runningApps.value.filter(app => app.active && !app.minimized)
  );

  function getMaxZIndex() {
    return activeApps.value.length > 0
      ? Math.max(...activeApps.value.map(app => app.zIndex))
      : 0;
  }

  function normalizeZIndexes() {
    activeApps.value
      .sort((a, b) => a.zIndex - b.zIndex)
      .forEach((app, index) => {
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
      return;
    }

    const existing = runningApps.value.find(w => w.label === item.label);

    if (existing) {
      existing.active = true;
      existing.minimized = false;
      focusApp(existing);
      return;
    }

    const newApp: AppWindow = {
      id: item.label.toLowerCase(),
      label: item.label,
      component: item.component,
      active: true,
      minimized: false,
      maximized: false,
      zIndex: getMaxZIndex() + 1,
      prevZ: getMaxZIndex() + 1,
      position: { x: 200, y: 200 },
      size: { width: 640, height: 480 },
      prevPosition: { x: 200, y: 200 },
      prevSize: { width: 640, height: 480 },
      menu: item.menu
    };

    runningApps.value.push(newApp);
    focusApp(newApp);
  }

  function closeApp(app: AppWindow) {
    app.active = false;
    defocusApp();
  }

  function closeAppFromItem(item: AppItem) {
    const app = runningApps.value.find(w => w.label === item.label);
    if (app) closeApp(app);
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
    if (app.maximized) { 
      // Restore previous size and position 
      app.size.width = app.prevSize.width; 
      app.size.height = app.prevSize.height; 
      app.position.x = app.prevPosition.x; 
      app.position.y = app.prevPosition.y; 
      app.zIndex = app.prevZ;
    } else {
      // Save current size & position before maximizing 
      app.prevSize = { ...app.size }; 
      app.prevPosition = { ...app.position }; 
      app.position.x = 0; 
      app.position.y = 0; 
      app.zIndex = 9999; // max zIndex 
    } app.maximized = !app.maximized;
  }

  function isAppRunning(item: AppItem) {
    const id = item.label.toLowerCase();
    const runningApp = runningApps.value.find(app => app.id === id);
    if (runningApp != undefined && runningApp.active) return true;
    else return false;
  }

  return {
    runningApps,
    focusedApp,
    activeApps,
    openAppFromItem,
    closeAppFromItem,
    closeApp,
    minimizeApp,
    restoreApp,
    toggleMaximizeApp,
    focusApp,
    defocusApp,
    isAppRunning
  };
});
