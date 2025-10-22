import { reactive, watch } from 'vue';
import type { Settings } from "@/types";

const STORAGE_KEY = 'monz_os_settings';

// Add more settings here; These are the defaults.
const settings = reactive<Settings>({
  username: 'Monz'
});

// Run this on app/OS startup
function loadSettings(): void {
  const raw = localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    console.log("Settings not found in localStorage.")
    return;
  }

  try {
    const loaded = JSON.parse(raw) as Settings;
    Object.assign(settings, loaded);
  } catch(e) {
    console.log(`Settings could not be loaded from local storage: ${e}`)
  }
}

function saveSettings(): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}

// Auto-save whenever settings change.
watch(
  settings,
  () => {
    saveSettings();
  },
  { deep: true }
);

export const useSettings = {
  settings,
  loadSettings,
};
