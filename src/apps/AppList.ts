
// Components
import HistoryComponent from './History.vue';
import SettingsComponent from './Settings.vue';
import SonaComponent from './Sona.vue';
import SocialsComponent from './Socials.vue';

// Icons
import HistoryIcon from '@icons/history.svg';
import SettingsIcon from '@icons/settings.svg';
import SonaIcon from '@icons/sona.svg';
import SocialsIcon from '@icons/socials.svg';

// Types
import type { AppItem } from '@/types';
import { markRaw } from 'vue';

// Menus
import SettingsMenu from './menus/SettingsMenu';
import HistoryMenu from './menus/HistoryMenu';
import SonaMenu from './menus/SonaMenu';
import SocialsMenu from './menus/SocialsMenu';


export const AppList: AppItem[] = [
    {
        label: "Settings",
        icon: SettingsIcon,
        component: markRaw(SettingsComponent),
        menu: SettingsMenu
    },
    {
        label: "History",
        icon: HistoryIcon,
        component: markRaw(HistoryComponent),
        menu: HistoryMenu
    },

    {
        label: "Sona",
        icon: SonaIcon,
        component: markRaw(SonaComponent),
        menu: SonaMenu
    },

    {
        label: "Socials",
        icon: SocialsIcon,
        component: markRaw(SocialsComponent),
        menu: SocialsMenu
    },
    {
        label: "Settings",
        icon: SettingsIcon,
        component: markRaw(SettingsComponent),
        menu: SettingsMenu
    },
    {
        label: "History",
        icon: HistoryIcon,
        component: markRaw(HistoryComponent),
        menu: HistoryMenu
    },

    {
        label: "Sona",
        icon: SonaIcon,
        component: markRaw(SonaComponent),
        menu: SonaMenu
    },

    {
        label: "Socials",
        icon: SocialsIcon,
        component: markRaw(SocialsComponent),
        menu: SocialsMenu
    },
        {
        label: "Settings",
        icon: SettingsIcon,
        component: markRaw(SettingsComponent),
        menu: SettingsMenu
    },
    {
        label: "History",
        icon: HistoryIcon,
        component: markRaw(HistoryComponent),
        menu: HistoryMenu
    },

    {
        label: "Sona",
        icon: SonaIcon,
        component: markRaw(SonaComponent),
        menu: SonaMenu
    },

    {
        label: "Socials",
        icon: SocialsIcon,
        component: markRaw(SocialsComponent),
        menu: SocialsMenu
    },
]
