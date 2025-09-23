import { type Component } from 'vue';

// Components
import HistoryComponent from './History.vue';
import SettingsComponent from './Settings.vue';
import SonaComponent from './Sona.vue';

// Icons
import HistoryIcon from '../assets/icons/history.svg';
import SettingsIcon from '../assets/icons/settings.svg';
import SonaIcon from '../assets/icons/sona.svg';

export type App = {
    name: string,
    icon: string,
    component: Component
}

export const AppList: App[] = [
    {
        name: "History",
        icon: HistoryIcon,
        component: HistoryComponent
    },
    {
        name: "Settings",
        icon: SettingsIcon,
        component: SettingsComponent
    },
    {
        name: "Sona",
        icon: SonaIcon,
        component: SonaComponent
    }

]