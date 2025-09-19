import { type Component } from 'vue';

import History from './History.vue';
import Settings from './Settings.vue';
import Sona from './Sona.vue';

export type App = {
    name: string,
    icon: string,
    component: Component
}

export const AppList: App[] = [
    {
        name: "History",
        icon: "history.svg",
        component: History
    },
    {
        name: "Settings",
        icon: "settings.svg",
        component: Settings
    },
    {
        name: "Settings",
        icon: "sona.svg",
        component: Sona
    }

]