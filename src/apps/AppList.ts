
// Components
import HistoryComponent from './History.vue';
import SettingsComponent from './Settings.vue';
import SonaComponent from './Sona.vue';

// Icons
import HistoryIcon from '../assets/icons/history.svg';
import SettingsIcon from '../assets/icons/settings.svg';
import SonaIcon from '../assets/icons/sona.svg';


import type { AppItem } from '@/types';

export const AppList: AppItem[] = [
        {
        label: "History",
        icon: HistoryIcon,
        component: HistoryComponent
    },
    {
        label: "Settings",
        icon: SettingsIcon,
        component: SettingsComponent
    },
    {
        label: "Sona",
        icon: SonaIcon,
        component: SonaComponent,
    }
]
