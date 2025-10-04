import { ref } from 'vue';
import { AppList } from '@/apps/AppList';
import type { AppItem } from '@/types';
import { defineComponent } from 'vue';

const desktopApp: AppItem = {
  label: "Desktop",
  component: defineComponent({})
};

const focusedApp = ref<AppItem>(desktopApp);
const runningApps = ref<AppItem[]>(AppList);

function findAppByLabel(label: string): AppItem | undefined {
  return runningApps.value.find(app => app.label === label);
}

function openApp(app: AppItem) {
  const found = findAppByLabel(app.label);
  if (found) {
    focusApp(found);
    found.visible = true;
  }
}

function closeApp(app: AppItem) {
  const found = findAppByLabel(app.label);
  if (found) {
    found.visible = false;
  }
}

function focusApp(app: AppItem) {
  const found = findAppByLabel(app.label);
  if (found) {
    focusedApp.value = found;
  }
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
