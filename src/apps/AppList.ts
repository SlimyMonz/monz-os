
// Components
import HistoryComponent from './History.vue';
import SettingsComponent from './Settings.vue';
import SonaComponent from './Sona.vue';

// Icons
import HistoryIcon from '../assets/icons/history.svg';
import SettingsIcon from '../assets/icons/settings.svg';
import SonaIcon from '../assets/icons/sona.svg';

// Types
import type { MenuItem } from 'primevue/menuitem';
import type { AppItem } from '@/types';
import { markRaw } from 'vue';

export const AppList: AppItem[] = [
        {
        label: "History",
        icon: HistoryIcon,
        component: markRaw(HistoryComponent)
    },
    {
        label: "Settings",
        icon: SettingsIcon,
        component: markRaw(SettingsComponent)
    },
    {
        label: "Sona",
        icon: SonaIcon,
        component: markRaw(SonaComponent)
    }
]

export const DockItems: MenuItem[] = AppList.map(app => ({
    label: app.label,
    icon: app.icon,
    app,
}));