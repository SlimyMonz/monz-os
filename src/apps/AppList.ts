
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
        id: 0,
        label: "History",
        icon: HistoryIcon,
        component: markRaw(HistoryComponent),
        
        zIndex: 0,
        visible: false,
    },
    {
        id: 1,
        label: "Settings",
        icon: SettingsIcon,
        component: markRaw(SettingsComponent),

        zIndex: 0,
        visible: false,
    },
    {
        id: 2,
        label: "Sona",
        icon: SonaIcon,
        component: markRaw(SonaComponent),

        zIndex: 0,
        visible: false,
    }
]

export const DockItems: MenuItem[] = AppList.map(app => ({
    label: app.label,
    icon: app.icon,
    app,
}));